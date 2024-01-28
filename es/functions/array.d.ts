import type { Writable, numbers, strings, unknowns } from "../types";
/**
 * Creates array of pairs ([x, y, z] =\> [[x, y], [y, z]]).
 *
 * @param arr - Array.
 * @returns Array of pairs.
 */
export declare function chain<T>(arr: readonly T[]): ChainResult<T>;
/**
 * Creates an array of chunks.
 *
 * @param arr - Array.
 * @param size - Chunk size.
 * @returns Array of chunks.
 */
export declare function chunk<T>(arr: readonly T[], size?: number): Chunks<T>;
/**
 * Clones array.
 *
 * @param arr - Array.
 * @returns New array.
 */
export declare function clone<A>(arr: readonly [A]): [A];
/**
 * Clones array.
 *
 * @param arr - Array.
 * @returns New array.
 */
export declare function clone<A, B>(arr: readonly [A, B]): [A, B];
/**
 * Clones array.
 *
 * @param arr - Array.
 * @returns New array.
 */
export declare function clone<A, B, C>(arr: readonly [A, B, C]): [A, B, C];
/**
 * Clones array.
 *
 * @param arr - Array.
 * @returns New array.
 */
export declare function clone<A, B, C, D>(arr: readonly [A, B, C, D]): [A, B, C, D];
/**
 * Clones array.
 *
 * @param arr - Array.
 * @returns New array.
 */
export declare function clone<T>(arr: readonly T[]): T[];
/**
 * Removes element at given index.
 *
 * @param arr - Array.
 * @param index - Index to be removed.
 * @returns New array with one element removed.
 */
export declare function drop<T>(arr: readonly T[], index: number): readonly T[];
/**
 * Finds element matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns The first element matching value if available, _undefined_ otherwise.
 */
export declare function findBy<T extends object, V extends object>(arr: readonly T[], value: V, keyOrReduce: KeyOrReduce<T | V>): T | undefined;
/**
 * Finds last index.
 *
 * @param arr - Array.
 * @param predicate - Predicate.
 * @returns Last matching index.
 */
export declare function findLastIndex<T>(arr: readonly T[], predicate: Predicate<T>): number;
/**
 * Returns the first element from an array.
 *
 * @param arr - Array.
 * @returns The first element if available.
 * @throws Error otherwise.
 */
export declare function first<T>(arr: readonly T[]): T;
/**
 * Creates array from iterable.
 *
 * @param iterable - Iterable.
 * @returns Array.
 */
export declare function fromIterable<T>(iterable: Iterable<T>): readonly T[];
/**
 * Creates array from mixed source.
 *
 * @param value - Value.
 * @returns Value if it is an array, tuple containing value otherwise.
 */
export declare function fromMixed<T>(value: Mixed<T>): readonly T[];
/**
 * Creates array of numbers.
 *
 * @param from - Lower limit (inclusive).
 * @param to - Upper limit (inclusive).
 * @param step - Step.
 * @returns Array of numbers.
 */
export declare function fromRange(from: number, to: number, step?: number): numbers;
/**
 * Creates array from string.
 *
 * @param str - String.
 * @returns Array.
 */
export declare function fromString(str: string): strings;
/**
 * Returns element at given index.
 *
 * @param arr - Array.
 * @param index - Index.
 * @returns Element if available.
 * @throws Error otherwise.
 */
export declare function get<T>(arr: readonly T[], index: number): T;
/**
 * Checks if array contains element matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns _True_ if array contains element matching value, _false_ otherwise.
 */
export declare function includesBy<T extends object, V extends object>(arr: readonly T[], value: V, keyOrReduce: KeyOrReduce<T | V>): boolean;
/**
 * Creates an array of shared values.
 *
 * @param arrays - Arrays.
 * @returns Array of shared values.
 */
export declare function intersection<T>(...arrays: Arrays<T>): readonly T[];
/**
 * Returns the last element from an array.
 *
 * @param arr - Array.
 * @returns The last element if available.
 * @throws Error otherwise.
 */
export declare function last<T>(arr: readonly T[]): T;
/**
 * Omit object entries by predicate.
 *
 * @param arr - Array.
 * @param predicate - Predicate.
 * @returns New object.
 */
export declare function omit<T>(arr: readonly T[], predicate: Predicate<T>): readonly T[];
/**
 * Adds element to the end of an array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export declare function push<T>(arr: readonly T[], value: T): readonly T[];
/**
 * Replaces elements matching value if found, pushes value otherwise.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
export declare function pushOrReplaceBy<T extends object>(arr: readonly T[], value: T, keyOrReduce: KeyOrReduce<T>): readonly T[];
/**
 * Adds element to the end of an array if it does already not exist.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export declare function pushUnique<T>(arr: readonly T[], value: T): readonly T[];
/**
 * Picks random element from an array.
 *
 * @param arr - Array.
 * @returns Random element.
 */
export declare function random<T>(arr: readonly T[]): T;
/**
 * Removes elements matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array with matching elements removed.
 */
export declare function removeBy<T extends object, V extends object>(arr: readonly T[], value: V, keyOrReduce: KeyOrReduce<T | V>): readonly T[];
/**
 * Replaces element at given index.
 *
 * @param arr - Array.
 * @param index - Index.
 * @param value - Value.
 * @returns New array with one element replaced.
 */
export declare function replace<T>(arr: readonly T[], index: number, value: T): readonly T[];
/**
 * Replaces elements matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array with matching elements replaced.
 */
export declare function replaceBy<T extends object>(arr: readonly T[], value: T, keyOrReduce: KeyOrReduce<T>): readonly T[];
/**
 * Reverses array.
 *
 * @param arr - Array.
 * @returns New array.
 */
export declare function reverse<T>(arr: readonly T[]): readonly T[];
/**
 * Returns the second element from an array.
 *
 * @param arr - Array.
 * @returns The second element if available.
 * @throws Error otherwise.
 */
export declare function second<T>(arr: readonly T[]): T;
/**
 * Sorts array.
 *
 * @param arr - Array.
 * @param compareFn - Comparison function.
 * @returns New array.
 */
export declare function sort<T>(arr: readonly T[], compareFn?: (x: T, y: T) => number): readonly T[];
/**
 * Returns the third element from an array.
 *
 * @param arr - Array.
 * @returns The third element if available.
 * @throws Error otherwise.
 */
export declare function third<T>(arr: readonly T[]): T;
/**
 * Adds/removes value to/from an array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
export declare function toggleBy<T extends object>(arr: readonly T[], value: T, keyOrReduce: KeyOrReduce<T>): readonly T[];
/**
 * Truncates array.
 *
 * @param mutableArray - Array.
 */
export declare function truncate(mutableArray: Writable<unknowns>): void;
/**
 * Creates unique array.
 *
 * @param arr - Array.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns Unique array.
 */
export declare function uniqueBy<T extends object>(arr: readonly T[], keyOrReduce: KeyOrReduce<T>): readonly T[];
/**
 * Adds element to the beginning of an array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export declare function unshift<T>(arr: readonly T[], value: T): readonly T[];
/**
 * Replaces elements matching value if found, unshifts value otherwise.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
export declare function unshiftOrReplaceBy<T extends object>(arr: readonly T[], value: T, keyOrReduce: KeyOrReduce<T>): readonly T[];
/**
 * Adds element to the beginning of an array if it does already not exist.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export declare function unshiftUnique<T>(arr: readonly T[], value: T): readonly T[];
/**
 * @internal
 */
export type Arrays<T> = ReadonlyArray<readonly T[]>;
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
//# sourceMappingURL=array.d.ts.map