import type { IndexedObject, Writable, types } from "../types";

export const ReadonlyMap: {
  new <K, V>(entries?: ReadonlyArray<readonly [K, V]>): ReadonlyMap<K, V>;
} = Map;

export const ReadonlySet: {
  new <T>(values?: readonly T[]): ReadonlySet<T>;
} = Set;

/**
 * Defines function with properties.
 * @param fn - Function.
 * @param props - Properties.
 * @returns Function with properties.
 */
export const defineFn: <F, P>(fn: F, props: P) => F & Readonly<P> =
  Object.assign;

/**
 * Executes callback.
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export function evaluate<T>(callback: types.fn.Sync<T>): T;

/**
 * Executes promise or async function.
 * @param mixed - Promise or async function.
 * @returns The result of callback execution.
 */
export async function evaluate<T>(mixed: types.fn.AsyncPromise<T>): Promise<T>;

/**
 * Executes promise or async function.
 * @param mixed - Promise or async function.
 * @returns The result of callback execution.
 */
export function evaluate<T>(
  mixed: types.fn.AsyncPromiseSync<T>
): Promise<T> | T {
  return typeof mixed === "function" ? mixed() : mixed;
}

/**
 * Marks value as readonly.
 * @param value - Value.
 * @returns Value.
 */
export function freeze<T>(value: T): Readonly<T> {
  return value;
}

/**
 * Marks value as indexed.
 * @param value - Value.
 * @returns Value.
 */
export function indexed(value: object): IndexedObject {
  return value as IndexedObject;
}

/**
 * Defines function with overloads.
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export function overload<T>(callback: () => T): T {
  return callback();
}

/**
 * Defines value type.
 * @param value - Value.
 * @returns Value.
 */
export function typedef<T>(value: T): T {
  return value;
}

/**
 * Marks value as writable.
 * @param value - Value.
 * @returns Value.
 */
export function unfreeze<T>(value: T): Writable<T> {
  return value;
}
