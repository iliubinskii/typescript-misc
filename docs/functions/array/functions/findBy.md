[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/array](../index.md) / findBy

# Function: findBy()

> **findBy**\<`T`, `V`\>(`arr`, `value`, `keyOrReduce`): `T` \| `undefined`

Finds element matching value.

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

`T` \| `undefined`

The first element matching value if available, _undefined_ otherwise.
