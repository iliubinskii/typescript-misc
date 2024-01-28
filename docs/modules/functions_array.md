[Utility functions](../index.md) / [Exports](../modules.md) / functions/array

# Module: functions/array

## Table of contents

### Interfaces

- [Predicate](../interfaces/functions_array.Predicate.md)
- [Reduce](../interfaces/functions_array.Reduce.md)

### Type Aliases

- [Arrays](functions_array.md#arrays)
- [ChainResult](functions_array.md#chainresult)
- [Chunks](functions_array.md#chunks)
- [KeyOrReduce](functions_array.md#keyorreduce)
- [Mixed](functions_array.md#mixed)
- [PrefixKeys](functions_array.md#prefixkeys)

### Functions

- [chain](functions_array.md#chain)
- [chunk](functions_array.md#chunk)
- [clone](functions_array.md#clone)
- [drop](functions_array.md#drop)
- [findBy](functions_array.md#findby)
- [findLastIndex](functions_array.md#findlastindex)
- [first](functions_array.md#first)
- [fromIterable](functions_array.md#fromiterable)
- [fromMixed](functions_array.md#frommixed)
- [fromRange](functions_array.md#fromrange)
- [fromString](functions_array.md#fromstring)
- [get](functions_array.md#get)
- [includesBy](functions_array.md#includesby)
- [intersection](functions_array.md#intersection)
- [last](functions_array.md#last)
- [omit](functions_array.md#omit)
- [push](functions_array.md#push)
- [pushOrReplaceBy](functions_array.md#pushorreplaceby)
- [pushUnique](functions_array.md#pushunique)
- [random](functions_array.md#random)
- [removeBy](functions_array.md#removeby)
- [replace](functions_array.md#replace)
- [replaceBy](functions_array.md#replaceby)
- [reverse](functions_array.md#reverse)
- [second](functions_array.md#second)
- [sort](functions_array.md#sort)
- [third](functions_array.md#third)
- [toggleBy](functions_array.md#toggleby)
- [truncate](functions_array.md#truncate)
- [uniqueBy](functions_array.md#uniqueby)
- [unshift](functions_array.md#unshift)
- [unshiftOrReplaceBy](functions_array.md#unshiftorreplaceby)
- [unshiftUnique](functions_array.md#unshiftunique)

## Type Aliases

### Arrays

Ƭ **Arrays**\<`T`\>: `ReadonlyArray`\<readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ChainResult

Ƭ **ChainResult**\<`T`\>: `ReadonlyArray`\<readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Chunks

Ƭ **Chunks**\<`T`\>: `ReadonlyArray`\<readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### KeyOrReduce

Ƭ **KeyOrReduce**\<`T`\>: `PropertyKey` \| [`Reduce`](../interfaces/functions_array.Reduce.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### Mixed

Ƭ **Mixed**\<`T`\>: `T` \| readonly `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

___

### PrefixKeys

Ƭ **PrefixKeys**\<`T`, `P`\>: \{ [K in string & keyof T as \`$\{P}$\{K}\`]: T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `string` |

## Functions

### chain

▸ **chain**\<`T`\>(`arr`): [`ChainResult`](functions_array.md#chainresult)\<`T`\>

Creates array of pairs ([x, y, z] =\> [[x, y], [y, z]]).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |

#### Returns

[`ChainResult`](functions_array.md#chainresult)\<`T`\>

Array of pairs.

___

### chunk

▸ **chunk**\<`T`\>(`arr`, `size?`): [`Chunks`](functions_array.md#chunks)\<`T`\>

Creates an array of chunks.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `size?` | `number` | Chunk size. |

#### Returns

[`Chunks`](functions_array.md#chunks)\<`T`\>

Array of chunks.

___

### clone

▸ **clone**\<`A`\>(`arr`): [`A`]

Clones array.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly [`A`] | Array. |

#### Returns

[`A`]

New array.

▸ **clone**\<`A`, `B`\>(`arr`): [`A`, `B`]

Clones array.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly [`A`, `B`] | Array. |

#### Returns

[`A`, `B`]

New array.

▸ **clone**\<`A`, `B`, `C`\>(`arr`): [`A`, `B`, `C`]

Clones array.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly [`A`, `B`, `C`] | Array. |

#### Returns

[`A`, `B`, `C`]

New array.

▸ **clone**\<`A`, `B`, `C`, `D`\>(`arr`): [`A`, `B`, `C`, `D`]

Clones array.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly [`A`, `B`, `C`, `D`] | Array. |

#### Returns

[`A`, `B`, `C`, `D`]

New array.

▸ **clone**\<`T`\>(`arr`): `T`[]

Clones array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |

#### Returns

`T`[]

New array.

___

### drop

▸ **drop**\<`T`\>(`arr`, `index`): readonly `T`[]

Removes element at given index.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `index` | `number` | Index to be removed. |

#### Returns

readonly `T`[]

New array with one element removed.

___

### findBy

▸ **findBy**\<`T`, `V`\>(`arr`, `value`, `keyOrReduce`): `T` \| `undefined`

Finds element matching value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `V` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `V` | Value. |
| `keyOrReduce` | [`KeyOrReduce`](functions_array.md#keyorreduce)\<`T` \| `V`\> | Comparison key or reduce function. |

#### Returns

`T` \| `undefined`

The first element matching value if available, _undefined_ otherwise.

___

### findLastIndex

▸ **findLastIndex**\<`T`\>(`arr`, `predicate`): `number`

Finds last index.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `predicate` | [`Predicate`](../interfaces/functions_array.Predicate.md)\<`T`\> | Predicate. |

#### Returns

`number`

Last matching index.

___

### first

▸ **first**\<`T`\>(`arr`): `T`

Returns the first element from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |

#### Returns

`T`

The first element if available.

**`Throws`**

Error otherwise.

___

### fromIterable

▸ **fromIterable**\<`T`\>(`iterable`): readonly `T`[]

Creates array from iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`\<`T`\> | Iterable. |

#### Returns

readonly `T`[]

Array.

___

### fromMixed

▸ **fromMixed**\<`T`\>(`value`): readonly `T`[]

Creates array from mixed source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Mixed`](functions_array.md#mixed)\<`T`\> | Value. |

#### Returns

readonly `T`[]

Value if it is an array, tuple containing value otherwise.

___

### fromRange

▸ **fromRange**(`from`, `to`, `step?`): [`numbers`](types_core.md#numbers)

Creates array of numbers.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `from` | `number` | `undefined` | Lower limit (inclusive). |
| `to` | `number` | `undefined` | Upper limit (inclusive). |
| `step` | `number` | `1` | Step. |

#### Returns

[`numbers`](types_core.md#numbers)

Array of numbers.

___

### fromString

▸ **fromString**(`str`): [`strings`](types_core.md#strings)

Creates array from string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

[`strings`](types_core.md#strings)

Array.

___

### get

▸ **get**\<`T`\>(`arr`, `index`): `T`

Returns element at given index.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `index` | `number` | Index. |

#### Returns

`T`

Element if available.

**`Throws`**

Error otherwise.

___

### includesBy

▸ **includesBy**\<`T`, `V`\>(`arr`, `value`, `keyOrReduce`): `boolean`

Checks if array contains element matching value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `V` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `V` | Value. |
| `keyOrReduce` | [`KeyOrReduce`](functions_array.md#keyorreduce)\<`T` \| `V`\> | Comparison key or reduce function. |

#### Returns

`boolean`

_True_ if array contains element matching value, _false_ otherwise.

___

### intersection

▸ **intersection**\<`T`\>(`...arrays`): readonly `T`[]

Creates an array of shared values.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arrays` | [`Arrays`](functions_array.md#arrays)\<`T`\> | Arrays. |

#### Returns

readonly `T`[]

Array of shared values.

___

### last

▸ **last**\<`T`\>(`arr`): `T`

Returns the last element from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |

#### Returns

`T`

The last element if available.

**`Throws`**

Error otherwise.

___

### omit

▸ **omit**\<`T`\>(`arr`, `predicate`): readonly `T`[]

Omit object entries by predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `predicate` | [`Predicate`](../interfaces/functions_array.Predicate.md)\<`T`\> | Predicate. |

#### Returns

readonly `T`[]

New object.

___

### push

▸ **push**\<`T`\>(`arr`, `value`): readonly `T`[]

Adds element to the end of an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `T` | Value. |

#### Returns

readonly `T`[]

New array with one element added.

___

### pushOrReplaceBy

▸ **pushOrReplaceBy**\<`T`\>(`arr`, `value`, `keyOrReduce`): readonly `T`[]

Replaces elements matching value if found, pushes value otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `T` | Value. |
| `keyOrReduce` | [`KeyOrReduce`](functions_array.md#keyorreduce)\<`T`\> | Comparison key or reduce function. |

#### Returns

readonly `T`[]

New array.

___

### pushUnique

▸ **pushUnique**\<`T`\>(`arr`, `value`): readonly `T`[]

Adds element to the end of an array if it does already not exist.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `T` | Value. |

#### Returns

readonly `T`[]

New array with one element added.

___

### random

▸ **random**\<`T`\>(`arr`): `T`

Picks random element from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |

#### Returns

`T`

Random element.

___

### removeBy

▸ **removeBy**\<`T`, `V`\>(`arr`, `value`, `keyOrReduce`): readonly `T`[]

Removes elements matching value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `V` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `V` | Value. |
| `keyOrReduce` | [`KeyOrReduce`](functions_array.md#keyorreduce)\<`T` \| `V`\> | Comparison key or reduce function. |

#### Returns

readonly `T`[]

New array with matching elements removed.

___

### replace

▸ **replace**\<`T`\>(`arr`, `index`, `value`): readonly `T`[]

Replaces element at given index.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `index` | `number` | Index. |
| `value` | `T` | Value. |

#### Returns

readonly `T`[]

New array with one element replaced.

___

### replaceBy

▸ **replaceBy**\<`T`\>(`arr`, `value`, `keyOrReduce`): readonly `T`[]

Replaces elements matching value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `T` | Value. |
| `keyOrReduce` | [`KeyOrReduce`](functions_array.md#keyorreduce)\<`T`\> | Comparison key or reduce function. |

#### Returns

readonly `T`[]

New array with matching elements replaced.

___

### reverse

▸ **reverse**\<`T`\>(`arr`): readonly `T`[]

Reverses array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |

#### Returns

readonly `T`[]

New array.

___

### second

▸ **second**\<`T`\>(`arr`): `T`

Returns the second element from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |

#### Returns

`T`

The second element if available.

**`Throws`**

Error otherwise.

___

### sort

▸ **sort**\<`T`\>(`arr`, `compareFn?`): readonly `T`[]

Sorts array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `compareFn?` | (`x`: `T`, `y`: `T`) => `number` | Comparison function. |

#### Returns

readonly `T`[]

New array.

___

### third

▸ **third**\<`T`\>(`arr`): `T`

Returns the third element from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |

#### Returns

`T`

The third element if available.

**`Throws`**

Error otherwise.

___

### toggleBy

▸ **toggleBy**\<`T`\>(`arr`, `value`, `keyOrReduce`): readonly `T`[]

Adds/removes value to/from an array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `T` | Value. |
| `keyOrReduce` | [`KeyOrReduce`](functions_array.md#keyorreduce)\<`T`\> | Comparison key or reduce function. |

#### Returns

readonly `T`[]

New array.

___

### truncate

▸ **truncate**(`mutableArray`): `void`

Truncates array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableArray` | `unknown`[] | Array. |

#### Returns

`void`

___

### uniqueBy

▸ **uniqueBy**\<`T`\>(`arr`, `keyOrReduce`): readonly `T`[]

Creates unique array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `keyOrReduce` | [`KeyOrReduce`](functions_array.md#keyorreduce)\<`T`\> | Comparison key or reduce function. |

#### Returns

readonly `T`[]

Unique array.

___

### unshift

▸ **unshift**\<`T`\>(`arr`, `value`): readonly `T`[]

Adds element to the beginning of an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `T` | Value. |

#### Returns

readonly `T`[]

New array with one element added.

___

### unshiftOrReplaceBy

▸ **unshiftOrReplaceBy**\<`T`\>(`arr`, `value`, `keyOrReduce`): readonly `T`[]

Replaces elements matching value if found, unshifts value otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `T` | Value. |
| `keyOrReduce` | [`KeyOrReduce`](functions_array.md#keyorreduce)\<`T`\> | Comparison key or reduce function. |

#### Returns

readonly `T`[]

New array.

___

### unshiftUnique

▸ **unshiftUnique**\<`T`\>(`arr`, `value`): readonly `T`[]

Adds element to the beginning of an array if it does already not exist.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `T` | Value. |

#### Returns

readonly `T`[]

New array with one element added.
