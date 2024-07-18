"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Definitions = void 0;
const tslib_1 = require("tslib");
const _ = tslib_1.__importStar(require("lodash-commonjs-es"));
const functions_1 = require("../../../functions");
const Definition_1 = require("./Definition");
class Definitions {
    keys;
    pluralReduce;
    /**
     * Creates class instance.
     * @param raw - Language definition.
     */
    constructor(raw) {
        validate(raw);
        const keys = functions_1.o.fromEntries(_.flatMap(functions_1.o.keys(raw.words), key => [
            [functions_1.s.lcFirst(key), functions_1.s.lcFirst(key)],
            [functions_1.s.ucFirst(key), functions_1.s.ucFirst(key)],
            [key.toLowerCase(), key.toLowerCase()],
            [key.toUpperCase(), key.toUpperCase()]
        ]));
        const words = new functions_1.ReadonlyMap(_.flatMap(functions_1.o.entries(raw.words), ([key, value]) => [
            [
                functions_1.s.lcFirst(key),
                new Definition_1.Definition(map(value, x => functions_1.s.lcFirst(x)), functions_1.s.lcFirst(key))
            ],
            [
                functions_1.s.ucFirst(key),
                new Definition_1.Definition(map(value, x => functions_1.s.ucFirst(x)), functions_1.s.ucFirst(key))
            ],
            [
                key.toLowerCase(),
                new Definition_1.Definition(map(value, x => x.toLowerCase()), key.toLowerCase())
            ],
            [
                key.toUpperCase(),
                new Definition_1.Definition(map(value, x => x.toUpperCase()), key.toUpperCase())
            ]
        ]));
        this.keys = keys;
        this.pluralReduce = raw.pluralReduce;
        this.wordForms = new functions_1.ReadonlyMap(functions_1.o.entries(raw.wordForms));
        this.words = words;
    }
    /**
     * Returns word based on context, count, and replacements.
     * @param key - Key.
     * @param context - Context.
     * @param count - Count for plural form.
     * @param replacements - Replacements.
     * @param forms - Candidate word forms.
     * @returns Word.
     */
    get(key, context, count, replacements, forms = []) {
        forms = functions_1.is.string(forms) ? (this.wordForms.get(forms) ?? [forms]) : forms;
        const definition = this.words.get(key);
        functions_1.assert.not.empty(definition, `Unknown word: ${key}`);
        return definition.get(this, context, count, replacements, forms);
    }
    /**
     * Checks if dictionary has word.
     * @param key - Key.
     * @returns _True_ if dictionary has word, _false_ otherwise.
     */
    has(key) {
        return this.words.has(key);
    }
    wordForms;
    words;
}
exports.Definitions = Definitions;
/**
 * Applies callback to raw definition.
 * @param definition - Raw definition.
 * @param callback - Callback.
 * @returns Raw definition.
 */
function map(definition, callback) {
    switch (typeof definition) {
        case "string": {
            return callback(definition);
        }
        case "object": {
            if (functions_1.is.array(definition)) {
                const definitions = mapDefinitions(definition[1], callback);
                return definition.length === 3
                    ? [definition[0], definitions, definition[2]]
                    : [definition[0], definitions];
            }
            return mapDefinitions(definition, callback);
        }
    }
}
/**
 * Applies callback to raw definitions.
 * @param definitions - Raw definitions.
 * @param callback - Callback.
 * @returns Raw definitions.
 */
function mapDefinitions(definitions, callback) {
    return functions_1.o.map(definitions, (definition) => map(definition, callback));
}
/**
 * Validates language definition.
 * @param raw - Language definition.
 */
function validate(raw) {
    functions_1.assert.toBeTrue(functions_1.o.every(raw.wordForms, (forms, key) => key === key.toLowerCase() &&
        forms.every(form => form === form.toLowerCase())), "Expecting lowercase word forms");
}
//# sourceMappingURL=Definitions.js.map