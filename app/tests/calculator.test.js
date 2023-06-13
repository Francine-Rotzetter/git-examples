const calculator = require('../lib/calculator');

test('multiplies 5 * 7 to equal 35', () => {
    expect(calculator.multiply(5, 7)).toBe(35);
  });

test('adds -5 + 20 to equal 15', () => {
  expect(calculator.add(-5, 20)).toBe(15);
});

test('adds 3 ^ 4 to equal 81', () => {
  expect(calculator.pot(3, 4)).toBe(81);
});

test('divides 10 by 0 to equal undefined', () => {
  expect(calculator.div(10, 0)).toBe(undefined);
});

test('divides 10 by 2 to equal undefined', () => {
  expect(calculator.div(10, 2)).toBe(5);
});