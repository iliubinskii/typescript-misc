[Utility functions](../index.md) / [Exports](../modules.md) / facade-implementations/lang/dictionary/core

# Module: facade-implementations/lang/dictionary/core

## Table of contents

### Interfaces

- [PluralReduce](../interfaces/facade_implementations_lang_dictionary_core.PluralReduce.md)
- [PluralReduceInternational](../interfaces/facade_implementations_lang_dictionary_core.PluralReduceInternational.md)
- [RawDefinitions](../interfaces/facade_implementations_lang_dictionary_core.RawDefinitions.md)
- [RawLanguage](../interfaces/facade_implementations_lang_dictionary_core.RawLanguage.md)
- [WordInfo](../interfaces/facade_implementations_lang_dictionary_core.WordInfo.md)

### Type Aliases

- [RawDefinition](facade_implementations_lang_dictionary_core.md#rawdefinition)
- [Rules](facade_implementations_lang_dictionary_core.md#rules)

### Functions

- [pluralReduce](facade_implementations_lang_dictionary_core.md#pluralreduce)

## Type Aliases

### RawDefinition

Ƭ **RawDefinition**: [`RawDefinitions`](../interfaces/facade_implementations_lang_dictionary_core.RawDefinitions.md) \| `string` \| readonly [[`NumStr`](types_core.md#numstr), [`RawDefinitions`](../interfaces/facade_implementations_lang_dictionary_core.RawDefinitions.md), [`PartialRecord`](types_core.md#partialrecord)\<[`Context`](facades_lang.lang.md#context), [`NumStr`](types_core.md#numstr)\>] \| readonly [[`NumStr`](types_core.md#numstr), [`RawDefinitions`](../interfaces/facade_implementations_lang_dictionary_core.RawDefinitions.md)]

___

### Rules

Ƭ **Rules**: readonly [`strings`](types_core.md#strings)[]

## Functions

### pluralReduce

▸ **pluralReduce**(`count`): `number`

Reduces count for plural form.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | Count. |

#### Returns

`number`

Reduced count.
