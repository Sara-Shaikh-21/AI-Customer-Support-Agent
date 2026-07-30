import { orders } from "../data/mockData.js";

export function lookupOrder(orderId: string) {
    return orders.find(
        (order) => order.orderId.toLowerCase() === orderId.toLowerCase()
    );
}