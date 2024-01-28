import type { TimeInterval, TimeUnit } from "./types";
import { createFacade } from "../functions";

export const faker = createFacade<faker.Facade>("faker", {});

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace faker {
  export interface Facade {
    /**
     * Generates random boolean.
     *
     * @param trueWeight - Weight of the _true_ value.
     * @param falseWeight - Weight of the _false_ value.
     * @returns Random boolean.
     */
    readonly boolean: (trueWeight?: number, falseWeight?: number) => boolean;
    /**
     * Generates random date.
     *
     * @param from - Min date.
     * @param to - Max date.
     * @param step - Step.
     * @param unit - Step unit.
     * @returns Random date.
     */
    readonly date: (
      from: TimeInterval | string,
      to: TimeInterval | string,
      step?: number,
      unit?: TimeUnit
    ) => string;
    /**
     * Generates random number.
     *
     * @param from - Min value.
     * @param to - Max value.
     * @param step - Step.
     * @returns Random number.
     */
    readonly number: (from: number, to: number, step?: number) => number;
    /**
     * Returns random element from an array.
     *
     * @param values - Values.
     * @returns Random element.
     */
    readonly oneOf: <T>(values: readonly T[]) => T;
    /**
     * Generates random paragraph.
     *
     * @param minSentences - Min sentences.
     * @param maxSentences - Max sentences.
     * @param minWords - Min words.
     * @param maxWords - Max words.
     * @returns Random paragraph.
     */
    readonly paragraph: (
      minSentences?: number,
      maxSentences?: number,
      minWords?: number,
      maxWords?: number
    ) => string;
    /**
     * Generates random phrase.
     *
     * @param minWords - Min words.
     * @param maxWords - Max words.
     * @returns Random phrase.
     */
    readonly phrase: (minWords?: number, maxWords?: number) => string;
    /**
     * Generates random sentence.
     *
     * @param minWords - Min words.
     * @param maxWords - Max words.
     * @returns Random sentence.
     */
    readonly sentence: (minWords?: number, maxWords?: number) => string;
    /**
     * Generates random word.
     *
     * @returns Random word.
     */
    readonly word: () => string;
  }
}
