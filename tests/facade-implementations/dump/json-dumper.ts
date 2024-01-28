import { jsonDumper } from "@";

test("jsonDumper", () => {
  expect(jsonDumper({ x: 1 })).toBe('{"x":1}');
});
