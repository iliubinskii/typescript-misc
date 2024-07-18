import type { Writable } from "../types";
import { dictionary } from "../facade-implementations";
import type { Calls } from "./jest.internal";
declare global {
    namespace jest {
        interface Matchers<R> {
            /**
             * Checks that datetime equals expected value.
             * @param expected - Expected value.
             * @returns Result object.
             */
            readonly datetimeToBe: (expected: string) => R;
            /**
             * Checks function execution result.
             * @param expected - Function execution result.
             * @param expectedToThrow - Whether function is expected to throw error.
             * @returns Result.
             */
            readonly executionResultToBe: (expected: unknown, expectedToThrow?: boolean) => R;
            /**
             * Checks that async function executes within expected time.
             * @param expected - Expected time (ms).
             * @param precision - Precision (ms).
             * @returns Result.
             */
            readonly executionTimeToBe: (expected: number, precision?: number) => Promise<R>;
            /**
             * Checks that mock calls are equal to expected value.
             * @param expected - Expected calls.
             * @returns Result.
             */
            readonly mockCallsToBe: (...expected: Writable<Calls>) => R;
            /**
             * Checks promise execution result.
             * @param expected - Promise execution result.
             * @param expectedToThrow - Whether promise is expected to throw error.
             * @returns Result.
             */
            readonly promiseResultToBe: (expected: unknown, expectedToThrow?: boolean) => Promise<R>;
            /**
             * Checks that two objects are identical.
             * @param expected - Object.
             * @returns Result.
             */
            readonly toBeSameAs: (expected: object) => R;
        }
    }
}
export declare const jestReset: (() => void) & Readonly<{
    /**
     * Jest reset.
     * @param definitions - Language definitions.
     */
    dictionary: (definitions: dictionary.Definitions) => void;
}>;
export declare const jestSetup: (() => void) & Readonly<{
    /**
     * Jest setup.
     * @param definitions - Language definitions.
     */
    dictionary: (definitions: dictionary.Definitions) => void;
}>;
//# sourceMappingURL=jest.d.ts.map