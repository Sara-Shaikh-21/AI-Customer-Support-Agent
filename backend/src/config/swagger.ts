import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "CommerceAI API",
            version: "1.0.0",
            description:
                "AI Customer Support API built with Express, Azure OpenAI, and Cosmos DB.",
        },
        servers: [
            {
                url: process.env.API_URL || "http://localhost:5001",
            },
        ],
    },

    apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);