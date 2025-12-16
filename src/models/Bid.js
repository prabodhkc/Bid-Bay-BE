import mongoose from "mongoose";

const bidSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    item: { type: mongoose.Schema.Types.ObjectId, ref: "Item" }
  },
  { timestamps: true }
);

export default mongoose.model("Bid", bidSchema);
