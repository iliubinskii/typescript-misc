"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.delete = void 0;
/**
 * Adds value.
 *
 * @param set - Set.
 * @param value - Value.
 * @returns Set with value added.
 */
function add(set, value) {
    // eslint-disable-next-line misc/ts-misc/functions/prefer-readonly-set -- Ok
    const result = new Set(set);
    result.add(value);
    return result;
}
exports.add = add;
/**
 * Removes value.
 *
 * @param set - Set.
 * @param value - Value.
 * @returns Set with value removed.
 */
function _delete(set, value) {
    // eslint-disable-next-line misc/ts-misc/functions/prefer-readonly-set -- Ok
    const result = new Set(set);
    result.delete(value);
    return result;
}
exports.delete = _delete;
//# sourceMappingURL=set.js.map