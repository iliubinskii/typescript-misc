import { AssertionError, fn, is, o } from "@";

class TestClass {}

test("clone", () => {
  const obj1 = { a: 1 } as const;

  const obj2 = o.clone(obj1);

  expect(obj2).toStrictEqual(obj1);
  expect(obj2).not.toBeSameAs(obj1);
});

test.each([
  { expected: true, obj: { a: 1, b: 2 } },
  { expected: false, obj: { a: 1, b: "a" } }
])("every", ({ expected, obj }) => {
  expect(o.every(obj, is.number)).toBe(expected);
});

test("filter", () => {
  const obj = { a: 1, b: 2, c: 3 } as const;

  const expected = { a: 1, c: 3 } as const;

  expect(o.filter(obj, callback)).toStrictEqual(expected);

  function callback(value: number): boolean {
    return value % 2 === 1;
  }
});

test("fromEntries", () => {
  expect(o.fromEntries([["a", 1]])).toStrictEqual({ a: 1 });
});

test("fromEntries.exhaustive", () => {
  expect(o.fromEntries.exhaustive([["a", 1]])).toStrictEqual({ a: 1 });
});

test.each([
  { target: {} },
  { target: fn.noop },
  { expected: 1, guard: is.number, target: { a: 1 } },
  {
    defVal: 2,
    expected: 2,
    guard: is.number,
    target: {}
  },
  {
    expected: new AssertionError(),
    expectedToThrow: true,
    guard: is.number,
    target: {}
  }
])("get", ({ defVal, expected, expectedToThrow, guard, target }) => {
  expect(() => o.get(target, "a", guard, defVal)).executionResultToBe(
    expected,
    expectedToThrow
  );
});

test.each([
  { expected: undefined, obj: TestClass },
  { expected: TestClass.prototype, obj: new TestClass() }
])("getPrototypeOf", ({ expected, obj }) => {
  expect(o.getPrototypeOf(obj)).toStrictEqual(expected);
});

test.each([
  { expected: true, key: "a", obj: { a: 1 } },
  { expected: true, key: "a", obj: { a: undefined } },
  { expected: false, key: "b", obj: { a: 1 } }
])("hasOwnProp", ({ expected, key, obj }) => {
  expect(o.hasOwnProp(key, obj)).toBe(expected);
});

test("map", () => {
  const obj = { a: "1", b: "12", c: "123" } as const;

  const expected = { a: 1, b: 2, c: 3 } as const;

  expect(o.map(obj, callback)).toStrictEqual(expected);

  function callback(value: string): number {
    return value.length;
  }
});

test("omit", () => {
  const obj = { a: 1, b: 2, c: 3 } as const;

  const expected = { a: 1, c: 3 } as const;

  expect(o.omit(obj, value => value === 2)).toStrictEqual(expected);
});

test("omitKeys", () => {
  expect(o.omitKeys({ a: 1, b: 2, c: 3 }, "b")).toStrictEqual({ a: 1, c: 3 });
});

test("prefixKeys", () => {
  expect(o.prefixKeys({ a: 1, b: 2 }, "x")).toStrictEqual({ xa: 1, xb: 2 });
});

test("removeUndefinedKeys", () => {
  const obj = { a: 1, b: undefined } as const;

  const expected = { a: 1 } as const;

  expect(o.removeUndefinedKeys(obj)).toStrictEqual(expected);
});

test("removeUndefinedKeys.alt", () => {
  const obj = { a: 1, b: undefined } as const;

  const expected = { a: 1 } as const;

  expect(o.removeUndefinedKeys.alt(obj)).toStrictEqual(expected);
});

test("set", () => {
  const obj = { a: 1 } as const;

  o.set(obj, "b", 2);
  expect(obj).toStrictEqual({ a: 1, b: 2 });
});

test("size", () => {
  const symbol = Symbol("sample");

  const obj = {
    a: 1,
    b: 2,
    c: 3,
    [symbol]: 4
  } as const;

  expect(o.size(obj)).toBe(3);
});

test.each([
  { expected: true, obj: { a: 1, b: "a" } },
  { expected: false, obj: { a: 1, b: 2 } }
])("some", ({ expected, obj }) => {
  expect(o.some(obj, is.string)).toBe(expected);
});

test.each([
  {
    expected: { a: 1, b: 2, c: 3 },
    obj: o.fromEntries.exhaustive([
      ["a", 1],
      ["c", 3],
      ["b", 2]
    ])
  },
  {
    compareFn: (x: number, y: number): number => x - y,
    expected: { a: 1, b: 2, c: 3 },
    obj: o.fromEntries.exhaustive([
      ["a", 1],
      ["c", 3],
      ["b", 2]
    ])
  },
  {
    compareFn: (x: number, y: number): number => y - x,
    expected: { a: 3, b: 2, c: 1 },
    obj: o.fromEntries.exhaustive([
      ["a", 3],
      ["c", 1],
      ["b", 2]
    ])
  }
])("sort", ({ compareFn, expected, obj }) => {
  expect(o.sort(obj, compareFn)).toStrictEqual(expected);
});
