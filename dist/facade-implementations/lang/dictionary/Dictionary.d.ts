import type { NumStr, Rec } from "../../../types";
import type { Definitions } from "./Definitions";
import type { lang } from "../../../facades";
export declare class Dictionary implements lang.Dictionary<lang.Word, lang.Context> {
    /**
     * Creates dictionary.
     * @param this - No this.
     * @param definitions - Language definitions.
     * @param context - Context.
     * @param count - Count for plural form.
     * @returns Dictionary.
     */
    static create(this: void, definitions: Definitions, context?: lang.Context, count?: number): lang.Facade;
    readonly keys: Rec<lang.Transforms, lang.Transforms>;
    context(context: lang.Context): lang.Facade;
    get(key: lang.Key): string;
    getIfExists(key: string): string;
    has(key: string): key is lang.Key;
    plain(this: void, str: string): lang.Plain;
    plural(count: number): lang.Facade;
    with(search: string, replace: NumStr): lang.Facade;
    protected readonly _context?: lang.Context | undefined;
    protected readonly count: number;
    protected readonly definitions: Definitions;
    protected readonly facade: lang.Facade;
    protected readonly subs: Map<NumStr, lang.Facade>;
    /**
     * Creates class instance.
     * @param definitions - Language definitions.
     * @param context - Context.
     * @param count - Count for plural form.
     */
    protected constructor(definitions: Definitions, context?: lang.Context, count?: number);
    /**
     * Reduces count for plural form.
     * @param count - Count.
     * @returns Reduced count.
     */
    protected pluralReduce(count: number): number;
}
//# sourceMappingURL=Dictionary.d.ts.map