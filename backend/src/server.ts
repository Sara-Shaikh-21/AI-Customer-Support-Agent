import express from "express";
import cors from "cors";
import { chat } from "./controllers/chatController.js";
import adminRoutes from "./routes/adminRoutes.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";



const app = express();

app.use(cors());
app.use(express.json());


app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.post("/chat", chat);
app.use("/api/admin", adminRoutes);

const PORT = Number(process.env.PORT) || 5001;

app.get("/", (req, res) => {
    res.json({
        status: "CommerceAI API is running 🚀",
        version: "1.0.0"
    });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});