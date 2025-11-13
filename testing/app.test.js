const isEven = require('./app.js')

test('returns true for even number', () => {
  expect(isEven(4)).toBe(true);
});

test('returns false for odd number', () => {
  expect(isEven(5)).toBe(false);
});

test('throws error if input not a number', () => {
  expect(() => isEven('a')).toThrow('Not a number');
});