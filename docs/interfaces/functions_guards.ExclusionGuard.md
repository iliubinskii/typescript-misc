[Utility functions](../index.md) / [Exports](../modules.md) / [functions/guards](../modules/functions_guards.md) / ExclusionGuard

# Interface: ExclusionGuard\<T\>

[functions/guards](../modules/functions_guards.md).ExclusionGuard

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### ExclusionGuard

▸ **ExclusionGuard**\<`V`\>(`value`): value is Exclude\<V, T\>

Checks if value type is not T.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `V` | Value. |

#### Returns

value is Exclude\<V, T\>

_True_ if value type is not T, _false_ otherwise.
