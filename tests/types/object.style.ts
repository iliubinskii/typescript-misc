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

test("Optional", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = {
    readonly r: number;
  } & {
    readonly ro?: number;
    readonly rou?: number;
    readonly ru?: number;
  } & {
    w: number;
  } & {
    wo?: number;
    wou?: number;
    wu?: number;
  };

  type To = types.object.style.Optional<TestInterface>;
});

test("OptionalUndefined", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = {
    readonly r: number;
  } & {
    readonly ro?: numberU;
    readonly rou?: numberU;
    readonly ru?: numberU;
  } & {
    w: number;
  } & {
    wo?: numberU;
    wou?: numberU;
    wu?: numberU;
  };

  type To = types.object.style.OptionalUndefined<TestInterface>;
});

test("Undefined", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = {
    readonly r: number;
  } & {
    readonly ro: numberU;
    readonly rou: numberU;
    readonly ru: numberU;
  } & {
    w: number;
  } & {
    wo: numberU;
    wou: numberU;
    wu: numberU;
  };

  type To = types.object.style.Undefined<TestInterface>;
});
