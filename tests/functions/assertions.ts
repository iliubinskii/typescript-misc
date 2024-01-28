import { AssertionError, ReadonlyMap, ReadonlySet, assert, fn, is } from "@";
import type { types, unknowns } from "@";

class TestClass {}

function createSubtest(
  assertion: types.fn.Callable<void>,
  ...args: unknowns
): Subtest {
  return (value: unknown): SubtestResult =>
    (): void => {
      assertion(value, ...args);
    };
}

interface Subtest {
  (value: unknown): () => void;
}

interface SubtestResult {
  (): void;
}

test.each([
  { value: [1] },
  { value: ["a"] },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 }
])("array", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.array);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: [1] },
  { expected: new AssertionError(), expectedToThrow: true, value: ["a"] },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 }
])("array.of", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.array.of, is.number);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: true },
  { value: false },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 },
  { expected: new AssertionError(), expectedToThrow: true }
])("boolean", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.boolean);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: "a" },
  { value: "" },
  { expected: new AssertionError(), expectedToThrow: true },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 }
])("byGuard", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.byGuard, is.string);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: "a" },
  { value: "" },
  { expected: new Error("Test error"), expectedToThrow: true },
  { expected: new Error("Test error"), expectedToThrow: true, value: 1 }
])("byGuard: function", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(
    assert.byGuard,
    is.string,
    (): Error => new Error("Test error")
  );

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: "a" },
  { value: "" },
  { expected: new AssertionError("Test error"), expectedToThrow: true },
  {
    expected: new AssertionError("Test error"),
    expectedToThrow: true,
    value: 1
  }
])("byGuard: string", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.byGuard, is.string, "Test error");

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: TestClass },
  { value: fn.noop },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 },
  { expected: new AssertionError(), expectedToThrow: true }
])("callable", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.callable);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: TestClass },
  { value: fn.noop },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 },
  { expected: new AssertionError(), expectedToThrow: true }
])("constructor", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.constructor);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  {},
  { value: null },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 }
])("empty", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.empty);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: "a" },
  { value: "b" },
  { expected: new AssertionError(), expectedToThrow: true, value: "c" },
  { expected: new AssertionError(), expectedToThrow: true }
])("enumeration", ({ expected, expectedToThrow, value }) => {
  enum TestEnum {
    a = "a",
    b = "b"
  }

  const subtest = createSubtest(assert.enumeration, TestEnum);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: { a: 1 } },
  { value: { a: "a" } },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 },
  { expected: new AssertionError(), expectedToThrow: true, value: null }
])("indexedObject", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.indexedObject);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: { a: 1 } },
  { expected: new AssertionError(), expectedToThrow: true, value: { a: "a" } },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 },
  { expected: new AssertionError(), expectedToThrow: true, value: null }
])("indexedObject.of", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.indexedObject.of, is.number);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: new TestClass() },
  { expected: new AssertionError(), expectedToThrow: true, value: {} },
  { expected: new AssertionError(), expectedToThrow: true }
])("instanceOf", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.instanceOf, TestClass);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: [new TestClass()] },
  { expected: new AssertionError(), expectedToThrow: true, value: [{}] },
  { expected: new AssertionError(), expectedToThrow: true, value: [undefined] }
])("instancesOf", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.instancesOf, TestClass);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: new ReadonlyMap([["a", 1]]) },
  { value: new ReadonlyMap([[1, 1]]) },
  { value: new ReadonlyMap([["a", "a"]]) },
  { expected: new AssertionError(), expectedToThrow: true, value: {} },
  { expected: new AssertionError(), expectedToThrow: true }
])("map", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.map);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: new ReadonlyMap([["a", 1]]) },
  {
    expected: new AssertionError(),
    expectedToThrow: true,
    value: new ReadonlyMap([[1, 1]])
  },
  {
    expected: new AssertionError(),
    expectedToThrow: true,
    value: new ReadonlyMap([["a", "a"]])
  },
  { expected: new AssertionError(), expectedToThrow: true, value: {} },
  { expected: new AssertionError(), expectedToThrow: true }
])("map.of", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.map.of, is.string, is.number);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: 1 },
  { expected: new AssertionError(), expectedToThrow: true, value: null },
  { expected: new AssertionError(), expectedToThrow: true }
])("not.empty", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.not.empty);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: 1 },
  { value: "a" },
  { expected: new AssertionError(), expectedToThrow: true, value: Number.NaN },
  { expected: new AssertionError(), expectedToThrow: true, value: true },
  { expected: new AssertionError(), expectedToThrow: true }
])("numStr", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.numStr);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: 1 },
  { expected: new AssertionError(), expectedToThrow: true, value: "a" },
  { expected: new AssertionError(), expectedToThrow: true, value: Number.NaN },
  { expected: new AssertionError(), expectedToThrow: true, value: true },
  { expected: new AssertionError(), expectedToThrow: true }
])("number", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.number);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: { num: 1, str: "a" } },
  { value: { num: 1 } },
  { value: { num: 1, str: true } },
  { value: { num: true, str: "a" } },
  { value: { str: "a" } },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 },
  { expected: new AssertionError(), expectedToThrow: true, value: null },
  { expected: new AssertionError(), expectedToThrow: true }
])("object", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.object);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: 1 },
  { value: "a" },
  { value: Symbol("test-symbol") },
  { expected: new AssertionError(), expectedToThrow: true, value: Number.NaN },
  { expected: new AssertionError(), expectedToThrow: true, value: true },
  { expected: new AssertionError(), expectedToThrow: true }
])("propertyKey", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.propertyKey);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: new ReadonlySet(["a"]) },
  { value: new ReadonlySet([1]) },
  { expected: new AssertionError(), expectedToThrow: true, value: {} },
  { expected: new AssertionError(), expectedToThrow: true }
])("set", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.set);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: new ReadonlySet(["a"]) },
  {
    expected: new AssertionError(),
    expectedToThrow: true,
    value: new ReadonlySet([1])
  },
  { expected: new AssertionError(), expectedToThrow: true, value: {} },
  { expected: new AssertionError(), expectedToThrow: true }
])("set.of", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.set.of, is.string);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: "a" },
  { value: "" },
  { expected: new AssertionError(), expectedToThrow: true },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 }
])("string", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.string);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  {},
  { value: "a" },
  { expected: new AssertionError(), expectedToThrow: true, value: "" },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 }
])("stringU", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.stringU);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: Symbol("sample") },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 }
])("symbol", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.symbol);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: false },
  { expected: new AssertionError(), expectedToThrow: true },
  { expected: new AssertionError(), expectedToThrow: true, value: true }
])("toBeFalse", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.toBeFalse);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: true },
  { value: true },
  { expected: new AssertionError(), expectedToThrow: true, value: false },
  { expected: new AssertionError(), expectedToThrow: true }
])("toBeTrue", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(assert.toBeTrue);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([1, 2, 3])("wrapError", value => {
  expect(assert.wrapError(value)()).toBe(value);
});
