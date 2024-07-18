import { AssertionError, ReadonlySet, a } from "@";
import type { Writable, numbers } from "@";

function reduce(obj: Reducible): unknown {
  return obj.id;
}

interface Reducible {
  readonly id: unknown;
}

test("chain", () => {
  expect(a.chain([1, 2, 3, 4, 5])).toStrictEqual([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5]
  ]);
});

test("chunk", () => {
  expect(a.chunk([1, 2, 3], 2)).toStrictEqual([[1, 2], [3]]);
});

test("clone", () => {
  const arr1 = [1, 2, 3] as const;

  const arr2 = a.clone(arr1);

  expect(arr2).toStrictEqual(arr1);
  expect(arr2).not.toBeSameAs(arr1);
});

test("drop", () => {
  expect(a.drop([1, 2, 3], 1)).toStrictEqual([1, 3]);
});

test.each([
  { expected: { data: "b", id: 2 }, keyOrReduce: "id", value: { id: 2 } },
  { expected: undefined, keyOrReduce: "id", value: { id: 4 } },
  { expected: { data: "b", id: 2 }, keyOrReduce: reduce, value: { id: 2 } },
  { expected: undefined, keyOrReduce: reduce, value: { id: 4 } }
])("findBy", ({ expected, keyOrReduce, value }) => {
  const arr = [
    { data: "a", id: 1 },
    { data: "b", id: 2 },
    { data: "c", id: 3 },
    { data: "d", id: 2 }
  ] as const;

  expect(a.findBy(arr, value, keyOrReduce)).toStrictEqual(expected);
});

test.each([
  { arr: [1, 2, 3, 2, 4], expected: 3, search: 2 },
  { arr: [1, 2, 3, 2, 4], expected: -1, search: 5 }
])("findLastIndex", ({ arr, expected, search }) => {
  expect(a.findLastIndex(arr, value => value === search)).toBe(expected);
});

test.each([
  { arr: [1, 2, 3, 4, 5], expected: 1 },
  { arr: [null, 2, 3, 4, 5], expected: null },
  { arr: [undefined, 2, 3, 4, 5], expected: undefined }
])("first", ({ arr, expected }) => {
  expect(a.first(arr)).toStrictEqual(expected);
});

test("fromIterable", () => {
  const set = new ReadonlySet([1, 2, 3]);

  expect(a.fromIterable(set)).toStrictEqual([1, 2, 3]);
});

test.each([
  { expected: [1], value: 1 },
  { expected: [2], value: [2] }
])("fromMixed", ({ expected, value }) => {
  expect(a.fromMixed(value)).toStrictEqual(expected);
});

test.each([
  { expected: [5, 6, 7], from: 5, to: 7 },
  {
    expected: [5, 7],
    from: 5,
    step: 2,
    to: 7
  },
  {
    expected: [5, 7],
    from: 5,
    step: 2,
    to: 8
  }
])("fromRange", ({ expected, from, step, to }) => {
  expect(a.fromRange(from, to, step)).toStrictEqual(expected);
});

test("fromString", () => {
  expect(a.fromString("abc")).toStrictEqual(["a", "b", "c"]);
});

test.each([
  { arr: [1, 2, 3, 4, 5], expected: 4 },
  { arr: [1, 2, 3, null, 5], expected: null },
  { arr: [1, 2, 3, undefined, 5], expected: undefined }
])("get", ({ arr, expected }) => {
  expect(a.get(arr, 3)).toStrictEqual(expected);
});

test.each([
  { expected: true, keyOrReduce: "id", value: { id: 2 } },
  { expected: false, keyOrReduce: "id", value: { id: 4 } },
  { expected: true, keyOrReduce: reduce, value: { id: 2 } },
  { expected: false, keyOrReduce: reduce, value: { id: 4 } }
])("includesBy", ({ expected, keyOrReduce, value }) => {
  const arr = [
    { data: "a", id: 1 },
    { data: "b", id: 2 },
    { data: "c", id: 3 },
    { data: "d", id: 2 }
  ] as const;

  expect(a.includesBy(arr, value, keyOrReduce)).toBe(expected);
});

test("intersection", () => {
  expect(a.intersection([1, 2, 3], [2, 3, 4])).toStrictEqual([2, 3]);
});

test.each([
  { arr: [1, 2, 3, 4, 5], expected: 5 },
  { arr: [1, 2, 3, 4, null], expected: null },
  { arr: [1, 2, 3, 4, undefined], expected: undefined }
])("last", ({ arr, expected }) => {
  expect(a.last(arr)).toStrictEqual(expected);
});

test("omit", () => {
  expect(a.omit([1, 2, 3], value => value === 2)).toStrictEqual([1, 3]);
});

test("push", () => {
  expect(a.push([1, 2, 3], 4)).toStrictEqual([1, 2, 3, 4]);
});

test.each([
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 }
    ],
    expected: [
      { data: "a", id: 1 },
      { data: "b", id: 2 },
      { data: "c", id: 3 }
    ],
    value: { data: "c", id: 3 }
  },
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 },
      { data: "c", id: 3 },
      { data: "d", id: 2 }
    ],
    expected: [
      { data: "a", id: 1 },
      { data: "e", id: 2 },
      { data: "c", id: 3 },
      { data: "e", id: 2 }
    ],
    value: { data: "e", id: 2 }
  }
])("pushOrReplaceBy", ({ arr, expected, value }) => {
  expect(a.pushOrReplaceBy(arr, value, "id")).toStrictEqual(expected);
});

test("pushUnique", () => {
  expect(a.pushUnique([1, 2, 3], 2)).toStrictEqual([1, 3, 2]);
});

test("random", () => {
  expect(a.random([1, 2, 3])).toBeOneOf([1, 2, 3]);
  expect(() => a.random([])).toThrow(new AssertionError("Invalid index"));
});

test.each(["id", reduce])("removeBy", keyOrReduce => {
  const arr = [
    { data: "a", id: 1 },
    { data: "b", id: 2 },
    { data: "c", id: 3 },
    { data: "d", id: 2 }
  ] as const;

  const expected = [
    { data: "a", id: 1 },
    { data: "c", id: 3 }
  ] as const;

  expect(a.removeBy(arr, { id: 2 }, keyOrReduce)).toStrictEqual(expected);
});

test("replace", () => {
  expect(a.replace(["a", "b", "c"], 1, "d")).toStrictEqual(["a", "d", "c"]);
});

test.each([
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 }
    ],
    expected: [
      { data: "a", id: 1 },
      { data: "b", id: 2 }
    ],
    value: { data: "c", id: 3 }
  },
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 },
      { data: "c", id: 3 },
      { data: "d", id: 2 }
    ],
    expected: [
      { data: "a", id: 1 },
      { data: "e", id: 2 },
      { data: "c", id: 3 },
      { data: "e", id: 2 }
    ],
    value: { data: "e", id: 2 }
  }
])("replaceBy", ({ arr, expected, value }) => {
  expect(a.replaceBy(arr, value, "id")).toStrictEqual(expected);
});

test("reverse", () => {
  expect(a.reverse([1, 2, 3])).toStrictEqual([3, 2, 1]);
});

test.each([
  { arr: [1, 2, 3, 4, 5], expected: 2 },
  { arr: [1, null, 3, 4, 5], expected: null },
  { arr: [1, undefined, 3, 4, 5], expected: undefined }
])("second", ({ arr, expected }) => {
  expect(a.second(arr)).toStrictEqual(expected);
});

test.each([
  { arr: [1, 3, 2], expected: [1, 2, 3] },
  {
    arr: [1, 3, 2],
    compareFn: (x: number, y: number) => x - y,
    expected: [1, 2, 3]
  },
  {
    arr: [1, 3, 2],
    compareFn: (x: number, y: number) => y - x,
    expected: [3, 2, 1]
  }
])("sort", ({ arr, compareFn, expected }) => {
  expect(a.sort(arr, compareFn)).toStrictEqual(expected);
});

test.each([
  { arr: [1, 2, 3, 4, 5], expected: 3 },
  { arr: [1, 2, null, 4, 5], expected: null },
  { arr: [1, 2, undefined, 4, 5], expected: undefined }
])("third", ({ arr, expected }) => {
  expect(a.third(arr)).toStrictEqual(expected);
});

test.each([
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 }
    ],
    expected: [
      { data: "a", id: 1 },
      { data: "b", id: 2 },
      { data: "c", id: 3 }
    ],
    keyOrReduce: "id",
    value: { data: "c", id: 3 }
  },
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 },
      { data: "c", id: 3 },
      { data: "d", id: 2 }
    ],
    expected: [
      { data: "a", id: 1 },
      { data: "c", id: 3 }
    ],
    keyOrReduce: reduce,
    value: { data: "e", id: 2 }
  }
])("toggleBy", ({ arr, expected, keyOrReduce, value }) => {
  expect(a.toggleBy(arr, value, keyOrReduce)).toStrictEqual(expected);
});

test("truncate", () => {
  const arr: Writable<numbers> = [1, 2, 3];

  a.truncate(arr);
  expect(arr).toStrictEqual([]);
});

test.each(["id", reduce])("uniqueBy", keyOrReduce => {
  const arr = [
    { data: "a", id: 1 },
    { data: "b", id: 2 },
    { data: "c", id: 3 },
    { data: "d", id: 2 }
  ] as const;

  const expected = [
    { data: "a", id: 1 },
    { data: "b", id: 2 },
    { data: "c", id: 3 }
  ] as const;

  expect(a.uniqueBy(arr, keyOrReduce)).toStrictEqual(expected);
});

test("unshift", () => {
  expect(a.unshift([1, 2, 3], 4)).toStrictEqual([4, 1, 2, 3]);
});

test.each([
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 }
    ],
    expected: [
      { data: "c", id: 3 },
      { data: "a", id: 1 },
      { data: "b", id: 2 }
    ],
    value: { data: "c", id: 3 }
  },
  {
    arr: [
      { data: "a", id: 1 },
      { data: "b", id: 2 },
      { data: "c", id: 3 },
      { data: "d", id: 2 }
    ],
    expected: [
      { data: "a", id: 1 },
      { data: "e", id: 2 },
      { data: "c", id: 3 },
      { data: "e", id: 2 }
    ],
    value: { data: "e", id: 2 }
  }
])("unshiftOrReplaceBy", ({ arr, expected, value }) => {
  expect(a.unshiftOrReplaceBy(arr, value, "id")).toStrictEqual(expected);
});

test("unshiftUnique", () => {
  expect(a.unshiftUnique([1, 2, 3], 2)).toStrictEqual([2, 1, 3]);
});
