import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String },
    currentPrice: { type: Number, required: true },
    bids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bid" }]
  },
  { timestamps: true }
);

export default mongoose.model("Item", itemSchema);
