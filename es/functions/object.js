import * as a from "./array";
import * as as from "./inline-assertions";
import * as is from "./guards";
import { ReadonlySet, defineFn, indexed } from "./core";
/**
 * Typed version of Object.assign.
 *
 * @param target - Target.
 * @param sources - Sources.
 * @returns Target.
 */
export const assign = Object.assign;
/**
 * Typed version of Object.defineProperty.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param descriptor - Descriptor.
 */
export const defineProperty = Object.defineProperty.bind(Object);
export const entries = Object.entries;
export const fromEntries = defineFn(
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
export const keys = Object.keys;
export const values = Object.values;
export const removeUndefinedKeys = defineFn(
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
export function clone(obj) {
    // eslint-disable-next-line misc/typescript-misc/functions/object/prefer-clone -- Ok
    return { ...obj };
}
/**
 * Checks if every object property satisfies condition.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if every object property satisfies condition, _false_ otherwise.
 */
export function every(obj, predicate) {
    return entries(obj).every(([key, value]) => predicate(value, key));
}
/**
 * Picks object entries by predicate.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns New object.
 */
export function filter(obj, predicate) {
    const result = {};
    for (const [key, value] of entries(obj))
        if (predicate(value, key))
            set(result, key, value);
    return result;
}
export function get(obj, key, guard = is.unknown, defVal) {
    return as.byGuard(indexed(obj)[key] ?? defVal, guard);
}
/**
 * Returns object prototype.
 *
 * @param obj - Object.
 * @returns Object prototype if available, _undefined_ otherwise.
 */
export function getPrototypeOf(obj) {
    // eslint-disable-next-line misc/typescript-misc/functions/object/prefer-getPrototypeOf -- Ok
    const prototype = Object.getPrototypeOf(obj);
    return is.object(prototype) ? prototype : undefined;
}
/**
 * Checks if object has property.
 *
 * @param key - Key.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
export function hasOwnProp(key, obj) {
    // eslint-disable-next-line misc/typescript-misc/functions/object/prefer-hasOwnProp -- Ok
    return Object.prototype.hasOwnProperty.call(obj, key);
}
/**
 * Applies callback to each property.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
export function map(obj, callback) {
    return fromEntries.exhaustive(entries(obj).map(([key, value]) => [key, callback(value, key)]));
}
/**
 * Omit object entries by predicate.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns New object.
 */
export function omit(obj, predicate) {
    const result = {};
    for (const [key, value] of entries(obj))
        if (predicate(value, key)) {
            // Omit
        }
        else
            set(result, key, value);
    return result;
}
export function omitKeys(obj, ...exclude) {
    const excludeSet = new ReadonlySet(exclude);
    const result = filter(obj, (_value, key) => !excludeSet.has(key));
    return result;
}
/**
 * Adds prefix to object keys.
 *
 * @param obj - Object.
 * @param prefix - Prefix.
 * @returns Object with prefixed keys.
 */
export function prefixKeys(obj, prefix) {
    const result = fromEntries(entries(obj).map(([key, value]) => [`${prefix}${key}`, value]));
    return result;
}
/**
 * Sets object property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param value - Value.
 */
export function set(obj, key, value) {
    obj[key] = value;
}
/**
 * Returns the number of enumerable properties.
 *
 * @param obj - Object.
 * @returns The number of enumerable properties.
 */
export function size(obj) {
    return keys(obj).length;
}
/**
 * Checks if some object property satisfies condition.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if some object property satisfies condition, _false_ otherwise.
 */
export function some(obj, predicate) {
    return entries(obj).some(([key, value]) => predicate(value, key));
}
export function sort(obj, compareFn) {
    return fromEntries.exhaustive(a.sort(entries(obj), compareFn
        ? (entry1, entry2) => compareFn(entry1[1], entry2[1], entry1[0], entry2[0])
        : undefined));
}
//# sourceMappingURL=object.js.map