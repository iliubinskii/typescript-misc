"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknown = exports.symbolsU = exports.symbols = exports.symbolU = exports.symbol = exports.stringsU = exports.strings = exports.stringU = exports.string = exports.setsU = exports.sets = exports.setU = exports.set = exports.propertyKeysU = exports.propertyKeys = exports.propertyKeyU = exports.propertyKey = exports.objectsU = exports.objects = exports.objectU = exports.object = exports.numbersU = exports.numbers = exports.numberU = exports.number = exports.numStrsU = exports.numStrs = exports.numStrU = exports.numStr = exports.never = exports.mapsU = exports.maps = exports.mapU = exports.map = exports.indexedObjectsU = exports.indexedObjects = exports.indexedObject = exports.empty = exports.booleansU = exports.booleans = exports.booleanU = exports.boolean = exports.arraysU = exports.arrays = exports.arrayU = exports.array = exports.undefined = exports.true = exports.null = exports.false = void 0;
exports.instancesOf = exports.instanceOf = exports.enumeration = exports.constructor = exports.callable = exports.byGuard = exports.not = exports.unknownsU = exports.unknowns = void 0;
const tslib_1 = require("tslib");
const is = tslib_1.__importStar(require("./guards"));
const errors_1 = require("./errors");
const core_1 = require("./core");
exports.array = (0, core_1.defineFn)(factory(is.array), {
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
        throw new errors_1.AssertionError();
    }
});
exports.arrayU = factory(is.arrayU);
exports.arrays = factory(is.arrays);
exports.arraysU = factory(is.arraysU);
exports.boolean = factory(is.boolean);
exports.booleanU = factory(is.booleanU);
exports.booleans = factory(is.booleans);
exports.booleansU = factory(is.booleansU);
exports.empty = factory(is.empty);
exports.indexedObject = (0, core_1.defineFn)(factory(is.indexedObject), {
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
        throw new errors_1.AssertionError();
    }
});
exports.indexedObjects = factory(is.indexedObjects);
exports.indexedObjectsU = factory(is.indexedObjectsU);
exports.map = (0, core_1.defineFn)(factory(is.map), {
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
        throw new errors_1.AssertionError();
    }
});
exports.mapU = factory(is.mapU);
exports.maps = factory(is.maps);
exports.mapsU = factory(is.mapsU);
exports.never = factory(is.never);
exports.numStr = factory(is.numStr);
exports.numStrU = factory(is.numStrU);
exports.numStrs = factory(is.numStrs);
exports.numStrsU = factory(is.numStrsU);
exports.number = factory(is.number);
exports.numberU = factory(is.numberU);
exports.numbers = factory(is.numbers);
exports.numbersU = factory(is.numbersU);
exports.object = factory(is.object);
exports.objectU = factory(is.objectU);
exports.objects = factory(is.objects);
exports.objectsU = factory(is.objectsU);
exports.propertyKey = factory(is.propertyKey);
exports.propertyKeyU = factory(is.propertyKeyU);
exports.propertyKeys = factory(is.propertyKeys);
exports.propertyKeysU = factory(is.propertyKeyU);
exports.set = (0, core_1.defineFn)(factory(is.set), {
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
        throw new errors_1.AssertionError();
    }
});
exports.setU = factory(is.setU);
exports.sets = factory(is.sets);
exports.setsU = factory(is.setsU);
exports.string = factory(is.string);
exports.stringU = factory(is.stringU);
exports.strings = factory(is.strings);
exports.stringsU = factory(is.stringsU);
exports.symbol = factory(is.symbol);
exports.symbolU = factory(is.symbolU);
exports.symbols = factory(is.symbols);
exports.symbolsU = factory(is.symbolsU);
exports.unknown = factory(is.unknown);
exports.unknowns = factory(is.unknowns);
exports.unknownsU = factory(is.unknownsU);
exports.not = {
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
function byGuard(value, guard) {
    if (guard(value))
        return value;
    throw new errors_1.AssertionError();
}
exports.byGuard = byGuard;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
function callable(value) {
    if (is.callable(value))
        return value;
    throw new errors_1.AssertionError();
}
exports.callable = callable;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
function constructor(value) {
    if (is.constructor(value))
        return value;
    throw new errors_1.AssertionError();
}
exports.constructor = constructor;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param en - Validation object.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
function enumeration(value, en) {
    if (is.enumeration(value, en))
        return value;
    throw new errors_1.AssertionError();
}
exports.enumeration = enumeration;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
function instanceOf(value, ctor) {
    if (is.instanceOf(value, ctor))
        return value;
    throw new errors_1.AssertionError();
}
exports.instanceOf = instanceOf;
/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if value type is T[].
 * @throws Error otherwise.
 */
function instancesOf(value, ctor) {
    if (is.instancesOf(value, ctor))
        return value;
    throw new errors_1.AssertionError();
}
exports.instancesOf = instancesOf;
const _false = factory(is.false);
exports.false = _false;
const _null = factory(is.null);
exports.null = _null;
const _true = factory(is.true);
exports.true = _true;
const _undefined = factory(is.undefined);
exports.undefined = _undefined;
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
        throw new errors_1.AssertionError();
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
        throw new errors_1.AssertionError();
    };
}
//# sourceMappingURL=inline-assertions.js.map