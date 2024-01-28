[Utility functions](../index.md) / [Exports](../modules.md) / functions/object

# Module: functions/object

## Table of contents

### Interfaces

- [CompareFn](../interfaces/functions_object.CompareFn.md)
- [Descriptor](../interfaces/functions_object.Descriptor.md)
- [Predicate](../interfaces/functions_object.Predicate.md)

### Type Aliases

- [PrefixKeys](functions_object.md#prefixkeys)

### Functions

- [assign](functions_object.md#assign)
- [clone](functions_object.md#clone)
- [defineProperty](functions_object.md#defineproperty)
- [entries](functions_object.md#entries)
- [every](functions_object.md#every)
- [filter](functions_object.md#filter)
- [fromEntries](functions_object.md#fromentries)
- [get](functions_object.md#get)
- [getPrototypeOf](functions_object.md#getprototypeof)
- [hasOwnProp](functions_object.md#hasownprop)
- [keys](functions_object.md#keys)
- [map](functions_object.md#map)
- [omit](functions_object.md#omit)
- [omitKeys](functions_object.md#omitkeys)
- [prefixKeys](functions_object.md#prefixkeys-1)
- [removeUndefinedKeys](functions_object.md#removeundefinedkeys)
- [set](functions_object.md#set)
- [size](functions_object.md#size)
- [some](functions_object.md#some)
- [sort](functions_object.md#sort)
- [values](functions_object.md#values)

## Type Aliases

### PrefixKeys

Ƭ **PrefixKeys**\<`T`, `P`\>: \{ [K in string & keyof T as \`$\{P}$\{K}\`]: T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `string` |

## Functions

### assign

▸ **assign**\<`T`\>(`target`, `...sources`): `T`

Typed version of Object.assign.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Writable`](types_core.md#writable)\<`T`\> | Target. |
| `...sources` | readonly `Readonly`\<`Partial`\<`T`\>\>[] | Sources. |

#### Returns

`T`

Target.

___

### clone

▸ **clone**\<`T`\>(`obj`): [`Writable`](types_core.md#writable)\<`T`\>

Clones object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

[`Writable`](types_core.md#writable)\<`T`\>

New object.

___

### defineProperty

▸ **defineProperty**\<`T`, `K`\>(`obj`, `key`, `descriptor`): `void`

Typed version of Object.defineProperty.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` = keyof `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `key` | `K` | Key. |
| `descriptor` | [`Descriptor`](../interfaces/functions_object.Descriptor.md)\<`T`, `K`\> | Descriptor. |

#### Returns

`void`

___

### entries

▸ **entries**\<`K`, `V`\>(`obj`): readonly [`Entry`](types_core.md#entry)\<`K`, `V`\>[]

Typed version of Object.entries.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`PartialRecord`](types_core.md#partialrecord)\<`K`, `V`\> | Object. |

#### Returns

readonly [`Entry`](types_core.md#entry)\<`K`, `V`\>[]

Object entries.

▸ **entries**\<`T`\>(`obj`): readonly [`Entry`](types_core.md#entry)\<`string` & keyof `T`, `T`[[`NumStr`](types_core.md#numstr) & keyof `T`]\>[]

Typed version of Object.entries.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

readonly [`Entry`](types_core.md#entry)\<`string` & keyof `T`, `T`[[`NumStr`](types_core.md#numstr) & keyof `T`]\>[]

Object entries.

___

### every

▸ **every**\<`T`\>(`obj`, `predicate`): `boolean`

Checks if every object property satisfies condition.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `predicate` | [`Predicate`](../interfaces/functions_object.Predicate.md)\<`T`\> | Predicate. |

#### Returns

`boolean`

_True_ if every object property satisfies condition, _false_ otherwise.

___

### filter

▸ **filter**\<`T`\>(`obj`, `predicate`): `Partial`\<`T`\>

Picks object entries by predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `predicate` | [`Predicate`](../interfaces/functions_object.Predicate.md)\<`T`\> | Predicate. |

#### Returns

`Partial`\<`T`\>

New object.

___

### fromEntries

▸ **fromEntries**\<`K`, `V`\>(`entries`): [`PartialRecord`](types_core.md#partialrecord)\<`K`, `V`\>

Creates object from entries.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`\<[`Entry`](types_core.md#entry)\<`K`, `V`\>\> | Entries. |

#### Returns

[`PartialRecord`](types_core.md#partialrecord)\<`K`, `V`\>

Object.

___

### get

▸ **get**(`obj`, `key`): `unknown`

Returns object property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | Object. |
| `key` | `PropertyKey` | Key. |

#### Returns

`unknown`

Object property.

▸ **get**\<`T`\>(`obj`, `key`, `guard?`, `defVal?`): `T`

Returns object property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | Object. |
| `key` | `PropertyKey` | Key. |
| `guard?` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`T`\> | Guard for type T. |
| `defVal?` | `T` | Default value. |

#### Returns

`T`

Object property if its type is T.

**`Throws`**

AssertionError otherwise.

___

### getPrototypeOf

▸ **getPrototypeOf**(`obj`): [`objectU`](types_core.md#objectu)

Returns object prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | Object. |

#### Returns

[`objectU`](types_core.md#objectu)

Object prototype if available, _undefined_ otherwise.

___

### hasOwnProp

▸ **hasOwnProp**(`key`, `obj`): `boolean`

Checks if object has property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `PropertyKey` | Key. |
| `obj` | `object` | Object. |

#### Returns

`boolean`

_True_ if object has property, _false_ otherwise.

___

### keys

▸ **keys**\<`K`, `V`\>(`obj`): readonly `K`[]

Typed version of Object.keys.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`PartialRecord`](types_core.md#partialrecord)\<`K`, `V`\> | Object. |

#### Returns

readonly `K`[]

Object keys.

▸ **keys**\<`T`\>(`obj`): readonly `string` & keyof `T`[]

Typed version of Object.keys.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

readonly `string` & keyof `T`[]

Object keys.

___

### map

▸ **map**\<`K`, `V`, `R`\>(`obj`, `callback`): [`Rec`](types_core.md#rec)\<`K`, `R`\>

Applies callback to each property.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |
| `R` | `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Rec`](types_core.md#rec)\<`K`, `V`\> | Object. |
| `callback` | (`value`: `V`, `key`: `K`) => `R` | Callback. |

#### Returns

[`Rec`](types_core.md#rec)\<`K`, `R`\>

New object.

___

### omit

▸ **omit**\<`T`\>(`obj`, `predicate`): `Partial`\<`T`\>

Omit object entries by predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `predicate` | [`Predicate`](../interfaces/functions_object.Predicate.md)\<`T`\> | Predicate. |

#### Returns

`Partial`\<`T`\>

New object.

___

### omitKeys

▸ **omitKeys**\<`T`, `K`\>(`obj`, `...exclude`): `T`

Removes keys from object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `...exclude` | readonly `K`[] | Keys to omit. |

#### Returns

`T`

New object.

▸ **omitKeys**\<`T`, `K`\>(`obj`, `...exclude`): [`Omit`](types_object.md#omit)\<`T`, `K`\>

Removes keys from object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `...exclude` | readonly `K`[] | Keys to omit. |

#### Returns

[`Omit`](types_object.md#omit)\<`T`, `K`\>

New object.

___

### prefixKeys

▸ **prefixKeys**\<`T`, `P`\>(`obj`, `prefix`): [`PrefixKeys`](functions_object.md#prefixkeys)\<`T`, `P`\>

Adds prefix to object keys.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `prefix` | `P` | Prefix. |

#### Returns

[`PrefixKeys`](functions_object.md#prefixkeys)\<`T`, `P`\>

Object with prefixed keys.

___

### removeUndefinedKeys

▸ **removeUndefinedKeys**\<`T`\>(`obj`): `T`

Removes undefined keys.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`OptionalUndefined`](types_object_style.md#optionalundefined)\<`T`\> | Object. |

#### Returns

`T`

New object with undefined keys removed.

___

### set

▸ **set**(`obj`, `key`, `value`): `void`

Sets object property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | Object. |
| `key` | `PropertyKey` | Key. |
| `value` | `unknown` | Value. |

#### Returns

`void`

___

### size

▸ **size**(`obj`): `number`

Returns the number of enumerable properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | Object. |

#### Returns

`number`

The number of enumerable properties.

___

### some

▸ **some**\<`T`\>(`obj`, `predicate`): `boolean`

Checks if some object property satisfies condition.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `predicate` | [`Predicate`](../interfaces/functions_object.Predicate.md)\<`T`\> | Predicate. |

#### Returns

`boolean`

_True_ if some object property satisfies condition, _false_ otherwise.

___

### sort

▸ **sort**\<`K`, `V`\>(`obj`, `compareFn?`): [`Rec`](types_core.md#rec)\<`K`, `V`\>

Sorts object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Rec`](types_core.md#rec)\<`K`, `V`\> | Object. |
| `compareFn?` | [`CompareFn`](../interfaces/functions_object.CompareFn.md)\<[`Rec`](types_core.md#rec)\<`K`, `V`\>\> | Comparison function. |

#### Returns

[`Rec`](types_core.md#rec)\<`K`, `V`\>

New object.

▸ **sort**\<`T`\>(`obj`, `compareFn?`): `T`

Sorts object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `compareFn?` | [`CompareFn`](../interfaces/functions_object.CompareFn.md)\<`T`\> | Comparison function. |

#### Returns

`T`

New object.

___

### values

▸ **values**\<`K`, `V`\>(`obj`): readonly `V`[]

Typed version of Object.values.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`PartialRecord`](types_core.md#partialrecord)\<`K`, `V`\> | Object. |

#### Returns

readonly `V`[]

Object values.

▸ **values**\<`T`\>(`obj`): readonly `T`[[`NumStr`](types_core.md#numstr) & keyof `T`][]

Typed version of Object.values.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

readonly `T`[[`NumStr`](types_core.md#numstr) & keyof `T`][]

Object values.
