"use strict";
/* eslint-disable misc/typescript-misc/functions/array/prefer-clone -- Ok */
/* eslint-disable misc/typescript-misc/functions/array/prefer-fromIterable -- Ok */
/* eslint-disable misc/typescript-misc/functions/object/prefer-hasOwnProp -- Ok */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unshiftUnique = exports.unshiftOrReplaceBy = exports.unshift = exports.uniqueBy = exports.truncate = exports.toggleBy = exports.third = exports.sort = exports.second = exports.reverse = exports.replaceBy = exports.replace = exports.removeBy = exports.random = exports.pushUnique = exports.pushOrReplaceBy = exports.push = exports.omit = exports.last = exports.intersection = exports.includesBy = exports.get = exports.fromString = exports.fromRange = exports.fromMixed = exports.fromIterable = exports.first = exports.findLastIndex = exports.findBy = exports.drop = exports.clone = exports.chunk = exports.chain = void 0;
const tslib_1 = require("tslib");
const _ = tslib_1.__importStar(require("lodash-commonjs-es"));
const assert = tslib_1.__importStar(require("./assertions"));
const is = tslib_1.__importStar(require("./guards"));
const core_1 = require("./core");
/**
 * Creates array of pairs ([x, y, z] =\> [[x, y], [y, z]]).
 *
 * @param arr - Array.
 * @returns Array of pairs.
 */
function chain(arr) {
    const result = [];
    let prev = first(arr);
    for (const next of arr.slice(1)) {
        result.push([prev, next]);
        prev = next;
    }
    return result;
}
exports.chain = chain;
/**
 * Creates an array of chunks.
 *
 * @param arr - Array.
 * @param size - Chunk size.
 * @returns Array of chunks.
 */
// eslint-disable-next-line etc/no-internal -- Postponed
function chunk(arr, size) {
    return _.chunk(arr, size);
}
exports.chunk = chunk;
// eslint-disable-next-line misc/typescript/prefer-readonly-array -- Ok
function clone(arr) {
    return [...arr];
}
exports.clone = clone;
/**
 * Removes element at given index.
 *
 * @param arr - Array.
 * @param index - Index to be removed.
 * @returns New array with one element removed.
 */
function drop(arr, index) {
    assert.toBeTrue(Object.prototype.hasOwnProperty.call(arr, index), "Invalid index");
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
exports.drop = drop;
/**
 * Finds element matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns The first element matching value if available, _undefined_ otherwise.
 */
function findBy(arr, value, keyOrReduce) {
    const reduce = mixedToReduce(keyOrReduce);
    const reduced = reduce(value);
    return arr.find(element => reduce(element) === reduced);
}
exports.findBy = findBy;
/**
 * Finds last index.
 *
 * @param arr - Array.
 * @param predicate - Predicate.
 * @returns Last matching index.
 */
function findLastIndex(arr, predicate) {
    const index = reverse(arr).findIndex(predicate);
    return index === -1 ? -1 : arr.length - index - 1;
}
exports.findLastIndex = findLastIndex;
/**
 * Returns the first element from an array.
 *
 * @param arr - Array.
 * @returns The first element if available.
 * @throws Error otherwise.
 */
function first(arr) {
    return get(arr, 0);
}
exports.first = first;
/**
 * Creates array from iterable.
 *
 * @param iterable - Iterable.
 * @returns Array.
 */
function fromIterable(iterable) {
    return [...iterable];
}
exports.fromIterable = fromIterable;
/**
 * Creates array from mixed source.
 *
 * @param value - Value.
 * @returns Value if it is an array, tuple containing value otherwise.
 */
function fromMixed(value) {
    return is.array(value) ? value : [value];
}
exports.fromMixed = fromMixed;
/**
 * Creates array of numbers.
 *
 * @param from - Lower limit (inclusive).
 * @param to - Upper limit (inclusive).
 * @param step - Step.
 * @returns Array of numbers.
 */
function fromRange(from, to, step = 1) {
    const result = [];
    for (let i = from; i <= to; i += step)
        result.push(i);
    return result;
}
exports.fromRange = fromRange;
/**
 * Creates array from string.
 *
 * @param str - String.
 * @returns Array.
 */
function fromString(str) {
    return [...str];
}
exports.fromString = fromString;
/**
 * Returns element at given index.
 *
 * @param arr - Array.
 * @param index - Index.
 * @returns Element if available.
 * @throws Error otherwise.
 */
function get(arr, index) {
    assert.toBeTrue(Object.prototype.hasOwnProperty.call(arr, index), "Invalid index");
    return arr[index];
}
exports.get = get;
/**
 * Checks if array contains element matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns _True_ if array contains element matching value, _false_ otherwise.
 */
function includesBy(arr, value, keyOrReduce) {
    const reduce = mixedToReduce(keyOrReduce);
    const reduced = reduce(value);
    return arr.some(element => reduce(element) === reduced);
}
exports.includesBy = includesBy;
/**
 * Creates an array of shared values.
 *
 * @param arrays - Arrays.
 * @returns Array of shared values.
 */
// eslint-disable-next-line etc/no-internal -- Postponed
function intersection(...arrays) {
    return _.intersection(...arrays);
}
exports.intersection = intersection;
/**
 * Returns the last element from an array.
 *
 * @param arr - Array.
 * @returns The last element if available.
 * @throws Error otherwise.
 */
function last(arr) {
    return get(arr, arr.length - 1);
}
exports.last = last;
/**
 * Omit object entries by predicate.
 *
 * @param arr - Array.
 * @param predicate - Predicate.
 * @returns New object.
 */
function omit(arr, predicate) {
    return arr.filter((value, index) => !predicate(value, index, arr));
}
exports.omit = omit;
/**
 * Adds element to the end of an array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
function push(arr, value) {
    return [...arr, value];
}
exports.push = push;
/**
 * Replaces elements matching value if found, pushes value otherwise.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
function pushOrReplaceBy(arr, value, keyOrReduce) {
    return includesBy(arr, value, keyOrReduce)
        ? replaceBy(arr, value, keyOrReduce)
        : push(arr, value);
}
exports.pushOrReplaceBy = pushOrReplaceBy;
/**
 * Adds element to the end of an array if it does already not exist.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
function pushUnique(arr, value) {
    return push(omit(arr, candidate => candidate === value), value);
}
exports.pushUnique = pushUnique;
/**
 * Picks random element from an array.
 *
 * @param arr - Array.
 * @returns Random element.
 */
function random(arr) {
    return get(arr, _.random(0, arr.length - 1));
}
exports.random = random;
/**
 * Removes elements matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array with matching elements removed.
 */
function removeBy(arr, value, keyOrReduce) {
    const reduce = mixedToReduce(keyOrReduce);
    const reduced = reduce(value);
    return arr.filter(element => reduce(element) !== reduced);
}
exports.removeBy = removeBy;
/**
 * Replaces element at given index.
 *
 * @param arr - Array.
 * @param index - Index.
 * @param value - Value.
 * @returns New array with one element replaced.
 */
function replace(arr, index, value) {
    assert.toBeTrue(Object.prototype.hasOwnProperty.call(arr, index), "Invalid index");
    return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
}
exports.replace = replace;
/**
 * Replaces elements matching value.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array with matching elements replaced.
 */
function replaceBy(arr, value, keyOrReduce) {
    const reduce = mixedToReduce(keyOrReduce);
    const reduced = reduce(value);
    return arr.map(element => (reduce(element) === reduced ? value : element));
}
exports.replaceBy = replaceBy;
/**
 * Reverses array.
 *
 * @param arr - Array.
 * @returns New array.
 */
function reverse(arr) {
    const result = clone(arr);
    // eslint-disable-next-line misc/typescript-misc/functions/array/prefer-reverse -- Ok
    result.reverse();
    return result;
}
exports.reverse = reverse;
/**
 * Returns the second element from an array.
 *
 * @param arr - Array.
 * @returns The second element if available.
 * @throws Error otherwise.
 */
function second(arr) {
    return get(arr, 1);
}
exports.second = second;
/**
 * Sorts array.
 *
 * @param arr - Array.
 * @param compareFn - Comparison function.
 * @returns New array.
 */
function sort(arr, compareFn) {
    const result = clone(arr);
    // eslint-disable-next-line misc/typescript-misc/functions/array/prefer-sort -- Ok
    result.sort(compareFn);
    return result;
}
exports.sort = sort;
/**
 * Returns the third element from an array.
 *
 * @param arr - Array.
 * @returns The third element if available.
 * @throws Error otherwise.
 */
function third(arr) {
    return get(arr, 2);
}
exports.third = third;
/**
 * Adds/removes value to/from an array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
function toggleBy(arr, value, keyOrReduce) {
    return includesBy(arr, value, keyOrReduce)
        ? removeBy(arr, value, keyOrReduce)
        : push(arr, value);
}
exports.toggleBy = toggleBy;
/**
 * Truncates array.
 *
 * @param mutableArray - Array.
 */
function truncate(mutableArray) {
    // eslint-disable-next-line misc/typescript-misc/functions/array/prefer-truncate -- Ok
    mutableArray.length = 0;
}
exports.truncate = truncate;
/**
 * Creates unique array.
 *
 * @param arr - Array.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns Unique array.
 */
function uniqueBy(arr, keyOrReduce) {
    const reduce = mixedToReduce(keyOrReduce);
    // eslint-disable-next-line misc/typescript-misc/functions/prefer-readonly-set -- Ok
    const seen = new Set();
    return arr.filter(element => {
        const reduced = reduce(element);
        if (seen.has(reduced))
            return false;
        seen.add(reduced);
        return true;
    });
}
exports.uniqueBy = uniqueBy;
/**
 * Adds element to the beginning of an array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
function unshift(arr, value) {
    return [value, ...arr];
}
exports.unshift = unshift;
/**
 * Replaces elements matching value if found, unshifts value otherwise.
 *
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
function unshiftOrReplaceBy(arr, value, keyOrReduce) {
    return includesBy(arr, value, keyOrReduce)
        ? replaceBy(arr, value, keyOrReduce)
        : unshift(arr, value);
}
exports.unshiftOrReplaceBy = unshiftOrReplaceBy;
/**
 * Adds element to the beginning of an array if it does already not exist.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
function unshiftUnique(arr, value) {
    return unshift(omit(arr, candidate => candidate === value), value);
}
exports.unshiftUnique = unshiftUnique;
/**
 * Creates reduce function.
 *
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns Reduce function.
 */
function mixedToReduce(keyOrReduce) {
    return is.propertyKey(keyOrReduce)
        ? (obj) => (0, core_1.indexed)(obj)[keyOrReduce]
        : keyOrReduce;
}
//# sourceMappingURL=array.js.map