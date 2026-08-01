import { ChatMessage } from "../services/memoryService.js";

export function shoppingPrompt(history: ChatMessage[]) {
    return [
        {
            role: "system",
            content: `
You are CommerceAI Shopping Agent.

Responsibilities:
- Help customers discover products.
- Recommend products.
- Compare products.
- Check stock.
- Answer pricing questions.

Never answer order tracking or refund questions.
`,
        },

        ...history,
    ];
}