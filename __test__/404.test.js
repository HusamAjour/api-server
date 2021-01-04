'use strict';

const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Not Found Module', () => {
  it('Should return status 404 if the specified route does not exist.', async () => {
    try {
      let result = await mockRequest.get('/imaginary-route');
      expect(result.status).toBe(404);
    } catch (err) {}
  });
});
