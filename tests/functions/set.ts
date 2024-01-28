import { ReadonlySet, set } from "@";

test("add", () => {
  const source = new ReadonlySet([1]);

  const expected = new ReadonlySet([1, 2]);

  expect(set.add(source, 2)).toStrictEqual(expected);
});

test("delete", () => {
  const source = new ReadonlySet([1, 2]);

  const expected = new ReadonlySet([1]);

  expect(set.delete(source, 2)).toStrictEqual(expected);
});
