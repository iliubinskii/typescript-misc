[Utility functions](../index.md) / [Exports](../modules.md) / types/object.keys

# Module: types/object.keys

## Table of contents

### Type Aliases

- [Defined](types_object_keys.md#defined)
- [Pick](types_object_keys.md#pick)
- [PickGroups](types_object_keys.md#pickgroups)
- [ReadonlyDefined](types_object_keys.md#readonlydefined)
- [ReadonlyUndefined](types_object_keys.md#readonlyundefined)
- [Undefined](types_object_keys.md#undefined)
- [WritableDefined](types_object_keys.md#writabledefined)
- [WritableUndefined](types_object_keys.md#writableundefined)

## Type Aliases

### Defined

Ƭ **Defined**\<`T`\>: `Filter`\<`T`, `undefined`, ``"<-extends"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### Pick

Ƭ **Pick**\<`T`, `S`, `M`\>: `Exclude`\<keyof `T`, `Filter`\<`T`, `S`, `M`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `S` | `S` |
| `M` | extends `Match` = ``"default"`` |

___

### PickGroups

Ƭ **PickGroups**\<`T`, `O`\>: [`And`](types_core.md#and)\<`If`\<`Extends`\<``"defined"``, `O`\>, [`Defined`](types_object_keys.md#defined)\<`T`\>, keyof `T`\>, `If`\<`Extends`\<``"optional"``, `O`\>, `Optional`\<`T`\>, keyof `T`\>, `If`\<`Extends`\<``"readonly"``, `O`\>, `Readonly`\<`T`\>, keyof `T`\>, `If`\<`Extends`\<``"required"``, `O`\>, `Required`\<`T`\>, keyof `T`\>, `If`\<`Extends`\<``"undefined"``, `O`\>, [`Undefined`](types_object_keys.md#undefined)\<`T`\>, keyof `T`\>, `If`\<`Extends`\<``"writable"``, `O`\>, `Writable`\<`T`\>, keyof `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `O` | extends [`PickGroupsOption`](types_object_keys_internal.md#pickgroupsoption) |

___

### ReadonlyDefined

Ƭ **ReadonlyDefined**\<`T`\>: [`PickGroups`](types_object_keys.md#pickgroups)\<`T`, ``"defined"`` \| ``"readonly"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### ReadonlyUndefined

Ƭ **ReadonlyUndefined**\<`T`\>: [`PickGroups`](types_object_keys.md#pickgroups)\<`T`, ``"readonly"`` \| ``"undefined"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### Undefined

Ƭ **Undefined**\<`T`\>: [`Pick`](types_object_keys.md#pick)\<`T`, `undefined`, ``"<-extends"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### WritableDefined

Ƭ **WritableDefined**\<`T`\>: [`PickGroups`](types_object_keys.md#pickgroups)\<`T`, ``"defined"`` \| ``"writable"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### WritableUndefined

Ƭ **WritableUndefined**\<`T`\>: [`PickGroups`](types_object_keys.md#pickgroups)\<`T`, ``"undefined"`` \| ``"writable"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
