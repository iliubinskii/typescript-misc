import * as _ from "lodash-commonjs-es";
import type { Writable } from "../types";

/**
 * Adds flag to regular expression.
 *
 * @param re - Regular expression.
 * @param flags - Flags.
 * @returns New regular expression.
 */
export function addFlags(re: RegExp, flags: string): RegExp {
  flags = _.uniq([...re.flags, ...flags]).join("");

  // eslint-disable-next-line security/detect-non-literal-regexp -- Ok
  return flags === re.flags ? re : new RegExp(re, flags);
}

/**
 * Finds all matches.
 *
 * @param str - String.
 * @param re - Regular expression.
 * @returns Matches.
 */
export function matchAll(str: string, re: RegExp): RegExpExecArrays {
  re = addFlags(re, "g");

  const result: Writable<RegExpExecArrays> = [];

  let match = re.exec(str);

  while (match) {
    result.push(match);
    match = re.exec(str);
  }

  return result;
}

export type RegExpExecArrays = readonly RegExpExecArray[];
