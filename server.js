require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'Bid-Bay backend is running 🚀' });
});

// Example route for items
app.get('/api/items', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 1500 },
    { id: 2, name: 'PS5', price: 600 }
  ]);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Bid-Bay backend listening on port ${PORT}`);
});
