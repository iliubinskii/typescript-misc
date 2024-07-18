import type { IndexedRecord, NumStr, PartialRecord, Rec, strings } from "../../../../types";
import type { lang } from "../../../../facades";
export declare const pluralReduce: PluralReduce & Readonly<PluralReduceInternational>;
export interface PluralReduce {
    /**
     * Reduces count for plural form.
     * @param count - Count.
     * @returns Reduced count.
     */
    (count: number): number;
}
export interface PluralReduceInternational {
    readonly ru: PluralReduce;
}
export type RawDefinition = RawDefinitions | string | readonly [NumStr, RawDefinitions, PartialRecord<lang.Context, NumStr>] | readonly [NumStr, RawDefinitions];
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
    readonly context?: lang.Context | undefined;
    readonly count: number;
    readonly forms: strings;
    readonly replacements: ReadonlyMap<string, string>;
    readonly value: string;
}
//# sourceMappingURL=index.d.ts.map