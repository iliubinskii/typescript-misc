import type { Options, PartialOptions } from "./core";
import { defaultOptions, formatStrings } from "./core";
import { isValid, parse } from "date-fns";
import { DateTime } from "./DateTime";
import type { NumStr } from "../../../types";
import type { datetime } from "../../../facades";

/**
 * Implements datetime facade.
 * @param options - Options.
 * @returns Datetime facade implementation.
 */
export function dateFnsWrapper(options?: PartialOptions): datetime.Facade {
  const combined: Options = { ...defaultOptions, ...options };

  return {
    create: (date?: Date | datetime.DateTime | NumStr) =>
      new DateTime(date, combined),
    now: () => new DateTime(undefined, combined).toString(),
    time: () => Date.now(),
    timeSec: () => Date.now() / 1000,
    validate: (date: string) => {
      const now = Date.now();

      return formatStrings.some(formatString =>
        isValid(parse(date, formatString, now))
      );
    }
  };
}
