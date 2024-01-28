/* eslint-disable misc/consistent-optional-props -- Ok */
/* eslint-disable misc/typescript/prefer-readonly-property -- Ok */

import type { numberU, types } from "@";
import type { Equals } from "ts-toolbelt/out/Any/Equals";

interface TestInterface {
  readonly r: number;
  readonly ro?: number;
  // eslint-disable-next-line spellcheck/spell-checker -- Ok
  readonly rou?: numberU;
  readonly ru: numberU;
  w: number;
  wo?: number;
  // eslint-disable-next-line spellcheck/spell-checker -- Ok
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
    // eslint-disable-next-line spellcheck/spell-checker -- Ok
    readonly rou?: number;
    readonly ru?: number;
  } & {
    w: number;
  } & {
    wo?: number;
    // eslint-disable-next-line spellcheck/spell-checker -- Ok
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
    // eslint-disable-next-line spellcheck/spell-checker -- Ok
    readonly rou?: numberU;
    readonly ru?: numberU;
  } & {
    w: number;
  } & {
    wo?: numberU;
    // eslint-disable-next-line spellcheck/spell-checker -- Ok
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
    // eslint-disable-next-line spellcheck/spell-checker -- Ok
    readonly rou: numberU;
    readonly ru: numberU;
  } & {
    w: number;
  } & {
    wo: numberU;
    // eslint-disable-next-line spellcheck/spell-checker -- Ok
    wou: numberU;
    wu: numberU;
  };

  type To = types.object.style.Undefined<TestInterface>;
});
