import { searchProducts } from "../tools/productTool.js";
import { lookupOrder } from "../tools/orderTool.js";
import { startReturn } from "../tools/returnTool.js";
import { refundStatus } from "../tools/refundTool.js";
import { createSupportTicket } from "../tools/ticketTool.js";

export async function executeTool(name: string, args: any) {
    switch (name) {
        case "searchProducts":
            return searchProducts(args.query);

        case "lookupOrder":
            return lookupOrder(args.orderId);
        case "startReturn":
            return startReturn(args.orderId);

        case "refundStatus":
            return refundStatus(args.orderId);

        case "createSupportTicket":
            return createSupportTicket(args.reason);

        default:
            throw new Error(`Unknown tool: ${name}`);
    }
}