import { assert, is } from "../functions";
import { DateTime
// eslint-disable-next-line misc/no-relative-parent-import -- Ok
 } from "../facade-implementations/datetime/date-fns-wrapper/DateTime";
import { buildEqualsResult } from "./expect";
import { equals } from "@jest/expect-utils";
// eslint-disable-next-line no-console -- Ok
export const error = console.error;
// eslint-disable-next-line no-console -- Ok
export const warn = console.warn;
export const matchers = {
    datetimeToBe: (got, expected) => {
        assert.instanceOf(got, DateTime, "Expecting DateTime instance");
        const gotTime = got.toTime();
        const expectedTime = new Date(expected).getTime();
        return buildEqualsResult(gotTime === expectedTime, "Unexpected date", got.toString(), expected.toString());
    },
    executionResultToBe: (got, expected, expectedToThrow = false) => {
        assert.callable(got, "Expecting function");
        try {
            const result = got();
            assert.toBeFalse(expectedToThrow, "Expecting function not to throw");
            return buildEqualsResult(equals(result, expected), "Unexpected function execution result", result, expected);
        }
        catch (e) {
            assert.toBeTrue(expectedToThrow, "Expecting function to throw");
            return buildEqualsResult(equals(e, expected), "Unexpected function execution result", e, expected);
        }
    },
    executionTimeToBe: async (got, expected, precision = 10) => {
        assert.callable(got, "Expecting async function");
        const t1 = Date.now();
        await got();
        const t2 = Date.now();
        const gotTime = t2 - t1;
        return buildEqualsResult(Math.abs(gotTime - expected) <= precision, "Unexpected execution time", gotTime, expected);
    },
    mockCallsToBe: (got, ...expected) => {
        assert.byGuard(got, isMock, "Expecting mock function");
        const result = buildEqualsResult(equals(got.mock.calls, expected), "Unexpected mock calls", got.mock.calls, expected, true);
        got.mockClear();
        return result;
    },
    promiseResultToBe: async (got, expected, expectedToThrow = false) => {
        assert.instanceOf(got, Promise, "Expecting promise");
        try {
            const result = await got;
            assert.toBeFalse(expectedToThrow, "Expecting promise not to throw");
            return buildEqualsResult(equals(result, expected), "Unexpected promise execution result", result, expected);
        }
        catch (e) {
            assert.toBeTrue(expectedToThrow, "Expecting promise to throw");
            return buildEqualsResult(equals(e, expected), "Unexpected promise execution result", e, expected);
        }
    },
    toBeSameAs: (got, expected) => {
        assert.object(got, "Expecting object");
        return buildEqualsResult(got === expected, "Object are not identical", got, expected);
    }
};
/**
 * Checks that value type is Mock.
 *
 * @param value - Value.
 * @returns _True_ if value type is Mock, _false_ otherwise.
 */
function isMock(value) {
    return is.callable(value);
}
//# sourceMappingURL=jest.internal.js.map