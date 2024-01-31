"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = exports.some = exports.size = exports.set = exports.prefixKeys = exports.omitKeys = exports.omit = exports.map = exports.hasOwnProp = exports.getPrototypeOf = exports.get = exports.filter = exports.every = exports.clone = exports.removeUndefinedKeys = exports.values = exports.keys = exports.fromEntries = exports.entries = exports.defineProperty = exports.assign = void 0;
const tslib_1 = require("tslib");
const a = tslib_1.__importStar(require("./array"));
const as = tslib_1.__importStar(require("./inline-assertions"));
const is = tslib_1.__importStar(require("./guards"));
const core_1 = require("./core");
/**
 * Typed version of Object.assign.
 *
 * @param target - Target.
 * @param sources - Sources.
 * @returns Target.
 */
exports.assign = Object.assign;
/**
 * Typed version of Object.defineProperty.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param descriptor - Descriptor.
 */
exports.defineProperty = Object.defineProperty.bind(Object);
exports.entries = Object.entries;
exports.fromEntries = (0, core_1.defineFn)(
/**
 * Creates object from entries.
 *
 * @param entries - Entries.
 * @returns Object.
 */
(
// eslint-disable-next-line misc/no-shadow -- Ok
entries) => {
    const result = {};
    for (const entry of entries)
        result[entry[0]] = entry[1];
    return result;
}, {
    /**
     * Creates object from entries.
     *
     * @param entries - Entries.
     * @returns Object.
     */
    exhaustive: (
    // eslint-disable-next-line misc/no-shadow -- Ok
    entries) => {
        const result = {};
        for (const entry of entries)
            result[entry[0]] = entry[1];
        return result;
    }
});
exports.keys = Object.keys;
exports.values = Object.values;
exports.removeUndefinedKeys = (0, core_1.defineFn)(
/**
 * Removes undefined keys.
 *
 * @param obj - Object.
 * @returns New object with undefined keys removed.
 */
(obj) => filter(obj, is.not.empty), {
    /**
     * Removes undefined keys.
     *
     * @param obj - Object.
     * @returns New object with undefined keys removed.
     */
    alt: (obj) => filter(obj, is.not.empty)
});
/**
 * Clones object.
 *
 * @param obj - Object.
 * @returns New object.
 */
function clone(obj) {
    // eslint-disable-next-line misc/typescript-misc/functions/object/prefer-clone -- Ok
    return { ...obj };
}
exports.clone = clone;
/**
 * Checks if every object property satisfies condition.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if every object property satisfies condition, _false_ otherwise.
 */
function every(obj, predicate) {
    return (0, exports.entries)(obj).every(([key, value]) => predicate(value, key));
}
exports.every = every;
/**
 * Picks object entries by predicate.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns New object.
 */
function filter(obj, predicate) {
    const result = {};
    for (const [key, value] of (0, exports.entries)(obj))
        if (predicate(value, key))
            set(result, key, value);
    return result;
}
exports.filter = filter;
function get(obj, key, guard = is.unknown, defVal) {
    return as.byGuard((0, core_1.indexed)(obj)[key] ?? defVal, guard);
}
exports.get = get;
/**
 * Returns object prototype.
 *
 * @param obj - Object.
 * @returns Object prototype if available, _undefined_ otherwise.
 */
function getPrototypeOf(obj) {
    // eslint-disable-next-line misc/typescript-misc/functions/object/prefer-getPrototypeOf -- Ok
    const prototype = Object.getPrototypeOf(obj);
    return is.object(prototype) ? prototype : undefined;
}
exports.getPrototypeOf = getPrototypeOf;
/**
 * Checks if object has property.
 *
 * @param key - Key.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
function hasOwnProp(key, obj) {
    // eslint-disable-next-line misc/typescript-misc/functions/object/prefer-hasOwnProp -- Ok
    return Object.prototype.hasOwnProperty.call(obj, key);
}
exports.hasOwnProp = hasOwnProp;
/**
 * Applies callback to each property.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
function map(obj, callback) {
    return exports.fromEntries.exhaustive((0, exports.entries)(obj).map(([key, value]) => [key, callback(value, key)]));
}
exports.map = map;
/**
 * Omit object entries by predicate.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns New object.
 */
function omit(obj, predicate) {
    const result = {};
    for (const [key, value] of (0, exports.entries)(obj))
        if (predicate(value, key)) {
            // Omit
        }
        else
            set(result, key, value);
    return result;
}
exports.omit = omit;
function omitKeys(obj, ...exclude) {
    const excludeSet = new core_1.ReadonlySet(exclude);
    const result = filter(obj, (_value, key) => !excludeSet.has(key));
    return result;
}
exports.omitKeys = omitKeys;
/**
 * Adds prefix to object keys.
 *
 * @param obj - Object.
 * @param prefix - Prefix.
 * @returns Object with prefixed keys.
 */
function prefixKeys(obj, prefix) {
    const result = (0, exports.fromEntries)((0, exports.entries)(obj).map(([key, value]) => [`${prefix}${key}`, value]));
    return result;
}
exports.prefixKeys = prefixKeys;
/**
 * Sets object property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param value - Value.
 */
function set(obj, key, value) {
    obj[key] = value;
}
exports.set = set;
/**
 * Returns the number of enumerable properties.
 *
 * @param obj - Object.
 * @returns The number of enumerable properties.
 */
function size(obj) {
    return (0, exports.keys)(obj).length;
}
exports.size = size;
/**
 * Checks if some object property satisfies condition.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if some object property satisfies condition, _false_ otherwise.
 */
function some(obj, predicate) {
    return (0, exports.entries)(obj).some(([key, value]) => predicate(value, key));
}
exports.some = some;
function sort(obj, compareFn) {
    return exports.fromEntries.exhaustive(a.sort((0, exports.entries)(obj), compareFn
        ? (entry1, entry2) => compareFn(entry1[1], entry2[1], entry1[0], entry2[0])
        : undefined));
}
exports.sort = sort;
//# sourceMappingURL=object.js.map