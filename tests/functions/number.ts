import { AssertionError, num } from "@";

test.each([
  { args: [10, 20, 30], expected: 20 },
  { args: [10, 20], expected: 15 },
  { args: [10], expected: 10 },
  {
    args: [],
    expected: new AssertionError("Average is not defined for no args"),
    expectedToThrow: true
  }
])("average", ({ args, expected, expectedToThrow }) => {
  expect(() => num.average(...args)).executionResultToBe(
    expected,
    expectedToThrow
  );
});

test.each([
  { expected: 1.2, precision: 1, value: 1.111 },
  { expected: 1.2, precision: 1, value: 1.199 },
  { expected: 1.12, precision: 2, value: 1.111 },
  { expected: 1.12, precision: 2, value: 1.119 }
])("ceil", ({ expected, precision, value }) => {
  expect(num.ceil(value, precision)).toBe(expected);
});

test.each([
  { expected: 20, value: 11 },
  { expected: 20, value: 19 }
])("ceil.step", ({ expected, value }) => {
  expect(num.ceil.step(value, 10)).toBe(expected);
});

test.each([
  { expected: 1.1, precision: 1, value: 1.111 },
  { expected: 1.1, precision: 1, value: 1.199 },
  { expected: 1.11, precision: 2, value: 1.111 },
  { expected: 1.11, precision: 2, value: 1.119 }
])("floor", ({ expected, precision, value }) => {
  expect(num.floor(value, precision)).toBe(expected);
});

test.each([
  { expected: 10, value: 11 },
  { expected: 10, value: 19 }
])("floor.step", ({ expected, value }) => {
  expect(num.floor.step(value, 10)).toBe(expected);
});

test.each([
  { expected: 1, value: 0 },
  { expected: 1, value: 1 },
  { expected: 2, value: 2 },
  { expected: 3, value: 3 },
  { expected: 3, value: 4 }
])("limit", ({ expected, value }) => {
  expect(num.limit(value, 1, 3)).toBe(expected);
});

test.each([
  { args: [0, 4], expected: 2 },
  { args: [1, 5], expected: 2 },
  { args: [0], expected: 0 },
  { args: [1], expected: 0 },
  {
    args: [],
    expected: new AssertionError("Average is not defined for no args"),
    expectedToThrow: true
  }
])("rootMeanSquareDeviation", ({ args, expected, expectedToThrow }) => {
  expect(() => num.rootMeanSquareDeviation(...args)).executionResultToBe(
    expected,
    expectedToThrow
  );
});

test.each([
  { expected: 1.1, precision: 1, value: 1.111 },
  { expected: 1.2, precision: 1, value: 1.199 },
  { expected: 1.11, precision: 2, value: 1.111 },
  { expected: 1.12, precision: 2, value: 1.119 }
])("round", ({ expected, precision, value }) => {
  expect(num.round(value, precision)).toBe(expected);
});

test.each([
  { expected: 10, value: 11 },
  { expected: 20, value: 19 }
])("round.step", ({ expected, value }) => {
  expect(num.round.step(value, 10)).toBe(expected);
});

test.each([
  { args: [10, 20, 30], expected: 60 },
  { args: [10, 20], expected: 30 },
  { args: [10], expected: 10 },
  { args: [], expected: 0 }
])("sum", ({ args, expected }) => {
  expect(num.sum(...args)).toBe(expected);
});
