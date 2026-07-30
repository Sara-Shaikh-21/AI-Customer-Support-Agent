import { searchProducts } from "../tools/productTool.js";
import { lookupOrder } from "../tools/orderTool.js";

export async function executeTool(name: string, args: any) {
    switch (name) {
        case "searchProducts":
            return searchProducts(args.query);

        case "lookupOrder":
            return lookupOrder(args.orderId);

        default:
            throw new Error(`Unknown tool: ${name}`);
    }
}