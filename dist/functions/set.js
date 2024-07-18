"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete = _delete;
exports.add = add;
/**
 * Adds value.
 * @param set - Set.
 * @param value - Value.
 * @returns Set with value added.
 */
function add(set, value) {
    const result = new Set(set);
    result.add(value);
    return result;
}
/**
 * Removes value.
 * @param set - Set.
 * @param value - Value.
 * @returns Set with value removed.
 */
function _delete(set, value) {
    const result = new Set(set);
    result.delete(value);
    return result;
}
//# sourceMappingURL=set.js.map