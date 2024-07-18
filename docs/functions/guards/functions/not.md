[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/guards](../index.md) / not

# Function: not()

> **not**\<`T`, `V`\>(`value`, `guard`): `value is Exclude<V, T>`

Checks if value type is not T.

## Type Parameters

• **T**

• **V**

## Parameters

• **value**: `V`

Value.

• **guard**: [`Guard`](../interfaces/Guard.md)\<`T`\>

Guard for type T.

## Returns

`value is Exclude<V, T>`

_True_ if value type is not T, _false_ otherwise.
