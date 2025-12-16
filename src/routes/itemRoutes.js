import express from "express";
import { getItems, createItem } from "../controllers/itemController.js";
import { placeBid } from "../controllers/bidController.js";

const router = express.Router();

router.get("/", getItems);
router.post("/", createItem);

// ✅ ADD THIS
router.post("/:itemId/bid", placeBid);

export default router;
