const { default: capitalize } = require('../code/capitalize');

test('Capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});