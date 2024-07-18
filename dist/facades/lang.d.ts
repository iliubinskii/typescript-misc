import type { NumStr, Rec, types } from "../types";
declare global {
    namespace facades {
        namespace lang {
            interface Context {
            }
            interface Word {
            }
        }
    }
}
export declare const lang: import("../functions").Facade<lang.Facade, unknown>;
export declare namespace lang {
    type Context = types.object.keys.Pick<facades.lang.Context, true, "extends->">;
    interface Dictionary<W extends Word, C extends Context> {
        /**
         * Sets context.
         * @param context - Context.
         * @returns Dictionary.
         */
        readonly context: (context: C) => Lang<W, C>;
        /**
         * Returns word. Uses previously set context, count and replacements.
         * @param key - Word ID.
         * @returns Word.
         */
        readonly get: (key: Key) => string;
        /**
         * Returns word. Uses previously set context, count and replacements.
         * @param key - Word ID.
         * @returns Word.
         */
        readonly getIfExists: (key: string) => string;
        /**
         * Checks if word exists.
         * @param key - Word ID.
         * @returns _True_ if word exists, _false_ otherwise.
         */
        readonly has: (key: string) => key is Key;
        readonly keys: Rec<Transforms<W>, Transforms>;
        /**
         * Wraps plain text.
         * @param str - Plain text.
         * @returns Wrapped plain text.
         */
        readonly plain: (str: string) => Plain;
        /**
         * Sets count for plural form.
         * @param count - Count for plural form.
         * @returns Dictionary.
         */
        readonly plural: (count: number) => Lang<W, C>;
        /**
         * Adds replacement.
         * @param name - Name.
         * @param replacement - Value or word ID.
         * @returns Dictionary.
         */
        readonly with: (name: string, replacement: NumStr) => Lang<W, C>;
    }
    type Facade = Lang<Word, Context>;
    type Key<W extends Word = Word> = Plain | Transforms<W>;
    type Lang<W extends Word, C extends Context> = Dictionary<W, C> & Rec<Transforms<W>, string>;
    type Plain = `plain:${string}`;
    type Transforms<W extends Word = Word> = Capitalize<W> | Lowercase<W> | Uncapitalize<W> | Uppercase<W>;
    type Word = types.object.keys.Pick<facades.lang.Word, true, "extends->">;
}
//# sourceMappingURL=lang.d.ts.map