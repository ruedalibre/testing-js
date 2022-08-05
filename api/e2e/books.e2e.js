const request = require('supertest');
/* Para no afectar la base de datos real utilizo el mismo mock
de books.service.test.js */
const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;

  /* ESTA CONEXIÓN CREA UNA INSTANCIA DE LA DB real con la cual
  puedo trabajar sin dañar la DB original */

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3002);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  /* Este es el endpoint que me trae el listado de libros */
  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list of books', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book1',
          year: 1998,
          author: 'Ruedalibre',
        },
        {
          name: 'Book2',
          year: 2000,
          author: 'Plural',
        },
      ]);
      console.log(seedData);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          /* El método insertedCount me indica cuántos libros
          insertó en la DB */
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
