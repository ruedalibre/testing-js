const { sum, multiply, divide } = require('./02-math');

test('adds 1 + 3 should be 4', () => {
  const res = sum(1, 3);
  expect(res).toBe(4);
});

test('should be 4', () => {
  const res = multiply(1, 4);
  expect(res).toBe(4);
});

test('should divide by zero', () => {
  const res = divide(6, 0);
  expect(res).toBeNull();
  const res2 = divide(9, 0);
  expect(res2).toBeNull();
});
