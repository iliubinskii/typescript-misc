import { cast } from "@";
import type { stringE } from "@";

test.each([
  { expected: 1, value: 1 },
  { expected: null, value: undefined },
  { expected: null, value: null }
])("emptyToNull", ({ expected, value }) => {
  expect(cast.emptyToNull(value)).toStrictEqual(expected);
});

test.each([
  { expected: 1, value: 1 },
  { expected: undefined, value: undefined },
  { expected: undefined, value: null }
])("emptyToUndefined", ({ expected, value }) => {
  expect(cast.emptyToUndefined(value)).toStrictEqual(expected);
});

test.each([
  { expected: "a", value: "a" },
  { expected: "b", value: null },
  { expected: "b", value: undefined }
])("not.empty", ({ expected, value }) => {
  expect(cast.not.empty<stringE>(value, "b")).toBe(expected);
});

test.each([
  { expected: 123, value: 123 },
  { expected: -12.3, value: -12.3 },
  { expected: 1, value: true },
  { expected: 0, value: false },
  { expected: 12, value: " 12 " },
  { expected: -12.34, value: " -12.34 " },
  { expected: 0, value: " 12s " },
  { expected: 0, value: "\n" },
  { expected: 0, value: "\r\n" },
  { expected: 0, value: [] },
  { expected: 0, value: null },
  { defVal: 1, expected: 1, value: null },
  { expected: 0, value: undefined },
  { defVal: 1, expected: 1, value: undefined }
])("number", ({ defVal, expected, value }) => {
  expect(cast.number(value, defVal)).toBe(expected);
});

test.each([
  { expected: 123, value: 123 },
  { expected: -12.3, value: -12.3 },
  { expected: 1, value: true },
  { expected: 0, value: false },
  { expected: 12, value: " 12 " },
  { expected: -12.34, value: " -12.34 " },
  { expected: undefined, value: " 12s " },
  { expected: undefined, value: "\n" },
  { expected: undefined, value: "\r\n" },
  { expected: undefined, value: [] },
  { expected: undefined, value: null },
  { expected: undefined, value: undefined }
])("numberU", ({ expected, value }) => {
  expect(cast.numberU(value)).toStrictEqual(expected);
});

test.each([
  { expected: "123", value: 123 },
  { expected: "-12.3", value: -12.3 },
  { expected: "true", value: true },
  { expected: "false", value: false },
  { expected: "", value: "" },
  { expected: "", value: [] },
  { expected: "", value: null },
  { expected: "", value: undefined }
])("string", ({ expected, value }) => {
  expect(cast.string(value)).toBe(expected);
});

test.each([
  { expected: "123", value: 123 },
  { expected: "-12.3", value: -12.3 },
  { expected: "true", value: true },
  { expected: "false", value: false },
  { expected: undefined, value: "" },
  { expected: undefined, value: [] },
  { expected: undefined, value: null },
  { expected: undefined, value: undefined }
])("stringU", ({ expected, value }) => {
  expect(cast.stringU(value)).toStrictEqual(expected);
});
