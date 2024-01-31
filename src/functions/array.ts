/* eslint-disable misc/typescript-misc/functions/array/prefer-clone -- Ok */
/* eslint-disable misc/typescript-misc/functions/array/prefer-fromIterable -- Ok */
/* eslint-disable misc/typescript-misc/functions/object/prefer-hasOwnProp -- Ok */

import * as _ from "lodash-commonjs-es";
import * as assert from "./assertions";
import * as is from "./guards";
import type { Writable, numbers, strings, unknowns } from "../types";
import { indexed } from "./core";

/**
 * Creates array of pairs ([x, y, z] =\> [[x, y], [y, z]]).
 *
 * @param arr - Array.
 * @returns Array of pairs.
 */
export function chain<T>(arr: readonly T[]): ChainResult<T> {
  const result: Writable<ChainResult<T>> = [];

  let prev = first(arr);

  for (const next of arr.slice(1)) {
    result.push([prev, next]);
    prev = next;
  }

  return result;
}

/**
 * Creates an array of chunks.
 *
 * @param arr - Array.
 * @param size - Chunk size.
 * @returns Array of chunks.
 */
// eslint-disable-next-line etc/no-internal -- Postponed
export function chunk<T>(arr: readonly T[], size?: number): Chunks<T> {
  return _.chunk(arr, size);
}

/**
 * Clones array.
 *
 * @param arr - Array.
 * @returns New array.
 */
// eslint-disable-next-line misc/typescript/prefer-readonly-array -- Ok
export function clone<A>(arr: readonly [A]): [A];

/**
 * Clones array.
 *
 * @param arr - Array.
 * @returns New array.
 */
// eslint-disable-next-line misc/typescript/no-multi-type-tuples, misc/typescript/prefer-readonly-array -- Ok
export function clone<A, B>(arr: readonly [A, B]): [A, B];

/**
 * Clones array.
 *
 * @param arr - Array.
 * @returns New array.
 */
// eslint-disable-next-line misc/typescript/no-multi-type-tuples, misc/typescript/prefer-readonly-array -- Ok
export function clone<A, B, C>(arr: readonly [A, B, C]): [A, B, C];

/**
 * Clones array.
 *
 * @param arr - Array.
 * @returns New array.
 */
// eslint-disable-next-line misc/typescript/no-multi-type-tuples, misc/typescript/prefer-readonly-array -- Ok
export function clone<A, B, C, D>(arr: readonly [A, B, C, D]): [A, B, C, D];

/**
 * Clones array.
 *
 * @param arr - Array.
 * @returns New array.
 */
// eslint-disable-next-line misc/typescript/prefer-readonly-array -- Ok
export function clone<T>(arr: readonly T[]): T[];

// eslint-disable-next-line misc/typescript/prefer-readonly-array -- Ok
export function clone<T>(arr: readonly T[]): T[] {
  return [...arr];
}

/**
 * Removes element at given index.
 *
 * @param arr - Array.
 * @param index - Index to be removed.
 * @returns New array with one element removed.
 */
export function drop<T>(arr: readonly T[], index: number): readonly T[] {
  assert.toBeTrue(
    Object.prototype.hasOwnProperty.call(arr, index),
    "Invalid index"
  );

  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

/**
 * Finds element matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns The first element matching value if available, _undefined_ otherwise.
 */
export function findBy<T extends object, V extends object>(
  arr: readonly T[],
  value: V,
  keyOrReduce: KeyOrReduce<T | V>
): T | undefined {
  const reduce = mixedToReduce(keyOrReduce);

  const reduced = reduce(value);

  return arr.find(element => reduce(element) === reduced);
}

/**
 * Finds last index.
 *
 * @param arr - Array.
 * @param predicate - Predicate.
 * @returns Last matching index.
 */
export function findLastIndex<T>(
  arr: readonly T[],
  predicate: Predicate<T>
): number {
  const index = reverse(arr).findIndex(predicate);

  return index === -1 ? -1 : arr.length - index - 1;
}

/**
 * Returns the first element from an array.
 *
 * @param arr - Array.
 * @returns The first element if available.
 * @throws Error otherwise.
 */
export function first<T>(arr: readonly T[]): T {
  return get(arr, 0);
}

/**
 * Creates array from iterable.
 *
 * @param iterable - Iterable.
 * @returns Array.
 */
export function fromIterable<T>(iterable: Iterable<T>): readonly T[] {
  return [...iterable];
}

/**
 * Creates array from mixed source.
 *
 * @param value - Value.
 * @returns Value if it is an array, tuple containing value otherwise.
 */
export function fromMixed<T>(value: Mixed<T>): readonly T[] {
  return is.array(value) ? value : [value];
}

/**
 * Creates array of numbers.
 *
 * @param from - Lower limit (inclusive).
 * @param to - Upper limit (inclusive).
 * @param step - Step.
 * @returns Array of numbers.
 */
export function fromRange(from: number, to: number, step = 1): numbers {
  const result: Writable<numbers> = [];

  for (let i = from; i <= to; i += step) result.push(i);

  return result;
}

/**
 * Creates array from string.
 *
 * @param str - String.
 * @returns Array.
 */
export function fromString(str: string): strings {
  return [...str];
}

/**
 * Returns element at given index.
 *
 * @param arr - Array.
 * @param index - Index.
 * @returns Element if available.
 * @throws Error otherwise.
 */
export function get<T>(arr: readonly T[], index: number): T {
  assert.toBeTrue(
    Object.prototype.hasOwnProperty.call(arr, index),
    "Invalid index"
  );

  return arr[index] as T;
}

/**
 * Checks if array contains element matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns _True_ if array contains element matching value, _false_ otherwise.
 */
export function includesBy<T extends object, V extends object>(
  arr: readonly T[],
  value: V,
  keyOrReduce: KeyOrReduce<T | V>
): boolean {
  const reduce = mixedToReduce(keyOrReduce);

  const reduced = reduce(value);

  return arr.some(element => reduce(element) === reduced);
}

/**
 * Creates an array of shared values.
 *
 * @param arrays - Arrays.
 * @returns Array of shared values.
 */
// eslint-disable-next-line etc/no-internal -- Postponed
export function intersection<T>(...arrays: Arrays<T>): readonly T[] {
  return _.intersection(...arrays);
}

/**
 * Returns the last element from an array.
 *
 * @param arr - Array.
 * @returns The last element if available.
 * @throws Error otherwise.
 */
export function last<T>(arr: readonly T[]): T {
  return get(arr, arr.length - 1);
}

/**
 * Omit object entries by predicate.
 *
 * @param arr - Array.
 * @param predicate - Predicate.
 * @returns New object.
 */
export function omit<T>(
  arr: readonly T[],
  predicate: Predicate<T>
): readonly T[] {
  return arr.filter((value: T, index: number) => !predicate(value, index, arr));
}

/**
 * Adds element to the end of an array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export function push<T>(arr: readonly T[], value: T): readonly T[] {
  return [...arr, value];
}

/**
 * Replaces elements matching value if found, pushes value otherwise.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
export function pushOrReplaceBy<T extends object>(
  arr: readonly T[],
  value: T,
  keyOrReduce: KeyOrReduce<T>
): readonly T[] {
  return includesBy(arr, value, keyOrReduce)
    ? replaceBy(arr, value, keyOrReduce)
    : push(arr, value);
}

/**
 * Adds element to the end of an array if it does already not exist.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export function pushUnique<T>(arr: readonly T[], value: T): readonly T[] {
  return push(
    omit(arr, candidate => candidate === value),
    value
  );
}

/**
 * Picks random element from an array.
 *
 * @param arr - Array.
 * @returns Random element.
 */
export function random<T>(arr: readonly T[]): T {
  return get(arr, _.random(0, arr.length - 1));
}

/**
 * Removes elements matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array with matching elements removed.
 */
export function removeBy<T extends object, V extends object>(
  arr: readonly T[],
  value: V,
  keyOrReduce: KeyOrReduce<T | V>
): readonly T[] {
  const reduce = mixedToReduce(keyOrReduce);

  const reduced = reduce(value);

  return arr.filter(element => reduce(element) !== reduced);
}

/**
 * Replaces element at given index.
 *
 * @param arr - Array.
 * @param index - Index.
 * @param value - Value.
 * @returns New array with one element replaced.
 */
export function replace<T>(
  arr: readonly T[],
  index: number,
  value: T
): readonly T[] {
  assert.toBeTrue(
    Object.prototype.hasOwnProperty.call(arr, index),
    "Invalid index"
  );

  return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
}

/**
 * Replaces elements matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array with matching elements replaced.
 */
export function replaceBy<T extends object>(
  arr: readonly T[],
  value: T,
  keyOrReduce: KeyOrReduce<T>
): readonly T[] {
  const reduce = mixedToReduce(keyOrReduce);

  const reduced = reduce(value);

  return arr.map(element => (reduce(element) === reduced ? value : element));
}

/**
 * Reverses array.
 *
 * @param arr - Array.
 * @returns New array.
 */
export function reverse<T>(arr: readonly T[]): readonly T[] {
  const result = clone(arr);

  // eslint-disable-next-line misc/typescript-misc/functions/array/prefer-reverse -- Ok
  result.reverse();

  return result;
}

/**
 * Returns the second element from an array.
 *
 * @param arr - Array.
 * @returns The second element if available.
 * @throws Error otherwise.
 */
export function second<T>(arr: readonly T[]): T {
  return get(arr, 1);
}

/**
 * Sorts array.
 *
 * @param arr - Array.
 * @param compareFn - Comparison function.
 * @returns New array.
 */
export function sort<T>(
  arr: readonly T[],
  compareFn?: (x: T, y: T) => number
): readonly T[] {
  const result = clone(arr);

  // eslint-disable-next-line misc/typescript-misc/functions/array/prefer-sort -- Ok
  result.sort(compareFn);

  return result;
}

/**
 * Returns the third element from an array.
 *
 * @param arr - Array.
 * @returns The third element if available.
 * @throws Error otherwise.
 */
export function third<T>(arr: readonly T[]): T {
  return get(arr, 2);
}

/**
 * Adds/removes value to/from an array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
export function toggleBy<T extends object>(
  arr: readonly T[],
  value: T,
  keyOrReduce: KeyOrReduce<T>
): readonly T[] {
  return includesBy(arr, value, keyOrReduce)
    ? removeBy(arr, value, keyOrReduce)
    : push(arr, value);
}

/**
 * Truncates array.
 *
 * @param mutableArray - Array.
 */
export function truncate(mutableArray: Writable<unknowns>): void {
  // eslint-disable-next-line misc/typescript-misc/functions/array/prefer-truncate -- Ok
  mutableArray.length = 0;
}

/**
 * Creates unique array.
 *
 * @param arr - Array.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns Unique array.
 */
export function uniqueBy<T extends object>(
  arr: readonly T[],
  keyOrReduce: KeyOrReduce<T>
): readonly T[] {
  const reduce = mixedToReduce(keyOrReduce);

  // eslint-disable-next-line misc/typescript-misc/functions/prefer-readonly-set -- Ok
  const seen = new Set();

  return arr.filter(element => {
    const reduced = reduce(element);

    if (seen.has(reduced)) return false;

    seen.add(reduced);

    return true;
  });
}

/**
 * Adds element to the beginning of an array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export function unshift<T>(arr: readonly T[], value: T): readonly T[] {
  return [value, ...arr];
}

/**
 * Replaces elements matching value if found, unshifts value otherwise.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
export function unshiftOrReplaceBy<T extends object>(
  arr: readonly T[],
  value: T,
  keyOrReduce: KeyOrReduce<T>
): readonly T[] {
  return includesBy(arr, value, keyOrReduce)
    ? replaceBy(arr, value, keyOrReduce)
    : unshift(arr, value);
}

/**
 * Adds element to the beginning of an array if it does already not exist.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export function unshiftUnique<T>(arr: readonly T[], value: T): readonly T[] {
  return unshift(
    omit(arr, candidate => candidate === value),
    value
  );
}

/**
 * @internal
 */
export type Arrays<T> = ReadonlyArray<readonly T[]>;

// eslint-disable-next-line misc/typescript/consistent-array-type-name -- Ok
export type ChainResult<T> = ReadonlyArray<readonly [T, T]>;

/**
 * @internal
 */
export type Chunks<T> = ReadonlyArray<readonly T[]>;

export type KeyOrReduce<T extends object> = PropertyKey | Reduce<T>;

export type Mixed<T> = T | readonly T[];

export interface Predicate<T> {
  /**
   * Checks object entry.
   *
   * @param value - Value.
   * @param index - Index.
   * @param arr - Array.
   * @returns _True_ if object entry passes check, _false_ otherwise.
   */
  (value: T, index: number, arr: readonly T[]): boolean;
}

export type PrefixKeys<T, P extends string> = {
  [K in string & keyof T as `${P}${K}`]: T[K];
};

export interface Reduce<T extends object> {
  /**
   * Reduces object.
   *
   * @param obj - Object.
   * @returns Reduced value.
   */
  (obj: T): unknown;
}

/**
 * Creates reduce function.
 *
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns Reduce function.
 */
function mixedToReduce<T extends object, V extends object = T>(
  keyOrReduce: KeyOrReduce<T | V>
): Reduce<T | V> {
  return is.propertyKey(keyOrReduce)
    ? (obj): unknown => indexed(obj)[keyOrReduce]
    : keyOrReduce;
}
