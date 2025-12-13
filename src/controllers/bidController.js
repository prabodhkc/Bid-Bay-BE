const Bid = require("../models/Bid");
const Item = require("../models/Item");

exports.placeBid = async (req, res) => {
  try {
    const { amount } = req.body;
    const { itemId } = req.params;

    const item = await Item.findById(itemId);
    if (!item) return res.status(404).json({ msg: "Item not found" });

    // bid must be higher
    if (amount <= item.currentBid) {
      return res.status(400).json({ msg: "Bid must be higher than current bid" });
    }

    // save bid
    const bid = await Bid.create({ itemId, amount });

    // update latest bid on item
    item.currentBid = amount;
    await item.save();

    res.json({ msg: "Bid placed successfully", bid });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
