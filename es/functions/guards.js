import { defineFn, overload } from "./core";
export { _false as false, _null as null, _true as true, _undefined as undefined };
export const and = defineFn(overload(() => {
    return result;
    /**
     * Checks if value type is the union of types.
     * @param value - Value.
     * @param guards - Guards.
     * @returns _True_ if value type is the union of types, _false_ otherwise.
     */
    function result(value, ...guards) {
        return guards.every(guard => guard(value));
    }
}), {
    factory: overload(() => {
        return result;
        /**
         * Creates guard for the union of types.
         * @param guards - Guards.
         * @returns Guard for the union of types.
         */
        function result(...guards) {
            return (value) => guards.every(guard => guard(value));
        }
    })
});
export const or = defineFn(overload(() => {
    return result;
    /**
     * Checks if value type is the union of types.
     * @param value - Value.
     * @param guards - Guards.
     * @returns _True_ if value type is the union of types, _false_ otherwise.
     */
    function result(value, ...guards) {
        return guards.some(guard => guard(value));
    }
}), {
    factory: overload(() => {
        return result;
        /**
         * Creates guard for the union of types.
         * @param guards - Guards.
         * @returns Guard for the union of types.
         */
        function result(...guards) {
            return (value) => guards.some(guard => guard(value));
        }
    })
});
export const array = defineFn(
/**
 * Checks if value is an array.
 * @param value - Value.
 * @returns _True_ if value is an array, _false_ otherwise.
 */
(value) => Array.isArray(value), {
    /**
     * Checks if value type is T[].
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is T[], _false_ otherwise.
     */
    of: (value, guard) => array(value) && value.every(guard)
});
export const arrayU = or.factory(array, _undefined);
export const arrays = factory(array.of, array);
export const arraysU = or.factory(arrays, _undefined);
export const booleanU = or.factory(boolean, _undefined);
export const booleans = factory(array.of, boolean);
export const booleansU = or.factory(booleans, _undefined);
export const indexedObject = defineFn(
/**
 * Checks if value type is IndexedObject.
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
(value) => typeof value === "object" && value !== null, {
    /**
     * Checks if value type is IndexedObject\<T\>.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
     */
    of: (value, guard) => object(value) && Object.values(value).every(guard)
});
export const indexedObjectU = or.factory(indexedObject, _undefined);
export const indexedObjects = factory(array.of, indexedObject);
export const indexedObjectsU = or.factory(indexedObjects, _undefined);
export const map = defineFn(
/**
 * Checks if value type is Map.
 * @param value - Value.
 * @returns _True_ if value type is Map, _false_ otherwise.
 */
(value) => value instanceof Map, {
    /**
     * Checks if value type is Map\<K, V\>.
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
     */
    of: (value, keyGuard, valueGuard) => map(value) && [...value].every(([k, v]) => keyGuard(k) && valueGuard(v))
});
export const mapU = or.factory(map, _undefined);
export const maps = factory(array.of, map);
export const mapsU = or.factory(maps, _undefined);
export const numStrU = or.factory(numStr, _undefined);
export const numStrs = factory(array.of, numStr);
export const numStrsU = or.factory(numStrs, _undefined);
export const numberU = or.factory(number, _undefined);
export const numbers = factory(array.of, number);
export const numbersU = or.factory(numbers, _undefined);
export const object = defineFn(
/**
 * Checks if value is an object.
 * @param value - Value.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
(value) => typeof value === "object" && value !== null, {
    factory: overload(() => {
        return result;
        /**
         * Creates object guard.
         * @param required - Guards for required properties.
         * @param optional - Guards for optional properties.
         * @returns Object guard.
         */
        function result(required, optional) {
            return (value) => object.of(value, required, optional);
        }
    }),
    of: overload(() => {
        return result;
        /**
         * Checks if value is an object.
         * @param value - Value.
         * @param required - Guards for required properties.
         * @param optional - Guards for optional properties.
         * @returns _True_ if value is an object, _false_ otherwise.
         */
        function result(value, required, optional) {
            return (indexedObject(value) &&
                Object.entries(required).every(([key, guard]) => checkRequiredProp(value, key, guard)) &&
                Object.entries(optional).every(([key, guard]) => checkOptionalProp(value, key, guard)));
        }
    })
});
export const objectU = or.factory(object, _undefined);
export const objects = factory(array.of, object);
export const objectsU = or.factory(objects, _undefined);
export const propertyKeyU = or.factory(propertyKey, _undefined);
export const propertyKeys = factory(array.of, propertyKey);
export const propertyKeysU = or.factory(propertyKeys, _undefined);
export const set = defineFn(
/**
 * Checks if value type is Set.
 * @param value - Value.
 * @returns _True_ if value type is Set, _false_ otherwise.
 */
(value) => value instanceof Set, {
    /**
     * Checks if value type is Set\<T\>.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
     */
    of: (value, guard) => set(value) && [...value].every(v => guard(v))
});
export const setU = or.factory(set, _undefined);
export const sets = factory(array.of, set);
export const setsU = or.factory(sets, _undefined);
export const strings = factory(array.of, string);
export const stringsU = or.factory(strings, _undefined);
export const symbolU = or.factory(symbol, _undefined);
export const symbols = factory(array.of, symbol);
export const symbolsU = or.factory(symbols, _undefined);
export const tuple = defineFn(overload(() => {
    return result;
    /**
     * Checks if value type is tuple.
     * @param value - Value.
     * @param guards - Guards.
     * @returns _True_ if value type is tuple, _false_ otherwise.
     */
    function result(value, ...guards) {
        return (array(value) && guards.every((guard, index) => guard(value[index])));
    }
}), {
    factory: overload(() => {
        return result;
        /**
         * Creates guard for tuple.
         * @param guards - Guards.
         * @returns Guard for tuple.
         */
        function result(...guards) {
            return (value) => array(value) && guards.every((guard, index) => guard(value[index]));
        }
    })
});
export const unknowns = factory(array.of, unknown);
export const unknownsU = or.factory(unknowns, _undefined);
export const not = defineFn(
/**
 * Checks if value type is not T.
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is not T, _false_ otherwise.
 */
(value, guard) => !guard(value), {
    array: _notFactory(array),
    boolean: _notFactory(boolean),
    empty: _notFactory(empty),
    factory: _notFactory,
    false: _notFactory(_false),
    indexedObject: _notFactory(indexedObject),
    map: _notFactory(map),
    null: _notFactory(_null),
    numStr: _notFactory(numStr),
    number: _notFactory(number),
    object: _notFactory(object),
    propertyKey: _notFactory(propertyKey),
    set: _notFactory(set),
    string: _notFactory(string),
    stringU: _notFactory(stringU),
    symbol: _notFactory(symbol),
    true: _notFactory(_true),
    undefined: _notFactory(_undefined)
});
/**
 * Checks if value is a boolean.
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
export function boolean(value) {
    return typeof value === "boolean";
}
/**
 * Checks if value type is T.
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function callable(value) {
    return typeof value === "function";
}
/**
 * Checks if value type is T.
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function constructor(value) {
    return typeof value === "function";
}
/**
 * Checks if value type is empty.
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
export function empty(value) {
    return value === null || value === undefined;
}
/**
 * Checks if value type is T.
 * @param value - Value.
 * @param en - Validation object.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function enumeration(value, en) {
    return Object.values(en).includes(value);
}
/**
 * Creates single-arg guard.
 * @param guard - Multi-arg guard.
 * @param args - Arguments.
 * @returns Single-arg guard.
 */
export function factory(guard, ...args) {
    return (value) => guard(value, ...args);
}
/**
 * Checks if value type is T.
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function instanceOf(value, ctor) {
    return value instanceof ctor;
}
/**
 * Checks if value type is T[].
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export function instancesOf(value, ctor) {
    return array(value) && value.every(v => v instanceof ctor);
}
/**
 * Checks if value is _never_.
 * @param _value - Value.
 * @returns _False_.
 */
export function never(_value) {
    return false;
}
/**
 * Checks if value type is NumStr.
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
export function numStr(value) {
    switch (typeof value) {
        case "number": {
            return !Number.isNaN(value);
        }
        case "string": {
            return true;
        }
        default: {
            return false;
        }
    }
}
/**
 * Checks if value is a number.
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
export function number(value) {
    return typeof value === "number" && !Number.isNaN(value);
}
/**
 * Checks if value type is PropertyKey.
 * @param value - Value.
 * @returns _True_ if value type is PropertyKey, _false_ otherwise.
 */
export function propertyKey(value) {
    switch (typeof value) {
        case "number": {
            return !Number.isNaN(value);
        }
        case "string": {
            return true;
        }
        case "symbol": {
            return true;
        }
        default: {
            return false;
        }
    }
}
/**
 * Checks if value is a string.
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export function string(value) {
    return typeof value === "string";
}
/**
 * Checks if value is a string.
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export function stringU(value) {
    switch (typeof value) {
        case "string": {
            return value !== "";
        }
        case "undefined": {
            return true;
        }
        default: {
            return false;
        }
    }
}
/**
 * Checks if value is a symbol.
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
export function symbol(value) {
    return typeof value === "symbol";
}
/**
 * Checks if value is _unknown_.
 * @param _value - Value.
 * @returns _True_.
 */
export function unknown(_value) {
    return true;
}
/**
 * Checks if value is _false_.
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
function _false(value) {
    return value === false;
}
/**
 * Creates guard for type not T.
 * @param guard - Guard for type T.
 * @returns Guard for type not T.
 */
function _notFactory(guard) {
    return (value) => !guard(value);
}
/**
 * Checks if value is _null_.
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
function _null(value) {
    return value === null;
}
/**
 * Checks if value is _true_.
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
function _true(value) {
    return value === true;
}
/**
 * Checks if value is _undefined_.
 * @param value - Value.
 * @returns _True_ if value is _undefined_, _false_ otherwise.
 */
function _undefined(value) {
    return value === undefined;
}
/**
 * Checks if object has optional property.
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns _True_ if object has optional property, _false_ otherwise.
 */
function checkOptionalProp(obj, key, guard) {
    return Object.prototype.hasOwnProperty.call(obj, key)
        ? guard(obj[key])
        : true;
}
/**
 * Checks if object has required property.
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns _True_ if object has required property, _false_ otherwise.
 */
function checkRequiredProp(obj, key, guard) {
    return Object.prototype.hasOwnProperty.call(obj, key)
        ? guard(obj[key])
        : false;
}
//# sourceMappingURL=guards.js.map