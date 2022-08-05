const { faker } = require('@faker-js/faker');

/* Esta función me genera un libro de manera ALEATORIA Y DINÁMICA
con ayuda de la DB de faker */

const generateOneBook = () => ({
  _id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

/* Para generar varios libros */
const generateManyBook = (size) => {
  /* Si no le paso un size, por defecto va a generar
  diez libros */
  const limit = size ?? 10;
  /* Creo el array vacío que se va llenando con los libros
  creados */
  const fakeBooks = [];
  /* Creo un ciclo para recorrer el arreglo de libros */
  for (let index = 0; index < limit; index++) {
    /* Uso el método push para agregar los libros al arreglo */
    fakeBooks.push(generateOneBook());
  }
  /* Retorno todo el listado de libros acumulados */
  return [...fakeBooks];
};

module.exports = { generateManyBook };
