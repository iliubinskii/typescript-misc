import { fn } from "@";

test.each([1, 2, 3])("identity", value => {
  expect(fn.identity(value)).toBe(value);
});

test("never", () => {
  expect(fn.never).toThrow(new Error("This function should not be called"));
});

test("noopFalse", () => {
  expect(fn.noopFalse(1)).toBeFalse();
});

test("noopTrue", () => {
  expect(fn.noopTrue(1)).toBeTrue();
});

test("pipe", () => {
  expect(fn.pipe(10_000, Math.log10, Math.sqrt)).toBe(2);
});

test.each([1, () => 1])("valueFromGenerator", mixed => {
  expect(fn.valueFromGenerator(mixed)).toBe(1);
});

test("valueToGenerator", () => {
  expect(fn.valueToGenerator(1)()).toBe(1);
});
