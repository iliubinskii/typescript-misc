"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineFn = exports.ReadonlySet = exports.ReadonlyMap = void 0;
exports.evaluate = evaluate;
exports.freeze = freeze;
exports.indexed = indexed;
exports.overload = overload;
exports.typedef = typedef;
exports.unfreeze = unfreeze;
exports.ReadonlyMap = Map;
exports.ReadonlySet = Set;
/**
 * Defines function with properties.
 * @param fn - Function.
 * @param props - Properties.
 * @returns Function with properties.
 */
exports.defineFn = Object.assign;
/**
 * Executes promise or async function.
 * @param mixed - Promise or async function.
 * @returns The result of callback execution.
 */
function evaluate(mixed) {
    return typeof mixed === "function" ? mixed() : mixed;
}
/**
 * Marks value as readonly.
 * @param value - Value.
 * @returns Value.
 */
function freeze(value) {
    return value;
}
/**
 * Marks value as indexed.
 * @param value - Value.
 * @returns Value.
 */
function indexed(value) {
    return value;
}
/**
 * Defines function with overloads.
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
function overload(callback) {
    return callback();
}
/**
 * Defines value type.
 * @param value - Value.
 * @returns Value.
 */
function typedef(value) {
    return value;
}
/**
 * Marks value as writable.
 * @param value - Value.
 * @returns Value.
 */
function unfreeze(value) {
    return value;
}
//# sourceMappingURL=core.js.map