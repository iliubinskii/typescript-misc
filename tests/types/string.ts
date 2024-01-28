/* eslint-disable misc/typescript/prefer-enum -- Ok */

import type { Equals } from "ts-toolbelt/out/Any/Equals";
import type { types } from "@";

test("AddPrefix", () => {
  const typeCheck: Equals<To, Expected> = 1;

  expect(typeCheck).toBe(1);

  type Expected = "xa" | "xb";

  type To = types.string.AddPrefix<"a" | "b", "x">;
});

test("RemovePrefix", () => {
  const typeCheck: Equals<To, Expected> = 1;

  expect(typeCheck).toBe(1);

  type Expected = "a" | "b";

  type To = types.string.RemovePrefix<"xa" | "xb", "x">;
});
