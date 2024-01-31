"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchers = exports.warn = exports.error = void 0;
const functions_1 = require("../functions");
const DateTime_1 = require("../facade-implementations/datetime/date-fns-wrapper/DateTime");
const expect_1 = require("./expect");
const expect_utils_1 = require("@jest/expect-utils");
// eslint-disable-next-line no-console -- Ok
exports.error = console.error;
// eslint-disable-next-line no-console -- Ok
exports.warn = console.warn;
exports.matchers = {
    datetimeToBe: (got, expected) => {
        functions_1.assert.instanceOf(got, DateTime_1.DateTime, "Expecting DateTime instance");
        const gotTime = got.toTime();
        const expectedTime = new Date(expected).getTime();
        return (0, expect_1.buildEqualsResult)(gotTime === expectedTime, "Unexpected date", got.toString(), expected.toString());
    },
    executionResultToBe: (got, expected, expectedToThrow = false) => {
        functions_1.assert.callable(got, "Expecting function");
        try {
            const result = got();
            functions_1.assert.toBeFalse(expectedToThrow, "Expecting function not to throw");
            return (0, expect_1.buildEqualsResult)((0, expect_utils_1.equals)(result, expected), "Unexpected function execution result", result, expected);
        }
        catch (e) {
            functions_1.assert.toBeTrue(expectedToThrow, "Expecting function to throw");
            return (0, expect_1.buildEqualsResult)((0, expect_utils_1.equals)(e, expected), "Unexpected function execution result", e, expected);
        }
    },
    executionTimeToBe: async (got, expected, precision = 10) => {
        functions_1.assert.callable(got, "Expecting async function");
        const t1 = Date.now();
        await got();
        const t2 = Date.now();
        const gotTime = t2 - t1;
        return (0, expect_1.buildEqualsResult)(Math.abs(gotTime - expected) <= precision, "Unexpected execution time", gotTime, expected);
    },
    mockCallsToBe: (got, ...expected) => {
        functions_1.assert.byGuard(got, isMock, "Expecting mock function");
        const result = (0, expect_1.buildEqualsResult)((0, expect_utils_1.equals)(got.mock.calls, expected), "Unexpected mock calls", got.mock.calls, expected, true);
        got.mockClear();
        return result;
    },
    promiseResultToBe: async (got, expected, expectedToThrow = false) => {
        functions_1.assert.instanceOf(got, Promise, "Expecting promise");
        try {
            const result = await got;
            functions_1.assert.toBeFalse(expectedToThrow, "Expecting promise not to throw");
            return (0, expect_1.buildEqualsResult)((0, expect_utils_1.equals)(result, expected), "Unexpected promise execution result", result, expected);
        }
        catch (e) {
            functions_1.assert.toBeTrue(expectedToThrow, "Expecting promise to throw");
            return (0, expect_1.buildEqualsResult)((0, expect_utils_1.equals)(e, expected), "Unexpected promise execution result", e, expected);
        }
    },
    toBeSameAs: (got, expected) => {
        functions_1.assert.object(got, "Expecting object");
        return (0, expect_1.buildEqualsResult)(got === expected, "Object are not identical", got, expected);
    }
};
/**
 * Checks that value type is Mock.
 *
 * @param value - Value.
 * @returns _True_ if value type is Mock, _false_ otherwise.
 */
function isMock(value) {
    return functions_1.is.callable(value);
}
//# sourceMappingURL=jest.internal.js.map