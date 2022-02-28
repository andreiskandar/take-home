import express from 'express';
import request from 'supertest';
import coinRouter from '../src/api/coin';

const app = express();
app.use('/api/coin', coinRouter);

describe('GET /api/coin/:ticker', () => {
  test('should return 200 & valid response using valid request param', async () => {
    const res = await request(app).get('/api/coin/bitcoin');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.body.id).toBe('bitcoin');
    expect(res.statusCode).toBe(200);
  });
});

describe('GET /api/coin/:invalidticker', () => {
  test('should return 200 & valid response using invalid ticket request param', async () => {
    const res = await request(app).get('/api/coin/invalidticker');
    expect(res.statusCode).toBe(200);
    expect(res.body.error).toBe('Could not find coin with the given id');
  });
});

describe('Get /api/coin/', () => {
  test('should return 404', async () => {
    const res = await request(app).get('/api/coin/');
    expect(res.text).toContain('Cannot GET /api/coin/');
    expect(res.statusCode).toBe(404);
  });
});
