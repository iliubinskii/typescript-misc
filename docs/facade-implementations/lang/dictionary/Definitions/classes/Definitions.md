[**Typescript library**](../../../../../index.md) • **Docs**

***

[Typescript library](../../../../../modules.md) / [facade-implementations/lang/dictionary/Definitions](../index.md) / Definitions

# Class: Definitions

## Constructors

### new Definitions()

> **new Definitions**(`raw`): [`Definitions`](Definitions.md)

Creates class instance.

#### Parameters

• **raw**: [`RawLanguage`](../../core/interfaces/RawLanguage.md)

Language definition.

#### Returns

[`Definitions`](Definitions.md)

## Properties

### keys

> `readonly` **keys**: [`Rec`](../../../../../types/core/type-aliases/Rec.md)\<[`Transforms`](../../../../../facades/lang/namespaces/lang/type-aliases/Transforms.md)\<[`Word`](../../../../../facades/lang/namespaces/lang/type-aliases/Word.md)\>, [`Transforms`](../../../../../facades/lang/namespaces/lang/type-aliases/Transforms.md)\<[`Word`](../../../../../facades/lang/namespaces/lang/type-aliases/Word.md)\>\>

***

### pluralReduce

> `readonly` **pluralReduce**: [`PluralReduce`](../../core/interfaces/PluralReduce.md)

***

### wordForms

> `protected` `readonly` **wordForms**: `ReadonlyMap`\<`string`, [`strings`](../../../../../types/core/type-aliases/strings.md)\>

***

### words

> `protected` `readonly` **words**: `ReadonlyMap`\<`string`, [`Definition`](../../Definition/classes/Definition.md)\>

## Methods

### get()

> **get**(`key`, `context`, `count`, `replacements`, `forms`): [`WordInfo`](../../core/interfaces/WordInfo.md)

Returns word based on context, count, and replacements.

#### Parameters

• **key**: `string`

Key.

• **context**: `undefined` \| `"InXDays"`

Context.

• **count**: `number`

Count for plural form.

• **replacements**: `ReadonlyMap`\<`string`, `string`\>

Replacements.

• **forms**: `string` \| [`strings`](../../../../../types/core/type-aliases/strings.md) = `[]`

Candidate word forms.

#### Returns

[`WordInfo`](../../core/interfaces/WordInfo.md)

Word.

***

### has()

> **has**(`key`): `boolean`

Checks if dictionary has word.

#### Parameters

• **key**: `string`

Key.

#### Returns

`boolean`

_True_ if dictionary has word, _false_ otherwise.
