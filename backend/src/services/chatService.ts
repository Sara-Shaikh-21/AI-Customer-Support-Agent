import { client } from "../ai/client.js";
import { tools } from "../ai/tools.js";

export async function askAI(message: string) {
    const response = await client.chat.completions.create({
        model: process.env.AZURE_OPENAI_DEPLOYMENT!,
        messages: [
            {
                role: "system",
                content:
                    "You are an AI customer support assistant for an e-commerce company.",
            },
            {
                role: "user",
                content: message,
            },
        ],
        tools,
        tool_choice: "auto",
    });

    return response;
}