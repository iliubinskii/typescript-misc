import * as _ from "lodash-commonjs-es";
import * as is from "./guards";
export const noop = _.noop.bind(_);
export const never = () => {
    throw new Error("This function should not be called");
};
/**
 * Identity function.
 *
 * @param value - Value.
 * @returns Value.
 */
export function identity(value) {
    return value;
}
/**
 * Noop function.
 *
 * @param _args - Arguments.
 * @returns _False_.
 */
export function noopFalse(..._args) {
    return false;
}
/**
 * Noop function.
 *
 * @param _args - Arguments.
 * @returns _True_.
 */
export function noopTrue(..._args) {
    return true;
}
export function pipe(value, ...callbacks) {
    let result = value;
    for (const callback of callbacks)
        result = callback(result);
    return result;
}
/**
 * Gets value from generator.
 *
 * @param mixed - Value or generator.
 * @returns Factory function.
 */
export function valueFromGenerator(mixed) {
    return is.callable(mixed) ? mixed() : mixed;
}
/**
 * Creates generator from value.
 *
 * @param value - Value.
 * @returns Generator.
 */
export function valueToGenerator(value) {
    return () => value;
}
//# sourceMappingURL=function.js.map