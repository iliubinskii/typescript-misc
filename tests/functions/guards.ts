import { ReadonlyMap, ReadonlySet, fn, is } from "@";

class TestClass {}

test.each([
  { expected: true, value: undefined },
  { expected: false, value: true },
  { expected: false, value: 1 }
])("and", ({ expected, value }) => {
  expect(is.and(value, is.booleanU, is.numberU)).toBe(expected);
});

test.each([
  { expected: true, value: undefined },
  { expected: false, value: true },
  { expected: false, value: 1 }
])("and.factory", ({ expected, value }) => {
  const guard = is.and.factory(is.booleanU, is.numberU, is.stringU);

  expect(guard(value)).toBe(expected);
});

test.each([
  { expected: true, value: [1] },
  { expected: true, value: ["a"] },
  { expected: false, value: 1 }
])("array", ({ expected, value }) => {
  expect(is.array(value)).toBe(expected);
});

test.each([
  { expected: true, value: [1] },
  { expected: false, value: ["a"] },
  { expected: false, value: 1 }
])("array.of", ({ expected, value }) => {
  expect(is.array.of(value, is.number)).toBe(expected);
});

test.each([
  { expected: true, value: true },
  { expected: true, value: false },
  { expected: false, value: 1 },
  { expected: false, value: undefined }
])("boolean", ({ expected, value }) => {
  expect(is.boolean(value)).toBe(expected);
});

test.each([
  { expected: true, value: TestClass },
  { expected: true, value: fn.noop },
  { expected: false, value: 1 },
  { expected: false, value: undefined }
])("callable", ({ expected, value }) => {
  expect(is.callable(value)).toBe(expected);
});

test.each([
  { expected: true, value: TestClass },
  { expected: true, value: fn.noop },
  { expected: false, value: 1 },
  { expected: false, value: undefined }
])("constructor", ({ expected, value }) => {
  expect(is.constructor(value)).toBe(expected);
});

test.each([
  { expected: true, value: null },
  { expected: true, value: undefined },
  { expected: false, value: 1 }
])("empty", ({ expected, value }) => {
  expect(is.empty(value)).toBe(expected);
});

test.each([
  { expected: true, value: "a" },
  { expected: true, value: "b" },
  { expected: false, value: "c" },
  { expected: false, value: undefined }
])("enumeration", ({ expected, value }) => {
  enum TestEnum {
    a = "a",
    b = "b"
  }

  expect(is.enumeration(value, TestEnum)).toBe(expected);
});

test.each([
  { expected: true, value: [1] },
  { expected: false, value: ["a"] },
  { expected: false, value: 1 }
])("factory", ({ expected, value }) => {
  expect(is.array.of(value, is.number)).toBe(expected);
});

test.each([
  { expected: true, value: false },
  { expected: false, value: true },
  { expected: false, value: undefined }
])("false", ({ expected, value }) => {
  expect(is.false(value)).toBe(expected);
});

test.each([
  { expected: true, value: { a: 1 } },
  { expected: true, value: { a: "a" } },
  { expected: false, value: 1 },
  { expected: false, value: null }
])("indexedObject", ({ expected, value }) => {
  expect(is.indexedObject(value)).toBe(expected);
});

test.each([
  { expected: true, value: { a: 1 } },
  { expected: false, value: { a: "a" } },
  { expected: false, value: 1 },
  { expected: false, value: null }
])("indexedObject.of", ({ expected, value }) => {
  expect(is.indexedObject.of(value, is.number)).toBe(expected);
});

test.each([
  { expected: true, value: new TestClass() },
  { expected: false, value: {} },
  { expected: false, value: undefined }
])("instanceOf", ({ expected, value }) => {
  expect(is.instanceOf(value, TestClass)).toBe(expected);
});

test.each([
  { expected: true, value: [new TestClass()] },
  { expected: false, value: [{}] },
  { expected: false, value: [undefined] }
])("instancesOf", ({ expected, value }) => {
  expect(is.instancesOf(value, TestClass)).toBe(expected);
});

test.each([
  { expected: true, value: new ReadonlyMap([["a", 1]]) },
  { expected: true, value: new ReadonlyMap([[1, 1]]) },
  { expected: true, value: new ReadonlyMap([["a", "a"]]) },
  { expected: false, value: {} },
  { expected: false, value: undefined }
])("map", ({ expected, value }) => {
  expect(is.map(value)).toBe(expected);
});

test.each([
  { expected: true, value: new ReadonlyMap([["a", 1]]) },
  { expected: false, value: new ReadonlyMap([[1, 1]]) },
  { expected: false, value: new ReadonlyMap([["a", "a"]]) },
  { expected: false, value: {} },
  { expected: false, value: undefined }
])("map.of", ({ expected, value }) => {
  expect(is.map.of(value, is.string, is.number)).toBe(expected);
});

test.each([1, null, undefined])("never", value => {
  expect(is.never(value)).toBeFalse();
});

test.each([
  { expected: true, value: true },
  { expected: false, value: 1 }
])("not", ({ expected, value }) => {
  expect(is.not(value, is.number)).toBe(expected);
});

test.each([
  { expected: true, value: true },
  { expected: false, value: 1 }
])("not.factory", ({ expected, value }) => {
  const guard = is.not.factory(is.number);

  expect(guard(value)).toBe(expected);
});

test.each([
  { expected: true, value: null },
  { expected: false, value: undefined },
  { expected: false, value: 1 }
])("null", ({ expected, value }) => {
  expect(is.null(value)).toBe(expected);
});

test.each([
  { expected: true, value: 1 },
  { expected: true, value: "a" },
  { expected: false, value: Number.NaN },
  { expected: false, value: true },
  { expected: false, value: undefined }
])("numStr", ({ expected, value }) => {
  expect(is.numStr(value)).toBe(expected);
});

test.each([
  { expected: true, value: 1 },
  { expected: false, value: "a" },
  { expected: false, value: Number.NaN },
  { expected: false, value: true },
  { expected: false, value: undefined }
])("number", ({ expected, value }) => {
  expect(is.number(value)).toBe(expected);
});

test.each([
  { expected: true, value: { num: 1, str: "a" } },
  { expected: true, value: { num: 1 } },
  { expected: true, value: { num: 1, str: true } },
  { expected: true, value: { num: true, str: "a" } },
  { expected: true, value: { str: "a" } },
  { expected: false, value: 1 },
  { expected: false, value: null },
  { expected: false, value: undefined }
])("object", ({ expected, value }) => {
  expect(is.object(value)).toBe(expected);
});

test.each([
  { expected: true, value: { num: 1, str: "a" } },
  { expected: true, value: { num: 1 } },
  { expected: false, value: { num: 1, str: true } },
  { expected: false, value: { num: true, str: "a" } },
  { expected: false, value: { str: "a" } },
  { expected: false, value: 1 },
  { expected: false, value: null },
  { expected: false, value: undefined }
])("object.factory", ({ expected, value }) => {
  const guard = is.object.factory({ num: is.number }, { str: is.string });

  expect(guard(value)).toBe(expected);
});

test.each([
  { expected: true, value: { num: 1, str: "a" } },
  { expected: true, value: { num: 1 } },
  { expected: false, value: { num: 1, str: true } },
  { expected: false, value: { num: true, str: "a" } },
  { expected: false, value: { str: "a" } },
  { expected: false, value: 1 },
  { expected: false, value: null },
  { expected: false, value: undefined }
])("object.of", ({ expected, value }) => {
  expect(is.object.of(value, { num: is.number }, { str: is.string })).toBe(
    expected
  );
});

test.each([
  { expected: true, value: 1 },
  { expected: true, value: true },
  { expected: false, value: undefined }
])("or", ({ expected, value }) => {
  expect(is.or(value, is.boolean, is.number)).toBe(expected);
});

test.each([
  { expected: true, value: 1 },
  { expected: true, value: true },
  { expected: false, value: undefined }
])("or.factory", ({ expected, value }) => {
  const guard = is.or.factory(is.boolean, is.number, is.string);

  expect(guard(value)).toBe(expected);
});

test.each([
  { expected: true, value: 1 },
  { expected: true, value: "a" },
  { expected: true, value: Symbol("test-symbol") },
  { expected: false, value: Number.NaN },
  { expected: false, value: true },
  { expected: false, value: undefined }
])("propertyKey", ({ expected, value }) => {
  expect(is.propertyKey(value)).toBe(expected);
});

test.each([
  { expected: true, value: new ReadonlySet(["a"]) },
  { expected: true, value: new ReadonlySet([1]) },
  { expected: false, value: {} },
  { expected: false, value: undefined }
])("set", ({ expected, value }) => {
  expect(is.set(value)).toBe(expected);
});

test.each([
  { expected: true, value: new ReadonlySet(["a"]) },
  { expected: false, value: new ReadonlySet([1]) },
  { expected: false, value: {} },
  { expected: false, value: undefined }
])("set.of", ({ expected, value }) => {
  expect(is.set.of(value, is.string)).toBe(expected);
});

test.each([
  { expected: true, value: "a" },
  { expected: true, value: "" },
  { expected: false, value: undefined },
  { expected: false, value: 1 }
])("string", ({ expected, value }) => {
  expect(is.string(value)).toBe(expected);
});

test.each([
  { expected: true, value: "a" },
  { expected: true, value: undefined },
  { expected: false, value: "" },
  { expected: false, value: 1 }
])("stringU", ({ expected, value }) => {
  expect(is.stringU(value)).toBe(expected);
});

test.each([
  { expected: true, value: Symbol("sample") },
  { expected: false, value: 1 }
])("symbol", ({ expected, value }) => {
  expect(is.symbol(value)).toBe(expected);
});

test.each([
  { expected: true, value: true },
  { expected: false, value: false },
  { expected: false, value: undefined }
])("true", ({ expected, value }) => {
  expect(is.true(value)).toBe(expected);
});

test.each([
  { expected: true, value: [true, 1] },
  { expected: false, value: [undefined, 1] },
  { expected: false, value: {} }
])("tuple", ({ expected, value }) => {
  expect(is.tuple(value, is.boolean, is.number)).toBe(expected);
});

test.each([
  { expected: true, value: [true, 1, "a"] },
  { expected: false, value: [undefined, 1, "a"] },
  { expected: false, value: {} }
])("tuple.factory", ({ expected, value }) => {
  const guard = is.tuple.factory(is.boolean, is.number, is.string);

  expect(guard(value)).toBe(expected);
});

test.each([
  { expected: false, value: 1 },
  { expected: false, value: null },
  { expected: true, value: undefined }
])("undefined", ({ expected, value }) => {
  expect(is.undefined(value)).toBe(expected);
});

test.each([1, null, undefined])("unknown", value => {
  expect(is.unknown(value)).toBeTrue();
});
