import { client } from "./ai/client.js";

async function test() {
    const response = await client.chat.completions.create({
        model: process.env.AZURE_OPENAI_DEPLOYMENT!,
        messages: [
            {
                role: "user",
                content: "Say Hello CommerceAI",
            },
        ],
    });

    console.log(response.choices[0].message.content);
}

test().catch(console.error);