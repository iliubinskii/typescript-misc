import { AssertionError, ReadonlyMap, ReadonlySet, as, fn, is } from "@";
import type { types, unknowns } from "@";

class TestClass {}

function createSubtest(
  inlineAssertion: types.fn.Callable,
  ...args: unknowns
): Subtest {
  return (value: unknown): SubtestResult =>
    (): void => {
      if (inlineAssertion(value, ...args) === value) {
        // Passed
      } else throw new Error("Sample error");
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
  const subtest = createSubtest(as.array);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: [1] },
  { expected: new AssertionError(), expectedToThrow: true, value: ["a"] },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 }
])("array.of", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(as.array.of, is.number);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: "a" },
  { value: "" },
  { expected: new AssertionError(), expectedToThrow: true, value: undefined },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 }
])("byGuard", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(as.byGuard, is.string);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: TestClass },
  { value: fn.noop },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 },
  { expected: new AssertionError(), expectedToThrow: true, value: undefined }
])("callable", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(as.callable);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: TestClass },
  { value: fn.noop },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 },
  { expected: new AssertionError(), expectedToThrow: true, value: undefined }
])("constructor", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(as.constructor);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: "a" },
  { value: "b" },
  { expected: new AssertionError(), expectedToThrow: true, value: "c" },
  { expected: new AssertionError(), expectedToThrow: true, value: undefined }
])("enumeration", ({ expected, expectedToThrow, value }) => {
  enum TestEnum {
    a = "a",
    b = "b"
  }

  const subtest = createSubtest(as.enumeration, TestEnum);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: { a: 1 } },
  { value: { a: "a" } },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 },
  { expected: new AssertionError(), expectedToThrow: true, value: null }
])("indexedObject", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(as.indexedObject);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: { a: 1 } },
  { expected: new AssertionError(), expectedToThrow: true, value: { a: "a" } },
  { expected: new AssertionError(), expectedToThrow: true, value: 1 },
  { expected: new AssertionError(), expectedToThrow: true, value: null }
])("indexedObject.of", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(as.indexedObject.of, is.number);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: new TestClass() },
  { expected: new AssertionError(), expectedToThrow: true, value: {} },
  { expected: new AssertionError(), expectedToThrow: true, value: undefined }
])("instanceOf", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(as.instanceOf, TestClass);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: [new TestClass()] },
  { expected: new AssertionError(), expectedToThrow: true, value: [{}] },
  { expected: new AssertionError(), expectedToThrow: true, value: [undefined] }
])("instancesOf", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(as.instancesOf, TestClass);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: new ReadonlyMap([["a", 1]]) },
  { value: new ReadonlyMap([[1, 1]]) },
  { value: new ReadonlyMap([["a", "a"]]) },
  { expected: new AssertionError(), expectedToThrow: true, value: {} },
  { expected: new AssertionError(), expectedToThrow: true, value: undefined }
])("map", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(as.map);

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
  { expected: new AssertionError(), expectedToThrow: true, value: undefined }
])("map.of", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(as.map.of, is.string, is.number);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: 1 },
  { expected: new AssertionError(), expectedToThrow: true, value: null },
  { expected: new AssertionError(), expectedToThrow: true, value: undefined }
])("not.empty", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(as.not.empty);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});

test.each([
  { value: new ReadonlySet(["a"]) },
  { value: new ReadonlySet([1]) },
  { expected: new AssertionError(), expectedToThrow: true, value: {} },
  { expected: new AssertionError(), expectedToThrow: true, value: undefined }
])("set", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(as.set);

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
  { expected: new AssertionError(), expectedToThrow: true, value: undefined }
])("set.of", ({ expected, expectedToThrow, value }) => {
  const subtest = createSubtest(as.set.of, is.string);

  expect(subtest(value)).executionResultToBe(expected, expectedToThrow);
});
