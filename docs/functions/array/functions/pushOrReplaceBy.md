[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/array](../index.md) / pushOrReplaceBy

# Function: pushOrReplaceBy()

> **pushOrReplaceBy**\<`T`\>(`arr`, `value`, `keyOrReduce`): readonly `T`[]

Replaces elements matching value if found, pushes value otherwise.

## Type Parameters

• **T** *extends* `object`

## Parameters

• **arr**: readonly `T`[]

Array.

• **value**: `T`

Value.

• **keyOrReduce**: [`KeyOrReduce`](../type-aliases/KeyOrReduce.md)\<`T`\>

Comparison key or reduce function.

## Returns

readonly `T`[]

New array.
