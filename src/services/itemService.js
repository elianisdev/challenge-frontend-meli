const BASE_URL = 'http://localhost:3000/api';

export const searchItems = async (keyword, offset = 0, limit = 5) => {
  const response = await fetch(`${BASE_URL}/items?q=${keyword}&offset=${offset}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Error to get products');
  }
  return response.json();
};

export const getItemDetail = async (id) => {
  const response = await fetch(`${BASE_URL}/items/${id}`);
  if (!response.ok) {
    throw new Error('Error to get product detail');
  }
  return response.json();
};