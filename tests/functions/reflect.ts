import { AssertionError, is, reflect } from "@";

const key1 = "key-1";

const key2 = Symbol("key-2");

const key3 = "key-3";

const metadataKey1 = "metadata-key-1";

const metadataKey2 = Symbol("metadata-key-2");

const metadataKey3 = "metadata-key-3";

test.each([
  { expected: 1, metadataKey: metadataKey1, metadataValue: 1 },
  { expected: undefined, metadataKey: metadataKey2, metadataValue: undefined }
])("defineMetadata", ({ expected, metadataKey, metadataValue }) => {
  const target = {};

  reflect.defineMetadata(metadataKey, metadataValue, target);
  expect(reflect.getOwnMetadata(metadataKey, target)).toStrictEqual(expected);
});

test.each([
  { expected: 1, key: "a" },
  { expected: 1, guard: is.number, key: "a" },
  {
    defVal: 2,
    expected: 2,
    guard: is.number,
    key: "b"
  },
  {
    expected: new AssertionError(),
    expectedToThrow: true,
    guard: is.number,
    key: "b"
  },
  { expected: undefined, key: "b" }
])("get", ({ defVal, expected, expectedToThrow, guard, key }) => {
  const target = { a: 1 } as const;

  expect(() => reflect.get(target, key, guard, defVal)).executionResultToBe(
    expected,
    expectedToThrow
  );
});

test.each([
  { expected: 1, metadataKey: metadataKey1 },
  { expected: 2, metadataKey: metadataKey2 },
  {
    defVal: 3,
    expected: 3,
    guard: is.number,
    metadataKey: metadataKey3
  },
  {
    expected: new AssertionError(),
    expectedToThrow: true,
    guard: is.number,
    metadataKey: metadataKey3
  }
])(
  "getMetadata",
  ({ defVal, expected, expectedToThrow, guard, metadataKey }) => {
    class TestClass {}

    const target = new TestClass();

    reflect.defineMetadata(metadataKey1, 1, target);
    reflect.defineMetadata(metadataKey2, 2, TestClass.prototype);
    expect(() =>
      reflect.getMetadata(metadataKey, target, guard, defVal)
    ).executionResultToBe(expected, expectedToThrow);
  }
);

test.each([
  { expected: 1, key: key1, metadataKey: metadataKey1 },
  { expected: 2, key: key2, metadataKey: metadataKey2 },
  {
    defVal: 3,
    expected: 3,
    guard: is.number,
    key: key3,
    metadataKey: metadataKey2
  },
  {
    expected: new AssertionError(),
    expectedToThrow: true,
    guard: is.number,
    key: key2,
    metadataKey: metadataKey3
  }
])(
  "getMetadataKey",
  ({ defVal, expected, expectedToThrow, guard, key, metadataKey }) => {
    class TestClass {}

    const target = new TestClass();

    reflect.defineMetadataKey(metadataKey1, 1, target, key1);
    reflect.defineMetadataKey(metadataKey2, 2, TestClass.prototype, key2);
    expect(() =>
      reflect.getMetadataKey(metadataKey, target, key, guard, defVal)
    ).executionResultToBe(expected, expectedToThrow);
  }
);

test.each([
  { expected: 1, metadataKey: metadataKey1 },
  { expected: undefined, metadataKey: metadataKey2 },
  {
    defVal: 3,
    expected: 3,
    guard: is.number,
    metadataKey: metadataKey3
  },
  {
    expected: new AssertionError(),
    expectedToThrow: true,
    guard: is.number,
    metadataKey: metadataKey3
  }
])(
  "getOwnMetadata",
  ({ defVal, expected, expectedToThrow, guard, metadataKey }) => {
    class TestClass {}

    const target = new TestClass();

    reflect.defineMetadata(metadataKey1, 1, target);
    reflect.defineMetadata(metadataKey2, 2, TestClass.prototype);
    expect(() =>
      reflect.getOwnMetadata(metadataKey, target, guard, defVal)
    ).executionResultToBe(expected, expectedToThrow);
  }
);

test.each([
  { expected: 1, key: key1, metadataKey: metadataKey1 },
  { expected: undefined, key: key2, metadataKey: metadataKey2 },
  {
    defVal: 3,
    expected: 3,
    guard: is.number,
    key: key3,
    metadataKey: metadataKey2
  },
  {
    expected: new AssertionError(),
    expectedToThrow: true,
    guard: is.number,
    key: key2,
    metadataKey: metadataKey3
  }
])(
  "getOwnMetadataKey",
  ({ defVal, expected, expectedToThrow, guard, key, metadataKey }) => {
    class TestClass {}

    const target = new TestClass();

    reflect.defineMetadataKey(metadataKey1, 1, target, key1);
    reflect.defineMetadataKey(metadataKey2, 2, TestClass.prototype, key2);
    expect(() =>
      reflect.getOwnMetadataKey(metadataKey, target, key, guard, defVal)
    ).executionResultToBe(expected, expectedToThrow);
  }
);

test.each([
  { expected: true, metadataKey: metadataKey1 },
  { expected: true, metadataKey: metadataKey2 },
  { expected: false, metadataKey: metadataKey3 }
])("hasMetadata", ({ expected, metadataKey }) => {
  class TestClass {}

  const target = new TestClass();

  reflect.defineMetadata(metadataKey1, 1, target);
  reflect.defineMetadata(metadataKey2, 2, TestClass.prototype);
  expect(reflect.hasMetadata(metadataKey, target)).toBe(expected);
});

test.each([
  { expected: true, key: key1, metadataKey: metadataKey1 },
  { expected: true, key: key2, metadataKey: metadataKey2 },
  { expected: false, key: key3, metadataKey: metadataKey2 },
  { expected: false, key: key2, metadataKey: metadataKey3 }
])("hasMetadataKey", ({ expected, key, metadataKey }) => {
  class TestClass {}

  const target = new TestClass();

  reflect.defineMetadataKey(metadataKey1, 1, target, key1);
  reflect.defineMetadataKey(metadataKey2, 2, TestClass.prototype, key2);
  expect(reflect.hasMetadataKey(metadataKey, target, key)).toBe(expected);
});

test.each([
  { expected: true, metadataKey: metadataKey1 },
  { expected: false, metadataKey: metadataKey2 },
  { expected: false, metadataKey: metadataKey3 }
])("hasOwnMetadata", ({ expected, metadataKey }) => {
  class TestClass {}

  const target = new TestClass();

  reflect.defineMetadata(metadataKey1, 1, target);
  reflect.defineMetadata(metadataKey2, 2, TestClass.prototype);
  expect(reflect.hasOwnMetadata(metadataKey, target)).toBe(expected);
});

test.each([
  { expected: true, key: key1, metadataKey: metadataKey1 },
  { expected: false, key: key2, metadataKey: metadataKey2 },
  { expected: false, key: key3, metadataKey: metadataKey2 },
  { expected: false, key: key2, metadataKey: metadataKey3 }
])("hasOwnMetadataKey", ({ expected, key, metadataKey }) => {
  class TestClass {}

  const target = new TestClass();

  reflect.defineMetadataKey(metadataKey1, 1, target, key1);
  reflect.defineMetadataKey(metadataKey2, 2, TestClass.prototype, key2);
  expect(reflect.hasOwnMetadataKey(metadataKey, target, key)).toBe(expected);
});
