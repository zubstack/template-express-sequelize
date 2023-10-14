const supertest = require('supertest');
const app = require('../app');
const { initializeUsersDatabase, clearUsersDatabase } = require('./helper');

const api = supertest(app);
const url = '/api/v1/users';

const model = {
  name: 'Gabriel Garcia',
  role: 'admin',
  username: 'gabro_gr',
  email: 'gabro@mail.com',
  password: 'gabro123',
};
const modelUpdate = {
  name: 'Julio Cesar',
};

// const badModel = {
//   naml: 'Julio Cesar',
// };

beforeEach(async () => {
  await initializeUsersDatabase();
});

describe('Finders', () => {
  test('Users are returned as json', async () => {
    const { body } = await api
      .get(url)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(body).toHaveLength(2);
  });

  test('a specific User is within the returned User', async () => {
    const response = await api.get(url);

    const contents = response.body.map((r) => r.name);
    expect(contents).toContain('Peter Wilson');
  });

  test('get an specific User', async () => {
    const { body } = await api.get(`${url}/2`);

    expect(body.name).toBe('Maria Viltriado');
  });
});

describe('CRUD Users', () => {
  test('update a User', async () => {
    await api.patch(`${url}/2`).send(modelUpdate).expect(201);

    const { body } = await api.get(`${url}/2`);

    expect(body.name).toBe('Julio Cesar');
  });

  test('create a User', async () => {
    await api.post(url).send(model).expect(201);
    const response = await api.get(url);
    expect(response.body).toHaveLength(3);
  });
  test('delete one User', async () => {
    await api.delete(`${url}/2`);
    const response = await api.get(url);
    expect(response.body).toHaveLength(1);
  });
});

describe('Failure', () => {
  test('fails with 404 with a non exsting id', async () => {
    const non_existing_id = 99;
    await api.get(`${url}/${non_existing_id}`).expect(404);
    await api.delete(`${url}/${non_existing_id}`).expect(404);
    await api.patch(`${url}/${non_existing_id}`).send(model).expect(404);
  });

  test('fails with 400 with no content', async () => {
    await api.patch(`${url}/2`).expect(400);
    await api.post(url).expect(400);
  });
  // test('fails with 400 with bad model', async () => {
  //   const id = 'c96adfc2-ce21-4794-8cb2-460d29561b59';
  //   await api.patch(`${url}/${id}`).send(badModel).expect(400);
  //   await api.User(url).send(badModel).expect(400);
  // });
});

afterEach(async () => {
  await clearUsersDatabase();
});
