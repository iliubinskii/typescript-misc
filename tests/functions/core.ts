/* eslint-disable misc/typescript/prefer-readonly-property -- Ok */

import { ReadonlyMap, ReadonlySet, evaluate, freeze, unfreeze } from "@";
import type { Equals } from "ts-toolbelt/out/Any/Equals";

test("ReadonlyMap", () => {
  const entries = [["a", 1]] as const;

  expect(new ReadonlyMap(entries)).toStrictEqual(new Map(entries));
});

test("ReadonlySet", () => {
  const values = [["a", 1]] as const;

  expect(new ReadonlySet(values)).toStrictEqual(new Set(values));
});

test("evaluate", async () => {
  expect(evaluate(() => true)).toBeTrue();
  await expect(evaluate(resolve)).resolves.toBeTrue();
  await expect(evaluate(resolve())).resolves.toBeTrue();

  async function resolve(): Promise<boolean> {
    await Promise.resolve();

    return true;
  }
});

test("freeze", () => {
  const obj1: TestInterface = { value: 1 };

  const obj2 = freeze(obj1);

  const typeCheck1: Equals<typeof obj1, { value: number }> = 1;

  const typeCheck2: Equals<typeof obj2, { readonly value: number }> = 1;

  expect(obj1).toBeSameAs(obj2);
  expect(typeCheck1).toBe(1);
  expect(typeCheck2).toBe(1);

  interface TestInterface {
    value: number;
  }
});

test("unfreeze", () => {
  const obj1: TestInterface = { value: 1 };

  const obj2 = unfreeze(obj1);

  const typeCheck1: Equals<typeof obj1, { readonly value: number }> = 1;

  const typeCheck2: Equals<typeof obj2, { value: number }> = 1;

  expect(obj1).toBeSameAs(obj2);
  expect(typeCheck1).toBe(1);
  expect(typeCheck2).toBe(1);

  interface TestInterface {
    readonly value: number;
  }
});
