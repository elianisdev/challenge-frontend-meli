const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

const BASE_URL = 'https://fakestoreapi.com';
const USD_TO_COP = 3900;

app.get('/api/items', async (req, res) => {
  try {
    const { q, offset = 0, limit = 5 } = req.query;
    if (!q) {
      return res.status(400).json({ error: 'Missing search keyword (q)' });
    }
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      return res.status(500).json({ error: 'Error to get products' });
    }
    let data = await response.json();
    data = data.filter(product => product.title.toLowerCase().includes(q.toLowerCase()));
    const total = data.length;
    const start = parseInt(offset, 10);
    const end = start + parseInt(limit, 10);
    data = data.slice(start, end);
    data = data.map(product => ({
      ...product,
      price: product.price * USD_TO_COP,
      shipping: product.rating.rate > 3,
    }));
    res.json({
      items: data,
      total,
      page: parseInt(offset, 10),
      limit: parseInt(limit, 10),
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/items/:id', async (req, res) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${req.params.id}`);
    if (!response.ok) {
      return res.status(500).json({ error: 'Error to get product detail' });
    }
    const data = await response.json();
    data.price = data.price * USD_TO_COP;
    data.shipping = data.rating.rate > 3;
    data.sold_quantity = data.rating.count;
    data.color = 'Unico';
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello!' });
});

module.exports = app;
