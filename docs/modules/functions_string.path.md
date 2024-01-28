[Utility functions](../index.md) / [Exports](../modules.md) / [functions/string](functions_string.md) / path

# Namespace: path

[functions/string](functions_string.md).path

## Table of contents

### Functions

- [addLeadingSlash](functions_string.path.md#addleadingslash)
- [addTrailingSlash](functions_string.path.md#addtrailingslash)
- [canonicalize](functions_string.path.md#canonicalize)
- [join](functions_string.path.md#join)
- [removeLeadingSlash](functions_string.path.md#removeleadingslash)
- [removeTrailingSlash](functions_string.path.md#removetrailingslash)

## Functions

### addLeadingSlash

▸ **addLeadingSlash**(`path`): `string`

Adds leading slash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path. |

#### Returns

`string`

New string with leading slash added.

___

### addTrailingSlash

▸ **addTrailingSlash**(`path`): `string`

Adds trailing slash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path. |

#### Returns

`string`

New string with trailing slash added.

___

### canonicalize

▸ **canonicalize**(`path`): `string`

Canonicalizes path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path. |

#### Returns

`string`

Canonical path.

___

### join

▸ **join**(`...parts`): `string`

Creates path from parts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...parts` | [`strings`](types_core.md#strings) | Parts. |

#### Returns

`string`

Path.

___

### removeLeadingSlash

▸ **removeLeadingSlash**(`path`): `string`

Removes leading slash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path. |

#### Returns

`string`

New string with leading slash removed.

___

### removeTrailingSlash

▸ **removeTrailingSlash**(`path`): `string`

Removes trailing slash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path. |

#### Returns

`string`

New string with trailing slash removed.
