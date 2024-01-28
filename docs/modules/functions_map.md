[Utility functions](../index.md) / [Exports](../modules.md) / functions/map

# Module: functions/map

## Table of contents

### Functions

- [delete](functions_map.md#delete)
- [set](functions_map.md#set)

## Functions

### delete

▸ **delete**\<`K`, `V`\>(`map`, `key`): `ReadonlyMap`\<`K`, `V`\>

Removes key.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `ReadonlyMap`\<`K`, `V`\> | Map. |
| `key` | `K` | Key. |

#### Returns

`ReadonlyMap`\<`K`, `V`\>

Map with key removed.

___

### set

▸ **set**\<`K`, `V`\>(`map`, `key`, `value`): `ReadonlyMap`\<`K`, `V`\>

Sets key.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `ReadonlyMap`\<`K`, `V`\> | Map. |
| `key` | `K` | Key. |
| `value` | `V` | Value. |

#### Returns

`ReadonlyMap`\<`K`, `V`\>

Map with key set.
