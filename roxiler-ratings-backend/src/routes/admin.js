import express from "express";
import { PrismaClient } from "@prisma/client";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
const prisma = new PrismaClient();

function adminOnly(req, res, next) {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Forbidden" });
  }
  next();
}

router.get("/stats", authMiddleware, adminOnly, async (req, res) => {
  try {
    const users = await prisma.user.count();
    const stores = await prisma.store.count();
    const ratings = await prisma.rating.count();
    res.json({ users, stores, ratings });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

export default router;
