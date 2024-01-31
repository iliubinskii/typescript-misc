import { defaultOptions, formatStrings } from "./core";
import { isValid, parse } from "date-fns";
import { DateTime } from "./DateTime";
/**
 * Implements datetime facade.
 *
 * @param options - Options.
 * @returns Datetime facade implementation.
 */
export function dateFnsWrapper(options) {
    const combined = { ...defaultOptions, ...options };
    return {
        create: (date) => new DateTime(date, combined),
        now: () => new DateTime(undefined, combined).toString(),
        time: () => Date.now(),
        timeSec: () => Date.now() / 1000,
        validate: (date) => {
            const now = Date.now();
            return formatStrings.some(formatString => isValid(parse(date, formatString, now)));
        }
    };
}
//# sourceMappingURL=index.js.map