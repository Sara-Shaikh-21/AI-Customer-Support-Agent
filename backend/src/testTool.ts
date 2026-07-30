import { askAI } from "./services/chatService.js";
import { client } from "./ai/client.js";
import { executeTool } from "./ai/toolExecutor.js";

async function run() {
    const first = await askAI("Where is my order ORD1001?");

    const message = first.choices[0].message;

    if (!message.tool_calls) {
        console.log(message.content);
        return;
    }

    const toolCall = message.tool_calls[0];

    const args = JSON.parse(toolCall.function.arguments);

    const result = await executeTool(
        toolCall.function.name,
        args
    );

    const final = await client.chat.completions.create({
        model: process.env.AZURE_OPENAI_DEPLOYMENT!,
        messages: [
            {
                role: "system",
                content:
                    "You are an AI customer support assistant.",
            },
            {
                role: "user",
                content: "Where is my order ORD1001?",
            },
            message,
            {
                role: "tool",
                tool_call_id: toolCall.id,
                content: JSON.stringify(result),
            },
        ],
    });

    console.log(final.choices[0].message.content);
}

run();