[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/helpers](../index.md) / SafeAccess

# Type Alias: SafeAccess\<T, W, R\>

> **SafeAccess**\<`T`, `W`, `R`\>: [`And`](../../../types/core/type-aliases/And.md)\<`{ [K in W]: T[K] }`, `{ readonly [K in R]: T[K] }`\>

## Type Parameters

• **T** *extends* `object`

• **W** *extends* `string` & keyof `T`

• **R** *extends* `string` & keyof `T`
