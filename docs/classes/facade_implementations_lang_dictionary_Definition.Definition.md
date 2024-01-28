[Utility functions](../index.md) / [Exports](../modules.md) / [facade-implementations/lang/dictionary/Definition](../modules/facade_implementations_lang_dictionary_Definition.md) / Definition

# Class: Definition

[facade-implementations/lang/dictionary/Definition](../modules/facade_implementations_lang_dictionary_Definition.md).Definition

## Table of contents

### Constructors

- [constructor](facade_implementations_lang_dictionary_Definition.Definition.md#constructor)

### Properties

- [contexts](facade_implementations_lang_dictionary_Definition.Definition.md#contexts)
- [id](facade_implementations_lang_dictionary_Definition.Definition.md#id)
- [rulesRef](facade_implementations_lang_dictionary_Definition.Definition.md#rulesref)
- [rulesRefDependent](facade_implementations_lang_dictionary_Definition.Definition.md#rulesrefdependent)
- [rulesRefSecondary](facade_implementations_lang_dictionary_Definition.Definition.md#rulesrefsecondary)
- [rulesVal](facade_implementations_lang_dictionary_Definition.Definition.md#rulesval)
- [rulesWordDependent](facade_implementations_lang_dictionary_Definition.Definition.md#rulesworddependent)
- [rulesWordSecondary](facade_implementations_lang_dictionary_Definition.Definition.md#ruleswordsecondary)
- [sub](facade_implementations_lang_dictionary_Definition.Definition.md#sub)
- [subs](facade_implementations_lang_dictionary_Definition.Definition.md#subs)
- [value](facade_implementations_lang_dictionary_Definition.Definition.md#value)

### Methods

- [get](facade_implementations_lang_dictionary_Definition.Definition.md#get)

## Constructors

### constructor

• **new Definition**(`raw`, `id`): [`Definition`](facade_implementations_lang_dictionary_Definition.Definition.md)

Creates class instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `raw` | [`RawDefinition`](../modules/facade_implementations_lang_dictionary_core.md#rawdefinition) | Raw definition. |
| `id` | [`NumStr`](../modules/types_core.md#numstr) | ID. |

#### Returns

[`Definition`](facade_implementations_lang_dictionary_Definition.Definition.md)

## Properties

### contexts

• `Protected` `Readonly` **contexts**: [`IndexedRecord`](../modules/types_core.md#indexedrecord)\<[`NumStr`](../modules/types_core.md#numstr)\> = `{}`

___

### id

• `Protected` `Readonly` **id**: [`NumStr`](../modules/types_core.md#numstr)

___

### rulesRef

• `Protected` `Readonly` **rulesRef**: [`Rules`](../modules/facade_implementations_lang_dictionary_core.md#rules)

___

### rulesRefDependent

• `Protected` `Readonly` **rulesRefDependent**: [`Rules`](../modules/facade_implementations_lang_dictionary_core.md#rules)

___

### rulesRefSecondary

• `Protected` `Readonly` **rulesRefSecondary**: [`Rules`](../modules/facade_implementations_lang_dictionary_core.md#rules)

___

### rulesVal

• `Protected` `Readonly` **rulesVal**: [`Rules`](../modules/facade_implementations_lang_dictionary_core.md#rules)

___

### rulesWordDependent

• `Protected` `Readonly` **rulesWordDependent**: [`Rules`](../modules/facade_implementations_lang_dictionary_core.md#rules)

___

### rulesWordSecondary

• `Protected` `Readonly` **rulesWordSecondary**: [`Rules`](../modules/facade_implementations_lang_dictionary_core.md#rules)

___

### sub

• `Protected` `Readonly` **sub**: `undefined` \| [`Definition`](facade_implementations_lang_dictionary_Definition.Definition.md)

___

### subs

• `Protected` `Readonly` **subs**: [`IndexedRecord`](../modules/types_core.md#indexedrecord)\<[`Definition`](facade_implementations_lang_dictionary_Definition.Definition.md)\> = `{}`

___

### value

• `Protected` `Readonly` **value**: `string`

## Methods

### get

▸ **get**(`owner`, `context`, `count`, `replacements`, `forms`): [`WordInfo`](../interfaces/facade_implementations_lang_dictionary_core.WordInfo.md)

Returns word based on context, count, and replacements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | [`Definitions`](../interfaces/facade_implementations_lang_dictionary_Definition_internal.Definitions.md) | Parent object. |
| `context` | `undefined` \| ``"InXDays"`` | Context. |
| `count` | `number` | Count for plural form. |
| `replacements` | `ReadonlyMap`\<`string`, `string`\> | Replacements. |
| `forms` | [`strings`](../modules/types_core.md#strings) | Candidate word forms. |

#### Returns

[`WordInfo`](../interfaces/facade_implementations_lang_dictionary_core.WordInfo.md)

Word.
