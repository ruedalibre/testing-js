const Person = require('./06-person');

describe('Test for Person', () => {
  /* Declaro una función sin valor para poder usarla en diferentes casos */
  let person;
  /* Para analizar el resultado de la función para cada caso  */
  beforeEach(() => {
    person = new Person('Picapiedra', 90, 2.0);
  });
  /* Como ya tengo una instancia del objeto, puedo comenzar a evaluar
  diferentes casos con base en sus propiedades */
  test('should return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
