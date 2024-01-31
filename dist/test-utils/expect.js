"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildResult = exports.buildEqualsResult = void 0;
const jest_matcher_utils_1 = require("jest-matcher-utils");
const functions_1 = require("../functions");
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
        message: immediate ? functions_1.fn.valueToGenerator(factory()) : factory,
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