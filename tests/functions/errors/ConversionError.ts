import { ConversionError } from "@";

const error1 = new ConversionError();

const error2 = new ConversionError("Custom message");

test.each([
  { err: error1, expected: "Conversion error" },
  { err: error2, expected: "Custom message" }
])("message", ({ err, expected }) => {
  expect(err.message).toBe(expected);
});

test.each([error1, error2])("name", err => {
  expect(err.name).toBe("ConversionError");
});
