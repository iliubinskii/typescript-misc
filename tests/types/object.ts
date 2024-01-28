/* eslint-disable misc/typescript/prefer-readonly-property -- Ok */

import type { Equals } from "ts-toolbelt/out/Any/Equals";
import type { types } from "@";

test("Omit", () => {
  const value: Equals<To, Expected> = 1;

  expect(value).toBe(1);

  type Expected = {
    a: string;
    b?: string;
    readonly c: string;
    readonly d?: string;
  } & {
    e?: never;
    f?: never;
    g?: never;
    h?: never;
  };

  interface From {
    a: string;
    b?: string;
    readonly c: string;
    readonly d?: string;
    e: string;
    f?: string;
    readonly g: string;
    readonly h?: string;
  }

  type To = types.object.Omit<From, "e" | "f" | "g" | "h">;
});
