[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [types/object.style](../index.md) / Optional

# Type Alias: Optional\<T\>

> **Optional**\<`T`\>: [`And`](../../core/type-aliases/And.md)\<`{ [K in WritableDefined<T>]: T[K] }`, `{ [K in WritableUndefined<T>]?: Exclude<T[K], undefined> }`, `{ readonly [K in ReadonlyDefined<T>]: T[K] }`, `{ readonly [K in ReadonlyUndefined<T>]?: Exclude<T[K], undefined> }`\>

## Type Parameters

• **T** *extends* `object`
