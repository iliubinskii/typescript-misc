import type { NumStr, Rec, types } from "../types";
import { createFacade } from "../functions";

declare global {
  namespace facades {
    namespace lang {
      // eslint-disable-next-line misc/typescript/no-empty-interfaces -- Ok
      interface Context {}

      // eslint-disable-next-line misc/typescript/no-empty-interfaces -- Ok
      interface Word {}
    }
  }
}

export const lang = createFacade<lang.Facade>("lang", {});

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace lang {
  export type Context = types.object.keys.Pick<
    facades.lang.Context,
    true,
    "extends->"
  >;

  export interface Dictionary<W extends Word, C extends Context> {
    /**
     * Sets context.
     *
     * @param context - Context.
     * @returns Dictionary.
     */
    readonly context: (context: C) => Lang<W, C>;
    /**
     * Returns word. Uses previosly set context, count and replacements.
     *
     * @param key - Word ID.
     * @returns Word.
     */
    readonly get: (key: Key) => string;
    /**
     * Returns word. Uses previosly set context, count and replacements.
     *
     * @param key - Word ID.
     * @returns Word.
     */
    readonly getIfExists: (key: string) => string;
    /**
     * Checks if word exists.
     *
     * @param key - Word ID.
     * @returns _True_ if word exists, _false_ otherwise.
     */
    readonly has: (key: string) => key is Key;
    readonly keys: Rec<Transforms<W>, Transforms>;
    /**
     * Wraps plain text.
     *
     * @param str - Plain text.
     * @returns Wrapped plain text.
     */
    readonly plain: (str: string) => Plain;
    /**
     * Sets count for plural form.
     *
     * @param count - Count for plural form.
     * @returns Dictionary.
     */
    readonly plural: (count: number) => Lang<W, C>;
    /**
     * Adds replacement.
     *
     * @param name - Name.
     * @param replacement - Value or word ID.
     * @returns Dictionary.
     */
    readonly with: (name: string, replacement: NumStr) => Lang<W, C>;
  }

  export type Facade = Lang<Word, Context>;

  export type Key<W extends Word = Word> = Plain | Transforms<W>;

  export type Lang<W extends Word, C extends Context> = Dictionary<W, C> &
    Rec<Transforms<W>, string>;

  export type Plain = `plain:${string}`;

  export type Transforms<W extends Word = Word> =
    | Capitalize<W>
    | Lowercase<W>
    | Uncapitalize<W>
    | Uppercase<W>;

  export type Word = types.object.keys.Pick<
    facades.lang.Word,
    true,
    "extends->"
  >;
}
