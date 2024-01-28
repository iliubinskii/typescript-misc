[Utility functions](../index.md) / [Exports](../modules.md) / functions/core

# Module: functions/core

## Table of contents

### Variables

- [ReadonlyMap](functions_core.md#readonlymap)
- [ReadonlySet](functions_core.md#readonlyset)

### Functions

- [defineFn](functions_core.md#definefn)
- [evaluate](functions_core.md#evaluate)
- [freeze](functions_core.md#freeze)
- [indexed](functions_core.md#indexed)
- [overload](functions_core.md#overload)
- [typedef](functions_core.md#typedef)
- [unfreeze](functions_core.md#unfreeze)

## Variables

### ReadonlyMap

• `Const` **ReadonlyMap**: \<K, V\>(`entries?`: readonly readonly [`K`, `V`][]) => `ReadonlyMap`\<`K`, `V`\> = `Map`

#### Type declaration

• **new ReadonlyMap**\<`K`, `V`\>(`entries?`): `ReadonlyMap`\<`K`, `V`\>

##### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | readonly readonly [`K`, `V`][] |

##### Returns

`ReadonlyMap`\<`K`, `V`\>

___

### ReadonlySet

• `Const` **ReadonlySet**: \<T\>(`values?`: readonly `T`[]) => `ReadonlySet`\<`T`\> = `Set`

#### Type declaration

• **new ReadonlySet**\<`T`\>(`values?`): `ReadonlySet`\<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | readonly `T`[] |

##### Returns

`ReadonlySet`\<`T`\>

## Functions

### defineFn

▸ **defineFn**\<`F`, `P`\>(`fn`, `props`): `F` & `Readonly`\<`P`\>

Defines function with properties.

#### Type parameters

| Name |
| :------ |
| `F` |
| `P` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `F` | Function. |
| `props` | `P` | Properties. |

#### Returns

`F` & `Readonly`\<`P`\>

Function with properties.

___

### evaluate

▸ **evaluate**\<`T`\>(`callback`): `T`

Executes callback.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`Sync`](../interfaces/types_function.Sync.md)\<`T`, readonly []\> | Callback. |

#### Returns

`T`

The result of callback execution.

▸ **evaluate**\<`T`\>(`mixed`): `Promise`\<`T`\>

Executes promise or async function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mixed` | [`AsyncPromise`](types_function.md#asyncpromise)\<`T`, readonly []\> | Promise or async function. |

#### Returns

`Promise`\<`T`\>

The result of callback execution.

___

### freeze

▸ **freeze**\<`T`\>(`value`): `Readonly`\<`T`\>

Marks value as readonly.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

`Readonly`\<`T`\>

Value.

___

### indexed

▸ **indexed**(`value`): [`IndexedObject`](types_core.md#indexedobject)

Marks value as indexed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `object` | Value. |

#### Returns

[`IndexedObject`](types_core.md#indexedobject)

Value.

___

### overload

▸ **overload**\<`T`\>(`callback`): `T`

Defines function with overloads.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `T` | Callback. |

#### Returns

`T`

The result of callback execution.

___

### typedef

▸ **typedef**\<`T`\>(`value`): `T`

Defines value type.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

`T`

Value.

___

### unfreeze

▸ **unfreeze**\<`T`\>(`value`): [`Writable`](types_core.md#writable)\<`T`\>

Marks value as writable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

[`Writable`](types_core.md#writable)\<`T`\>

Value.
