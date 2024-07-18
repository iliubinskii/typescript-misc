import * as is from "./guards";
import { AssertionError } from "./errors";
import { defineFn } from "./core";
export const not = {
    empty: (value, error) => {
        byGuard(value, is.not.empty, error);
    }
};
export const array = defineFn((value, error) => {
    byGuard(value, is.array, error);
}, {
    of: (value, guard, error) => {
        byGuard(value, is.factory(is.array.of, guard), error);
    }
});
export const indexedObject = defineFn((value, error) => {
    byGuard(value, is.indexedObject, error);
}, {
    of: (value, guard, error) => {
        byGuard(value, is.factory(is.indexedObject.of, guard), error);
    }
});
export const map = defineFn((value, error) => {
    byGuard(value, is.map, error);
}, {
    of: (value, keyGuard, valueGuard, error) => {
        byGuard(value, is.factory(is.map.of, keyGuard, valueGuard), error);
    }
});
export const set = defineFn((value, error) => {
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
export function boolean(value, error) {
    byGuard(value, is.boolean, error);
}
/**
 * Asserts that value type is T.
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 */
export function byGuard(value, guard, error) {
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
export function callable(value, error) {
    byGuard(value, is.callable, error);
}
/**
 * Asserts that value type is T.
 * @param value - Value.
 * @param error - Error.
 */
export function constructor(value, error) {
    byGuard(value, is.constructor, error);
}
/**
 * Asserts that value type is empty.
 * @param value - Value.
 * @param error - Error.
 */
export function empty(value, error) {
    byGuard(value, is.empty, error);
}
/**
 * Asserts that value type is T.
 * @param value - Value.
 * @param en - Validation object.
 * @param error - Error.
 */
export function enumeration(value, en, error) {
    byGuard(value, is.factory(is.enumeration, en), error);
}
/**
 * Asserts that value type is T.
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 */
export function instanceOf(value, ctor, error) {
    byGuard(value, is.factory(is.instanceOf, ctor), error);
}
/**
 * Asserts that value type is T[].
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 */
export function instancesOf(value, ctor, error) {
    byGuard(value, is.factory(is.instancesOf, ctor), error);
}
/**
 * Asserts that value type is NumStr.
 * @param value - Value.
 * @param error - Error.
 */
export function numStr(value, error) {
    byGuard(value, is.numStr, error);
}
/**
 * Asserts that value is a number.
 * @param value - Value.
 * @param error - Error.
 */
export function number(value, error) {
    byGuard(value, is.number, error);
}
/**
 * Asserts that value is an object.
 * @param value - Value.
 * @param error - Error.
 */
export function object(value, error) {
    byGuard(value, is.object, error);
}
/**
 * Asserts that value type is PropertyKey.
 * @param value - Value.
 * @param error - Error.
 */
export function propertyKey(value, error) {
    byGuard(value, is.propertyKey, error);
}
/**
 * Asserts that value is a string.
 * @param value - Value.
 * @param error - Error.
 */
export function string(value, error) {
    byGuard(value, is.string, error);
}
/**
 * Asserts that value is a string.
 * @param value - Value.
 * @param error - Error.
 */
export function stringU(value, error) {
    byGuard(value, is.stringU, error);
}
/**
 * Asserts that value is a symbol.
 * @param value - Value.
 * @param error - Error.
 */
export function symbol(value, error) {
    byGuard(value, is.symbol, error);
}
/**
 * Asserts value to be _false_.
 * @param value - Value.
 * @param error - Error.
 */
export function toBeFalse(value, error) {
    byGuard(value, is.false, error);
}
/**
 * Asserts value to be _true_.
 * @param value - Value.
 * @param error - Error.
 */
export function toBeTrue(value, error) {
    byGuard(value, is.true, error);
}
/**
 * Wraps error.
 * @param e - Error.
 * @returns Wrapped error.
 */
export function wrapError(e) {
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
            return new AssertionError(error);
        }
    }
}
//# sourceMappingURL=assertions.js.map