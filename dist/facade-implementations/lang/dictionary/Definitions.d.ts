import type { Rec, strings } from "../../../types";
import type { PluralReduce, RawLanguage, WordInfo } from "./core";
import { Definition } from "./Definition";
import type { lang } from "../../../facades";
export declare class Definitions {
    readonly keys: Rec<lang.Transforms, lang.Transforms>;
    readonly pluralReduce: PluralReduce;
    /**
     * Creates class instance.
     * @param raw - Language definition.
     */
    constructor(raw: RawLanguage);
    /**
     * Returns word based on context, count, and replacements.
     * @param key - Key.
     * @param context - Context.
     * @param count - Count for plural form.
     * @param replacements - Replacements.
     * @param forms - Candidate word forms.
     * @returns Word.
     */
    get(key: string, context: lang.Context | undefined, count: number, replacements: ReadonlyMap<string, string>, forms?: strings | string): WordInfo;
    /**
     * Checks if dictionary has word.
     * @param key - Key.
     * @returns _True_ if dictionary has word, _false_ otherwise.
     */
    has(key: string): boolean;
    protected readonly wordForms: ReadonlyMap<string, strings>;
    protected readonly words: ReadonlyMap<string, Definition>;
}
//# sourceMappingURL=Definitions.d.ts.map