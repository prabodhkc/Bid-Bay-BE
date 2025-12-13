const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// PLACE A BID
router.post("/:id", async (req, res) => {
  try {
    const { amount } = req.body;
    const item = await Item.findById(req.params.id);

    if (!item) return res.status(404).json({ message: "Item not found" });

    if (amount <= item.currentBid)
      return res.status(400).json({ message: "Bid must be higher than current bid" });

    item.currentBid = amount;
    item.bidsCount += 1;
    await item.save();

    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Failed to place bid" });
  }
});

module.exports = router;
