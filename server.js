require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Bid-Bay API Running"));

app.use("/api/items", require("./src/routes/itemRoutes"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Bid-Bay server running on port", PORT));
