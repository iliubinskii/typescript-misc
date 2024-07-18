"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFnsWrapper = dateFnsWrapper;
const core_1 = require("./core");
const date_fns_1 = require("date-fns");
const DateTime_1 = require("./DateTime");
/**
 * Implements datetime facade.
 * @param options - Options.
 * @returns Datetime facade implementation.
 */
function dateFnsWrapper(options) {
    const combined = { ...core_1.defaultOptions, ...options };
    return {
        create: (date) => new DateTime_1.DateTime(date, combined),
        now: () => new DateTime_1.DateTime(undefined, combined).toString(),
        time: () => Date.now(),
        timeSec: () => Date.now() / 1000,
        validate: (date) => {
            const now = Date.now();
            return core_1.formatStrings.some(formatString => (0, date_fns_1.isValid)((0, date_fns_1.parse)(date, formatString, now)));
        }
    };
}
//# sourceMappingURL=index.js.map