[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/core](../index.md) / evaluate

# Function: evaluate()

Executes promise or async function.

## Param

Promise or async function.

## evaluate(callback)

> **evaluate**\<`T`\>(`callback`): `T`

Executes callback.

### Type Parameters

• **T**

### Parameters

• **callback**: [`Sync`](../../../types/function/interfaces/Sync.md)\<`T`, readonly []\>

Callback.

### Returns

`T`

The result of callback execution.

## evaluate(mixed)

> **evaluate**\<`T`\>(`mixed`): `Promise`\<`T`\>

Executes promise or async function.

### Type Parameters

• **T**

### Parameters

• **mixed**: [`AsyncPromise`](../../../types/function/type-aliases/AsyncPromise.md)\<`T`, readonly []\>

Promise or async function.

### Returns

`Promise`\<`T`\>

The result of callback execution.
