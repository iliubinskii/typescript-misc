import "jest-extended";
import type { Writable, unknowns } from "../types";
import {
  dateFnsWrapper,
  dictionary,
  jsonDumper,
  loremIpsumWrapper
} from "../facade-implementations";
import { datetime, dump, faker, lang } from "../facades";
import { defineFn, typedef } from "../functions";
import { error, matchers, warn } from "./jest.internal";
import type { Calls } from "./jest.internal";
import jestExtendedMatchers from "jest-extended/all";

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Checks that datetime equals expected value.
       *
       * @param expected - Expected value.
       * @returns Result object.
       */
      readonly datetimeToBe: (expected: string) => R;
      /**
       * Checks function execution result.
       *
       * @param expected - Function execution result.
       * @param expectedToThrow - Whether function is expected to throw error.
       * @returns Result.
       */
      readonly executionResultToBe: (
        expected: unknown,
        expectedToThrow?: boolean
      ) => R;
      /**
       * Checks that async function executes within expected time.
       *
       * @param expected - Expected time (ms).
       * @param precision - Precision (ms).
       * @returns Result.
       */
      readonly executionTimeToBe: (
        expected: number,
        precision?: number
      ) => Promise<R>;
      /**
       * Checks that mock calls are equal to expected value.
       *
       * @param expected - Expected calls.
       * @returns Result.
       */
      readonly mockCallsToBe: (...expected: Writable<Calls>) => R;
      /**
       * Checks promise execution result.
       *
       * @param expected - Promise execution result.
       * @param expectedToThrow - Whether promise is expected to throw error.
       * @returns Result.
       */
      readonly promiseResultToBe: (
        expected: unknown,
        expectedToThrow?: boolean
      ) => Promise<R>;
      /**
       * Checks that two objects are identical.
       *
       * @param expected - Object.
       * @returns Result.
       */
      readonly toBeSameAs: (expected: object) => R;
    }
  }
}

export const jestReset = defineFn(
  /**
   * Jest reset.
   */
  (): void => {
    jest.clearAllMocks();
    datetime.setImplementation(dateFnsWrapper());
    dump.setImplementation(jsonDumper);
    faker.setImplementation(loremIpsumWrapper);
    loremIpsumWrapper.configure(
      typedef<loremIpsumWrapper.Configuration>({
        maxSentences: 2,
        maxWords: 3,
        minSentences: 2,
        minWords: 3
      })
    );
  },
  {
    /**
     * Jest reset.
     *
     * @param definitions - Language definitions.
     */
    dictionary: (definitions: dictionary.Definitions): void => {
      lang.setImplementation(dictionary.Dictionary.create(definitions));
    }
  }
);

export const jestSetup = defineFn(
  /**
   * Jest setup.
   */
  (): void => {
    expect.extend(jestExtendedMatchers);
    expect.extend(matchers);
    jest.spyOn(console, "error").mockImplementation(errorMock);
    jest.spyOn(console, "warn").mockImplementation(warnMock);
    jestReset();

    function errorMock(...args: unknowns): void {
      error(...args);

      throw new Error("Console error");
    }

    function warnMock(...args: unknowns): void {
      warn(...args);

      throw new Error("Console warn");
    }
  },
  {
    /**
     * Jest setup.
     *
     * @param definitions - Language definitions.
     */
    dictionary: (definitions: dictionary.Definitions): void => {
      jestReset.dictionary(definitions);
    }
  }
);
