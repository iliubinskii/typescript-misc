[Utility functions](../index.md) / [Exports](../modules.md) / [functions/object](../modules/functions_object.md) / Predicate

# Interface: Predicate\<T\>

[functions/object](../modules/functions_object.md).Predicate

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### Predicate

▸ **Predicate**(`value`, `key`): `boolean`

Checks object entry.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T`[keyof `T`] | Value. |
| `key` | keyof `T` | Key. |

#### Returns

`boolean`

_True_ if object entry passes check, _false_ otherwise.
