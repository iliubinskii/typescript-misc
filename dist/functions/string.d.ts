import type { IndexedRecord, strings } from "../types";
export declare enum Eol {
    Unix = "\n",
    Win = "\r\n"
}
export declare namespace path {
    /**
     * Adds leading slash.
     *
     * @param path - Path.
     * @returns New string with leading slash added.
     */
    function addLeadingSlash(path: string): string;
    /**
     * Adds trailing slash.
     *
     * @param path - Path.
     * @returns New string with trailing slash added.
     */
    function addTrailingSlash(path: string): string;
    /**
     * Canonicalizes path.
     *
     * @param path - Path.
     * @returns Canonical path.
     */
    function canonicalize(path: string): string;
    /**
     * Creates path from parts.
     *
     * @param parts - Parts.
     * @returns Path.
     */
    function join(...parts: strings): string;
    /**
     * Removes leading slash.
     *
     * @param path - Path.
     * @returns New string with leading slash removed.
     */
    function removeLeadingSlash(path: string): string;
    /**
     * Removes trailing slash.
     *
     * @param path - Path.
     * @returns New string with trailing slash removed.
     */
    function removeTrailingSlash(path: string): string;
}
/**
 * Detects EOL sequence.
 *
 * @param str - String.
 * @returns EOL sequence.
 */
export declare function detectEol(str: string): Eol;
/**
 * Checks if string consists of spaces.
 *
 * @param str - String.
 * @returns _True_ if string consists of spaces, _false_ otherwise.
 */
export declare function empty(str: string): boolean;
/**
 * Escapes regular expression special characters.
 *
 * @param str - String.
 * @returns Escaped string.
 */
export declare function escapeRegExpSpecialChars(str: string): string;
/**
 * Returns first line.
 *
 * @param str - String.
 * @returns First line.
 */
export declare function firstLine(str: string): string;
/**
 * Converts first letter to lower case.
 *
 * @param str - String.
 * @returns Converted string.
 */
export declare function lcFirst(str: string): string;
/**
 * Extracts leading spaces.
 *
 * @param str - String.
 * @returns String containing leading spaces.
 */
export declare function leadingSpaces(str: string): string;
/**
 * Splits string into lines.
 *
 * @param str - String.
 * @returns Array of strings.
 */
export declare function lines(str: string): strings;
/**
 * Checks if string is multiline.
 *
 * @param str - String.
 * @returns _True_ if string is multiline, _false_ otherwise.
 */
export declare function multiline(str: string): boolean;
/**
 * Replaces all occurrences of search term.
 *
 * @param str - String.
 * @param search - Search term.
 * @param replace - Replacement.
 * @returns New string with replacements done.
 */
export declare function replaceAll(str: string, search: string, replace: string): string;
/**
 * Replaces all occurrences of search term.
 *
 * @param str - String.
 * @param pairs - Search-replace pairs.
 * @returns New string with replacements done.
 */
export declare function replacePairs(str: string, pairs: IndexedRecord<string>): string;
/**
 * Checks if string is single-line.
 *
 * @param str - String.
 * @returns _True_ if string is single-line, _false_ otherwise.
 */
export declare function singleLine(str: string): boolean;
/**
 * Extracts trailing spaces.
 *
 * @param str - String.
 * @returns String containing trailing spaces.
 */
export declare function trailingSpaces(str: string): string;
/**
 * Trims string.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export declare function trimEnd(str: string): string;
/**
 * Trims leading empty lines.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export declare function trimLeadingEmptyLines(str: string): string;
/**
 * Trims string.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export declare function trimStart(str: string): string;
/**
 * Trims trailing empty lines.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export declare function trimTrailingEmptyLines(str: string): string;
/**
 * Converts first letter to upper case.
 *
 * @param str - String.
 * @returns New string.
 */
export declare function ucFirst(str: string): string;
/**
 * Unpads multiline string.
 *
 * @param str - String.
 * @returns Unpadded string.
 */
export declare function unpadMultiline(str: string): string;
//# sourceMappingURL=string.d.ts.map