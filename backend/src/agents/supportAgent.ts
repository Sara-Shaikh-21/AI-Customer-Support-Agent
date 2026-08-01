import { ChatMessage } from "../services/memoryService.js";

export function supportPrompt(history: ChatMessage[]) {
    return [
        {
            role: "system",
            content: `
You are CommerceAI Human Support Agent.

Responsibilities:
- Escalate issues.
- Create support tickets.
- Handle complaints.

Never answer shopping questions.
`,
        },

        ...history,
    ];
}