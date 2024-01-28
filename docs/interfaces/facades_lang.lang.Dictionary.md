[Utility functions](../index.md) / [Exports](../modules.md) / [facades/lang](../modules/facades_lang.md) / [lang](../modules/facades_lang.lang.md) / Dictionary

# Interface: Dictionary\<W, C\>

[facades/lang](../modules/facades_lang.md).[lang](../modules/facades_lang.lang.md).Dictionary

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](../modules/facades_lang.lang.md#word) |
| `C` | extends [`Context`](../modules/facades_lang.lang.md#context) |

## Implemented by

- [`Dictionary`](../classes/facade_implementations_lang_dictionary_Dictionary.Dictionary.md)

## Table of contents

### Properties

- [context](facades_lang.lang.Dictionary.md#context)
- [get](facades_lang.lang.Dictionary.md#get)
- [getIfExists](facades_lang.lang.Dictionary.md#getifexists)
- [has](facades_lang.lang.Dictionary.md#has)
- [keys](facades_lang.lang.Dictionary.md#keys)
- [plain](facades_lang.lang.Dictionary.md#plain)
- [plural](facades_lang.lang.Dictionary.md#plural)
- [with](facades_lang.lang.Dictionary.md#with)

## Properties

### context

• `Readonly` **context**: (`context`: `C`) => [`Lang`](../modules/facades_lang.lang.md#lang)\<`W`, `C`\>

Sets context.

**`Param`**

Context.

#### Type declaration

▸ (`context`): [`Lang`](../modules/facades_lang.lang.md#lang)\<`W`, `C`\>

Sets context.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `C` | Context. |

##### Returns

[`Lang`](../modules/facades_lang.lang.md#lang)\<`W`, `C`\>

Dictionary.

___

### get

• `Readonly` **get**: (`key`: [`Key`](../modules/facades_lang.lang.md#key)\<[`Word`](../modules/facades_lang.lang.md#word)\>) => `string`

Returns word. Uses previosly set context, count and replacements.

**`Param`**

Word ID.

#### Type declaration

▸ (`key`): `string`

Returns word. Uses previosly set context, count and replacements.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Key`](../modules/facades_lang.lang.md#key)\<[`Word`](../modules/facades_lang.lang.md#word)\> | Word ID. |

##### Returns

`string`

Word.

___

### getIfExists

• `Readonly` **getIfExists**: (`key`: `string`) => `string`

Returns word. Uses previosly set context, count and replacements.

**`Param`**

Word ID.

#### Type declaration

▸ (`key`): `string`

Returns word. Uses previosly set context, count and replacements.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Word ID. |

##### Returns

`string`

Word.

___

### has

• `Readonly` **has**: (`key`: `string`) => key is Key\<Word\>

Checks if word exists.

**`Param`**

Word ID.

#### Type declaration

▸ (`key`): key is Key\<Word\>

Checks if word exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Word ID. |

##### Returns

key is Key\<Word\>

_True_ if word exists, _false_ otherwise.

___

### keys

• `Readonly` **keys**: [`Rec`](../modules/types_core.md#rec)\<[`Transforms`](../modules/facades_lang.lang.md#transforms)\<`W`\>, [`Transforms`](../modules/facades_lang.lang.md#transforms)\<[`Word`](../modules/facades_lang.lang.md#word)\>\>

___

### plain

• `Readonly` **plain**: (`str`: `string`) => \`plain:$\{string}\`

Wraps plain text.

**`Param`**

Plain text.

#### Type declaration

▸ (`str`): \`plain:$\{string}\`

Wraps plain text.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | Plain text. |

##### Returns

\`plain:$\{string}\`

Wrapped plain text.

___

### plural

• `Readonly` **plural**: (`count`: `number`) => [`Lang`](../modules/facades_lang.lang.md#lang)\<`W`, `C`\>

Sets count for plural form.

**`Param`**

Count for plural form.

#### Type declaration

▸ (`count`): [`Lang`](../modules/facades_lang.lang.md#lang)\<`W`, `C`\>

Sets count for plural form.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | Count for plural form. |

##### Returns

[`Lang`](../modules/facades_lang.lang.md#lang)\<`W`, `C`\>

Dictionary.

___

### with

• `Readonly` **with**: (`name`: `string`, `replacement`: [`NumStr`](../modules/types_core.md#numstr)) => [`Lang`](../modules/facades_lang.lang.md#lang)\<`W`, `C`\>

Adds replacement.

**`Param`**

Name.

**`Param`**

Value or word ID.

#### Type declaration

▸ (`name`, `replacement`): [`Lang`](../modules/facades_lang.lang.md#lang)\<`W`, `C`\>

Adds replacement.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name. |
| `replacement` | [`NumStr`](../modules/types_core.md#numstr) | Value or word ID. |

##### Returns

[`Lang`](../modules/facades_lang.lang.md#lang)\<`W`, `C`\>

Dictionary.
