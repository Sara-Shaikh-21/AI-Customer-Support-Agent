let analytics = {
    conversations: 0,
    shopping: 0,
    order: 0,
    refund: 0,
    support: 0,
    toolCalls: 0,
};

export function incrementConversation() {
    analytics.conversations++;
}

export function incrementAgent(agent: string) {
    if (agent === "shopping") analytics.shopping++;
    if (agent === "order") analytics.order++;
    if (agent === "refund") analytics.refund++;
    if (agent === "support") analytics.support++;
}

export function incrementToolCall() {
    analytics.toolCalls++;
}

export function getAnalytics() {
    return analytics;
}