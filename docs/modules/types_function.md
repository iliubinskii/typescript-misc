[Utility functions](../index.md) / [Exports](../modules.md) / types/function

# Module: types/function

## Table of contents

### Interfaces

- [Async](../interfaces/types_function.Async.md)
- [Callable](../interfaces/types_function.Callable.md)
- [Constructor](../interfaces/types_function.Constructor.md)
- [Sync](../interfaces/types_function.Sync.md)

### Type Aliases

- [AsyncPromise](types_function.md#asyncpromise)
- [AsyncPromiseSync](types_function.md#asyncpromisesync)
- [Asyncs](types_function.md#asyncs)
- [CallSignature](types_function.md#callsignature)
- [ConstructSignature](types_function.md#constructsignature)
- [Promises](types_function.md#promises)
- [Syncs](types_function.md#syncs)

## Type Aliases

### AsyncPromise

Ƭ **AsyncPromise**\<`R`, `A`\>: [`Async`](../interfaces/types_function.Async.md)\<`R`, `A`\> \| `Promise`\<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `A` | extends [`unknowns`](types_core.md#unknowns) = readonly [] |

___

### AsyncPromiseSync

Ƭ **AsyncPromiseSync**\<`R`, `A`\>: [`Async`](../interfaces/types_function.Async.md)\<`R`, `A`\> \| `Promise`\<`R`\> \| [`Sync`](../interfaces/types_function.Sync.md)\<`R`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `A` | extends [`unknowns`](types_core.md#unknowns) = readonly [] |

___

### Asyncs

Ƭ **Asyncs**\<`R`, `A`\>: `ReadonlyArray`\<[`Async`](../interfaces/types_function.Async.md)\<`R`, `A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `A` | extends [`unknowns`](types_core.md#unknowns) = readonly [] |

___

### CallSignature

Ƭ **CallSignature**\<`T`\>: `T` extends (...`args`: infer A) => infer R ? (...`args`: `A`) => `R` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ConstructSignature

Ƭ **ConstructSignature**\<`T`\>: `T` extends (...`args`: infer A) => infer I ? (...`args`: `A`) => `I` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Promises

Ƭ **Promises**\<`T`\>: `ReadonlyArray`\<`Promise`\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Syncs

Ƭ **Syncs**\<`R`, `A`\>: `ReadonlyArray`\<[`Sync`](../interfaces/types_function.Sync.md)\<`R`, `A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `A` | extends [`unknowns`](types_core.md#unknowns) = readonly [] |
