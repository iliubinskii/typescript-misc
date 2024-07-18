[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/array](../index.md) / removeBy

# Function: removeBy()

> **removeBy**\<`T`, `V`\>(`arr`, `value`, `keyOrReduce`): readonly `T`[]

Removes elements matching value.

## Type Parameters

• **T** *extends* `object`

• **V** *extends* `object`

## Parameters

• **arr**: readonly `T`[]

Array.

• **value**: `V`

Value.

• **keyOrReduce**: [`KeyOrReduce`](../type-aliases/KeyOrReduce.md)\<`T` \| `V`\>

Comparison key or reduce function.

## Returns

readonly `T`[]

New array with matching elements removed.
