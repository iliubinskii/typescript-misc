[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/object](../index.md) / values

# Function: values()

## values(obj)

> **values**\<`K`, `V`\>(`obj`): readonly `V`[]

Typed version of Object.values.

### Type Parameters

• **K** *extends* `string`

• **V**

### Parameters

• **obj**: [`PartialRecord`](../../../types/core/type-aliases/PartialRecord.md)\<`K`, `V`\>

Object.

### Returns

readonly `V`[]

Object values.

## values(obj)

> **values**\<`T`\>(`obj`): readonly `T`\[[`NumStr`](../../../types/core/type-aliases/NumStr.md) & keyof `T`\][]

Typed version of Object.values.

### Type Parameters

• **T**

### Parameters

• **obj**: `T`

Object.

### Returns

readonly `T`\[[`NumStr`](../../../types/core/type-aliases/NumStr.md) & keyof `T`\][]

Object values.
