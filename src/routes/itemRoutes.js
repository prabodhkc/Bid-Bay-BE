const express = require("express");
const router = express.Router();
const { getItems, placeBid } = require("../controllers/itemController");

router.get("/", getItems);
router.post("/:id/bid", placeBid);

module.exports = router;
