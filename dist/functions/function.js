"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.never = exports.noop = void 0;
exports.identity = identity;
exports.noopFalse = noopFalse;
exports.noopTrue = noopTrue;
exports.pipe = pipe;
exports.valueFromGenerator = valueFromGenerator;
exports.valueToGenerator = valueToGenerator;
const tslib_1 = require("tslib");
const _ = tslib_1.__importStar(require("lodash-commonjs-es"));
const is = tslib_1.__importStar(require("./guards"));
exports.noop = _.noop.bind(_);
const never = () => {
    throw new Error("This function should not be called");
};
exports.never = never;
/**
 * Identity function.
 * @param value - Value.
 * @returns Value.
 */
function identity(value) {
    return value;
}
/**
 * Noop function.
 * @param _args - Arguments.
 * @returns _False_.
 */
function noopFalse(
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Ok
..._args) {
    return false;
}
/**
 * Noop function.
 * @param _args - Arguments.
 * @returns _True_.
 */
function noopTrue(
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Ok
..._args) {
    return true;
}
/**
 * Applies callbacks to a value.
 * @param value - Value.
 * @param callbacks - Callbacks.
 * @returns The value returned by callback sequence.
 */
function pipe(value, ...callbacks) {
    let result = value;
    for (const callback of callbacks)
        result = callback(result);
    return result;
}
/**
 * Gets value from generator.
 * @param mixed - Value or generator.
 * @returns Factory function.
 */
function valueFromGenerator(mixed) {
    return is.callable(mixed) ? mixed() : mixed;
}
/**
 * Creates generator from value.
 * @param value - Value.
 * @returns Generator.
 */
function valueToGenerator(value) {
    return () => value;
}
//# sourceMappingURL=function.js.map