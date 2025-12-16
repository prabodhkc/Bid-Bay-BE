import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";
import itemRoutes from "./src/routes/itemRoutes.js";
import bidRoutes from "./src/routes/bidRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/items", itemRoutes);
app.use("/api/bids", bidRoutes);

app.get("/", (req, res) => {
  res.send("BidBay API running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
