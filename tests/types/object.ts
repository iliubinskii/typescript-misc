/* eslint-disable misc/typescript/prefer-readonly-property -- Ok */

import type { stringU, types } from "@";
import type { Equals } from "ts-toolbelt/out/Any/Equals";

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
    b?: stringU;
    readonly c: string;
    readonly d?: stringU;
    e: string;
    f?: stringU;
    readonly g: string;
    readonly h?: stringU;
  }

  type To = types.object.Omit<From, "e" | "f" | "g" | "h">;
});
