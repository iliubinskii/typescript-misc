"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chain = chain;
exports.chunk = chunk;
exports.clone = clone;
exports.drop = drop;
exports.findBy = findBy;
exports.findLastIndex = findLastIndex;
exports.first = first;
exports.fromIterable = fromIterable;
exports.fromMixed = fromMixed;
exports.fromRange = fromRange;
exports.fromString = fromString;
exports.get = get;
exports.includesBy = includesBy;
exports.intersection = intersection;
exports.last = last;
exports.omit = omit;
exports.push = push;
exports.pushOrReplaceBy = pushOrReplaceBy;
exports.pushUnique = pushUnique;
exports.random = random;
exports.removeBy = removeBy;
exports.replace = replace;
exports.replaceBy = replaceBy;
exports.reverse = reverse;
exports.second = second;
exports.sort = sort;
exports.third = third;
exports.toggleBy = toggleBy;
exports.truncate = truncate;
exports.uniqueBy = uniqueBy;
exports.unshift = unshift;
exports.unshiftOrReplaceBy = unshiftOrReplaceBy;
exports.unshiftUnique = unshiftUnique;
const tslib_1 = require("tslib");
const _ = tslib_1.__importStar(require("lodash-commonjs-es"));
const assert = tslib_1.__importStar(require("./assertions"));
const is = tslib_1.__importStar(require("./guards"));
const core_1 = require("./core");
/**
 * Creates array of pairs ([x, y, z] =\> [[x, y], [y, z]]).
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
/**
 * Creates an array of chunks.
 * @param arr - Array.
 * @param size - Chunk size.
 * @returns Array of chunks.
 */
function chunk(arr, size) {
    return _.chunk(arr, size);
}
/**
 * Clones array.
 * @param arr - Array.
 * @returns New array.
 */
// eslint-disable-next-line misc/typescript/prefer-readonly-array -- Ok
function clone(arr) {
    return [...arr];
}
/**
 * Removes element at given index.
 * @param arr - Array.
 * @param index - Index to be removed.
 * @returns New array with one element removed.
 */
function drop(arr, index) {
    assert.toBeTrue(Object.prototype.hasOwnProperty.call(arr, index), "Invalid index");
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
/**
 * Finds element matching value.
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
/**
 * Finds last index.
 * @param arr - Array.
 * @param predicate - Predicate.
 * @returns Last matching index.
 */
function findLastIndex(arr, predicate) {
    const index = reverse(arr).findIndex(predicate);
    return index === -1 ? -1 : arr.length - index - 1;
}
/**
 * Returns the first element from an array.
 * @param arr - Array.
 * @returns The first element if available.
 * @throws Error otherwise.
 */
function first(arr) {
    return get(arr, 0);
}
/**
 * Creates array from iterable.
 * @param iterable - Iterable.
 * @returns Array.
 */
function fromIterable(iterable) {
    return [...iterable];
}
/**
 * Creates array from mixed source.
 * @param value - Value.
 * @returns Value if it is an array, tuple containing value otherwise.
 */
function fromMixed(value) {
    return is.array(value) ? value : [value];
}
/**
 * Creates array of numbers.
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
/**
 * Creates array from string.
 * @param str - String.
 * @returns Array.
 */
function fromString(str) {
    return [...str];
}
/**
 * Returns element at given index.
 * @param arr - Array.
 * @param index - Index.
 * @returns Element if available.
 * @throws Error otherwise.
 */
function get(arr, index) {
    assert.toBeTrue(Object.prototype.hasOwnProperty.call(arr, index), "Invalid index");
    return arr[index];
}
/**
 * Checks if array contains element matching value.
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
/**
 * Creates an array of shared values.
 * @param arrays - Arrays.
 * @returns Array of shared values.
 */
function intersection(...arrays) {
    return _.intersection(...arrays);
}
/**
 * Returns the last element from an array.
 * @param arr - Array.
 * @returns The last element if available.
 * @throws Error otherwise.
 */
function last(arr) {
    return get(arr, arr.length - 1);
}
/**
 * Omit object entries by predicate.
 * @param arr - Array.
 * @param predicate - Predicate.
 * @returns New object.
 */
function omit(arr, predicate) {
    return arr.filter((value, index) => !predicate(value, index, arr));
}
/**
 * Adds element to the end of an array.
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
function push(arr, value) {
    return [...arr, value];
}
/**
 * Replaces elements matching value if found, pushes value otherwise.
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
/**
 * Adds element to the end of an array if it does already not exist.
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
function pushUnique(arr, value) {
    return push(omit(arr, candidate => candidate === value), value);
}
/**
 * Picks random element from an array.
 * @param arr - Array.
 * @returns Random element.
 */
function random(arr) {
    return get(arr, _.random(0, arr.length - 1));
}
/**
 * Removes elements matching value.
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
/**
 * Replaces element at given index.
 * @param arr - Array.
 * @param index - Index.
 * @param value - Value.
 * @returns New array with one element replaced.
 */
function replace(arr, index, value) {
    assert.toBeTrue(Object.prototype.hasOwnProperty.call(arr, index), "Invalid index");
    return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
}
/**
 * Replaces elements matching value.
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
/**
 * Reverses array.
 * @param arr - Array.
 * @returns New array.
 */
function reverse(arr) {
    const result = clone(arr);
    result.reverse();
    return result;
}
/**
 * Returns the second element from an array.
 * @param arr - Array.
 * @returns The second element if available.
 * @throws Error otherwise.
 */
function second(arr) {
    return get(arr, 1);
}
/**
 * Sorts array.
 * @param arr - Array.
 * @param compareFn - Comparison function.
 * @returns New array.
 */
function sort(arr, compareFn) {
    const result = clone(arr);
    result.sort(compareFn);
    return result;
}
/**
 * Returns the third element from an array.
 * @param arr - Array.
 * @returns The third element if available.
 * @throws Error otherwise.
 */
function third(arr) {
    return get(arr, 2);
}
/**
 * Adds/removes value to/from an array.
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
/**
 * Truncates array.
 * @param mutableArray - Array.
 */
function truncate(mutableArray) {
    mutableArray.length = 0;
}
/**
 * Creates unique array.
 * @param arr - Array.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns Unique array.
 */
function uniqueBy(arr, keyOrReduce) {
    const reduce = mixedToReduce(keyOrReduce);
    const seen = new Set();
    return arr.filter(element => {
        const reduced = reduce(element);
        if (seen.has(reduced))
            return false;
        seen.add(reduced);
        return true;
    });
}
/**
 * Adds element to the beginning of an array.
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
function unshift(arr, value) {
    return [value, ...arr];
}
/**
 * Replaces elements matching value if found, unshifts value otherwise.
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
/**
 * Adds element to the beginning of an array if it does already not exist.
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
function unshiftUnique(arr, value) {
    return unshift(omit(arr, candidate => candidate === value), value);
}
/**
 * Creates reduce function.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns Reduce function.
 */
function mixedToReduce(keyOrReduce) {
    return is.propertyKey(keyOrReduce)
        ? (obj) => (0, core_1.indexed)(obj)[keyOrReduce]
        : keyOrReduce;
}
//# sourceMappingURL=array.js.map