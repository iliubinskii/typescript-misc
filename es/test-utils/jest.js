import "jest-extended";
import { error, matchers, warn } from "./jest.internal";
import jestExtendedMatchers from "jest-extended/all";
/**
 * Jest reset.
 */
export function jestReset() {
    jest.clearAllMocks();
}
/**
 * Jest setup.
 */
export function jestSetup() {
    expect.extend(jestExtendedMatchers);
    expect.extend(matchers);
    jest.spyOn(console, "error").mockImplementation(errorMock);
    jest.spyOn(console, "warn").mockImplementation(warnMock);
    jestReset();
    function errorMock(...args) {
        error(...args);
        throw new Error("Console error");
    }
    function warnMock(...args) {
        warn(...args);
        throw new Error("Console warn");
    }
}
//# sourceMappingURL=jest.js.map