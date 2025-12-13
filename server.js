const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to Mongo
connectDB();

// Routes
app.use("/api/items", require("./src/routes/itemRoutes"));
app.use("/api/bids", require("./src/routes/bidRoutes"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Bid-Bay backend listening on port ${PORT}`);
});
