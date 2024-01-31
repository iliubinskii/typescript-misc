import "jest-extended";
import { dateFnsWrapper, dictionary, jsonDumper, loremIpsumWrapper } from "../facade-implementations";
import { datetime, dump, faker, lang } from "../facades";
import { defineFn, typedef } from "../functions";
import { error, matchers, warn } from "./jest.internal";
import jestExtendedMatchers from "jest-extended/all";
export const jestReset = defineFn(
/**
 * Jest reset.
 */
() => {
    jest.clearAllMocks();
    datetime.setImplementation(dateFnsWrapper());
    dump.setImplementation(jsonDumper);
    faker.setImplementation(loremIpsumWrapper);
    loremIpsumWrapper.configure(typedef({
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
        lang.setImplementation(dictionary.Dictionary.create(definitions));
    }
});
export const jestSetup = defineFn(
/**
 * Jest setup.
 */
() => {
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
}, {
    /**
     * Jest setup.
     *
     * @param definitions - Language definitions.
     */
    dictionary: (definitions) => {
        jestReset.dictionary(definitions);
    }
});
//# sourceMappingURL=jest.js.map