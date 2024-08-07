"use strict";
/* eslint-disable unicorn/no-null -- Ok */
Object.defineProperty(exports, "__esModule", { value: true });
exports.not = void 0;
exports.emptyToNull = emptyToNull;
exports.emptyToUndefined = emptyToUndefined;
exports.number = number;
exports.numberU = numberU;
exports.string = string;
exports.stringU = stringU;
const tslib_1 = require("tslib");
const is = tslib_1.__importStar(require("./guards"));
exports.not = {
    /**
     * Converts value to not empty.
     * @param value - Value.
     * @param defVal - Default value.
     * @returns Value if it is not empty, defVal otherwise.
     */
    empty: (value, defVal) => is.not.empty(value) ? value : defVal
};
/**
 * Unifies empty values.
 * @param value - Values.
 * @returns Unified value.
 */
function emptyToNull(value) {
    return is.not.empty(value) ? value : null;
}
/**
 * Unifies empty values.
 * @param value - Values.
 * @returns Unified value.
 */
function emptyToUndefined(value) {
    return is.not.empty(value) ? value : undefined;
}
/**
 * Converts value to a number.
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Converted value, defVal on failure.
 */
function number(value, defVal = 0) {
    return numberU(value) ?? defVal;
}
/**
 * Converts value to a number.
 * @param value - Value.
 * @returns Converted value, _undefined_ on failure.
 */
function numberU(value) {
    switch (typeof value) {
        case "boolean": {
            return Number(value);
        }
        case "number": {
            return value;
        }
        case "string": {
            if (value === "" || value === "\n" || value === "\r\n")
                return undefined;
            const result = Number(value);
            return Number.isNaN(result) ? undefined : result;
        }
        default: {
            return undefined;
        }
    }
}
/**
 * Converts value to a string.
 * @param value - Value.
 * @returns Converted value.
 */
function string(value) {
    return is.not.empty(value) ? String(value) : "";
}
/**
 * Converts value to type stringU.
 * @param value - Value.
 * @returns Converted value.
 */
function stringU(value) {
    const str = is.not.empty(value) ? String(value) : "";
    return str || undefined;
}
//# sourceMappingURL=converters.js.map