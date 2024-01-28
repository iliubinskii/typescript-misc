[Utility functions](../index.md) / [Exports](../modules.md) / functions/json

# Module: functions/json

## Table of contents

### Functions

- [decode](functions_json.md#decode)
- [encode](functions_json.md#encode)
- [eq](functions_json.md#eq)
- [neq](functions_json.md#neq)

## Functions

### decode

▸ **decode**(`source`): `unknown`

Decodes JSON string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`stringE`](types_core.md#stringe) | JSON string. |

#### Returns

`unknown`

Decoded value.

___

### encode

▸ **encode**(`source`): `string`

Encodes to JSON string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `unknown` | Value to encode. |

#### Returns

`string`

JSON string.

___

### eq

▸ **eq**(`x`, `y`): `boolean`

Compares two values as JSON strings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | Value 1. |
| `y` | `unknown` | Value 2. |

#### Returns

`boolean`

_True_ if two values are equal, _false_ otherwise.

___

### neq

▸ **neq**(`x`, `y`): `boolean`

Compares two values as JSON strings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | Value 1. |
| `y` | `unknown` | Value 2. |

#### Returns

`boolean`

_True_ if two values are not equal, _false_ otherwise.
