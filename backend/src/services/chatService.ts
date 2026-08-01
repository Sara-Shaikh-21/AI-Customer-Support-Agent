import { client } from "../ai/client.js";
import { tools } from "../ai/tools.js";
import { ChatMessage } from "./memoryService.js";

import { detectAgentAI } from "./routerService.js";

import { shoppingPrompt } from "../agents/shoppingAgent.js";
import { orderPrompt } from "../agents/orderAgent.js";
import { refundPrompt } from "../agents/refundAgent.js";
import { supportPrompt } from "../agents/supportAgent.js";

export async function askAI(
    message: string,
    history: ChatMessage[]
) {
    const agent = await detectAgentAI(message);

    console.log("Selected Agent:", agent);

    let messages: any[] = [];

    switch (agent) {
        case "shopping":
            messages = shoppingPrompt(history);
            break;

        case "order":
            messages = orderPrompt(history);
            break;

        case "refund":
            messages = refundPrompt(history);
            break;

        case "support":
            messages = supportPrompt(history);
            break;
    }

    messages.push({
        role: "user",
        content: message,
    });

    const response = await client.chat.completions.create({
        model: process.env.AZURE_OPENAI_DEPLOYMENT!,
        messages,
        tools,
        tool_choice: "auto",
    });

    return {
        response,
        agent,
    };
}