[Utility functions](../index.md) / [Exports](../modules.md) / functions/string

# Module: functions/string

## Table of contents

### Namespaces

- [path](functions_string.path.md)

### Enumerations

- [Eol](../enums/functions_string.Eol.md)

### Functions

- [detectEol](functions_string.md#detecteol)
- [empty](functions_string.md#empty)
- [escapeRegExpSpecialChars](functions_string.md#escaperegexpspecialchars)
- [firstLine](functions_string.md#firstline)
- [lcFirst](functions_string.md#lcfirst)
- [leadingSpaces](functions_string.md#leadingspaces)
- [lines](functions_string.md#lines)
- [multiline](functions_string.md#multiline)
- [replaceAll](functions_string.md#replaceall)
- [replacePairs](functions_string.md#replacepairs)
- [singleLine](functions_string.md#singleline)
- [trailingSpaces](functions_string.md#trailingspaces)
- [trimEnd](functions_string.md#trimend)
- [trimLeadingEmptyLines](functions_string.md#trimleadingemptylines)
- [trimStart](functions_string.md#trimstart)
- [trimTrailingEmptyLines](functions_string.md#trimtrailingemptylines)
- [ucFirst](functions_string.md#ucfirst)
- [unpadMultiline](functions_string.md#unpadmultiline)

## Functions

### detectEol

▸ **detectEol**(`str`): [`Eol`](../enums/functions_string.Eol.md)

Detects EOL sequence.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

[`Eol`](../enums/functions_string.Eol.md)

EOL sequence.

___

### empty

▸ **empty**(`str`): `boolean`

Checks if string consists of spaces.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`boolean`

_True_ if string consists of spaces, _false_ otherwise.

___

### escapeRegExpSpecialChars

▸ **escapeRegExpSpecialChars**(`str`): `string`

Escapes regular expression special characters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

Escaped string.

___

### firstLine

▸ **firstLine**(`str`): `string`

Returns first line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

First line.

___

### lcFirst

▸ **lcFirst**(`str`): `string`

Converts first letter to lower case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

Converted string.

___

### leadingSpaces

▸ **leadingSpaces**(`str`): `string`

Extracts leading spaces.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

String containing leading spaces.

___

### lines

▸ **lines**(`str`): [`strings`](types_core.md#strings)

Splits string into lines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

[`strings`](types_core.md#strings)

Array of strings.

___

### multiline

▸ **multiline**(`str`): `boolean`

Checks if string is multiline.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`boolean`

_True_ if string is multiline, _false_ otherwise.

___

### replaceAll

▸ **replaceAll**(`str`, `search`, `replace`): `string`

Replaces all occurrences of search term.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |
| `search` | `string` | Search term. |
| `replace` | `string` | Replacement. |

#### Returns

`string`

New string with replacements done.

___

### replacePairs

▸ **replacePairs**(`str`, `pairs`): `string`

Replaces all occurrences of search term.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |
| `pairs` | [`IndexedRecord`](types_core.md#indexedrecord)\<`string`\> | Search-replace pairs. |

#### Returns

`string`

New string with replacements done.

___

### singleLine

▸ **singleLine**(`str`): `boolean`

Checks if string is single-line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`boolean`

_True_ if string is single-line, _false_ otherwise.

___

### trailingSpaces

▸ **trailingSpaces**(`str`): `string`

Extracts trailing spaces.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

String containing trailing spaces.

___

### trimEnd

▸ **trimEnd**(`str`): `string`

Trims string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

Trimmed string.

___

### trimLeadingEmptyLines

▸ **trimLeadingEmptyLines**(`str`): `string`

Trims leading empty lines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

Trimmed string.

___

### trimStart

▸ **trimStart**(`str`): `string`

Trims string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

Trimmed string.

___

### trimTrailingEmptyLines

▸ **trimTrailingEmptyLines**(`str`): `string`

Trims trailing empty lines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

Trimmed string.

___

### ucFirst

▸ **ucFirst**(`str`): `string`

Converts first letter to upper case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

New string.

___

### unpadMultiline

▸ **unpadMultiline**(`str`): `string`

Unpads multiline string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

Unpadded string.
