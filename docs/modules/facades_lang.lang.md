[Utility functions](../index.md) / [Exports](../modules.md) / [facades/lang](facades_lang.md) / lang

# Namespace: lang

[facades/lang](facades_lang.md).lang

## Table of contents

### Interfaces

- [Dictionary](../interfaces/facades_lang.lang.Dictionary.md)

### Type Aliases

- [Context](facades_lang.lang.md#context)
- [Facade](facades_lang.lang.md#facade)
- [Key](facades_lang.lang.md#key)
- [Lang](facades_lang.lang.md#lang)
- [Plain](facades_lang.lang.md#plain)
- [Transforms](facades_lang.lang.md#transforms)
- [Word](facades_lang.lang.md#word)

## Type Aliases

### Context

Ƭ **Context**: [`Pick`](types_object_keys.md#pick)\<`facades.lang.Context`, ``true``, ``"extends->"``\>

___

### Facade

Ƭ **Facade**: [`Lang`](facades_lang.lang.md#lang)\<[`Word`](facades_lang.lang.md#word), [`Context`](facades_lang.lang.md#context)\>

___

### Key

Ƭ **Key**\<`W`\>: [`Plain`](facades_lang.lang.md#plain) \| [`Transforms`](facades_lang.lang.md#transforms)\<`W`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](facades_lang.lang.md#word) = [`Word`](facades_lang.lang.md#word) |

___

### Lang

Ƭ **Lang**\<`W`, `C`\>: [`Dictionary`](../interfaces/facades_lang.lang.Dictionary.md)\<`W`, `C`\> & [`Rec`](types_core.md#rec)\<[`Transforms`](facades_lang.lang.md#transforms)\<`W`\>, `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](facades_lang.lang.md#word) |
| `C` | extends [`Context`](facades_lang.lang.md#context) |

___

### Plain

Ƭ **Plain**: \`plain:$\{string}\`

___

### Transforms

Ƭ **Transforms**\<`W`\>: `Capitalize`\<`W`\> \| `Lowercase`\<`W`\> \| `Uncapitalize`\<`W`\> \| `Uppercase`\<`W`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](facades_lang.lang.md#word) = [`Word`](facades_lang.lang.md#word) |

___

### Word

Ƭ **Word**: [`Pick`](types_object_keys.md#pick)\<`facades.lang.Word`, ``true``, ``"extends->"``\>
