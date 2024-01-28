/* eslint-disable @typescript-eslint/no-explicit-any -- Ok */

import type { unknowns } from "./core";

export interface Async<R, A extends unknowns = readonly []> {
  /**
   * Async function.
   *
   * @param args - Arguments.
   * @returns Promise.
   */
  (...args: A): Promise<R>;
}

export type AsyncPromise<R, A extends unknowns = readonly []> =
  // @prettier
  Async<R, A> | Promise<R>;

export type AsyncPromiseSync<R, A extends unknowns = readonly []> =
  // @prettier
  Async<R, A> | Promise<R> | Sync<R, A>;

export type Asyncs<R, A extends unknowns = readonly []> =
  // @prettier
  ReadonlyArray<Async<R, A>>;

export type CallSignature<T> = T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : never;

export interface Callable<T = unknown> {
  /**
   * Function.
   *
   * @param args - Arguments.
   * @returns Result.
   */
  (...args: readonly any[]): T;
}

export type ConstructSignature<T> = T extends new (...args: infer A) => infer I
  ? new (...args: A) => I
  : never;

export interface Constructor<T = unknown> {
  /**
   * Constructor.
   *
   * @param args - Arguments.
   * @returns Result.
   */
  new (...args: readonly any[]): T;
}

export type Promises<T> = ReadonlyArray<Promise<T>>;

export interface Sync<R, A extends unknowns = readonly []> {
  /**
   * Function.
   *
   * @param args - Arguments.
   * @returns Result.
   */
  (...args: A): R;
}

export type Syncs<R, A extends unknowns = readonly []> =
  // @prettier
  ReadonlyArray<Sync<R, A>>;
