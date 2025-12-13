const Item = require("../models/Item");

// GET all items OR category
exports.getItems = async (req, res) => {
  try {
    const { category } = req.query;

    const items = category
      ? await Item.find({ category })
      : await Item.find();

    res.json(items);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PLACE BID
exports.placeBid = async (req, res) => {
  try {
    const { amount } = req.body;
    const { id } = req.params;

    let item = await Item.findById(id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    if (amount <= item.currentPrice) {
      return res.status(400).json({ message: "Bid must be higher than current price" });
    }

    // Add bid
    item.bids.push({ amount });
    item.latestBid = amount;
    item.currentPrice = amount;

    await item.save();

    res.json(item);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
