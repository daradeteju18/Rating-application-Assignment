import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import storeRoutes from "./routes/stores.js";
import userRoutes from "./routes/users.js";
import adminRoutes from "./routes/admin.js";
import authMiddleware from "./middleware/authMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/auth", authRoutes);
app.use("/stores", storeRoutes);
app.use("/users", userRoutes);
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
