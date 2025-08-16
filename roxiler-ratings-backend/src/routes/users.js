import express from "express";
import { PrismaClient } from "@prisma/client";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/ratings", authMiddleware, async (req, res) => {
  try {
    const ratings = await prisma.rating.findMany({
      where: { userId: req.user.id },
      include: { store: true },
    });
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch ratings" });
  }
});

export default router;
