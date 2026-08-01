import { orders } from "../data/mockData.js";

export function refundStatus(orderId: string) {
  const order = orders.find((o) => o.orderId === orderId);

  if (!order) {
    return {
      success: false,
      message: "Order not found.",
    };
  }

  return {
    success: true,
    orderId: order.orderId,
    refundStatus: order.refundStatus,
  };
}