import type { Extends } from "ts-toolbelt/out/Any/Extends";
import type { If } from "ts-toolbelt/out/Any/If";
/**
 * Builds matcher result.
 *
 * @param pass - Pass.
 * @param message - Message.
 * @param got - Got.
 * @param expected - Expected.
 * @param immediate - Immediate.
 * @returns Matcher result.
 */
export declare function buildEqualsResult(pass: boolean, message: string, got: unknown, expected: unknown, immediate?: boolean): ExpectResult;
/**
 * Builds matcher result.
 *
 * @param pass - Pass.
 * @param expectSuccess - Expect success message.
 * @param expectFailure - Expect failure message.
 * @returns Matcher result.
 */
export declare function buildResult(pass: boolean, expectSuccess: string, expectFailure: string): ExpectResult;
export interface ExpectFromMatcher<K extends keyof Matchers> {
    /**
     * Expect function.
     *
     * @param got - Got.
     * @param args - Arguments.
     * @returns Result.
     */
    (got: unknown, ...args: Parameters<Matchers[K]>): If<Extends<ReturnType<Matchers[K]>, Promise<unknown>>, Promise<ExpectResult>, ExpectResult>;
}
export interface ExpectResult {
    /**
     * Returns failure message.
     *
     * @returns Failure message.
     */
    readonly message: () => string;
    readonly pass: boolean;
}
export type Matchers = Readonly<jest.Matchers<unknown, unknown>>;
//# sourceMappingURL=expect.d.ts.map