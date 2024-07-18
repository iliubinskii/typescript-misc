[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/object](../index.md) / omitKeys

# Function: omitKeys()

Removes keys from object.

## Param

Object.

## Param

Keys to omit.

## omitKeys(obj, exclude)

> **omitKeys**\<`T`, `K`\>(`obj`, ...`exclude`): `T`

Removes keys from object.

### Type Parameters

• **T** *extends* `object`

• **K** *extends* `string`

### Parameters

• **obj**: `T`

Object.

• ...**exclude**: readonly `K`[]

Keys to omit.

### Returns

`T`

New object.

## omitKeys(obj, exclude)

> **omitKeys**\<`T`, `K`\>(`obj`, ...`exclude`): [`Omit`](../../../types/object/type-aliases/Omit.md)\<`T`, `K`\>

Removes keys from object.

### Type Parameters

• **T**

• **K** *extends* `string`

### Parameters

• **obj**: `T`

Object.

• ...**exclude**: readonly `K`[]

Keys to omit.

### Returns

[`Omit`](../../../types/object/type-aliases/Omit.md)\<`T`, `K`\>

New object.
