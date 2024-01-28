"use strict";
/* eslint-disable misc/ts-misc/functions/object/prefer-entries -- Ok */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unpadMultiline = exports.ucFirst = exports.trimTrailingEmptyLines = exports.trimStart = exports.trimLeadingEmptyLines = exports.trimEnd = exports.trailingSpaces = exports.singleLine = exports.replacePairs = exports.replaceAll = exports.multiline = exports.lines = exports.leadingSpaces = exports.lcFirst = exports.firstLine = exports.escapeRegExpSpecialChars = exports.empty = exports.detectEol = exports.path = exports.Eol = void 0;
const tslib_1 = require("tslib");
const as = tslib_1.__importStar(require("./inline-assertions"));
var Eol;
(function (Eol) {
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    Eol["Unix"] = "\n";
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    Eol["Win"] = "\r\n";
})(Eol || (exports.Eol = Eol = {}));
var path;
(function (path_1) {
    /**
     * Adds leading slash.
     *
     * @param path - Path.
     * @returns New string with leading slash added.
     */
    function addLeadingSlash(
    // eslint-disable-next-line misc/no-shadow -- Ok
    path) {
        return `/${removeLeadingSlash(path)}`;
    }
    path_1.addLeadingSlash = addLeadingSlash;
    /**
     * Adds trailing slash.
     *
     * @param path - Path.
     * @returns New string with trailing slash added.
     */
    function addTrailingSlash(
    // eslint-disable-next-line misc/no-shadow -- Ok
    path) {
        return `${removeTrailingSlash(path)}/`;
    }
    path_1.addTrailingSlash = addTrailingSlash;
    /**
     * Canonicalizes path.
     *
     * @param path - Path.
     * @returns Canonical path.
     */
    function canonicalize(
    // eslint-disable-next-line misc/no-shadow -- Ok
    path) {
        return path.replace(/[/\\]+/gu, "/");
    }
    path_1.canonicalize = canonicalize;
    /**
     * Creates path from parts.
     *
     * @param parts - Parts.
     * @returns Path.
     */
    function join(...parts) {
        return canonicalize(parts.join("/"));
    }
    path_1.join = join;
    /**
     * Removes leading slash.
     *
     * @param path - Path.
     * @returns New string with leading slash removed.
     */
    function removeLeadingSlash(
    // eslint-disable-next-line misc/no-shadow -- Ok
    path) {
        return canonicalize(path).replace(/^\//u, "");
    }
    path_1.removeLeadingSlash = removeLeadingSlash;
    /**
     * Removes trailing slash.
     *
     * @param path - Path.
     * @returns New string with trailing slash removed.
     */
    function removeTrailingSlash(
    // eslint-disable-next-line misc/no-shadow -- Ok
    path) {
        return canonicalize(path).replace(/\/$/u, "");
    }
    path_1.removeTrailingSlash = removeTrailingSlash;
})(path || (exports.path = path = {}));
/**
 * Detects EOL sequence.
 *
 * @param str - String.
 * @returns EOL sequence.
 */
function detectEol(str) {
    return str.includes("\r\n") ? Eol.Win : Eol.Unix;
}
exports.detectEol = detectEol;
/**
 * Checks if string consists of spaces.
 *
 * @param str - String.
 * @returns _True_ if string consists of spaces, _false_ otherwise.
 */
function empty(str) {
    return /^\s*$/u.test(str);
}
exports.empty = empty;
/**
 * Escapes regular expression special characters.
 *
 * @param str - String.
 * @returns Escaped string.
 */
// eslint-disable-next-line misc/max-identifier-blocks -- Ok
function escapeRegExpSpecialChars(str) {
    return str.replace(/[$()*+.?[\\\]^{|}]/gu, "\\$&").replace(/-/gu, "\\x2d");
}
exports.escapeRegExpSpecialChars = escapeRegExpSpecialChars;
/**
 * Returns first line.
 *
 * @param str - String.
 * @returns First line.
 */
function firstLine(str) {
    return as.not.empty(lines(str)[0]);
}
exports.firstLine = firstLine;
/**
 * Converts first letter to lower case.
 *
 * @param str - String.
 * @returns Converted string.
 */
function lcFirst(str) {
    return str ? str.charAt(0).toLowerCase() + str.slice(1) : str;
}
exports.lcFirst = lcFirst;
/**
 * Extracts leading spaces.
 *
 * @param str - String.
 * @returns String containing leading spaces.
 */
function leadingSpaces(str) {
    return str.slice(0, str.length - trimStart(str).length);
}
exports.leadingSpaces = leadingSpaces;
/**
 * Splits string into lines.
 *
 * @param str - String.
 * @returns Array of strings.
 */
function lines(str) {
    return str.split(/\r\n|\n/u);
}
exports.lines = lines;
/**
 * Checks if string is multiline.
 *
 * @param str - String.
 * @returns _True_ if string is multiline, _false_ otherwise.
 */
function multiline(str) {
    return str.includes("\n");
}
exports.multiline = multiline;
/**
 * Replaces all occurrences of search term.
 *
 * @param str - String.
 * @param search - Search term.
 * @param replace - Replacement.
 * @returns New string with replacements done.
 */
function replaceAll(str, search, replace) {
    return str.replace(
    // eslint-disable-next-line security/detect-non-literal-regexp -- Ok
    new RegExp(escapeRegExpSpecialChars(search), "gu"), replace);
}
exports.replaceAll = replaceAll;
/**
 * Replaces all occurrences of search term.
 *
 * @param str - String.
 * @param pairs - Search-replace pairs.
 * @returns New string with replacements done.
 */
function replacePairs(str, pairs) {
    let result = str;
    for (const [search, replace] of Object.entries(pairs))
        result = replaceAll(result, search, replace);
    return result;
}
exports.replacePairs = replacePairs;
/**
 * Checks if string is single-line.
 *
 * @param str - String.
 * @returns _True_ if string is single-line, _false_ otherwise.
 */
function singleLine(str) {
    return !str.includes("\n");
}
exports.singleLine = singleLine;
/**
 * Extracts trailing spaces.
 *
 * @param str - String.
 * @returns String containing trailing spaces.
 */
function trailingSpaces(str) {
    return str.slice(trimEnd(str).length);
}
exports.trailingSpaces = trailingSpaces;
/**
 * Trims string.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
function trimEnd(str) {
    return str.replace(/(^|\S)\s+$/u, "$1");
}
exports.trimEnd = trimEnd;
/**
 * Trims leading empty lines.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
function trimLeadingEmptyLines(str) {
    const leadingLines = lines(leadingSpaces(str));
    return as.not.empty(leadingLines[leadingLines.length - 1]) + trimStart(str);
}
exports.trimLeadingEmptyLines = trimLeadingEmptyLines;
/**
 * Trims string.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
function trimStart(str) {
    return str.replace(/^\s+/u, "");
}
exports.trimStart = trimStart;
/**
 * Trims trailing empty lines.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
function trimTrailingEmptyLines(str) {
    const trailingLines = lines(trailingSpaces(str));
    return trimEnd(str) + as.not.empty(trailingLines[0]);
}
exports.trimTrailingEmptyLines = trimTrailingEmptyLines;
/**
 * Converts first letter to upper case.
 *
 * @param str - String.
 * @returns New string.
 */
function ucFirst(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}
exports.ucFirst = ucFirst;
/**
 * Unpads multiline string.
 *
 * @param str - String.
 * @returns Unpadded string.
 */
function unpadMultiline(str) {
    const matches = /^(?:\n|\r\n)\s+/u.exec(str);
    return matches
        ? // eslint-disable-next-line misc/ts-misc/functions/guards/not-empty-always-true -- Wait for eslint-plugin-misc update
            replaceAll(str.trim(), as.not.empty(matches[0]), detectEol(str))
        : str;
}
exports.unpadMultiline = unpadMultiline;
//# sourceMappingURL=string.js.map