"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildResult = exports.buildEqualsResult = exports.datetimeToBe = void 0;
const __1 = require("..");
const jest_matcher_utils_1 = require("jest-matcher-utils");
const DateTime_1 = require("../facade-implementations/datetime/date-fns-wrapper/DateTime");
const datetimeToBe = (got, expected) => {
    __1.assert.instanceOf(got, DateTime_1.DateTime, "Expecting DateTime instance");
    const gotTime = got.toTime();
    const expectedTime = new Date(expected).getTime();
    return buildEqualsResult(gotTime === expectedTime, "Unexpected date", got.toString(), expected.toString());
};
exports.datetimeToBe = datetimeToBe;
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
function buildEqualsResult(pass, message, got, expected, immediate = false) {
    return {
        message: immediate ? __1.fn.valueToGenerator(factory()) : factory,
        pass
    };
    function factory() {
        const info = pass
            ? (0, jest_matcher_utils_1.stringify)(expected)
            : (0, jest_matcher_utils_1.printDiffOrStringify)(got, expected, "Got", "Expected", true);
        return `${message}:\n${info}`;
    }
}
exports.buildEqualsResult = buildEqualsResult;
/**
 * Builds matcher result.
 *
 * @param pass - Pass.
 * @param expectSuccess - Expect success message.
 * @param expectFailure - Expect failure message.
 * @returns Matcher result.
 */
function buildResult(pass, expectSuccess, expectFailure) {
    return { message: () => (pass ? expectFailure : expectSuccess), pass };
}
exports.buildResult = buildResult;
//# sourceMappingURL=expect.js.map