const request = require('supertest');

const app = require('../src/server');

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
            "statusCode": 200,
            "message": "welcome to the API"
        }, done);
  });
});
