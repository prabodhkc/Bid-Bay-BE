import express from "express";
import { placeBid } from "../controllers/bidController.js";

const router = express.Router();

router.post("/:itemId", placeBid);

export default router;
