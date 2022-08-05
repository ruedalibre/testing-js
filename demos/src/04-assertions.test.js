/* ASSERTIONS O MATCHERS: validan que los valores o resultados coincidan con los esperados
en diferentes escenarios dentro de diversas funciones. */

/* Validar el valor que deben recibir los parámetros de una función */
test('test obj', () => {
  const data = { name: 'ruedalibre' };
  data.lastname = 'por el mundo';
  expect(data).toEqual({ name: 'ruedalibre', lastname: 'por el mundo' });
});

/* Validar todas las condiciones para que un valor sea nulo */
test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

/* Validar todas las condiciones para que un booleano arroje el valor esperado */
test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

/* Validar una expresión regular, por ej, que un string contenga
en su interior una secuencia determinada de caracteres */
test('string', () => {
  expect('Christoph').toMatch(/stop/);
});

/* Validar si un valor está contenido dentro de un array */
test('list / arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
