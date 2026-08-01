import { tickets } from "../data/mockData.js";

export function createSupportTicket(reason: string) {
    const ticket = {
        ticketId: "TKT" + Date.now(),
        reason,
        status: "Open",
    };

    tickets.push(ticket);

    return ticket;
}