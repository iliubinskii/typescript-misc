[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/function](../index.md) / pipe

# Function: pipe()

Applies callbacks to a value.

## Param

Value.

## Param

Callbacks.

## pipe(value, callback1, callback2)

> **pipe**\<`V`, `A`, `R`\>(`value`, `callback1`, `callback2`): `R`

Applies callbacks to a value.

### Type Parameters

• **V**

• **A**

• **R**

### Parameters

• **value**: `V`

Value.

• **callback1**: [`PipeCallback`](../interfaces/PipeCallback.md)\<`V`, `A`\>

Callback 1.

• **callback2**: [`PipeCallback`](../interfaces/PipeCallback.md)\<`A`, `R`\>

Callback 2.

### Returns

`R`

The value returned by callback sequence.

## pipe(value, callback1, callback2, callback3)

> **pipe**\<`V`, `A`, `B`, `R`\>(`value`, `callback1`, `callback2`, `callback3`): `R`

Applies callbacks to a value.

### Type Parameters

• **V**

• **A**

• **B**

• **R**

### Parameters

• **value**: `V`

Value.

• **callback1**: [`PipeCallback`](../interfaces/PipeCallback.md)\<`V`, `A`\>

Callback 1.

• **callback2**: [`PipeCallback`](../interfaces/PipeCallback.md)\<`A`, `B`\>

Callback 2.

• **callback3**: [`PipeCallback`](../interfaces/PipeCallback.md)\<`B`, `R`\>

Callback 3.

### Returns

`R`

The value returned by callback sequence.
