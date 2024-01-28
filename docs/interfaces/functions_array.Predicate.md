[Utility functions](../index.md) / [Exports](../modules.md) / [functions/array](../modules/functions_array.md) / Predicate

# Interface: Predicate\<T\>

[functions/array](../modules/functions_array.md).Predicate

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### Predicate

▸ **Predicate**(`value`, `index`, `arr`): `boolean`

Checks object entry.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |
| `index` | `number` | Index. |
| `arr` | readonly `T`[] | Array. |

#### Returns

`boolean`

_True_ if object entry passes check, _false_ otherwise.
