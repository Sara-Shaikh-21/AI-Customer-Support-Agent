import { askAI } from "./services/chatService.js";

async function run() {
    const result = await askAI(
        "Where is my order ORD1001?",
        []
    );

    console.log(result.response.choices[0].message);
}

run();