[Utility functions](../index.md) / [Exports](../modules.md) / types/object.internal

# Module: types/object.internal

## Table of contents

### Type Aliases

- [Omit1](types_object_internal.md#omit1)
- [Omit2](types_object_internal.md#omit2)
- [PickGroupsOption](types_object_internal.md#pickgroupsoption)

## Type Aliases

### Omit1

Ƭ **Omit1**\<`T`, `K`\>: `Omit`\<`T`, `K`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

___

### Omit2

Ƭ **Omit2**\<`K`\>: \{ [L in K]?: never }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |

___

### PickGroupsOption

Ƭ **PickGroupsOption**: ``"defined"`` \| ``"optional"`` \| ``"readonly"`` \| ``"required"`` \| ``"undefined"`` \| ``"writable"``
