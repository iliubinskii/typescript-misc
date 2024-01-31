import * as _ from "lodash-commonjs-es";
import { ReadonlyMap, assert, is, o, s } from "../../../functions";
import { Definition } from "./Definition";
export class Definitions {
    /**
     * Creates class instance.
     *
     * @param raw - Language definition.
     */
    constructor(raw) {
        Object.defineProperty(this, "keys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pluralReduce", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "wordForms", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "words", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        validate(raw);
        const keys = o.fromEntries(_.flatMap(o.keys(raw.words), key => [
            [s.lcFirst(key), s.lcFirst(key)],
            [s.ucFirst(key), s.ucFirst(key)],
            [key.toLowerCase(), key.toLowerCase()],
            [key.toUpperCase(), key.toUpperCase()]
        ]));
        const words = new ReadonlyMap(_.flatMap(o.entries(raw.words), 
        // eslint-disable-next-line misc/typescript/prefer-array-type-alias -- Ok
        ([key, value]) => [
            [
                s.lcFirst(key),
                new Definition(map(value, x => s.lcFirst(x)), s.lcFirst(key))
            ],
            [
                s.ucFirst(key),
                new Definition(map(value, x => s.ucFirst(x)), s.ucFirst(key))
            ],
            [
                key.toLowerCase(),
                new Definition(map(value, x => x.toLowerCase()), key.toLowerCase())
            ],
            [
                key.toUpperCase(),
                new Definition(map(value, x => x.toUpperCase()), key.toUpperCase())
            ]
        ]));
        this.keys = keys;
        this.pluralReduce = raw.pluralReduce;
        this.wordForms = new ReadonlyMap(o.entries(raw.wordForms));
        this.words = words;
    }
    /**
     * Returns word based on context, count, and replacements.
     *
     * @param key - Key.
     * @param context - Context.
     * @param count - Count for plural form.
     * @param replacements - Replacements.
     * @param forms - Candidate word forms.
     * @returns Word.
     */
    get(key, context, count, replacements, forms = []) {
        forms = is.string(forms) ? this.wordForms.get(forms) ?? [forms] : forms;
        const definition = this.words.get(key);
        assert.not.empty(definition, `Unknown word: ${key}`);
        return definition.get(this, context, count, replacements, forms);
    }
    /**
     * Checks if dictionary has word.
     *
     * @param key - Key.
     * @returns _True_ if dictionary has word, _false_ otherwise.
     */
    has(key) {
        return this.words.has(key);
    }
}
/**
 * Applies callback to raw definition.
 *
 * @param definition - Raw definition.
 * @param callback - Callback.
 * @returns Raw definition.
 */
function map(definition, callback) {
    switch (typeof definition) {
        case "string":
            return callback(definition);
        case "object":
            if (is.array(definition)) {
                const definitions = mapDefinitions(definition[1], callback);
                return definition.length === 3
                    ? [definition[0], definitions, definition[2]]
                    : [definition[0], definitions];
            }
            return mapDefinitions(definition, callback);
    }
}
/**
 * Applies callback to raw definitions.
 *
 * @param definitions - Raw definitions.
 * @param callback - Callback.
 * @returns Raw definitions.
 */
function mapDefinitions(definitions, callback) {
    return o.map(definitions, (definition) => map(definition, callback));
}
/**
 * Validates language definition.
 *
 * @param raw - Language definition.
 */
function validate(raw) {
    assert.toBeTrue(o.every(raw.wordForms, (forms, key) => key === key.toLowerCase() &&
        forms.every(form => form === form.toLowerCase())), "Expecting lowercase word forms");
}
//# sourceMappingURL=Definitions.js.map