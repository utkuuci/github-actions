const request = require('supertest');
const {expect} = require('expect');

describe('Testing GET/answer endpoint', () => {
    it('respond with valid HTTP status code and description and message', async () => { // add `async` keyword here
        const response = await request('http://localhost:3000')
          .get('/api/v1/tolga')

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello world');
      });
})