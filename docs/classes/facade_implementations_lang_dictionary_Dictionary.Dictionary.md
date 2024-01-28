[Utility functions](../index.md) / [Exports](../modules.md) / [facade-implementations/lang/dictionary/Dictionary](../modules/facade_implementations_lang_dictionary_Dictionary.md) / Dictionary

# Class: Dictionary

[facade-implementations/lang/dictionary/Dictionary](../modules/facade_implementations_lang_dictionary_Dictionary.md).Dictionary

## Implements

- [`Dictionary`](../interfaces/facades_lang.lang.Dictionary.md)\<[`Word`](../modules/facades_lang.lang.md#word), [`Context`](../modules/facades_lang.lang.md#context)\>

## Table of contents

### Constructors

- [constructor](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#constructor)

### Properties

- [\_context](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#_context)
- [count](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#count)
- [definitions](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#definitions)
- [facade](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#facade)
- [keys](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#keys)
- [subs](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#subs)

### Methods

- [context](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#context)
- [get](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#get)
- [getIfExists](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#getifexists)
- [has](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#has)
- [plain](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#plain)
- [plural](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#plural)
- [pluralReduce](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#pluralreduce)
- [with](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#with)
- [create](facade_implementations_lang_dictionary_Dictionary.Dictionary.md#create)

## Constructors

### constructor

• **new Dictionary**(`definitions`, `context?`, `count?`): [`Dictionary`](facade_implementations_lang_dictionary_Dictionary.Dictionary.md)

Creates class instance.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `definitions` | [`Definitions`](facade_implementations_lang_dictionary_Definitions.Definitions.md) | `undefined` | Language definitions. |
| `context?` | ``"InXDays"`` | `undefined` | Context. |
| `count` | `number` | `1` | Count for plural form. |

#### Returns

[`Dictionary`](facade_implementations_lang_dictionary_Dictionary.Dictionary.md)

## Properties

### \_context

• `Protected` `Readonly` **\_context**: `undefined` \| ``"InXDays"``

___

### count

• `Protected` `Readonly` **count**: `number`

___

### definitions

• `Protected` `Readonly` **definitions**: [`Definitions`](facade_implementations_lang_dictionary_Definitions.Definitions.md)

___

### facade

• `Protected` `Readonly` **facade**: [`Facade`](../modules/facades_lang.lang.md#facade)

___

### keys

• `Readonly` **keys**: [`Rec`](../modules/types_core.md#rec)\<[`Transforms`](../modules/facades_lang.lang.md#transforms)\<[`Word`](../modules/facades_lang.lang.md#word)\>, [`Transforms`](../modules/facades_lang.lang.md#transforms)\<[`Word`](../modules/facades_lang.lang.md#word)\>\>

#### Implementation of

[Dictionary](../interfaces/facades_lang.lang.Dictionary.md).[keys](../interfaces/facades_lang.lang.Dictionary.md#keys)

___

### subs

• `Protected` `Readonly` **subs**: `Map`\<[`NumStr`](../modules/types_core.md#numstr), [`Facade`](../modules/facades_lang.lang.md#facade)\>

## Methods

### context

▸ **context**(`context`): [`Facade`](../modules/facades_lang.lang.md#facade)

Sets context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | ``"InXDays"`` | Context. |

#### Returns

[`Facade`](../modules/facades_lang.lang.md#facade)

Dictionary.

#### Implementation of

[Dictionary](../interfaces/facades_lang.lang.Dictionary.md).[context](../interfaces/facades_lang.lang.Dictionary.md#context)

___

### get

▸ **get**(`key`): `string`

Returns word. Uses previosly set context, count and replacements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Key`](../modules/facades_lang.lang.md#key)\<[`Word`](../modules/facades_lang.lang.md#word)\> | Word ID. |

#### Returns

`string`

Word.

#### Implementation of

[Dictionary](../interfaces/facades_lang.lang.Dictionary.md).[get](../interfaces/facades_lang.lang.Dictionary.md#get)

___

### getIfExists

▸ **getIfExists**(`key`): `string`

Returns word. Uses previosly set context, count and replacements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Word ID. |

#### Returns

`string`

Word.

#### Implementation of

[Dictionary](../interfaces/facades_lang.lang.Dictionary.md).[getIfExists](../interfaces/facades_lang.lang.Dictionary.md#getifexists)

___

### has

▸ **has**(`key`): key is Key\<Word\>

Checks if word exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Word ID. |

#### Returns

key is Key\<Word\>

_True_ if word exists, _false_ otherwise.

#### Implementation of

[Dictionary](../interfaces/facades_lang.lang.Dictionary.md).[has](../interfaces/facades_lang.lang.Dictionary.md#has)

___

### plain

▸ **plain**(`this`, `str`): \`plain:$\{string}\`

Wraps plain text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `void` | Plain text. |
| `str` | `string` | - |

#### Returns

\`plain:$\{string}\`

Wrapped plain text.

#### Implementation of

[Dictionary](../interfaces/facades_lang.lang.Dictionary.md).[plain](../interfaces/facades_lang.lang.Dictionary.md#plain)

___

### plural

▸ **plural**(`count`): [`Facade`](../modules/facades_lang.lang.md#facade)

Sets count for plural form.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | Count for plural form. |

#### Returns

[`Facade`](../modules/facades_lang.lang.md#facade)

Dictionary.

#### Implementation of

[Dictionary](../interfaces/facades_lang.lang.Dictionary.md).[plural](../interfaces/facades_lang.lang.Dictionary.md#plural)

___

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

___

### with

▸ **with**(`search`, `replace`): [`Facade`](../modules/facades_lang.lang.md#facade)

Adds replacement.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `search` | `string` | Name. |
| `replace` | [`NumStr`](../modules/types_core.md#numstr) | Value or word ID. |

#### Returns

[`Facade`](../modules/facades_lang.lang.md#facade)

Dictionary.

#### Implementation of

[Dictionary](../interfaces/facades_lang.lang.Dictionary.md).[with](../interfaces/facades_lang.lang.Dictionary.md#with)

___

### create

▸ **create**(`this`, `definitions`, `context?`, `count?`): [`Facade`](../modules/facades_lang.lang.md#facade)

Creates dictionary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `void` | No this. |
| `definitions` | [`Definitions`](facade_implementations_lang_dictionary_Definitions.Definitions.md) | Language definitions. |
| `context?` | ``"InXDays"`` | Context. |
| `count?` | `number` | Count for plural form. |

#### Returns

[`Facade`](../modules/facades_lang.lang.md#facade)

Dictionary.
