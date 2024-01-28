"use strict";
/* eslint-disable misc/ts-misc/functions/array/prefer-clone -- Ok */
/* eslint-disable misc/ts-misc/functions/array/prefer-fromIterable -- Ok */
/* eslint-disable misc/ts-misc/functions/object/prefer-entries -- Ok */
/* eslint-disable misc/ts-misc/functions/object/prefer-hasOwnProp -- Ok */
/* eslint-disable misc/ts-misc/functions/object/prefer-values -- Ok */
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructor = exports.callable = exports.boolean = exports.not = exports.unknownsU = exports.unknowns = exports.tuple = exports.symbolsU = exports.symbols = exports.symbolU = exports.stringsU = exports.strings = exports.setsU = exports.sets = exports.setU = exports.set = exports.propertyKeysU = exports.propertyKeys = exports.propertyKeyU = exports.objectsU = exports.objects = exports.objectU = exports.object = exports.numbersU = exports.numbers = exports.numberU = exports.numStrsU = exports.numStrs = exports.numStrU = exports.mapsU = exports.maps = exports.mapU = exports.map = exports.indexedObjectsU = exports.indexedObjects = exports.indexedObjectU = exports.indexedObject = exports.booleansU = exports.booleans = exports.booleanU = exports.arraysU = exports.arrays = exports.arrayU = exports.array = exports.or = exports.and = exports.undefined = exports.true = exports.null = exports.false = void 0;
exports.unknown = exports.symbol = exports.stringU = exports.string = exports.propertyKey = exports.number = exports.numStr = exports.never = exports.instancesOf = exports.instanceOf = exports.factory = exports.enumeration = exports.empty = void 0;
const core_1 = require("./core");
exports.and = (0, core_1.defineFn)((0, core_1.overload)(() => {
    return result;
    function result(value, ...guards) {
        return guards.every(guard => guard(value));
    }
}), {
    factory: (0, core_1.overload)(() => {
        return result;
        function result(...guards) {
            return (value) => guards.every(guard => guard(value));
        }
    })
});
exports.or = (0, core_1.defineFn)((0, core_1.overload)(() => {
    return result;
    function result(value, ...guards) {
        return guards.some(guard => guard(value));
    }
}), {
    factory: (0, core_1.overload)(() => {
        return result;
        function result(...guards) {
            return (value) => guards.some(guard => guard(value));
        }
    })
});
exports.array = (0, core_1.defineFn)(
/**
 * Checks if value is an array.
 *
 * @param value - Value.
 * @returns _True_ if value is an array, _false_ otherwise.
 */
(value) => Array.isArray(value), {
    /**
     * Checks if value type is T[].
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is T[], _false_ otherwise.
     */
    of: (value, guard) => (0, exports.array)(value) && value.every(guard)
});
exports.arrayU = exports.or.factory(exports.array, _undefined);
exports.arrays = factory(exports.array.of, exports.array);
exports.arraysU = exports.or.factory(exports.arrays, _undefined);
exports.booleanU = exports.or.factory(boolean, _undefined);
exports.booleans = factory(exports.array.of, boolean);
exports.booleansU = exports.or.factory(exports.booleans, _undefined);
exports.indexedObject = (0, core_1.defineFn)(
/**
 * Checks if value type is IndexedObject.
 *
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
(value) => typeof value === "object" && value !== null, {
    /**
     * Checks if value type is IndexedObject\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
     */
    of: (value, guard) => (0, exports.object)(value) && Object.values(value).every(guard)
});
exports.indexedObjectU = exports.or.factory(exports.indexedObject, _undefined);
exports.indexedObjects = factory(exports.array.of, exports.indexedObject);
exports.indexedObjectsU = exports.or.factory(exports.indexedObjects, _undefined);
exports.map = (0, core_1.defineFn)(
/**
 * Checks if value type is Map.
 *
 * @param value - Value.
 * @returns _True_ if value type is Map, _false_ otherwise.
 */
(value) => value instanceof Map, {
    /**
     * Checks if value type is Map\<K, V\>.
     *
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
     */
    of: (value, keyGuard, valueGuard) => (0, exports.map)(value) && [...value].every(([k, v]) => keyGuard(k) && valueGuard(v))
});
exports.mapU = exports.or.factory(exports.map, _undefined);
exports.maps = factory(exports.array.of, exports.map);
exports.mapsU = exports.or.factory(exports.maps, _undefined);
exports.numStrU = exports.or.factory(numStr, _undefined);
exports.numStrs = factory(exports.array.of, numStr);
exports.numStrsU = exports.or.factory(exports.numStrs, _undefined);
exports.numberU = exports.or.factory(number, _undefined);
exports.numbers = factory(exports.array.of, number);
exports.numbersU = exports.or.factory(exports.numbers, _undefined);
exports.object = (0, core_1.defineFn)(
/**
 * Checks if value is an object.
 *
 * @param value - Value.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
(value) => typeof value === "object" && value !== null, {
    factory: (0, core_1.overload)(() => {
        return result;
        function result(required, optional) {
            return (value) => exports.object.of(value, required, optional);
        }
    }),
    of: (0, core_1.overload)(() => {
        return result;
        function result(value, required, optional) {
            return ((0, exports.indexedObject)(value) &&
                Object.entries(required).every(([key, guard]) => checkRequiredProp(value, key, guard)) &&
                Object.entries(optional).every(([key, guard]) => checkOptionalProp(value, key, guard)));
        }
    })
});
exports.objectU = exports.or.factory(exports.object, _undefined);
exports.objects = factory(exports.array.of, exports.object);
exports.objectsU = exports.or.factory(exports.objects, _undefined);
exports.propertyKeyU = exports.or.factory(propertyKey, _undefined);
exports.propertyKeys = factory(exports.array.of, propertyKey);
exports.propertyKeysU = exports.or.factory(exports.propertyKeys, _undefined);
exports.set = (0, core_1.defineFn)(
/**
 * Checks if value type is Set.
 *
 * @param value - Value.
 * @returns _True_ if value type is Set, _false_ otherwise.
 */
(value) => value instanceof Set, {
    /**
     * Checks if value type is Set\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
     */
    of: (value, guard) => (0, exports.set)(value) && [...value].every(v => guard(v))
});
exports.setU = exports.or.factory(exports.set, _undefined);
exports.sets = factory(exports.array.of, exports.set);
exports.setsU = exports.or.factory(exports.sets, _undefined);
exports.strings = factory(exports.array.of, string);
exports.stringsU = exports.or.factory(exports.strings, _undefined);
exports.symbolU = exports.or.factory(symbol, _undefined);
exports.symbols = factory(exports.array.of, symbol);
exports.symbolsU = exports.or.factory(exports.symbols, _undefined);
exports.tuple = (0, core_1.defineFn)((0, core_1.overload)(() => {
    return result;
    function result(value, ...guards) {
        return ((0, exports.array)(value) && guards.every((guard, index) => guard(value[index])));
    }
}), {
    factory: (0, core_1.overload)(() => {
        return result;
        function result(...guards) {
            return (value) => (0, exports.array)(value) && guards.every((guard, index) => guard(value[index]));
        }
    })
});
exports.unknowns = factory(exports.array.of, unknown);
exports.unknownsU = exports.or.factory(exports.unknowns, _undefined);
exports.not = (0, core_1.defineFn)(
/**
 * Checks if value type is not T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is not T, _false_ otherwise.
 */
(value, guard) => !guard(value), {
    array: _notFactory(exports.array),
    boolean: _notFactory(boolean),
    empty: _notFactory(empty),
    factory: _notFactory,
    false: _notFactory(_false),
    indexedObject: _notFactory(exports.indexedObject),
    map: _notFactory(exports.map),
    null: _notFactory(_null),
    numStr: _notFactory(numStr),
    number: _notFactory(number),
    object: _notFactory(exports.object),
    propertyKey: _notFactory(propertyKey),
    set: _notFactory(exports.set),
    string: _notFactory(string),
    stringU: _notFactory(stringU),
    symbol: _notFactory(symbol),
    true: _notFactory(_true),
    undefined: _notFactory(_undefined)
});
/**
 * Checks if value is a boolean.
 *
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
function boolean(value) {
    return typeof value === "boolean";
}
exports.boolean = boolean;
/**
 * Checks if value type is T.
 *
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
function callable(value) {
    return typeof value === "function";
}
exports.callable = callable;
/**
 * Checks if value type is T.
 *
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
function constructor(value) {
    return typeof value === "function";
}
exports.constructor = constructor;
/**
 * Checks if value type is empty.
 *
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
function empty(value) {
    return value === null || value === undefined;
}
exports.empty = empty;
/**
 * Checks if value type is T.
 *
 * @param value - Value.
 * @param en - Validation object.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
function enumeration(value, en) {
    return Object.values(en).includes(value);
}
exports.enumeration = enumeration;
/**
 * Creates single-arg guard.
 *
 * @param guard - Multi-arg guard.
 * @param args - Arguments.
 * @returns Single-arg guard.
 */
function factory(guard, ...args) {
    return (value) => guard(value, ...args);
}
exports.factory = factory;
/**
 * Checks if value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
function instanceOf(value, ctor) {
    return value instanceof ctor;
}
exports.instanceOf = instanceOf;
/**
 * Checks if value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
function instancesOf(value, ctor) {
    return (0, exports.array)(value) && value.every(v => v instanceof ctor);
}
exports.instancesOf = instancesOf;
/**
 * Checks if value is _never_.
 *
 * @param _value - Value.
 * @returns _False_.
 */
function never(_value) {
    return false;
}
exports.never = never;
/**
 * Checks if value type is NumStr.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
function numStr(value) {
    switch (typeof value) {
        case "number":
            return !Number.isNaN(value);
        case "string":
            return true;
        default:
            return false;
    }
}
exports.numStr = numStr;
/**
 * Checks if value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
function number(value) {
    return typeof value === "number" && !Number.isNaN(value);
}
exports.number = number;
/**
 * Checks if value type is PropertyKey.
 *
 * @param value - Value.
 * @returns _True_ if value type is PropertyKey, _false_ otherwise.
 */
function propertyKey(value) {
    switch (typeof value) {
        case "number":
            return !Number.isNaN(value);
        case "string":
            return true;
        case "symbol":
            return true;
        default:
            return false;
    }
}
exports.propertyKey = propertyKey;
/**
 * Checks if value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
function string(value) {
    return typeof value === "string";
}
exports.string = string;
/**
 * Checks if value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
function stringU(value) {
    switch (typeof value) {
        case "string":
            return value !== "";
        case "undefined":
            return true;
        default:
            return false;
    }
}
exports.stringU = stringU;
/**
 * Checks if value is a symbol.
 *
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
function symbol(value) {
    return typeof value === "symbol";
}
exports.symbol = symbol;
/**
 * Checks if value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_.
 */
function unknown(_value) {
    return true;
}
exports.unknown = unknown;
/**
 * Checks if value is _false_.
 *
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
function _false(value) {
    return value === false;
}
exports.false = _false;
/**
 * Creates guard for type not T.
 *
 * @param guard - Guard for type T.
 * @returns Guard for type not T.
 */
function _notFactory(guard) {
    return (value) => !guard(value);
}
/**
 * Checks if value is _null_.
 *
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
function _null(value) {
    return value === null;
}
exports.null = _null;
/**
 * Checks if value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
function _true(value) {
    return value === true;
}
exports.true = _true;
/**
 * Checks if value is _undefined_.
 *
 * @param value - Value.
 * @returns _True_ if value is _undefined_, _false_ otherwise.
 */
function _undefined(value) {
    return value === undefined;
}
exports.undefined = _undefined;
/**
 * Checks if object has optional property.
 *
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
 *
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