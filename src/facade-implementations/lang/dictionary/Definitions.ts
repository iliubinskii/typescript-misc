import * as _ from "lodash-commonjs-es";
import type { Entry, Rec, strings } from "../../../types";
import type {
  PluralReduce,
  RawDefinition,
  RawDefinitions,
  RawLanguage,
  WordInfo
} from "./core";
import { ReadonlyMap, assert, is, o, s } from "../../../functions";
import { Definition } from "./Definition";
import type { lang } from "../../../facades";

export class Definitions {
  public readonly keys: Rec<lang.Transforms, lang.Transforms>;

  public readonly pluralReduce: PluralReduce;

  /**
   * Creates class instance.
   * @param raw - Language definition.
   */
  public constructor(raw: RawLanguage) {
    validate(raw);

    const keys = o.fromEntries(
      _.flatMap(o.keys(raw.words), key => [
        [s.lcFirst(key), s.lcFirst(key)],
        [s.ucFirst(key), s.ucFirst(key)],
        [key.toLowerCase(), key.toLowerCase()],
        [key.toUpperCase(), key.toUpperCase()]
      ])
    );

    const words = new ReadonlyMap(
      _.flatMap(
        o.entries(raw.words),
        ([key, value]): ReadonlyArray<Entry<string, Definition>> => [
          [
            s.lcFirst(key),
            new Definition(
              map(value, x => s.lcFirst(x)),
              s.lcFirst(key)
            )
          ],
          [
            s.ucFirst(key),
            new Definition(
              map(value, x => s.ucFirst(x)),
              s.ucFirst(key)
            )
          ],
          [
            key.toLowerCase(),
            new Definition(
              map(value, x => x.toLowerCase()),
              key.toLowerCase()
            )
          ],
          [
            key.toUpperCase(),
            new Definition(
              map(value, x => x.toUpperCase()),
              key.toUpperCase()
            )
          ]
        ]
      )
    );

    this.keys = keys as typeof this.keys;
    this.pluralReduce = raw.pluralReduce;
    this.wordForms = new ReadonlyMap(o.entries(raw.wordForms));
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
  public get(
    key: string,
    context: lang.Context | undefined,
    count: number,
    replacements: ReadonlyMap<string, string>,
    forms: strings | string = []
  ): WordInfo {
    forms = is.string(forms) ? (this.wordForms.get(forms) ?? [forms]) : forms;

    const definition = this.words.get(key);

    assert.not.empty(definition, `Unknown word: ${key}`);

    return definition.get(this, context, count, replacements, forms);
  }

  /**
   * Checks if dictionary has word.
   * @param key - Key.
   * @returns _True_ if dictionary has word, _false_ otherwise.
   */
  public has(key: string): boolean {
    return this.words.has(key);
  }

  protected readonly wordForms: ReadonlyMap<string, strings>;

  protected readonly words: ReadonlyMap<string, Definition>;
}

/**
 * Applies callback to raw definition.
 * @param definition - Raw definition.
 * @param callback - Callback.
 * @returns Raw definition.
 */
function map(definition: RawDefinition, callback: Callback): RawDefinition {
  switch (typeof definition) {
    case "string": {
      return callback(definition);
    }

    case "object": {
      if (is.array(definition)) {
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
function mapDefinitions(
  definitions: RawDefinitions,
  callback: Callback
): RawDefinitions {
  return o.map(
    definitions,
    (definition): RawDefinition => map(definition, callback)
  );
}

/**
 * Validates language definition.
 * @param raw - Language definition.
 */
function validate(raw: RawLanguage): void {
  assert.toBeTrue(
    o.every(
      raw.wordForms,
      (forms, key) =>
        key === key.toLowerCase() &&
        forms.every(form => form === form.toLowerCase())
    ),
    "Expecting lowercase word forms"
  );
}

interface Callback {
  /**
   * Callback.
   * @param str - String.
   * @returns Result.
   */
  (str: string): string;
}
