import type {
  IndexedRecord,
  NumStr,
  PartialRecord,
  Rec,
  strings
} from "../../../../types";
import { defineFn } from "../../../../functions";
import type { lang } from "../../../../facades";

export const pluralReduce = defineFn<PluralReduce, PluralReduceInternational>(
  /**
   * Reduces count for plural form.
   *
   * @param count - Count.
   * @returns Reduced count.
   */
  (count: number): number => {
    count = Math.abs(count);

    return Math.abs(count) === 1 ? 1 : 2;
  },
  {
    /**
     * Reduces count for plural form.
     *
     * @param count - Count.
     * @returns Reduced count.
     */
    ru: (count: number): number => {
      count = Math.abs(count);

      if (count >= 10 && count <= 19) return 5;

      if (count % 10 === 1) return 1;

      if (count % 10 === 2) return 2;

      if (count % 10 === 3) return 2;

      if (count % 10 === 4) return 2;

      return 5;
    }
  }
);

export interface PluralReduce {
  /**
   * Reduces count for plural form.
   *
   * @param count - Count.
   * @returns Reduced count.
   */
  (count: number): number;
}

export interface PluralReduceInternational {
  readonly ru: PluralReduce;
}

export type RawDefinition =
  | RawDefinitions
  | string
  // eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
  | readonly [NumStr, RawDefinitions, PartialRecord<lang.Context, NumStr>]
  // eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
  | readonly [NumStr, RawDefinitions];

export interface RawDefinitions {
  readonly [key: string]: RawDefinition;
}

export interface RawLanguage {
  readonly pluralReduce: PluralReduce;
  readonly wordForms: IndexedRecord<strings>;
  readonly words: Rec<lang.Word, RawDefinition>;
}

export type Rules = readonly strings[];

export interface WordInfo {
  readonly context?: lang.Context;
  readonly count: number;
  readonly forms: strings;
  readonly replacements: ReadonlyMap<string, string>;
  readonly value: string;
}
