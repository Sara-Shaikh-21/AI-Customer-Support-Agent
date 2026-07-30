import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

export const client = new OpenAI({
    apiKey: process.env.AZURE_OPENAI_API_KEY!,
    baseURL: process.env.AZURE_OPENAI_ENDPOINT!,
});