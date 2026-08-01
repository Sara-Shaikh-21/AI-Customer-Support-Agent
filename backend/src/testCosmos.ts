import "dotenv/config";
import { database } from "./db/cosmos.js";

async function test() {
    const { resource } = await database.read();

    console.log("Connected to Cosmos DB");
    console.log(resource?.id);
}

test().catch(console.error);