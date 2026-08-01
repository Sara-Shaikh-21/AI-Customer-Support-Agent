import { orders } from "../data/mockData.js";

export function startReturn(orderId: string) {
    const order = orders.find((o) => o.orderId === orderId);

    if (!order) {
        return {
            success: false,
            message: "Order not found.",
        };
    }

    if (!order.returnEligible) {
        return {
            success: false,
            message: "This order is not eligible for return.",
        };
    }

    order.refundStatus = "Refund Initiated";

    return {
        success: true,
        message: "Return request created successfully.",
        order,
    };
}