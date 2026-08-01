export type AgentType =
    | "shopping"
    | "order"
    | "refund"
    | "support";

export function detectAgent(message: string): AgentType {
    const text = message.toLowerCase();

    // Refund Agent
    if (
        text.includes("refund") ||
        text.includes("return") ||
        text.includes("exchange")
    ) {
        return "refund";
    }

    // Order Agent
    if (
        text.includes("order") ||
        text.includes("track") ||
        text.includes("delivery") ||
        text.includes("shipping")
    ) {
        return "order";
    }

    // Support Agent
    if (
        text.includes("support") ||
        text.includes("human") ||
        text.includes("agent") ||
        text.includes("complaint")
    ) {
        return "support";
    }

    // Default
    return "shopping";
}