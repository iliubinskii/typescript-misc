[Utility functions](../index.md) / [Exports](../modules.md) / types/core

# Module: types/core

## Table of contents

### Type Aliases

- [And](types_core.md#and)
- [Entry](types_core.md#entry)
- [IndexedObject](types_core.md#indexedobject)
- [IndexedObjects](types_core.md#indexedobjects)
- [IndexedRecord](types_core.md#indexedrecord)
- [IndexedRecords](types_core.md#indexedrecords)
- [NumStr](types_core.md#numstr)
- [NumStrE](types_core.md#numstre)
- [NumStrU](types_core.md#numstru)
- [NumStrs](types_core.md#numstrs)
- [Optional](types_core.md#optional)
- [Or](types_core.md#or)
- [PartialRecord](types_core.md#partialrecord)
- [PartialRecords](types_core.md#partialrecords)
- [PropertyKeyE](types_core.md#propertykeye)
- [PropertyKeyU](types_core.md#propertykeyu)
- [PropertyKeys](types_core.md#propertykeys)
- [Rec](types_core.md#rec)
- [Recs](types_core.md#recs)
- [Writable](types_core.md#writable)
- [WritableIndexedObject](types_core.md#writableindexedobject)
- [WritableIndexedObjects](types_core.md#writableindexedobjects)
- [WritableIndexedRecord](types_core.md#writableindexedrecord)
- [WritableIndexedRecords](types_core.md#writableindexedrecords)
- [WritablePartialRecord](types_core.md#writablepartialrecord)
- [WritablePartialRecords](types_core.md#writablepartialrecords)
- [WritableRecord](types_core.md#writablerecord)
- [WritableRecords](types_core.md#writablerecords)
- [booleanE](types_core.md#booleane)
- [booleanU](types_core.md#booleanu)
- [booleans](types_core.md#booleans)
- [empty](types_core.md#empty)
- [falseU](types_core.md#falseu)
- [nevers](types_core.md#nevers)
- [numberE](types_core.md#numbere)
- [numberU](types_core.md#numberu)
- [numbers](types_core.md#numbers)
- [objectE](types_core.md#objecte)
- [objectU](types_core.md#objectu)
- [objects](types_core.md#objects)
- [stringE](types_core.md#stringe)
- [stringU](types_core.md#stringu)
- [strings](types_core.md#strings)
- [trueU](types_core.md#trueu)
- [unknowns](types_core.md#unknowns)

## Type Aliases

### And

Ƭ **And**\<`A`, `B`, `C`, `D`, `E`, `F`\>: `A` & `B` & `C` & `D` & `E` & `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `C` | `unknown` |
| `D` | `unknown` |
| `E` | `unknown` |
| `F` | `unknown` |

___

### Entry

Ƭ **Entry**\<`K`, `T`\>: readonly [`K`, `T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

___

### IndexedObject

Ƭ **IndexedObject**\<`T`\>: [`Rec`](types_core.md#rec)\<`PropertyKey`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### IndexedObjects

Ƭ **IndexedObjects**\<`T`\>: `ReadonlyArray`\<[`IndexedObject`](types_core.md#indexedobject)\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### IndexedRecord

Ƭ **IndexedRecord**\<`T`\>: [`Rec`](types_core.md#rec)\<`string`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### IndexedRecords

Ƭ **IndexedRecords**\<`T`\>: `ReadonlyArray`\<[`IndexedRecord`](types_core.md#indexedrecord)\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### NumStr

Ƭ **NumStr**: `number` \| `string`

___

### NumStrE

Ƭ **NumStrE**: [`empty`](types_core.md#empty) \| [`NumStr`](types_core.md#numstr)

___

### NumStrU

Ƭ **NumStrU**: [`NumStr`](types_core.md#numstr) \| `undefined`

___

### NumStrs

Ƭ **NumStrs**: readonly [`NumStr`](types_core.md#numstr)[]

___

### Optional

Ƭ **Optional**\<`T`\>: \{ [K in keyof T]?: T[K] }

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Or

Ƭ **Or**\<`A`, `B`, `C`, `D`, `E`, `F`\>: `A` \| `B` \| `C` \| `D` \| `E` \| `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `C` | `never` |
| `D` | `never` |
| `E` | `never` |
| `F` | `never` |

___

### PartialRecord

Ƭ **PartialRecord**\<`K`, `V`\>: \{ readonly [L in K]?: V }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### PartialRecords

Ƭ **PartialRecords**\<`K`, `V`\>: `ReadonlyArray`\<[`PartialRecord`](types_core.md#partialrecord)\<`K`, `V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### PropertyKeyE

Ƭ **PropertyKeyE**: [`empty`](types_core.md#empty) \| `PropertyKey`

___

### PropertyKeyU

Ƭ **PropertyKeyU**: `PropertyKey` \| `undefined`

___

### PropertyKeys

Ƭ **PropertyKeys**: readonly `PropertyKey`[]

___

### Rec

Ƭ **Rec**\<`K`, `V`\>: \{ readonly [L in K]: V }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### Recs

Ƭ **Recs**\<`K`, `V`\>: `ReadonlyArray`\<[`Rec`](types_core.md#rec)\<`K`, `V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### Writable

Ƭ **Writable**\<`T`\>: \{ -readonly [K in keyof T]: T[K] }

#### Type parameters

| Name |
| :------ |
| `T` |

___

### WritableIndexedObject

Ƭ **WritableIndexedObject**\<`T`\>: [`WritableRecord`](types_core.md#writablerecord)\<`PropertyKey`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### WritableIndexedObjects

Ƭ **WritableIndexedObjects**\<`T`\>: `ReadonlyArray`\<[`WritableIndexedObject`](types_core.md#writableindexedobject)\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### WritableIndexedRecord

Ƭ **WritableIndexedRecord**\<`T`\>: [`WritableRecord`](types_core.md#writablerecord)\<`string`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### WritableIndexedRecords

Ƭ **WritableIndexedRecords**\<`T`\>: `ReadonlyArray`\<[`WritableIndexedRecord`](types_core.md#writableindexedrecord)\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### WritablePartialRecord

Ƭ **WritablePartialRecord**\<`K`, `V`\>: \{ [L in K]?: V }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### WritablePartialRecords

Ƭ **WritablePartialRecords**\<`K`, `V`\>: `ReadonlyArray`\<[`WritablePartialRecord`](types_core.md#writablepartialrecord)\<`K`, `V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### WritableRecord

Ƭ **WritableRecord**\<`K`, `V`\>: \{ [L in K]: V }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### WritableRecords

Ƭ **WritableRecords**\<`K`, `V`\>: `ReadonlyArray`\<[`WritableRecord`](types_core.md#writablerecord)\<`K`, `V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### booleanE

Ƭ **booleanE**: [`empty`](types_core.md#empty) \| `boolean`

___

### booleanU

Ƭ **booleanU**: `boolean` \| `undefined`

___

### booleans

Ƭ **booleans**: readonly `boolean`[]

___

### empty

Ƭ **empty**: ``null`` \| `undefined`

___

### falseU

Ƭ **falseU**: ``false`` \| `undefined`

___

### nevers

Ƭ **nevers**: readonly `never`[]

___

### numberE

Ƭ **numberE**: [`empty`](types_core.md#empty) \| `number`

___

### numberU

Ƭ **numberU**: `number` \| `undefined`

___

### numbers

Ƭ **numbers**: readonly `number`[]

___

### objectE

Ƭ **objectE**: [`empty`](types_core.md#empty) \| `object`

___

### objectU

Ƭ **objectU**: `object` \| `undefined`

___

### objects

Ƭ **objects**: readonly `object`[]

___

### stringE

Ƭ **stringE**: [`empty`](types_core.md#empty) \| `string`

___

### stringU

Ƭ **stringU**: `string` \| `undefined`

___

### strings

Ƭ **strings**: readonly `string`[]

___

### trueU

Ƭ **trueU**: ``true`` \| `undefined`

___

### unknowns

Ƭ **unknowns**: readonly `unknown`[]
