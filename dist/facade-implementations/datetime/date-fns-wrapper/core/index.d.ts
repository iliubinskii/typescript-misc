import type { Locale } from "date-fns";
import type { strings } from "../../../../types";
export declare const defaultOptions: Options;
export declare const formatStrings: strings;
export type FirstDayOfWeek = 0 | 1;
export interface Options {
    readonly firstDayOfWeek: FirstDayOfWeek;
    readonly locale: Locale;
    readonly pm: boolean;
}
export interface PartialOptions extends Partial<Options> {
}
//# sourceMappingURL=index.d.ts.map