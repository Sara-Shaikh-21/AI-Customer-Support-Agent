import { Request, Response } from "express";
import { getAnalytics } from "../services/analyticsService.js";

export function analytics(
    req: Request,
    res: Response
) {
    res.json(getAnalytics());
}