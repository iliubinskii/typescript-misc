import type { types, unknowns } from "../types";
import type { ExpectFromMatcher } from "./expect";
export declare const error: types.fn.Callable<void>;
export declare const warn: types.fn.Callable<void>;
export declare const matchers: {
    readonly datetimeToBe: ExpectFromMatcher<"datetimeToBe">;
    readonly executionResultToBe: ExpectFromMatcher<"executionResultToBe">;
    readonly executionTimeToBe: ExpectFromMatcher<"executionTimeToBe">;
    readonly mockCallsToBe: ExpectFromMatcher<"mockCallsToBe">;
    readonly promiseResultToBe: ExpectFromMatcher<"promiseResultToBe">;
    readonly toBeSameAs: ExpectFromMatcher<"toBeSameAs">;
};
export type Calls = readonly unknowns[];
export interface ExecutionResult {
    readonly failure?: unknown;
    readonly success?: unknown;
}
//# sourceMappingURL=jest.internal.d.ts.map