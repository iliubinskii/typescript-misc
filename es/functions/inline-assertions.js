import * as is from "./guards";
import { AssertionError } from "./errors";
import { defineFn } from "./core";
export { _false as false, _null as null, _true as true, _undefined as undefined };
export const array = defineFn(factory(is.array), {
    /**
     * Asserts that value type is T[].
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns Value if value type is T[].
     * @throws Error otherwise.
     */
    of: (value, guard) => {
        if (is.array.of(value, guard))
            return value;
        throw new AssertionError();
    }
});
export const arrayU = factory(is.arrayU);
export const arrays = factory(is.arrays);
export const arraysU = factory(is.arraysU);
export const boolean = factory(is.boolean);
export const booleanU = factory(is.booleanU);
export const booleans = factory(is.booleans);
export const booleansU = factory(is.booleansU);
export const empty = factory(is.empty);
export const indexedObject = defineFn(factory(is.indexedObject), {
    /**
     * Asserts that value type is IndexedObject\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns Value if value type is IndexedObject\<T\>.
     * @throws Error otherwise.
     */
    of: (value, guard) => {
        if (is.indexedObject.of(value, guard))
            return value;
        throw new AssertionError();
    }
});
export const indexedObjects = factory(is.indexedObjects);
export const indexedObjectsU = factory(is.indexedObjectsU);
export const map = defineFn(factory(is.map), {
    /**
     * Asserts that value type is Map\<K, V\>.
     *
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @returns Value if value type is Map\<K, V\>.
     * @throws Error otherwise.
     */
    of: (value, keyGuard, valueGuard) => {
        if (is.map.of(value, keyGuard, valueGuard))
            return value;
        throw new AssertionError();
    }
});
export const mapU = factory(is.mapU);
export const maps = factory(is.maps);
export const mapsU = factory(is.mapsU);
export const never = factory(is.never);
export const numStr = factory(is.numStr);
export const numStrU = factory(is.numStrU);
export const numStrs = factory(is.numStrs);
export const numStrsU = factory(is.numStrsU);
export const number = factory(is.number);
export const numberU = factory(is.numberU);
export const numbers = factory(is.numbers);
export const numbersU = factory(is.numbersU);
export const object = factory(is.object);
export const objectU = factory(is.objectU);
export const objects = factory(is.objects);
export const objectsU = factory(is.objectsU);
export const propertyKey = factory(is.propertyKey);
export const propertyKeyU = factory(is.propertyKeyU);
export const propertyKeys = factory(is.propertyKeys);
export const propertyKeysU = factory(is.propertyKeyU);
export const set = defineFn(factory(is.set), {
    /**
     * Asserts that value type is Set\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns Value if value type is Set\<T\>.
     * @throws Error otherwise.
     */
    of: (value, guard) => {
        if (is.set.of(value, guard))
            return value;
        throw new AssertionError();
    }
});
export const setU = factory(is.setU);
export const sets = factory(is.sets);
export const setsU = factory(is.setsU);
export const string = factory(is.string);
export const stringU = factory(is.stringU);
export const strings = factory(is.strings);
export const stringsU = factory(is.stringsU);
export const symbol = factory(is.symbol);
export const symbolU = factory(is.symbolU);
export const symbols = factory(is.symbols);
export const symbolsU = factory(is.symbolsU);
export const unknown = factory(is.unknown);
export const unknowns = factory(is.unknowns);
export const unknownsU = factory(is.unknownsU);
export const not = {
    array: notFactory(is.not.array),
    boolean: notFactory(is.not.boolean),
    empty: notFactory(is.not.empty),
    false: notFactory(is.not.false),
    indexedObject: notFactory(is.not.indexedObject),
    map: notFactory(is.not.map),
    null: notFactory(is.not.null),
    numStr: notFactory(is.not.numStr),
    number: notFactory(is.not.number),
    object: notFactory(is.not.object),
    propertyKey: notFactory(is.not.propertyKey),
    set: notFactory(is.not.set),
    string: notFactory(is.not.string),
    stringU: notFactory(is.not.stringU),
    symbol: notFactory(is.not.symbol),
    true: notFactory(is.not.true),
    undefined: notFactory(is.not.undefined)
};
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function byGuard(value, guard) {
    if (guard(value))
        return value;
    throw new AssertionError();
}
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function callable(value) {
    if (is.callable(value))
        return value;
    throw new AssertionError();
}
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function constructor(value) {
    if (is.constructor(value))
        return value;
    throw new AssertionError();
}
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param en - Validation object.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function enumeration(value, en) {
    if (is.enumeration(value, en))
        return value;
    throw new AssertionError();
}
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function instanceOf(value, ctor) {
    if (is.instanceOf(value, ctor))
        return value;
    throw new AssertionError();
}
/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if value type is T[].
 * @throws Error otherwise.
 */
export function instancesOf(value, ctor) {
    if (is.instancesOf(value, ctor))
        return value;
    throw new AssertionError();
}
const _false = factory(is.false);
const _null = factory(is.null);
const _true = factory(is.true);
const _undefined = factory(is.undefined);
/**
 * Creates inline assertion.
 *
 * @param guard - Guard for type T.
 * @returns Inline assertion for type T.
 */
function factory(guard) {
    /**
     * Asserts that value has expected type.
     *
     * @param value - Value.
     * @returns Value if value has expected type.
     * @throws Error otherwise.
     */
    return (value) => {
        if (guard(value))
            return value;
        throw new AssertionError();
    };
}
/**
 * Creates inline assertion.
 *
 * @param guard - Guard for type not T.
 * @returns Inline assertion for type not T.
 */
function notFactory(guard) {
    /**
     * Asserts that value has expected type.
     *
     * @param value - Value.
     * @returns Value if value has expected type.
     * @throws Error otherwise.
     */
    return (value) => {
        if (guard(value))
            return value;
        throw new AssertionError();
    };
}
//# sourceMappingURL=inline-assertions.js.map