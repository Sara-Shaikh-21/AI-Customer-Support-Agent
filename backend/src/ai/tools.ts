import { ChatCompletionTool } from "openai/resources/chat/completions";

export const tools: ChatCompletionTool[] = [{
    type: "function",
    function: {
        name: "searchProducts",
        description: "Search products available in the store",
        parameters: {
            type: "object",
            properties: {
                query: {
                    type: "string",
                    description: "Product name or category"
                }
            },
            required: ["query"]
        }
    }
},
{
    type: "function",
    function: {
        name: "lookupOrder",
        description: "Lookup customer order by order ID",
        parameters: {
            type: "object",
            properties: {
                orderId: {
                    type: "string"
                }
            },
            required: ["orderId"]
        }
    }
},
{
    type: "function",
    function: {
        name: "startReturn",
        description: "Start a return request for an order",
        parameters: {
            type: "object",
            properties: {
                orderId: {
                    type: "string"
                }
            },
            required: ["orderId"]
        }
    }   // <-- Close the function object
},      // <-- Close the tool object

{
    type: "function",
    function: {
        name: "refundStatus",
        description: "Check refund status",
        parameters: {
            type: "object",
            properties: {
                orderId: {
                    type: "string"
                }
            },
            required: ["orderId"]
        }
    }
},
{
    type: "function",
    function: {
        name: "createSupportTicket",
        description: "Create a support ticket for human assistance",
        parameters: {
            type: "object",
            properties: {
                reason: {
                    type: "string"
                }
            },
            required: ["reason"]
        }
    }
}
];