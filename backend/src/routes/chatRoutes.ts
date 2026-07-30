import { Router } from "express";
import { searchProducts } from "../tools/productTool.js";
import { lookupOrder } from "../tools/orderTool.js";

const router = Router();

router.post("/", async (req, res) => {
    const { message } = req.body;

    const text = message.toLowerCase();

    // Product Search
    if (
        text.includes("airpods") ||
        text.includes("nike") ||
        text.includes("samsung") ||
        text.includes("boat")
    ) {
        const result = searchProducts(message);

        return res.json({
            type: "product_search",
            data: result,
        });
    }

    // Order Lookup
    const orderRegex = /ord\d+/i;
    const orderMatch = message.match(orderRegex);

    if (orderMatch) {
        const result = lookupOrder(orderMatch[0]);

        return res.json({
            type: "order_lookup",
            data: result,
        });
    }

    return res.json({
        type: "general",
        response:
            "Sorry, I couldn't understand that yet. Azure AI Foundry integration is coming next.",
    });
});

export default router;