import { client } from "../ai/client.js";

export async function detectAgentAI(
    message: string
): Promise<"shopping" | "order" | "refund" | "support"> {

    const response = await client.chat.completions.create({
        model: process.env.AZURE_OPENAI_DEPLOYMENT!,

        messages: [
            {
                role: "system",
                content: `
You are CommerceAI Router.

Your ONLY responsibility is to classify the user's request into ONE of four agents.

==========================
SHOPPING
==========================
Use when the user wants:
- product recommendations
- product search
- compare products
- prices
- availability
- brands
- specifications

Examples:
- Show me wireless earbuds
- Recommend a laptop
- Do you have Nike shoes?

==========================
ORDER
==========================
Use when the user is asking about:
- order status
- tracking
- shipment
- shipping
- package
- courier
- delivery
- dispatch
- ETA
- delayed shipment
- package not arrived
- where is my order
- where is my package

Examples:
- My package still hasn't arrived.
- Track my order.
- Where is order ORD1001?
- When will my delivery arrive?

IMPORTANT:
Anything related to delivery, tracking, shipping, courier, package or order status MUST be classified as "order".

==========================
REFUND
==========================
Use when the user wants:
- refund
- return
- exchange
- damaged item
- wrong item
- cancel order
- refund status

Examples:
- I want to return my shoes.
- Where is my refund?
- Exchange this product.

==========================
SUPPORT
==========================
Use ONLY when the user wants:
- human support
- customer service
- technical support
- file a complaint
- speak to an agent

Examples:
- Connect me to customer support.
- I want to talk to a human.
- I need technical help.

==========================

Reply with ONLY ONE WORD.

shopping
order
refund
support

Do not explain.
Do not answer the user.
Do not use punctuation.
`,
            },
            {
                role: "user",
                content: message,
            },
        ],
    });

    const agent = response.choices[0].message.content
        ?.trim()
        .toLowerCase();

    console.log("🧠 Router decided:", agent);

    if (
        agent === "shopping" ||
        agent === "order" ||
        agent === "refund" ||
        agent === "support"
    ) {
        return agent;
    }

    console.log("⚠️ Invalid router response. Defaulting to shopping.");

    return "shopping";
}