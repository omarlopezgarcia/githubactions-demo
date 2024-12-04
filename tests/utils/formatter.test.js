const { capitalize, formatCurrency } = require('../../src/utils/formatter');

test('capitalizes the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('throws error when input is not a string', () => {
  expect(() => capitalize(123)).toThrow('Input must be a string');
});

test('formats numbers as currency', () => {
  expect(formatCurrency(123.456)).toBe('$123.46');
});
