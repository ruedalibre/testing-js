const { generateManyBook } = require('../fakes/book.fake');
const BooksService = require('./books.service');

/* Creo unos objetos y una DB tipo mock que me ayuda a emular la conexión y realizar pruebas.
Primero creo objetos fake. luego de hacer pruebas con el mock paso a usar el metodo dinámico
que se encuentra en book.fake.js */

/* const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
]; */

/* Este método me permite hacer la prueba de caja blanca */
const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    /* Este método reinicia la base de datos cada vez que se hace un llamado para que no guarde
    datos y se dañen las pruebas */
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('should return a list book', async () => {
      // Arrange
      const fakeBooks = generateManyBook(20);
      /* Cuando utilizo un spy hago test con este método: */
      /* mockGetAll.mockResolvedValue(fakeBooks); */
      /* También con spy puedo usar */
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      /* Imprimo el resultado de la petición al mock de la DB */
      console.log(books);
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      /* En modo spy uso el método para verificar si la BD mock fue llamada */
      expect(mockGetAll).toHaveBeenCalled();
      /* Puedo validar la cantidad de veces que fue llamado el objeto, por ej. para
      verificar que no se esté haciendo el mismo llamado más de una vez */
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      /* Puedo especificar además la manera en que deben ser llamados los objetos */
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list book', async () => {
      // Arrange
      const fakeBooks = generateManyBook(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
