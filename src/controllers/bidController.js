import Bid from "../models/Bid.js";
import Item from "../models/Item.js";

export const placeBid = async (req, res) => {
  try {
    const { amount } = req.body;
    const { itemId } = req.params;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid bid amount" });
    }

    const bid = await Bid.create({ amount, item: itemId });

    const item = await Item.findByIdAndUpdate(
      itemId,
      {
        $push: { bids: bid._id },
        $set: { currentPrice: amount }
      },
      { new: true }
    );

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(201).json({ message: "Bid placed", bid, item });
  } catch (err) {
    console.error("BID ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
