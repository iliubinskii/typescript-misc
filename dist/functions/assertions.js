"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = exports.map = exports.indexedObject = exports.array = exports.not = void 0;
exports.boolean = boolean;
exports.byGuard = byGuard;
exports.callable = callable;
exports.constructor = constructor;
exports.empty = empty;
exports.enumeration = enumeration;
exports.instanceOf = instanceOf;
exports.instancesOf = instancesOf;
exports.numStr = numStr;
exports.number = number;
exports.object = object;
exports.propertyKey = propertyKey;
exports.string = string;
exports.stringU = stringU;
exports.symbol = symbol;
exports.toBeFalse = toBeFalse;
exports.toBeTrue = toBeTrue;
exports.wrapError = wrapError;
const tslib_1 = require("tslib");
const is = tslib_1.__importStar(require("./guards"));
const errors_1 = require("./errors");
const core_1 = require("./core");
exports.not = {
    empty: (value, error) => {
        byGuard(value, is.not.empty, error);
    }
};
exports.array = (0, core_1.defineFn)((value, error) => {
    byGuard(value, is.array, error);
}, {
    of: (value, guard, error) => {
        byGuard(value, is.factory(is.array.of, guard), error);
    }
});
exports.indexedObject = (0, core_1.defineFn)((value, error) => {
    byGuard(value, is.indexedObject, error);
}, {
    of: (value, guard, error) => {
        byGuard(value, is.factory(is.indexedObject.of, guard), error);
    }
});
exports.map = (0, core_1.defineFn)((value, error) => {
    byGuard(value, is.map, error);
}, {
    of: (value, keyGuard, valueGuard, error) => {
        byGuard(value, is.factory(is.map.of, keyGuard, valueGuard), error);
    }
});
exports.set = (0, core_1.defineFn)((value, error) => {
    byGuard(value, is.set, error);
}, {
    of: (value, guard, error) => {
        byGuard(value, is.factory(is.set.of, guard), error);
    }
});
/**
 * Asserts that value is a boolean.
 * @param value - Value.
 * @param error - Error.
 */
function boolean(value, error) {
    byGuard(value, is.boolean, error);
}
/**
 * Asserts that value type is T.
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 */
function byGuard(value, guard, error) {
    if (guard(value)) {
        // Valid
    }
    else
        throw toError(error);
}
/**
 * Asserts that value type is T.
 * @param value - Value.
 * @param error - Error.
 */
function callable(value, error) {
    byGuard(value, is.callable, error);
}
/**
 * Asserts that value type is T.
 * @param value - Value.
 * @param error - Error.
 */
function constructor(value, error) {
    byGuard(value, is.constructor, error);
}
/**
 * Asserts that value type is empty.
 * @param value - Value.
 * @param error - Error.
 */
function empty(value, error) {
    byGuard(value, is.empty, error);
}
/**
 * Asserts that value type is T.
 * @param value - Value.
 * @param en - Validation object.
 * @param error - Error.
 */
function enumeration(value, en, error) {
    byGuard(value, is.factory(is.enumeration, en), error);
}
/**
 * Asserts that value type is T.
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 */
function instanceOf(value, ctor, error) {
    byGuard(value, is.factory(is.instanceOf, ctor), error);
}
/**
 * Asserts that value type is T[].
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 */
function instancesOf(value, ctor, error) {
    byGuard(value, is.factory(is.instancesOf, ctor), error);
}
/**
 * Asserts that value type is NumStr.
 * @param value - Value.
 * @param error - Error.
 */
function numStr(value, error) {
    byGuard(value, is.numStr, error);
}
/**
 * Asserts that value is a number.
 * @param value - Value.
 * @param error - Error.
 */
function number(value, error) {
    byGuard(value, is.number, error);
}
/**
 * Asserts that value is an object.
 * @param value - Value.
 * @param error - Error.
 */
function object(value, error) {
    byGuard(value, is.object, error);
}
/**
 * Asserts that value type is PropertyKey.
 * @param value - Value.
 * @param error - Error.
 */
function propertyKey(value, error) {
    byGuard(value, is.propertyKey, error);
}
/**
 * Asserts that value is a string.
 * @param value - Value.
 * @param error - Error.
 */
function string(value, error) {
    byGuard(value, is.string, error);
}
/**
 * Asserts that value is a string.
 * @param value - Value.
 * @param error - Error.
 */
function stringU(value, error) {
    byGuard(value, is.stringU, error);
}
/**
 * Asserts that value is a symbol.
 * @param value - Value.
 * @param error - Error.
 */
function symbol(value, error) {
    byGuard(value, is.symbol, error);
}
/**
 * Asserts value to be _false_.
 * @param value - Value.
 * @param error - Error.
 */
function toBeFalse(value, error) {
    byGuard(value, is.false, error);
}
/**
 * Asserts value to be _true_.
 * @param value - Value.
 * @param error - Error.
 */
function toBeTrue(value, error) {
    byGuard(value, is.true, error);
}
/**
 * Wraps error.
 * @param e - Error.
 * @returns Wrapped error.
 */
function wrapError(e) {
    return () => e;
}
/**
 * Builds error.
 * @param error - Error.
 * @returns Error.
 */
function toError(error) {
    switch (typeof error) {
        case "function": {
            return error();
        }
        case "string":
        case "undefined": {
            return new errors_1.AssertionError(error);
        }
    }
}
//# sourceMappingURL=assertions.js.map