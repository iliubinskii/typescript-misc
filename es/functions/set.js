export { _delete as delete };
/**
 * Adds value.
 * @param set - Set.
 * @param value - Value.
 * @returns Set with value added.
 */
export function add(set, value) {
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