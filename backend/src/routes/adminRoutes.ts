import { Router } from "express";
import { analytics } from "../controllers/adminController.js";

const router = Router();

router.get("/analytics", analytics);

export default router;