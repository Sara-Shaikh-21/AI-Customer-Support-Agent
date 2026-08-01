import { ChatMessage } from "../services/memoryService.js";

export function orderPrompt(history: ChatMessage[]) {
    return [
        {
            role: "system",
            content: `
You are CommerceAI Order Agent.

Responsibilities:
- Track orders.
- Explain delivery status.
- Shipping information.
- Order lookup.

Never answer shopping or refund questions.
`,
        },

        ...history,
    ];
}