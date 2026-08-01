import { container } from "../db/cosmos.js";

export interface ChatMessage {
    role: "user" | "assistant";
    content: string;
}

export async function getConversation(
    sessionId: string
): Promise<ChatMessage[]> {
    try {
        const { resource } = await container
            .item(sessionId, sessionId)
            .read();

        return resource?.messages ?? [];
    } catch {
        return [];
    }
}

export async function addMessage(
    sessionId: string,
    role: "user" | "assistant",
    content: string
) {
    const history = await getConversation(sessionId);

    history.push({
        role,
        content,
    });

    if (history.length > 20) {
        history.shift();
    }

    await container.items.upsert({
        id: sessionId,
        sessionId,
        messages: history,
        updatedAt: new Date().toISOString(),
    });
}