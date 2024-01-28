"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.rootMeanSquareDeviation = exports.limit = exports.average = exports.round = exports.floor = exports.ceil = void 0;
const tslib_1 = require("tslib");
const assert = tslib_1.__importStar(require("./assertions"));
const core_1 = require("./core");
exports.ceil = (0, core_1.defineFn)(
/**
 * Ceils number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Ceiled value.
 */
(value, precision) => {
    const divider = 10 ** precision;
    return Math.ceil(value * divider) / divider;
}, {
    /**
     * Rounds number up to a given precision.
     *
     * @param value - Value.
     * @param step - Step.
     * @param from - From.
     * @returns Rounded value.
     */
    step: (value, step, from = 0) => Math.ceil((value - from) / step) * step + from
});
exports.floor = (0, core_1.defineFn)(
/**
 * Rounds number down to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Rounded value.
 */
(value, precision) => {
    const divider = 10 ** precision;
    return Math.floor(value * divider) / divider;
}, {
    /**
     * Floors number.
     *
     * @param value - Value.
     * @param step - Step.
     * @param from - From.
     * @returns Floored value.
     */
    step: (value, step, from = 0) => Math.floor((value - from) / step) * step + from
});
exports.round = (0, core_1.defineFn)(
/**
 * Rounds number to a given precision.
 *
 * @param value - Value.
 * @param precision - The number of digits to keep.
 * @returns Rounded value.
 */
(value, precision) => {
    const divider = 10 ** precision;
    return Math.round(value * divider) / divider;
}, {
    /**
     * Rounds number.
     *
     * @param value - Value.
     * @param step - Step.
     * @param from - From.
     * @returns Rounded value.
     */
    step: (value, step, from = 0) => Math.round((value - from) / step) * step + from
});
/**
 * Averages values.
 *
 * @param values - Values.
 * @returns The average.
 */
function average(...values) {
    assert.toBeTrue(values.length > 0, "Average is not defined for no args");
    return sum(...values) / values.length;
}
exports.average = average;
/**
 * Limits value to be within [min, max] range.
 *
 * @param value - Value.
 * @param min - Min.
 * @param max - Max.
 * @returns Limited value.
 */
function limit(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
exports.limit = limit;
/**
 * Calculates root-mean-square deviation.
 *
 * @param values - Values.
 * @returns Root-mean-square deviation.
 */
function rootMeanSquareDeviation(...values) {
    const averageValue = average(...values);
    return Math.sqrt(sum(...values.map(value => (value - averageValue) ** 2)) / values.length);
}
exports.rootMeanSquareDeviation = rootMeanSquareDeviation;
/**
 * Sums values.
 *
 * @param values - Values.
 * @returns The sum.
 */
function sum(...values) {
    return values.reduce((x, y) => x + y, 0);
}
exports.sum = sum;
//# sourceMappingURL=number.js.map