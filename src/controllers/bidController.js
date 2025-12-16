import Bid from "../models/Bid.js";
import Item from "../models/Item.js";

export const placeBid = async (req, res) => {
  try {
    const { amount } = req.body;
    const { itemId } = req.params;

    // Basic validation
    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid bid amount" });
    }

    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Create bid
    const bid = await Bid.create({
      amount,
      item: itemId
    });

    // Update item with new bid + prices
    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      {
        $push: { bids: bid._id },
        $set: {
          currentPrice: amount,
          latestBid: amount
        }
      },
      { new: true }
    );

    res.status(201).json({
      message: "Bid placed",
      bid,
      item: updatedItem
    });

  } catch (err) {
    console.error("❌ Error placing bid:", err);
    res.status(500).json({ message: "Server error placing bid" });
  }
};
