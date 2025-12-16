import express from "express";
import { placeBid } from "../controllers/bidController.js";

const router = express.Router();

// FULL path defined here
router.post("/items/:itemId/bid", placeBid);

export default router;
