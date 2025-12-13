const mongoose = require("mongoose");

const BidSchema = new mongoose.Schema({
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
  bidder: { type: String, default: "Guest" }, // until you add login system
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Bid", BidSchema);
