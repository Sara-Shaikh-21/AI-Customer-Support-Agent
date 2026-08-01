import express from "express";
import cors from "cors";
import { chat } from "./controllers/chatController.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", chat);
app.use("/api/admin", adminRoutes);

const PORT = Number(process.env.PORT) || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});