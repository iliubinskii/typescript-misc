"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lang = exports.faker = exports.dump = exports.datetime = void 0;
const tslib_1 = require("tslib");
var datetime_1 = require("./datetime");
Object.defineProperty(exports, "datetime", { enumerable: true, get: function () { return datetime_1.datetime; } });
var dump_1 = require("./dump");
Object.defineProperty(exports, "dump", { enumerable: true, get: function () { return dump_1.dump; } });
var faker_1 = require("./faker");
Object.defineProperty(exports, "faker", { enumerable: true, get: function () { return faker_1.faker; } });
var lang_1 = require("./lang");
Object.defineProperty(exports, "lang", { enumerable: true, get: function () { return lang_1.lang; } });
tslib_1.__exportStar(require("./types"), exports);
//# sourceMappingURL=index.js.map