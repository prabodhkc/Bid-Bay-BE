import Bid from "../models/Bid.js";
import Item from "../models/Item.js";

export const placeBid = async (req, res) => {
  const { amount } = req.body;
  const { itemId } = req.params;

  const bid = await Bid.create({ amount, item: itemId });

  await Item.findByIdAndUpdate(itemId, {
    $push: { bids: bid._id },
    $set: { currentPrice: amount }
  });

  res.status(201).json(bid);
};
