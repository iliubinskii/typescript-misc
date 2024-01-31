/* eslint-disable misc/typescript-misc/functions/object/prefer-entries -- Ok */

import * as as from "./inline-assertions";
import type { IndexedRecord, strings } from "../types";

export enum Eol {
  // eslint-disable-next-line misc/consistent-enum-members -- Ok
  Unix = "\n",
  // eslint-disable-next-line misc/consistent-enum-members -- Ok
  Win = "\r\n"
}

export namespace path {
  /**
   * Adds leading slash.
   *
   * @param path - Path.
   * @returns New string with leading slash added.
   */
  export function addLeadingSlash(
    // eslint-disable-next-line misc/no-shadow -- Ok
    path: string
  ): string {
    return `/${removeLeadingSlash(path)}`;
  }

  /**
   * Adds trailing slash.
   *
   * @param path - Path.
   * @returns New string with trailing slash added.
   */
  export function addTrailingSlash(
    // eslint-disable-next-line misc/no-shadow -- Ok
    path: string
  ): string {
    return `${removeTrailingSlash(path)}/`;
  }

  /**
   * Canonicalizes path.
   *
   * @param path - Path.
   * @returns Canonical path.
   */
  export function canonicalize(
    // eslint-disable-next-line misc/no-shadow -- Ok
    path: string
  ): string {
    return path.replace(/[/\\]+/gu, "/");
  }

  /**
   * Creates path from parts.
   *
   * @param parts - Parts.
   * @returns Path.
   */
  export function join(...parts: strings): string {
    return canonicalize(parts.join("/"));
  }

  /**
   * Removes leading slash.
   *
   * @param path - Path.
   * @returns New string with leading slash removed.
   */
  export function removeLeadingSlash(
    // eslint-disable-next-line misc/no-shadow -- Ok
    path: string
  ): string {
    return canonicalize(path).replace(/^\//u, "");
  }

  /**
   * Removes trailing slash.
   *
   * @param path - Path.
   * @returns New string with trailing slash removed.
   */
  export function removeTrailingSlash(
    // eslint-disable-next-line misc/no-shadow -- Ok
    path: string
  ): string {
    return canonicalize(path).replace(/\/$/u, "");
  }
}

/**
 * Detects EOL sequence.
 *
 * @param str - String.
 * @returns EOL sequence.
 */
export function detectEol(str: string): Eol {
  return str.includes("\r\n") ? Eol.Win : Eol.Unix;
}

/**
 * Checks if string consists of spaces.
 *
 * @param str - String.
 * @returns _True_ if string consists of spaces, _false_ otherwise.
 */
export function empty(str: string): boolean {
  return /^\s*$/u.test(str);
}

/**
 * Escapes regular expression special characters.
 *
 * @param str - String.
 * @returns Escaped string.
 */
// eslint-disable-next-line misc/max-identifier-blocks -- Ok
export function escapeRegExpSpecialChars(str: string): string {
  return str.replace(/[$()*+.?[\\\]^{|}]/gu, "\\$&").replace(/-/gu, "\\x2d");
}

/**
 * Returns first line.
 *
 * @param str - String.
 * @returns First line.
 */
export function firstLine(str: string): string {
  return as.not.empty(lines(str)[0]);
}

/**
 * Converts first letter to lower case.
 *
 * @param str - String.
 * @returns Converted string.
 */
export function lcFirst(str: string): string {
  return str ? str.charAt(0).toLowerCase() + str.slice(1) : str;
}

/**
 * Extracts leading spaces.
 *
 * @param str - String.
 * @returns String containing leading spaces.
 */
export function leadingSpaces(str: string): string {
  return str.slice(0, str.length - trimStart(str).length);
}

/**
 * Splits string into lines.
 *
 * @param str - String.
 * @returns Array of strings.
 */
export function lines(str: string): strings {
  return str.split(/\r\n|\n/u);
}

/**
 * Checks if string is multiline.
 *
 * @param str - String.
 * @returns _True_ if string is multiline, _false_ otherwise.
 */
export function multiline(str: string): boolean {
  return str.includes("\n");
}

/**
 * Replaces all occurrences of search term.
 *
 * @param str - String.
 * @param search - Search term.
 * @param replace - Replacement.
 * @returns New string with replacements done.
 */
export function replaceAll(
  str: string,
  search: string,
  replace: string
): string {
  return str.replace(
    // eslint-disable-next-line security/detect-non-literal-regexp -- Ok
    new RegExp(escapeRegExpSpecialChars(search), "gu"),
    replace
  );
}

/**
 * Replaces all occurrences of search term.
 *
 * @param str - String.
 * @param pairs - Search-replace pairs.
 * @returns New string with replacements done.
 */
export function replacePairs(
  str: string,
  pairs: IndexedRecord<string>
): string {
  let result = str;

  for (const [search, replace] of Object.entries(pairs))
    result = replaceAll(result, search, replace);

  return result;
}

/**
 * Checks if string is single-line.
 *
 * @param str - String.
 * @returns _True_ if string is single-line, _false_ otherwise.
 */
export function singleLine(str: string): boolean {
  return !str.includes("\n");
}

/**
 * Extracts trailing spaces.
 *
 * @param str - String.
 * @returns String containing trailing spaces.
 */
export function trailingSpaces(str: string): string {
  return str.slice(trimEnd(str).length);
}

/**
 * Trims string.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export function trimEnd(str: string): string {
  return str.replace(/(^|\S)\s+$/u, "$1");
}

/**
 * Trims leading empty lines.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export function trimLeadingEmptyLines(str: string): string {
  const leadingLines = lines(leadingSpaces(str));

  return as.not.empty(leadingLines[leadingLines.length - 1]) + trimStart(str);
}

/**
 * Trims string.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export function trimStart(str: string): string {
  return str.replace(/^\s+/u, "");
}

/**
 * Trims trailing empty lines.
 *
 * @param str - String.
 * @returns Trimmed string.
 */
export function trimTrailingEmptyLines(str: string): string {
  const trailingLines = lines(trailingSpaces(str));

  return trimEnd(str) + as.not.empty(trailingLines[0]);
}

/**
 * Converts first letter to upper case.
 *
 * @param str - String.
 * @returns New string.
 */
export function ucFirst(str: string): string {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}

/**
 * Unpads multiline string.
 *
 * @param str - String.
 * @returns Unpadded string.
 */
export function unpadMultiline(str: string): string {
  const matches = /^(?:\n|\r\n)\s+/u.exec(str);

  return matches
    ? // eslint-disable-next-line misc/typescript-misc/functions/guards/not-empty-always-true -- Wait for eslint-plugin-misc update
      replaceAll(str.trim(), as.not.empty(matches[0]), detectEol(str))
    : str;
}
