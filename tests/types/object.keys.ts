/* eslint-disable misc/consistent-optional-props -- Ok */
/* eslint-disable misc/typescript/prefer-readonly-property -- Ok */

import type { numberU, types } from "@";
import type { Equals } from "ts-toolbelt/out/Any/Equals";

interface TestInterface {
  readonly r: number;
  readonly ro?: number;
  readonly rou?: numberU;
  readonly ru: numberU;
  w: number;
  wo?: number;
  wou?: numberU;
  wu: numberU;
}

test("Defined", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = "r" | "w";

  type To = types.object.keys.Defined<TestInterface>;
});

test("ReadonlyDefined", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = "r";

  type To = types.object.keys.ReadonlyDefined<TestInterface>;
});

test("ReadonlyUndefined", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = "ro" | "rou" | "ru";

  type To = types.object.keys.ReadonlyUndefined<TestInterface>;
});

test("Undefined", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = "ro" | "rou" | "ru" | "wo" | "wou" | "wu";

  type To = types.object.keys.Undefined<TestInterface>;
});

test("WritableDefined", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = "w";

  type To = types.object.keys.WritableDefined<TestInterface>;
});

test("WritableUndefined", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = "wo" | "wou" | "wu";

  type To = types.object.keys.WritableUndefined<TestInterface>;
});
