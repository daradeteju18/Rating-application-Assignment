import express from "express";
import { PrismaClient } from "@prisma/client";
import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const stores = await prisma.store.findMany({
      include: { ratings: true },
    });

    const result = stores.map((s) => ({
      ...s,
      averageRating:
        s.ratings.length > 0
          ? (s.ratings.reduce((sum, r) => sum + r.value, 0) / s.ratings.length).toFixed(1)
          : null,
    }));

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch stores" });
  }
});

router.post("/:id/rate", authMiddleware, async (req, res) => {
  try {
    const { value } = req.body;
    const storeId = parseInt(req.params.id);

    const rating = await prisma.rating.upsert({
      where: { userId_storeId: { userId: req.user.id, storeId } },
      update: { value },
      create: { value, userId: req.user.id, storeId },
    });

    res.json(rating);
  } catch (err) {
    res.status(500).json({ error: "Failed to rate store" });
  }
});

export default router;
