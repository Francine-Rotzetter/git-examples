const calc = require('../lib/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calc.add(1, 2)).toBe(3);
});