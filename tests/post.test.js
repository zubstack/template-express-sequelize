const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);
const url = '/api/v1/posts';

test('posts are returned as json', async () => {
  await api
    .get(url)
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('there are two posts', async () => {
  const response = await api.get(url);

  expect(response.body).toHaveLength(2);
});
