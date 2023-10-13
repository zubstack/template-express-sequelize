const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);
const url = '/api/v1/posts';

const model = {
  title: 'Frontend is incredible',
  author: 'Gertrude Kuvalis',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque cumque vel voluptatem consequuntur et consequatur.',
  location: 'Ecuador',
  image: 'https://picsum.photos/seed/Bmcreh/640/480',
  categoryId: 1,
  isPrivate: false,
};

const modelUpdate = {
  author: 'Julio Cesar',
  title: 'Javascript is beautiful',
};

const badModel = {
  autor: 'Julio Cesar',
  titler: 'Javascript is beautiful',
};

test('posts are returned as json', async () => {
  await api
    .get(url)
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('there are two posts', async () => {
  const response = await api.get(url);
  console.log(response.body);
  expect(response.body).toHaveLength(2);
});

test('get an specific post', async () => {
  const id = 'c96adfc2-ce21-4794-8cb2-460d29561b59';
  const { body } = await api.get(`${url}/${id}`);
  expect(body.title).toBe('Backend is incredible');
});

test('update a post', async () => {
  const id = 'c96adfc2-ce21-4794-8cb2-460d29561b59';
  await api.patch(`${url}/${id}`).send(modelUpdate).expect(201);

  const { body } = await api.get(`${url}/${id}`);
  expect(body.author).toBe('Julio Cesar');
});

test('post a post', async () => {
  await api.post(url).send(model).expect(201);
  const response = await api.get(url);
  expect(response.body).toHaveLength(3);
});

test('delete one post', async () => {
  const id = 'c96adfc2-ce21-4794-8cb2-460d29561b59';
  await api.delete(`${url}/${id}`);
  const response = await api.get(url);
  expect(response.body).toHaveLength(2);
});

test('fails with 404 with a non exsting id', async () => {
  const non_existing_id = 'a96adfc2-ce21-4794-8cb2-460d29561b59';
  await api.get(`${url}/${non_existing_id}`).expect(404);
  await api.delete(`${url}/${non_existing_id}`).expect(404);
  await api.patch(`${url}/${non_existing_id}`).send(model).expect(404);
});

test('fails with 400 with no content', async () => {
  const id = 'c96adfc2-ce21-4794-8cb2-460d29561b59';
  await api.patch(`${url}/${id}`).expect(400);
  await api.post(url).expect(400);
});

test('fails with 400 with bad model', async () => {
  const id = 'c96adfc2-ce21-4794-8cb2-460d29561b59';
  await api.patch(`${url}/${id}`).send(badModel).expect(400);
  await api.post(url).send(badModel).expect(400);
});

//Nota: Como por el momento estamos usando un "database" basa en memoria, encontraremos exactamente la misma info cada vez que se corran las pruebas.
// Para pruebas mas serias, estariamos jugando con una alguna instancia de nuestra base de datos especifica para testing y tendriamos que encargarnos de la limpieza antes de correr los tests.
