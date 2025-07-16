const request = require('supertest');
const app = require('./routes');

describe('GET /', () => {
  it('should response a json message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Hello!' });
  });
});
