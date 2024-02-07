/* eslint jest/max-expects: [warn, { max: 2 }] -- Ok */

import * as testUtils from "@/test-utils";

test.each([
  {
    expected: 1,
    got: 1,
    immediate: true,
    pass: true
  },
  {
    expected: 2,
    got: 1,
    immediate: false,
    pass: false
  }
])("buildEqualsResult", ({ expected, got, immediate, pass }) => {
  const result = testUtils.buildEqualsResult(
    got === expected,
    "Message",
    got,
    expected,
    immediate
  );

  expect(result.pass).toBe(pass);
  expect(result.message()).toStartWith("Message:\n");
});

test.each([
  { message: "Expect failure", pass: true },
  { message: "Expect success", pass: false }
])("buildResult", ({ message, pass }) => {
  const result = testUtils.buildResult(
    pass,
    "Expect success",
    "Expect failure"
  );

  expect(result.pass).toBe(pass);
  expect(result.message()).toBe(message);
});
