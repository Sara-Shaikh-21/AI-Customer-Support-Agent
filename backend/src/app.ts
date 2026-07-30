import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
    res.send("CommerceAI Backend Running 🚀");
});

app.use("/chat", chatRoutes);

export default app;