import { CosmosClient } from "@azure/cosmos";

export const cosmosClient = new CosmosClient({
    endpoint: process.env.COSMOS_ENDPOINT!,
    key: process.env.COSMOS_KEY!,
});

export const database = cosmosClient.database(
    process.env.COSMOS_DATABASE!
);

export const container = database.container(
    process.env.COSMOS_CONTAINER!
);