import type { WordInfo } from "./core";
import type { lang } from "../../../facades";
import type { strings } from "../../../types";

export interface Definitions {
  /**
   * Returns word based on context, count, and replacements.
   * @param key - Key.
   * @param context - Context.
   * @param count - Count for plural form.
   * @param replacements - Replacements.
   * @param forms - Candidate word forms.
   * @returns Word.
   */
  readonly get: (
    key: string,
    context: lang.Context | undefined,
    count: number,
    replacements: ReadonlyMap<string, string>,
    forms?: strings | string
  ) => WordInfo;
}
