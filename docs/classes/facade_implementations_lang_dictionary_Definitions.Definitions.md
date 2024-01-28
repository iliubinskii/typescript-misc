[Utility functions](../index.md) / [Exports](../modules.md) / [facade-implementations/lang/dictionary/Definitions](../modules/facade_implementations_lang_dictionary_Definitions.md) / Definitions

# Class: Definitions

[facade-implementations/lang/dictionary/Definitions](../modules/facade_implementations_lang_dictionary_Definitions.md).Definitions

## Table of contents

### Constructors

- [constructor](facade_implementations_lang_dictionary_Definitions.Definitions.md#constructor)

### Properties

- [keys](facade_implementations_lang_dictionary_Definitions.Definitions.md#keys)
- [pluralReduce](facade_implementations_lang_dictionary_Definitions.Definitions.md#pluralreduce)
- [wordForms](facade_implementations_lang_dictionary_Definitions.Definitions.md#wordforms)
- [words](facade_implementations_lang_dictionary_Definitions.Definitions.md#words)

### Methods

- [get](facade_implementations_lang_dictionary_Definitions.Definitions.md#get)
- [has](facade_implementations_lang_dictionary_Definitions.Definitions.md#has)

## Constructors

### constructor

• **new Definitions**(`raw`): [`Definitions`](facade_implementations_lang_dictionary_Definitions.Definitions.md)

Creates class instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `raw` | [`RawLanguage`](../interfaces/facade_implementations_lang_dictionary_core.RawLanguage.md) | Language definition. |

#### Returns

[`Definitions`](facade_implementations_lang_dictionary_Definitions.Definitions.md)

## Properties

### keys

• `Readonly` **keys**: [`Rec`](../modules/types_core.md#rec)\<[`Transforms`](../modules/facades_lang.lang.md#transforms)\<[`Word`](../modules/facades_lang.lang.md#word)\>, [`Transforms`](../modules/facades_lang.lang.md#transforms)\<[`Word`](../modules/facades_lang.lang.md#word)\>\>

___

### pluralReduce

• `Readonly` **pluralReduce**: [`PluralReduce`](../interfaces/facade_implementations_lang_dictionary_core.PluralReduce.md)

___

### wordForms

• `Protected` `Readonly` **wordForms**: `ReadonlyMap`\<`string`, [`strings`](../modules/types_core.md#strings)\>

___

### words

• `Protected` `Readonly` **words**: `ReadonlyMap`\<`string`, [`Definition`](facade_implementations_lang_dictionary_Definition.Definition.md)\>

## Methods

### get

▸ **get**(`key`, `context`, `count`, `replacements`, `forms?`): [`WordInfo`](../interfaces/facade_implementations_lang_dictionary_core.WordInfo.md)

Returns word based on context, count, and replacements.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | Key. |
| `context` | `undefined` \| ``"InXDays"`` | `undefined` | Context. |
| `count` | `number` | `undefined` | Count for plural form. |
| `replacements` | `ReadonlyMap`\<`string`, `string`\> | `undefined` | Replacements. |
| `forms` | `string` \| [`strings`](../modules/types_core.md#strings) | `[]` | Candidate word forms. |

#### Returns

[`WordInfo`](../interfaces/facade_implementations_lang_dictionary_core.WordInfo.md)

Word.

___

### has

▸ **has**(`key`): `boolean`

Checks if dictionary has word.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Key. |

#### Returns

`boolean`

_True_ if dictionary has word, _false_ otherwise.
