"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueToGenerator = exports.valueFromGenerator = exports.pipe = exports.noopTrue = exports.noopFalse = exports.identity = exports.never = exports.noop = void 0;
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
 *
 * @param value - Value.
 * @returns Value.
 */
function identity(value) {
    return value;
}
exports.identity = identity;
/**
 * Noop function.
 *
 * @param _args - Arguments.
 * @returns _False_.
 */
function noopFalse(..._args) {
    return false;
}
exports.noopFalse = noopFalse;
/**
 * Noop function.
 *
 * @param _args - Arguments.
 * @returns _True_.
 */
function noopTrue(..._args) {
    return true;
}
exports.noopTrue = noopTrue;
function pipe(value, ...callbacks) {
    let result = value;
    for (const callback of callbacks)
        result = callback(result);
    return result;
}
exports.pipe = pipe;
/**
 * Gets value from generator.
 *
 * @param mixed - Value or generator.
 * @returns Factory function.
 */
function valueFromGenerator(mixed) {
    return is.callable(mixed) ? mixed() : mixed;
}
exports.valueFromGenerator = valueFromGenerator;
/**
 * Creates generator from value.
 *
 * @param value - Value.
 * @returns Generator.
 */
function valueToGenerator(value) {
    return () => value;
}
exports.valueToGenerator = valueToGenerator;
//# sourceMappingURL=function.js.map