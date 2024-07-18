[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/object](../index.md) / sort

# Function: sort()

Sorts object.

## Param

Object.

## Param

Comparison function.

## sort(obj, compareFn)

> **sort**\<`K`, `V`\>(`obj`, `compareFn`?): [`Rec`](../../../types/core/type-aliases/Rec.md)\<`K`, `V`\>

Sorts object.

### Type Parameters

• **K** *extends* `string`

• **V**

### Parameters

• **obj**: [`Rec`](../../../types/core/type-aliases/Rec.md)\<`K`, `V`\>

Object.

• **compareFn?**: [`CompareFn`](../interfaces/CompareFn.md)\<[`Rec`](../../../types/core/type-aliases/Rec.md)\<`K`, `V`\>\>

Comparison function.

### Returns

[`Rec`](../../../types/core/type-aliases/Rec.md)\<`K`, `V`\>

New object.

## sort(obj, compareFn)

> **sort**\<`T`\>(`obj`, `compareFn`?): `T`

Sorts object.

### Type Parameters

• **T**

### Parameters

• **obj**: `T`

Object.

• **compareFn?**: [`CompareFn`](../interfaces/CompareFn.md)\<`T`\>

Comparison function.

### Returns

`T`

New object.
