export const tools = [
    {
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
    }
] as const;