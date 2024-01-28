"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfreeze = exports.typedef = exports.overload = exports.indexed = exports.freeze = exports.evaluate = exports.defineFn = exports.ReadonlySet = exports.ReadonlyMap = void 0;
exports.ReadonlyMap = Map;
exports.ReadonlySet = Set;
/**
 * Defines function with properties.
 *
 * @param fn - Function.
 * @param props - Properties.
 * @returns Function with properties.
 */
exports.defineFn = Object.assign;
function evaluate(mixed) {
    return typeof mixed === "function" ? mixed() : mixed;
}
exports.evaluate = evaluate;
/**
 * Marks value as readonly.
 *
 * @param value - Value.
 * @returns Value.
 */
function freeze(value) {
    return value;
}
exports.freeze = freeze;
/**
 * Marks value as indexed.
 *
 * @param value - Value.
 * @returns Value.
 */
function indexed(value) {
    return value;
}
exports.indexed = indexed;
/**
 * Defines function with overloads.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
function overload(callback) {
    return callback();
}
exports.overload = overload;
/**
 * Defines value type.
 *
 * @param value - Value.
 * @returns Value.
 */
function typedef(value) {
    return value;
}
exports.typedef = typedef;
/**
 * Marks value as writable.
 *
 * @param value - Value.
 * @returns Value.
 */
function unfreeze(value) {
    return value;
}
exports.unfreeze = unfreeze;
//# sourceMappingURL=core.js.map