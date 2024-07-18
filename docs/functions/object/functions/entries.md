[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/object](../index.md) / entries

# Function: entries()

## entries(obj)

> **entries**\<`K`, `V`\>(`obj`): readonly [`Entry`](../../../types/core/type-aliases/Entry.md)\<`K`, `V`\>[]

Typed version of Object.entries.

### Type Parameters

• **K** *extends* `string`

• **V**

### Parameters

• **obj**: [`PartialRecord`](../../../types/core/type-aliases/PartialRecord.md)\<`K`, `V`\>

Object.

### Returns

readonly [`Entry`](../../../types/core/type-aliases/Entry.md)\<`K`, `V`\>[]

Object entries.

## entries(obj)

> **entries**\<`T`\>(`obj`): readonly [`Entry`](../../../types/core/type-aliases/Entry.md)\<`string` & keyof `T`, `T`\[[`NumStr`](../../../types/core/type-aliases/NumStr.md) & keyof `T`\]\>[]

Typed version of Object.entries.

### Type Parameters

• **T**

### Parameters

• **obj**: `T`

Object.

### Returns

readonly [`Entry`](../../../types/core/type-aliases/Entry.md)\<`string` & keyof `T`, `T`\[[`NumStr`](../../../types/core/type-aliases/NumStr.md) & keyof `T`\]\>[]

Object entries.
