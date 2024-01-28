import type { Locale } from "date-fns";
import { enUS } from "date-fns/locale";
import type { strings } from "../../../../types";

export const defaultOptions: Options = {
  firstDayOfWeek: 0,
  locale: enUS,
  pm: true
};

export const formatStrings: strings = [
  "yyyy-M-d h:m:s a",
  "yyyy-M-d H:m:s",
  "yyyy-M-d h:m a",
  "yyyy-M-d H:m",
  "yyyy-M-d"
];

export type FirstDayOfWeek = 0 | 1;

export interface Options {
  readonly firstDayOfWeek: FirstDayOfWeek;
  readonly locale: Locale;
  readonly pm: boolean;
}

export interface PartialOptions extends Partial<Options> {}
