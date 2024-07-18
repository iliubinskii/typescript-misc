[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/guards](../index.md) / ExclusionGuard

# Interface: ExclusionGuard()\<T\>

## Type Parameters

• **T**

> **ExclusionGuard**\<`V`\>(`value`): `value is Exclude<V, T>`

Checks if value type is not T.

## Type Parameters

• **V**

## Parameters

• **value**: `V`

Value.

## Returns

`value is Exclude<V, T>`

_True_ if value type is not T, _false_ otherwise.
