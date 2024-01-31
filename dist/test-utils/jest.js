"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jestSetup = exports.jestReset = void 0;
const tslib_1 = require("tslib");
require("jest-extended");
const facade_implementations_1 = require("../facade-implementations");
const facades_1 = require("../facades");
const functions_1 = require("../functions");
const jest_internal_1 = require("./jest.internal");
const all_1 = tslib_1.__importDefault(require("jest-extended/all"));
exports.jestReset = (0, functions_1.defineFn)(
/**
 * Jest reset.
 */
() => {
    jest.clearAllMocks();
    facades_1.datetime.setImplementation((0, facade_implementations_1.dateFnsWrapper)());
    facades_1.dump.setImplementation(facade_implementations_1.jsonDumper);
    facades_1.faker.setImplementation(facade_implementations_1.loremIpsumWrapper);
    facade_implementations_1.loremIpsumWrapper.configure((0, functions_1.typedef)({
        maxSentences: 2,
        maxWords: 3,
        minSentences: 2,
        minWords: 3
    }));
}, {
    /**
     * Jest reset.
     *
     * @param definitions - Language definitions.
     */
    dictionary: (definitions) => {
        facades_1.lang.setImplementation(facade_implementations_1.dictionary.Dictionary.create(definitions));
    }
});
exports.jestSetup = (0, functions_1.defineFn)(
/**
 * Jest setup.
 */
() => {
    expect.extend(all_1.default);
    expect.extend(jest_internal_1.matchers);
    jest.spyOn(console, "error").mockImplementation(errorMock);
    jest.spyOn(console, "warn").mockImplementation(warnMock);
    (0, exports.jestReset)();
    function errorMock(...args) {
        (0, jest_internal_1.error)(...args);
        throw new Error("Console error");
    }
    function warnMock(...args) {
        (0, jest_internal_1.warn)(...args);
        throw new Error("Console warn");
    }
}, {
    /**
     * Jest setup.
     *
     * @param definitions - Language definitions.
     */
    dictionary: (definitions) => {
        exports.jestReset.dictionary(definitions);
    }
});
//# sourceMappingURL=jest.js.map