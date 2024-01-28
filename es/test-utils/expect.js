import { assert, fn } from "..";
import { printDiffOrStringify, stringify } from "jest-matcher-utils";
import { DateTime } from "../facade-implementations/datetime/date-fns-wrapper/DateTime";
export const datetimeToBe = (got, expected) => {
    assert.instanceOf(got, DateTime, "Expecting DateTime instance");
    const gotTime = got.toTime();
    const expectedTime = new Date(expected).getTime();
    return buildEqualsResult(gotTime === expectedTime, "Unexpected date", got.toString(), expected.toString());
};
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
export function buildEqualsResult(pass, message, got, expected, immediate = false) {
    return {
        message: immediate ? fn.valueToGenerator(factory()) : factory,
        pass
    };
    function factory() {
        const info = pass
            ? stringify(expected)
            : printDiffOrStringify(got, expected, "Got", "Expected", true);
        return `${message}:\n${info}`;
    }
}
/**
 * Builds matcher result.
 *
 * @param pass - Pass.
 * @param expectSuccess - Expect success message.
 * @param expectFailure - Expect failure message.
 * @returns Matcher result.
 */
export function buildResult(pass, expectSuccess, expectFailure) {
    return { message: () => (pass ? expectFailure : expectSuccess), pass };
}
//# sourceMappingURL=expect.js.map