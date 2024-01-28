/* eslint jest/max-expects: [warn, { max: 2 }] -- Ok */
/* eslint-disable misc/consistent-import -- Ok */
/* eslint-disable misc/no-at-sign-internal-import -- Ok */
/* eslint-disable no-console -- Ok */

import * as internal from "@/test-utils/jest.internal";
import * as testUtils from "@/test-utils";
import { fn } from "@";

testUtils.installFakeTimer();

test("jestSetup: error", () => {
  const error = jest.spyOn(internal, "error");

  error.mockImplementationOnce(fn.noop);
  expect(() => {
    console.error("Test error");
  }).toThrow(new Error("Console error"));
  expect(error).mockCallsToBe(["Test error"]);
});

test("jestSetup: warn", () => {
  const warn = jest.spyOn(internal, "warn");

  warn.mockImplementationOnce(fn.noop);
  expect(() => {
    console.warn("Test warning");
  }).toThrow(new Error("Console warn"));
  expect(warn).mockCallsToBe(["Test warning"]);
});
