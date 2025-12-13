const mongoose = require("mongoose");

const BidSchema = new mongoose.Schema({
  amount: Number,
  timestamp: { type: Date, default: Date.now }
});

const ItemSchema = new mongoose.Schema({
  title: String,
  category: String,
  image: String,
  currentPrice: Number,
  latestBid: Number,
  bids: [BidSchema]
});

module.exports = mongoose.model("Item", ItemSchema);
