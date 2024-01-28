[Utility functions](../index.md) / [Exports](../modules.md) / types/object.style

# Module: types/object.style

## Table of contents

### Type Aliases

- [Optional](types_object_style.md#optional)
- [OptionalUndefined](types_object_style.md#optionalundefined)
- [Undefined](types_object_style.md#undefined)

## Type Aliases

### Optional

Ƭ **Optional**\<`T`\>: [`And`](types_core.md#and)\<\{ [K in WritableDefined\<T\>]: T[K] }, \{ [K in WritableUndefined\<T\>]?: Exclude\<T[K], undefined\> }, \{ readonly [K in ReadonlyDefined\<T\>]: T[K] }, \{ readonly [K in ReadonlyUndefined\<T\>]?: Exclude\<T[K], undefined\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### OptionalUndefined

Ƭ **OptionalUndefined**\<`T`\>: [`And`](types_core.md#and)\<\{ [K in WritableDefined\<T\>]: T[K] }, \{ [K in WritableUndefined\<T\>]?: T[K] }, \{ readonly [K in ReadonlyDefined\<T\>]: T[K] }, \{ readonly [K in ReadonlyUndefined\<T\>]?: T[K] }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### Undefined

Ƭ **Undefined**\<`T`\>: [`And`](types_core.md#and)\<\{ [K in WritableDefined\<T\>]: T[K] }, \{ [K in WritableUndefined\<T\>]: T[K] \| undefined }, \{ readonly [K in ReadonlyDefined\<T\>]: T[K] }, \{ readonly [K in ReadonlyUndefined\<T\>]: T[K] \| undefined }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
