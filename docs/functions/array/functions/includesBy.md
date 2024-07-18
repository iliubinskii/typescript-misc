[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/array](../index.md) / includesBy

# Function: includesBy()

> **includesBy**\<`T`, `V`\>(`arr`, `value`, `keyOrReduce`): `boolean`

Checks if array contains element matching value.

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

`boolean`

_True_ if array contains element matching value, _false_ otherwise.
