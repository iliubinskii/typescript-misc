"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jestSetup = exports.jestReset = void 0;
const tslib_1 = require("tslib");
require("jest-extended");
const jest_internal_1 = require("./jest.internal");
const all_1 = tslib_1.__importDefault(require("jest-extended/all"));
/**
 * Jest reset.
 */
function jestReset() {
    jest.clearAllMocks();
}
exports.jestReset = jestReset;
/**
 * Jest setup.
 */
function jestSetup() {
    expect.extend(all_1.default);
    expect.extend(jest_internal_1.matchers);
    jest.spyOn(console, "error").mockImplementation(errorMock);
    jest.spyOn(console, "warn").mockImplementation(warnMock);
    jestReset();
    function errorMock(...args) {
        (0, jest_internal_1.error)(...args);
        throw new Error("Console error");
    }
    function warnMock(...args) {
        (0, jest_internal_1.warn)(...args);
        throw new Error("Console warn");
    }
}
exports.jestSetup = jestSetup;
//# sourceMappingURL=jest.js.map