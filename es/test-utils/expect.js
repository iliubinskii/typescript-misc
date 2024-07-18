import { printDiffOrStringify, stringify } from "jest-matcher-utils";
import { fn } from "../functions";
/**
 * Builds matcher result.
 * @param pass - Pass.
 * @param message - Message.
 * @param got - Got.
 * @param expected - Expected.
 * @param immediate - Immediate.
 * @returns Matcher result.
 */
export function buildEqualsResult(pass, message, got, expected, immediate = false) {
    return {
        message: immediate ? fn.valueToGenerator(factory()) : factory,
        pass
    };
    /**
     * Builds failure message.
     * @returns Failure message.
     */
    function factory() {
        const info = pass
            ? stringify(expected)
            : printDiffOrStringify(got, expected, "Got", "Expected", true);
        return `${message}:\n${info}`;
    }
}
/**
 * Builds matcher result.
 * @param pass - Pass.
 * @param expectSuccess - Expect success message.
 * @param expectFailure - Expect failure message.
 * @returns Matcher result.
 */
export function buildResult(pass, expectSuccess, expectFailure) {
    return { message: () => (pass ? expectFailure : expectSuccess), pass };
}
//# sourceMappingURL=expect.js.map