[Utility functions](../index.md) / [Exports](../modules.md) / functions/converters

# Module: functions/converters

## Table of contents

### Variables

- [not](functions_converters.md#not)

### Functions

- [emptyToNull](functions_converters.md#emptytonull)
- [emptyToUndefined](functions_converters.md#emptytoundefined)
- [number](functions_converters.md#number)
- [numberU](functions_converters.md#numberu)
- [string](functions_converters.md#string)
- [stringU](functions_converters.md#stringu)

## Variables

### not

• `Const` **not**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `empty` | \<T\>(`value`: `T`, `defVal`: `Exclude`\<`T`, [`empty`](types_core.md#empty)\>) => `Exclude`\<`T`, [`empty`](types_core.md#empty)\> | Converts value to not empty. |

## Functions

### emptyToNull

▸ **emptyToNull**\<`T`\>(`value`): `T` \| ``null``

Unifies empty values.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`empty`](types_core.md#empty) \| `T` | Values. |

#### Returns

`T` \| ``null``

Unified value.

___

### emptyToUndefined

▸ **emptyToUndefined**\<`T`\>(`value`): `T` \| `undefined`

Unifies empty values.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`empty`](types_core.md#empty) \| `T` | Values. |

#### Returns

`T` \| `undefined`

Unified value.

___

### number

▸ **number**(`value`, `defVal?`): `number`

Converts value to a number.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `unknown` | `undefined` | Value. |
| `defVal` | `number` | `0` | Default value. |

#### Returns

`number`

Converted value, defVal on failure.

___

### numberU

▸ **numberU**(`value`): [`numberU`](types_core.md#numberu)

Converts value to a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`numberU`](types_core.md#numberu)

Converted value, _undefined_ on failure.

___

### string

▸ **string**(`value`): `string`

Converts value to a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`string`

Converted value.

___

### stringU

▸ **stringU**(`value`): [`stringU`](types_core.md#stringu)

Converts value to type stringU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`stringU`](types_core.md#stringu)

Converted value.
