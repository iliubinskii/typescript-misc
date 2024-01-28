import { InternalError } from "@";

const error1 = new InternalError();

const error2 = new InternalError("Custom message");

test.each([
  { err: error1, expected: "Internal error" },
  { err: error2, expected: "Custom message" }
])("message", ({ err, expected }) => {
  expect(err.message).toBe(expected);
});

test.each([error1, error2])("name", err => {
  expect(err.name).toBe("InternalError");
});
