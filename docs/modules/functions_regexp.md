[Utility functions](../index.md) / [Exports](../modules.md) / functions/regexp

# Module: functions/regexp

## Table of contents

### Type Aliases

- [RegExpExecArrays](functions_regexp.md#regexpexecarrays)

### Functions

- [addFlags](functions_regexp.md#addflags)
- [matchAll](functions_regexp.md#matchall)

## Type Aliases

### RegExpExecArrays

Ƭ **RegExpExecArrays**: readonly `RegExpExecArray`[]

## Functions

### addFlags

▸ **addFlags**(`re`, `flags`): `RegExp`

Adds flag to regular expression.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `re` | `RegExp` | Regular expression. |
| `flags` | `string` | Flags. |

#### Returns

`RegExp`

New regular expression.

___

### matchAll

▸ **matchAll**(`str`, `re`): [`RegExpExecArrays`](functions_regexp.md#regexpexecarrays)

Finds all matches.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |
| `re` | `RegExp` | Regular expression. |

#### Returns

[`RegExpExecArrays`](functions_regexp.md#regexpexecarrays)

Matches.
