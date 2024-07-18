import * as _ from "lodash-commonjs-es";
import * as assert from "./assertions";
import * as is from "./guards";
import { indexed } from "./core";
/**
 * Creates array of pairs ([x, y, z] =\> [[x, y], [y, z]]).
 * @param arr - Array.
 * @returns Array of pairs.
 */
export function chain(arr) {
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
export function chunk(arr, size) {
    return _.chunk(arr, size);
}
/**
 * Clones array.
 * @param arr - Array.
 * @returns New array.
 */
// eslint-disable-next-line misc/typescript/prefer-readonly-array -- Ok
export function clone(arr) {
    return [...arr];
}
/**
 * Removes element at given index.
 * @param arr - Array.
 * @param index - Index to be removed.
 * @returns New array with one element removed.
 */
export function drop(arr, index) {
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
export function findBy(arr, value, keyOrReduce) {
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
export function findLastIndex(arr, predicate) {
    const index = reverse(arr).findIndex(predicate);
    return index === -1 ? -1 : arr.length - index - 1;
}
/**
 * Returns the first element from an array.
 * @param arr - Array.
 * @returns The first element if available.
 * @throws Error otherwise.
 */
export function first(arr) {
    return get(arr, 0);
}
/**
 * Creates array from iterable.
 * @param iterable - Iterable.
 * @returns Array.
 */
export function fromIterable(iterable) {
    return [...iterable];
}
/**
 * Creates array from mixed source.
 * @param value - Value.
 * @returns Value if it is an array, tuple containing value otherwise.
 */
export function fromMixed(value) {
    return is.array(value) ? value : [value];
}
/**
 * Creates array of numbers.
 * @param from - Lower limit (inclusive).
 * @param to - Upper limit (inclusive).
 * @param step - Step.
 * @returns Array of numbers.
 */
export function fromRange(from, to, step = 1) {
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
export function fromString(str) {
    return [...str];
}
/**
 * Returns element at given index.
 * @param arr - Array.
 * @param index - Index.
 * @returns Element if available.
 * @throws Error otherwise.
 */
export function get(arr, index) {
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
export function includesBy(arr, value, keyOrReduce) {
    const reduce = mixedToReduce(keyOrReduce);
    const reduced = reduce(value);
    return arr.some(element => reduce(element) === reduced);
}
/**
 * Creates an array of shared values.
 * @param arrays - Arrays.
 * @returns Array of shared values.
 */
export function intersection(...arrays) {
    return _.intersection(...arrays);
}
/**
 * Returns the last element from an array.
 * @param arr - Array.
 * @returns The last element if available.
 * @throws Error otherwise.
 */
export function last(arr) {
    return get(arr, arr.length - 1);
}
/**
 * Omit object entries by predicate.
 * @param arr - Array.
 * @param predicate - Predicate.
 * @returns New object.
 */
export function omit(arr, predicate) {
    return arr.filter((value, index) => !predicate(value, index, arr));
}
/**
 * Adds element to the end of an array.
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
export function push(arr, value) {
    return [...arr, value];
}
/**
 * Replaces elements matching value if found, pushes value otherwise.
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
export function pushOrReplaceBy(arr, value, keyOrReduce) {
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
export function pushUnique(arr, value) {
    return push(omit(arr, candidate => candidate === value), value);
}
/**
 * Picks random element from an array.
 * @param arr - Array.
 * @returns Random element.
 */
export function random(arr) {
    return get(arr, _.random(0, arr.length - 1));
}
/**
 * Removes elements matching value.
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array with matching elements removed.
 */
export function removeBy(arr, value, keyOrReduce) {
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
export function replace(arr, index, value) {
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
export function replaceBy(arr, value, keyOrReduce) {
    const reduce = mixedToReduce(keyOrReduce);
    const reduced = reduce(value);
    return arr.map(element => (reduce(element) === reduced ? value : element));
}
/**
 * Reverses array.
 * @param arr - Array.
 * @returns New array.
 */
export function reverse(arr) {
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
export function second(arr) {
    return get(arr, 1);
}
/**
 * Sorts array.
 * @param arr - Array.
 * @param compareFn - Comparison function.
 * @returns New array.
 */
export function sort(arr, compareFn) {
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
export function third(arr) {
    return get(arr, 2);
}
/**
 * Adds/removes value to/from an array.
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
export function toggleBy(arr, value, keyOrReduce) {
    return includesBy(arr, value, keyOrReduce)
        ? removeBy(arr, value, keyOrReduce)
        : push(arr, value);
}
/**
 * Truncates array.
 * @param mutableArray - Array.
 */
export function truncate(mutableArray) {
    mutableArray.length = 0;
}
/**
 * Creates unique array.
 * @param arr - Array.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns Unique array.
 */
export function uniqueBy(arr, keyOrReduce) {
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
export function unshift(arr, value) {
    return [value, ...arr];
}
/**
 * Replaces elements matching value if found, unshifts value otherwise.
 * @param arr - Array.
 * @param value - Value.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array.
 */
export function unshiftOrReplaceBy(arr, value, keyOrReduce) {
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
export function unshiftUnique(arr, value) {
    return unshift(omit(arr, candidate => candidate === value), value);
}
/**
 * Creates reduce function.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns Reduce function.
 */
function mixedToReduce(keyOrReduce) {
    return is.propertyKey(keyOrReduce)
        ? (obj) => indexed(obj)[keyOrReduce]
        : keyOrReduce;
}
//# sourceMappingURL=array.js.map