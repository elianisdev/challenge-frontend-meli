const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const { formatCOP } = require('../utils');
const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

const BASE_URL = 'https://fakestoreapi.com';
const USD_TO_COP = 3900;

app.get('/products/search', async (req, res) => {
  try {
    const { keyword, offset = 0, limit = 5 } = req.query;
    if (!keyword) {
      return res.status(400).json({ error: 'Missing search keyword (q)' });
    }
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      return res.status(500).json({ error: 'Error to get products' });
    }
    let data = await response.json();
    data = data.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()));
    const total = data.length;
    const start = parseInt(offset, 10);
    const end = start + parseInt(limit, 10);
    data = data.slice(start, end);
    data = data.map(product => ({
      ...product,
      price: formatCOP(Math.round(product.price * USD_TO_COP)),
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

app.get('/products/:id', async (req, res) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${req.params.id}`);
    if (!response.ok) {
      return res.status(500).json({ error: 'Error to get product detail' });
    }
    let data = await response.json();
    data.price = formatCOP(Math.round(data.price * USD_TO_COP));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello!' });
});

module.exports = app;
