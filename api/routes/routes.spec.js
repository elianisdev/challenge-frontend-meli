const request = require('supertest');
const app = require('./routes');

describe('GET /', () => {
  it('should response a json message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Hello!' });
  });
});

describe('GET /products/search', () => {
  it('should return filtered products by keyword with price in COP format', async () => {
    const response = await request(app).get('/products/search?q=shirt');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    const priceRegex = /^\$\s\d{1,3}(\.\d{3})*$/;
    response.body.forEach(product => {
      expect(typeof product.price).toBe('string');
      expect(product.price).toMatch(priceRegex);
      expect(product.title.toLowerCase()).toContain('shirt');
    });
  });

  it('should return 400 if no keyword is provided', async () => {
    const response = await request(app).get('/products/search');
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

  it('should return paginated results with offset and limit', async () => {
    const res1 = await request(app).get('/products/search?q=shirt&offset=0&limit=2');
    expect(res1.statusCode).toBe(200);
    expect(Array.isArray(res1.body)).toBe(true);
    expect(res1.body.length).toBeLessThanOrEqual(2);
    const res2 = await request(app).get('/products/search?q=shirt&offset=2&limit=2');
    expect(res2.statusCode).toBe(200);
    expect(Array.isArray(res2.body)).toBe(true);

    if (res2.body.length > 0 && res1.body.length > 0) {
      expect(res2.body[0].id).not.toBe(res1.body[0].id);
    }
  });
});

describe('GET /products/:id', () => {
  it('should return a specific product by id with price in COP format', async () => {
    const response = await request(app).get('/products/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('title');
    expect(response.body).toHaveProperty('price');
    const priceRegex = /^\$\s\d{1,3}(\.\d{3})*$/;
    expect(typeof response.body.price).toBe('string');
    expect(response.body.price).toMatch(priceRegex);
  });

  it('should return error for invalid product id', async () => {
    const response = await request(app).get('/products/999999');
    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('error');
  });
});
