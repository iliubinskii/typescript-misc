"use strict";
/* eslint-disable misc/typescript-misc/functions/json/prefer-json -- Ok */
/* eslint-disable unicorn/no-null -- Ok */
Object.defineProperty(exports, "__esModule", { value: true });
exports.neq = exports.eq = exports.encode = exports.decode = void 0;
const tslib_1 = require("tslib");
const a = tslib_1.__importStar(require("./array"));
const as = tslib_1.__importStar(require("./inline-assertions"));
const is = tslib_1.__importStar(require("./guards"));
const core_1 = require("./core");
/**
 * Decodes JSON string.
 *
 * @param source - JSON string.
 * @returns Decoded value.
 */
function decode(source) {
    try {
        if (is.not.empty(source))
            return JSON.parse(source, reviver);
    }
    catch {
        return null;
    }
    return null;
}
exports.decode = decode;
/**
 * Encodes to JSON string.
 *
 * @param source - Value to encode.
 * @returns JSON string.
 */
function encode(source) {
    return JSON.stringify(source, replacer);
}
exports.encode = encode;
/**
 * Compares two values as JSON strings.
 *
 * @param x - Value 1.
 * @param y - Value 2.
 * @returns _True_ if two values are equal, _false_ otherwise.
 */
function eq(x, y) {
    return encode(x) === encode(y);
}
exports.eq = eq;
/**
 * Compares two values as JSON strings.
 *
 * @param x - Value 1.
 * @param y - Value 2.
 * @returns _True_ if two values are not equal, _false_ otherwise.
 */
function neq(x, y) {
    return encode(x) !== encode(y);
}
exports.neq = neq;
var Type;
(function (Type) {
    // eslint-disable-next-line misc/consistent-enum-members, spellcheck/spell-checker -- Ok
    Type["map"] = "map-5702-3c89-3feb-75d4";
    // eslint-disable-next-line misc/consistent-enum-members, spellcheck/spell-checker -- Ok
    Type["set"] = "set-41ef-10c9-ae1f-15e8";
})(Type || (Type = {}));
const isEntry = is.tuple.factory(is.unknown, is.unknown);
const isEntries = is.factory(is.array.of, isEntry);
const isType = is.factory(is.enumeration, Type);
const isCustomData = is.object.factory({ type: isType, value: is.unknown }, {});
/**
 * JSON replacer.
 *
 * @param _key - Key.
 * @param value - Value.
 * @returns New value.
 */
function replacer(_key, value) {
    if (is.empty(value))
        return null;
    if (is.map(value))
        return {
            // eslint-disable-next-line spellcheck/spell-checker -- Ok
            type: "map-5702-3c89-3feb-75d4",
            value: a.fromIterable(value)
        };
    if (is.set(value))
        return {
            // eslint-disable-next-line spellcheck/spell-checker -- Ok
            type: "set-41ef-10c9-ae1f-15e8",
            value: a.fromIterable(value)
        };
    return value;
}
/**
 * JSON reviver.
 *
 * @param _key - Key.
 * @param value - Value.
 * @returns New value.
 */
function reviver(_key, value) {
    if (is.empty(value))
        return null;
    if (isCustomData(value))
        switch (value.type) {
            case Type.map:
                return new core_1.ReadonlyMap(as.byGuard(value.value, isEntries));
            case Type.set:
                return new core_1.ReadonlySet(as.byGuard(value.value, is.array));
        }
    return value;
}
//# sourceMappingURL=json.js.map