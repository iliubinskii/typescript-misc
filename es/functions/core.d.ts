import type { IndexedObject, Writable, types } from "../types";
export declare const ReadonlyMap: {
    new <K, V>(entries?: ReadonlyArray<readonly [K, V]>): ReadonlyMap<K, V>;
};
export declare const ReadonlySet: {
    new <T>(values?: readonly T[]): ReadonlySet<T>;
};
/**
 * Defines function with properties.
 * @param fn - Function.
 * @param props - Properties.
 * @returns Function with properties.
 */
export declare const defineFn: <F, P>(fn: F, props: P) => F & Readonly<P>;
/**
 * Executes callback.
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export declare function evaluate<T>(callback: types.fn.Sync<T>): T;
/**
 * Executes promise or async function.
 * @param mixed - Promise or async function.
 * @returns The result of callback execution.
 */
export declare function evaluate<T>(mixed: types.fn.AsyncPromise<T>): Promise<T>;
/**
 * Marks value as readonly.
 * @param value - Value.
 * @returns Value.
 */
export declare function freeze<T>(value: T): Readonly<T>;
/**
 * Marks value as indexed.
 * @param value - Value.
 * @returns Value.
 */
export declare function indexed(value: object): IndexedObject;
/**
 * Defines function with overloads.
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export declare function overload<T>(callback: () => T): T;
/**
 * Defines value type.
 * @param value - Value.
 * @returns Value.
 */
export declare function typedef<T>(value: T): T;
/**
 * Marks value as writable.
 * @param value - Value.
 * @returns Value.
 */
export declare function unfreeze<T>(value: T): Writable<T>;
//# sourceMappingURL=core.d.ts.map