/* eslint jest/max-expects: [warn, { max: 2 }] -- Ok */
/* eslint-disable misc/no-at-sign-internal-import -- Ok */

import { matchers } from "@/test-utils/jest.internal";

test.each([
  { expected: 1, got: () => 1 },
  {
    expected: new Error("Sample error"),
    expectedToThrow: true,
    got: () => {
      throw new Error("Sample error");
    }
  }
])("executionResultToBe", ({ expected, expectedToThrow, got }) => {
  const result = matchers.executionResultToBe(got, expected, expectedToThrow);

  expect(result.pass).toBeTrue();
  expect(result.message()).toStartWith(
    "Unexpected function execution result:\n"
  );
});

test.each([
  { expected: 1, got: Promise.resolve(1) },
  {
    expected: new Error("Sample error"),
    expectedToThrow: true,
    got: Promise.reject(new Error("Sample error"))
  }
])("promiseResultToBe", async ({ expected, expectedToThrow, got }) => {
  const result = await matchers.promiseResultToBe(
    got,
    expected,
    expectedToThrow
  );

  expect(result.pass).toBeTrue();
  expect(result.message()).toStartWith(
    "Unexpected promise execution result:\n"
  );
});
