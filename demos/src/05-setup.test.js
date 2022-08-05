describe('Set', () => {
  /* Corre este código de primero y luego ejecuta lo demás */
  beforeAll(() => {
    console.log('beforeAll');
  });
  /* Corre este código después de ejecutar todo lo demás */
  afterAll(() => {
    console.log('afterAll');
  });
  /* Corre este código antes de cada bloque de ejecución */
  beforeEach(() => {
    console.log('beforeEach');
  });
  /* Aquí comienza la evaluación de casos de prueba */
  test('case1', () => {
    console.log('case1')
    expect(1 + 1).toBe(2);
  });
  /* Otro caso de prueba */
  test('case2', () => {
    expect(1 + 3).toBe(4);
  });
  /* Puedo anidar un describe dentro de otro en incluir todos
  los métodos que quiera en su interior */
  describe('Another Set', () => {
    beforeAll(() => {
      console.log('beforeAll');
    });
    /* Otro caso de prueba */
    test('case3', () => {
      expect(4 + 1).toBe(5);
    });
    /* Otro caso de prueba */
    test('case4', () => {
      expect(8 + 3).toBe(12);
    });
  });
});
