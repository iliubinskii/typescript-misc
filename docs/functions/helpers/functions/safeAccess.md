[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/helpers](../index.md) / safeAccess

# Function: safeAccess()

> **safeAccess**\<`T`, `W`, `R`\>(`obj`, `guards`, `readonlyKeys`): [`SafeAccess`](../type-aliases/SafeAccess.md)\<`T`, `W`, `R`\>

Creates safe access interface for an object.

## Type Parameters

• **T** *extends* `object`

• **W** *extends* `string`

• **R** *extends* `string`

## Parameters

• **obj**: `T`

Object.

• **guards**: [`SafeAccessGuards`](../type-aliases/SafeAccessGuards.md)\<`T`, `W`\>

Guards.

• **readonlyKeys**: readonly `R`[] = `[]`

Readonly keys.

## Returns

[`SafeAccess`](../type-aliases/SafeAccess.md)\<`T`, `W`, `R`\>

Safe access interface.
