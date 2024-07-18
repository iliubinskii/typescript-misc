import type { types, unknowns } from "../types";
export declare const noop: types.fn.Callable<void>;
export declare const never: types.fn.Callable;
/**
 * Identity function.
 * @param value - Value.
 * @returns Value.
 */
export declare function identity<T>(value: T): T;
/**
 * Noop function.
 * @param _args - Arguments.
 * @returns _False_.
 */
export declare function noopFalse(..._args: unknowns): false;
/**
 * Noop function.
 * @param _args - Arguments.
 * @returns _True_.
 */
export declare function noopTrue(..._args: unknowns): true;
/**
 * Applies callbacks to a value.
 * @param value - Value.
 * @param callback1 - Callback 1.
 * @param callback2 - Callback 2.
 * @returns The value returned by callback sequence.
 */
export declare function pipe<V, A, R>(value: V, callback1: PipeCallback<V, A>, callback2: PipeCallback<A, R>): R;
/**
 * Applies callbacks to a value.
 * @param value - Value.
 * @param callback1 - Callback 1.
 * @param callback2 - Callback 2.
 * @param callback3 - Callback 3.
 * @returns The value returned by callback sequence.
 */
export declare function pipe<V, A, B, R>(value: V, callback1: PipeCallback<V, A>, callback2: PipeCallback<A, B>, callback3: PipeCallback<B, R>): R;
/**
 * Gets value from generator.
 * @param mixed - Value or generator.
 * @returns Factory function.
 */
export declare function valueFromGenerator<T>(mixed: T | ValueGenerator<T>): T;
/**
 * Creates generator from value.
 * @param value - Value.
 * @returns Generator.
 */
export declare function valueToGenerator<T>(value: T): ValueGenerator<T>;
export interface PipeCallback<V = unknown, R = unknown> {
    /**
     * Pipe callback.
     * @param value - Value.
     * @returns Result.
     */
    (value: V): R;
}
export type PipeCallbacks = readonly PipeCallback[];
export interface ValueGenerator<T> {
    /**
     * Generates value.
     */
    (): T;
}
//# sourceMappingURL=function.d.ts.map