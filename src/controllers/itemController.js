import Item from "../models/Item.js";

export const getItems = async (req, res) => {
  const { category } = req.query;

  const filter = category ? { category } : {};
  const items = await Item.find(filter).populate("bids");

  res.json(items);
};

export const createItem = async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).json(item);
};
