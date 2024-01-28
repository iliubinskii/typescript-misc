"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatStrings = exports.defaultOptions = void 0;
const locale_1 = require("date-fns/locale");
exports.defaultOptions = {
    firstDayOfWeek: 0,
    locale: locale_1.enUS,
    pm: true
};
exports.formatStrings = [
    "yyyy-M-d h:m:s a",
    "yyyy-M-d H:m:s",
    "yyyy-M-d h:m a",
    "yyyy-M-d H:m",
    "yyyy-M-d"
];
//# sourceMappingURL=index.js.map