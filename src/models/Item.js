// src/models/Item.js
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  startingPrice: { type: Number, required: true },
  currentBid: { type: Number, required: true },
  bidsCount: { type: Number, default: 0 },
  category: { type: String, required: true }, // "electronics", "vehicles", "furniture"
  endTime: { type: Date, required: true }
});

module.exports = mongoose.model("Item", itemSchema);
