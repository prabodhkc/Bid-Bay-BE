const Item = require("../models/Item");

// Add new item
exports.addItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.json({ msg: "Item added successfully", item });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Get all items by category
exports.getItemsByCategory = async (req, res) => {
  try {
    const items = await Item.find({ category: req.params.category });
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Get single item
exports.getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};
