import { Request, Response } from "express";
import { askAI } from "../services/chatService.js";
import { executeTool } from "../ai/toolExecutor.js";
import { client } from "../ai/client.js";
import {
    getConversation,
    addMessage,
} from "../services/memoryService.js";
import {
    incrementConversation,
    incrementToolCall,
    incrementAgent
} from "../services/analyticsService.js";

/**
 * @openapi
 * /chat:
 *   post:
 *     summary: Chat with the AI Customer Support Agent
 *     tags:
 *       - Chat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sessionId:
 *                 type: string
 *                 example: session123
 *               message:
 *                 type: string
 *                 example: Where is my order?
 *     responses:
 *       200:
 *         description: AI response
 */


export async function chat(req: Request, res: Response) {
    try {
        const { message, sessionId } = req.body;
        incrementConversation();
        // Get previous conversation
        const history = await getConversation(sessionId);

        // Save user message
        await addMessage(sessionId, "user", message);

        // First AI call (tool selection)
        const {
            response: first,
            agent,
        } = await askAI(message, history);

        incrementAgent(agent);

        const aiMessage = first.choices[0].message;
        let toolName = "No Tool Called";
        let toolResult: any = null;
        let finalResponse = aiMessage.content ?? "";

        // If AI wants to call a tool
        if (aiMessage.tool_calls) {
            const toolCall = aiMessage.tool_calls[0];

            if (toolCall.type !== "function") {
                throw new Error("Unsupported tool call type");
            }

            toolName = toolCall.function.name;

            const args = JSON.parse(toolCall.function.arguments);
            toolResult = await executeTool(toolName, args);
            incrementToolCall();
            // Second AI call with tool result
            const final = await client.chat.completions.create({
                model: process.env.AZURE_OPENAI_DEPLOYMENT!,
                messages: [
                    {
                        role: "system",
                        content:
                            "You are CommerceAI, an AI customer support assistant for an e-commerce platform. Remember previous messages and answer follow-up questions naturally.",
                    },

                    ...history,

                    {
                        role: "user",
                        content: message,
                    },

                    aiMessage,

                    {
                        role: "tool",
                        tool_call_id: toolCall.id,
                        content: JSON.stringify(toolResult),
                    },
                ],
            });

            finalResponse = final.choices[0].message.content ?? "";

            // Save assistant reply
            await addMessage(sessionId, "assistant", finalResponse);
        } else {
            // Save assistant reply if no tool was called
            await addMessage(sessionId, "assistant", finalResponse);
        }

        res.json({
            tool: toolName,
            toolResult,
            response: finalResponse,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Internal Server Error",
        });
    }
}