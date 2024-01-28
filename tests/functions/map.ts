import { ReadonlyMap, map } from "@";

test("delete", () => {
  const source = new ReadonlyMap([
    ["a", 1],
    ["b", 2]
  ]);

  const expected = new ReadonlyMap([["a", 1]]);

  expect(map.delete(source, "b")).toStrictEqual(expected);
});

test("set", () => {
  const source = new ReadonlyMap([["a", 1]]);

  const expected = new ReadonlyMap([
    ["a", 1],
    ["b", 2]
  ]);

  expect(map.set(source, "b", 2)).toStrictEqual(expected);
});
