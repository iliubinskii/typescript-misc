import { AssertionError } from "@";

const error1 = new AssertionError();

const error2 = new AssertionError("Custom message");

test.each([
  { err: error1, expected: "Assertion failed" },
  { err: error2, expected: "Custom message" }
])("message", ({ err, expected }) => {
  expect(err.message).toBe(expected);
});

test.each([error1, error2])("name", err => {
  expect(err.name).toBe("AssertionError");
});
