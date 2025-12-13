const Item = require("../models/Item");

/**
 * GET all items
 * Optional query: ?category=electronics | furniture | vehicles
 */
exports.getItems = async (req, res) => {
  try {
    const { category } = req.query;

    const items = category
      ? await Item.find({ category })
      : await Item.find();

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch items",
      error: error.message
    });
  }
};

/**
 * POST place a bid on an item
 * Route: /api/items/:id/bid
 */
exports.placeBid = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;

    // Validate bid amount
    if (!amount || isNaN(amount)) {
      return res.status(400).json({
        message: "Invalid bid amount"
      });
    }

    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).json({
        message: "Item not found"
      });
    }

    if (amount <= item.currentPrice) {
      return res.status(400).json({
        message: "Bid must be higher than the current price"
      });
    }

    // Save bid
    item.bids.push({
      amount,
      timestamp: new Date()
    });

    item.currentPrice = amount;
    item.latestBid = amount;

    await item.save();

    // ✅ ALWAYS return a message so frontend never sees "undefined"
    return res.status(200).json({
      message: "Bid placed successfully",
      item
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error while placing bid",
      error: error.message
    });
  }
};
