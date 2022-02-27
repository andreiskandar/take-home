const express = require('express');
const request = require('supertest');
const app = express();
const coinRouter = require('../src/api/coin.ts');

app.use('/api/coin', coinRouter);

describe('Test Handlers', () => {
  test('responds to /api/coin/:ticker', async () => {
    const res = await request(app).get('/api/coin/bitcoin');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res._body.id).toBe('bitcoin');
    expect(res.statusCode).toBe(200);
  });

  test('responds to /api/coin/invalidticker', async () => {
    const res = await request(app).get('/api/coin/invalidticker');
    expect(res.statusCode).toBe(200);
    expect(res._body.error).toBe('Could not find coin with the given id');
  });

  test('responds to /api/coin/using_empty_string', async () => {
    const res = await request(app).get('/api/coin/');
    expect(res.text).toContain('Cannot GET /api/coin/');
    expect(res.statusCode).toBe(404);
  });
});
