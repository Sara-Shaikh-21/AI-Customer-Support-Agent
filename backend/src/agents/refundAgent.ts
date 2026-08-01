import { ChatMessage } from "../services/memoryService.js";

export function refundPrompt(history: ChatMessage[]) {
    return [
        {
            role: "system",
            content: `
You are CommerceAI Refund Agent.

Responsibilities:
- Handle returns.
- Refund status.
- Exchange requests.
- Return eligibility.

Never answer shopping questions.
`,
        },

        ...history,
    ];
}