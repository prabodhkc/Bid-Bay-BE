const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// GET items by category
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const items = await Item.find(category ? { category } : {});
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to load items" });
  }
});

module.exports = router;
