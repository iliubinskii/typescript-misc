import { a, regexp } from "@";

test.each([
  { expected: "gu", flags: "gu" },
  { expected: "giu", flags: "iu" }
])("addFlags", ({ expected, flags }) => {
  expect(regexp.addFlags(/.*/gu, flags).flags).toBe(expected);
});

test.each([/\w(\w)\w/u, /\w(\w)\w/gu])("matchAll", re => {
  const matches = regexp.matchAll("abc xyz", re);

  const expected = [
    ["abc", "b"],
    ["xyz", "y"]
  ] as const;

  const expectedIndex = [0, 4] as const;

  const expectedInput = ["abc xyz", "abc xyz"] as const;

  expect(matches.map(match => a.clone(match))).toStrictEqual(expected);
  expect(matches.map(match => match.index)).toStrictEqual(expectedIndex);
  expect(matches.map(match => match.input)).toStrictEqual(expectedInput);
});
