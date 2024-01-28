[Utility functions](../index.md) / [Exports](../modules.md) / functions/guards

# Module: functions/guards

## Table of contents

### Interfaces

- [ExclusionGuard](../interfaces/functions_guards.ExclusionGuard.md)
- [Guard](../interfaces/functions_guards.Guard.md)
- [MultiArgGuard](../interfaces/functions_guards.MultiArgGuard.md)

### Type Aliases

- [Guards](functions_guards.md#guards)
- [GuardsRecord](functions_guards.md#guardsrecord)

### Functions

- [and](functions_guards.md#and)
- [array](functions_guards.md#array)
- [arrayU](functions_guards.md#arrayu)
- [arrays](functions_guards.md#arrays)
- [arraysU](functions_guards.md#arraysu)
- [boolean](functions_guards.md#boolean)
- [booleanU](functions_guards.md#booleanu)
- [booleans](functions_guards.md#booleans)
- [booleansU](functions_guards.md#booleansu)
- [callable](functions_guards.md#callable)
- [constructor](functions_guards.md#constructor)
- [empty](functions_guards.md#empty)
- [enumeration](functions_guards.md#enumeration)
- [factory](functions_guards.md#factory)
- [false](functions_guards.md#false)
- [indexedObject](functions_guards.md#indexedobject)
- [indexedObjectU](functions_guards.md#indexedobjectu)
- [indexedObjects](functions_guards.md#indexedobjects)
- [indexedObjectsU](functions_guards.md#indexedobjectsu)
- [instanceOf](functions_guards.md#instanceof)
- [instancesOf](functions_guards.md#instancesof)
- [map](functions_guards.md#map)
- [mapU](functions_guards.md#mapu)
- [maps](functions_guards.md#maps)
- [mapsU](functions_guards.md#mapsu)
- [never](functions_guards.md#never)
- [not](functions_guards.md#not)
- [null](functions_guards.md#null)
- [numStr](functions_guards.md#numstr)
- [numStrU](functions_guards.md#numstru)
- [numStrs](functions_guards.md#numstrs)
- [numStrsU](functions_guards.md#numstrsu)
- [number](functions_guards.md#number)
- [numberU](functions_guards.md#numberu)
- [numbers](functions_guards.md#numbers)
- [numbersU](functions_guards.md#numbersu)
- [object](functions_guards.md#object)
- [objectU](functions_guards.md#objectu)
- [objects](functions_guards.md#objects)
- [objectsU](functions_guards.md#objectsu)
- [or](functions_guards.md#or)
- [propertyKey](functions_guards.md#propertykey)
- [propertyKeyU](functions_guards.md#propertykeyu)
- [propertyKeys](functions_guards.md#propertykeys)
- [propertyKeysU](functions_guards.md#propertykeysu)
- [set](functions_guards.md#set)
- [setU](functions_guards.md#setu)
- [sets](functions_guards.md#sets)
- [setsU](functions_guards.md#setsu)
- [string](functions_guards.md#string)
- [stringU](functions_guards.md#stringu)
- [strings](functions_guards.md#strings)
- [stringsU](functions_guards.md#stringsu)
- [symbol](functions_guards.md#symbol)
- [symbolU](functions_guards.md#symbolu)
- [symbols](functions_guards.md#symbols)
- [symbolsU](functions_guards.md#symbolsu)
- [true](functions_guards.md#true)
- [tuple](functions_guards.md#tuple)
- [undefined](functions_guards.md#undefined)
- [unknown](functions_guards.md#unknown)
- [unknowns](functions_guards.md#unknowns)
- [unknownsU](functions_guards.md#unknownsu)

## Type Aliases

### Guards

Ƭ **Guards**: readonly [`Guard`](../interfaces/functions_guards.Guard.md)[]

___

### GuardsRecord

Ƭ **GuardsRecord**\<`T`, `K`\>: \{ readonly [L in K]-?: Guard\<T[L]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` = keyof `T` |

## Functions

### and

▸ **and**\<`A`, `B`\>(`value`, `guard1`, `guard2`): value is A & B

Checks if value type is A & B.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`B`\> | Guard for type B. |

#### Returns

value is A & B

_True_ if value type is A & B, _false_ otherwise.

▸ **and**\<`A`, `B`, `C`\>(`value`, `guard1`, `guard2`, `guard3`): value is A & B & C

Checks if value type is A & B & C.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`C`\> | Guard for type C. |

#### Returns

value is A & B & C

_True_ if value type is A & B & C, _false_ otherwise.

▸ **and**\<`A`, `B`, `C`, `D`\>(`value`, `guard1`, `guard2`, `guard3`, `guard4`): value is A & B & C & D

Checks if value type is A & B & C & D.

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
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`C`\> | Guard for type C. |
| `guard4` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`D`\> | Guard for type D. |

#### Returns

value is A & B & C & D

_True_ if value type is A & B & C & D, _false_ otherwise.

___

### array

▸ **array**(`value`): value is unknowns

Checks if value is an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is unknowns

_True_ if value is an array, _false_ otherwise.

___

### arrayU

▸ **arrayU**(`value`): value is undefined \| unknowns

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| unknowns

_True_ if value type is T, _false_ otherwise.

___

### arrays

▸ **arrays**(`value`): value is readonly unknowns[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly unknowns[]

_True_ if value type is T, _false_ otherwise.

___

### arraysU

▸ **arraysU**(`value`): value is undefined \| readonly unknowns[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly unknowns[]

_True_ if value type is T, _false_ otherwise.

___

### boolean

▸ **boolean**(`value`): value is boolean

Checks if value is a boolean.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is boolean

_True_ if value is a boolean, _false_ otherwise.

___

### booleanU

▸ **booleanU**(`value`): value is undefined \| boolean

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| boolean

_True_ if value type is T, _false_ otherwise.

___

### booleans

▸ **booleans**(`value`): value is readonly boolean[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly boolean[]

_True_ if value type is T, _false_ otherwise.

___

### booleansU

▸ **booleansU**(`value`): value is undefined \| readonly boolean[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly boolean[]

_True_ if value type is T, _false_ otherwise.

___

### callable

▸ **callable**\<`T`\>(`value`): value is T

Checks if value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Callable`](../interfaces/types_function.Callable.md)\<`unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is T

_True_ if value type is T, _false_ otherwise.

___

### constructor

▸ **constructor**\<`T`\>(`value`): value is T

Checks if value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](../interfaces/types_function.Constructor.md)\<`unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is T

_True_ if value type is T, _false_ otherwise.

___

### empty

▸ **empty**(`value`): value is empty

Checks if value type is empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is empty

_True_ if value type is empty, _false_ otherwise.

___

### enumeration

▸ **enumeration**\<`T`\>(`value`, `en`): value is T

Checks if value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `en` | [`IndexedRecord`](types_core.md#indexedrecord)\<`T`\> | Validation object. |

#### Returns

value is T

_True_ if value type is T, _false_ otherwise.

___

### factory

▸ **factory**\<`T`, `A`\>(`guard`, `...args`): [`Guard`](../interfaces/functions_guards.Guard.md)\<`T`\>

Creates single-arg guard.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends [`unknowns`](types_core.md#unknowns) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard` | [`MultiArgGuard`](../interfaces/functions_guards.MultiArgGuard.md)\<`T`, `A`\> | Multi-arg guard. |
| `...args` | `A` | Arguments. |

#### Returns

[`Guard`](../interfaces/functions_guards.Guard.md)\<`T`\>

Single-arg guard.

___

### false

▸ **false**(`value`): value is false

Checks if value is _false_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is false

_True_ if value is _false_, _false_ otherwise.

___

### indexedObject

▸ **indexedObject**(`value`): value is IndexedObject

Checks if value type is IndexedObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is IndexedObject

_True_ if value type is IndexedObject, _false_ otherwise.

___

### indexedObjectU

▸ **indexedObjectU**(`value`): value is undefined \| IndexedObject

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| IndexedObject

_True_ if value type is T, _false_ otherwise.

___

### indexedObjects

▸ **indexedObjects**(`value`): value is readonly IndexedObject[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly IndexedObject[]

_True_ if value type is T, _false_ otherwise.

___

### indexedObjectsU

▸ **indexedObjectsU**(`value`): value is undefined \| readonly IndexedObject[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly IndexedObject[]

_True_ if value type is T, _false_ otherwise.

___

### instanceOf

▸ **instanceOf**\<`T`\>(`value`, `ctor`): value is T

Checks if value type is T.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `ctor` | [`Constructor`](../interfaces/types_function.Constructor.md)\<`T`\> | Constructor. |

#### Returns

value is T

_True_ if value type is T, _false_ otherwise.

___

### instancesOf

▸ **instancesOf**\<`T`\>(`value`, `ctor`): value is readonly T[]

Checks if value type is T[].

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `ctor` | [`Constructor`](../interfaces/types_function.Constructor.md)\<`T`\> | Constructor. |

#### Returns

value is readonly T[]

_True_ if value type is T[], _false_ otherwise.

___

### map

▸ **map**(`value`): value is ReadonlyMap\<unknown, unknown\>

Checks if value type is Map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is ReadonlyMap\<unknown, unknown\>

_True_ if value type is Map, _false_ otherwise.

___

### mapU

▸ **mapU**(`value`): value is undefined \| ReadonlyMap\<unknown, unknown\>

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| ReadonlyMap\<unknown, unknown\>

_True_ if value type is T, _false_ otherwise.

___

### maps

▸ **maps**(`value`): value is readonly ReadonlyMap\<unknown, unknown\>[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly ReadonlyMap\<unknown, unknown\>[]

_True_ if value type is T, _false_ otherwise.

___

### mapsU

▸ **mapsU**(`value`): value is undefined \| readonly ReadonlyMap\<unknown, unknown\>[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly ReadonlyMap\<unknown, unknown\>[]

_True_ if value type is T, _false_ otherwise.

___

### never

▸ **never**(`_value`): \_value is never

Checks if value is _never_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_value` | `unknown` | Value. |

#### Returns

\_value is never

_False_.

___

### not

▸ **not**\<`T`, `V`\>(`value`, `guard`): value is Exclude\<V, T\>

Checks if value type is not T.

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `V` | Value. |
| `guard` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`T`\> | Guard for type T. |

#### Returns

value is Exclude\<V, T\>

_True_ if value type is not T, _false_ otherwise.

___

### null

▸ **null**(`value`): value is null

Checks if value is _null_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is null

_True_ if value is _null_, _false_ otherwise.

___

### numStr

▸ **numStr**(`value`): value is NumStr

Checks if value type is NumStr.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is NumStr

_True_ if value type is NumStr, _false_ otherwise.

___

### numStrU

▸ **numStrU**(`value`): value is undefined \| NumStr

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| NumStr

_True_ if value type is T, _false_ otherwise.

___

### numStrs

▸ **numStrs**(`value`): value is readonly NumStr[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly NumStr[]

_True_ if value type is T, _false_ otherwise.

___

### numStrsU

▸ **numStrsU**(`value`): value is undefined \| readonly NumStr[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly NumStr[]

_True_ if value type is T, _false_ otherwise.

___

### number

▸ **number**(`value`): value is number

Checks if value is a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is number

_True_ if value is a number, _false_ otherwise.

___

### numberU

▸ **numberU**(`value`): value is undefined \| number

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| number

_True_ if value type is T, _false_ otherwise.

___

### numbers

▸ **numbers**(`value`): value is readonly number[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly number[]

_True_ if value type is T, _false_ otherwise.

___

### numbersU

▸ **numbersU**(`value`): value is undefined \| readonly number[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly number[]

_True_ if value type is T, _false_ otherwise.

___

### object

▸ **object**(`value`): value is object

Checks if value is an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is object

_True_ if value is an object, _false_ otherwise.

___

### objectU

▸ **objectU**(`value`): value is undefined \| object

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| object

_True_ if value type is T, _false_ otherwise.

___

### objects

▸ **objects**(`value`): value is readonly object[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly object[]

_True_ if value type is T, _false_ otherwise.

___

### objectsU

▸ **objectsU**(`value`): value is undefined \| readonly object[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly object[]

_True_ if value type is T, _false_ otherwise.

___

### or

▸ **or**\<`A`, `B`\>(`value`, `guard1`, `guard2`): value is A \| B

Checks if value type is A | B.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`B`\> | Guard for type B. |

#### Returns

value is A \| B

_True_ if value type is A | B, _false_ otherwise.

▸ **or**\<`A`, `B`, `C`\>(`value`, `guard1`, `guard2`, `guard3`): value is A \| B \| C

Checks if value type is A | B | C.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`C`\> | Guard for type C. |

#### Returns

value is A \| B \| C

_True_ if value type is A | B | C, _false_ otherwise.

▸ **or**\<`A`, `B`, `C`, `D`\>(`value`, `guard1`, `guard2`, `guard3`, `guard4`): value is A \| B \| C \| D

Checks if value type is A | B | C | D.

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
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`C`\> | Guard for type C. |
| `guard4` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`D`\> | Guard for type D. |

#### Returns

value is A \| B \| C \| D

_True_ if value type is A | B | C | D, _false_ otherwise.

___

### propertyKey

▸ **propertyKey**(`value`): value is PropertyKey

Checks if value type is PropertyKey.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is PropertyKey

_True_ if value type is PropertyKey, _false_ otherwise.

___

### propertyKeyU

▸ **propertyKeyU**(`value`): value is undefined \| PropertyKey

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| PropertyKey

_True_ if value type is T, _false_ otherwise.

___

### propertyKeys

▸ **propertyKeys**(`value`): value is readonly PropertyKey[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly PropertyKey[]

_True_ if value type is T, _false_ otherwise.

___

### propertyKeysU

▸ **propertyKeysU**(`value`): value is undefined \| readonly PropertyKey[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly PropertyKey[]

_True_ if value type is T, _false_ otherwise.

___

### set

▸ **set**(`value`): value is ReadonlySet\<unknown\>

Checks if value type is Set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is ReadonlySet\<unknown\>

_True_ if value type is Set, _false_ otherwise.

___

### setU

▸ **setU**(`value`): value is undefined \| ReadonlySet\<unknown\>

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| ReadonlySet\<unknown\>

_True_ if value type is T, _false_ otherwise.

___

### sets

▸ **sets**(`value`): value is readonly ReadonlySet\<unknown\>[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly ReadonlySet\<unknown\>[]

_True_ if value type is T, _false_ otherwise.

___

### setsU

▸ **setsU**(`value`): value is undefined \| readonly ReadonlySet\<unknown\>[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly ReadonlySet\<unknown\>[]

_True_ if value type is T, _false_ otherwise.

___

### string

▸ **string**(`value`): value is string

Checks if value is a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is string

_True_ if value is a string, _false_ otherwise.

___

### stringU

▸ **stringU**(`value`): value is stringU

Checks if value is a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is stringU

_True_ if value is a string, _false_ otherwise.

___

### strings

▸ **strings**(`value`): value is readonly string[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly string[]

_True_ if value type is T, _false_ otherwise.

___

### stringsU

▸ **stringsU**(`value`): value is undefined \| readonly string[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly string[]

_True_ if value type is T, _false_ otherwise.

___

### symbol

▸ **symbol**(`value`): value is symbol

Checks if value is a symbol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is symbol

_True_ if value is a symbol, _false_ otherwise.

___

### symbolU

▸ **symbolU**(`value`): value is undefined \| symbol

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| symbol

_True_ if value type is T, _false_ otherwise.

___

### symbols

▸ **symbols**(`value`): value is readonly symbol[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly symbol[]

_True_ if value type is T, _false_ otherwise.

___

### symbolsU

▸ **symbolsU**(`value`): value is undefined \| readonly symbol[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly symbol[]

_True_ if value type is T, _false_ otherwise.

___

### true

▸ **true**(`value`): value is true

Checks if value is _true_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is true

_True_ if value is _true_, _false_ otherwise.

___

### tuple

▸ **tuple**\<`A`\>(`value`, `guard`): value is readonly [A]

Checks if value type is [A].

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`A`\> | Guard for type A. |

#### Returns

value is readonly [A]

_True_ if value type is [A], _false_ otherwise.

▸ **tuple**\<`A`, `B`\>(`value`, `guard1`, `guard2`): value is readonly [A, B]

Checks if value type is [A, B].

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`B`\> | Guard for type B. |

#### Returns

value is readonly [A, B]

_True_ if value type is [A, B], _false_ otherwise.

▸ **tuple**\<`A`, `B`, `C`\>(`value`, `guard1`, `guard2`, `guard3`): value is readonly [A, B, C]

Checks if value type is [A, B, C].

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`C`\> | Guard for type C. |

#### Returns

value is readonly [A, B, C]

_True_ if value type is [A, B, C], _false_ otherwise.

▸ **tuple**\<`A`, `B`, `C`, `D`\>(`value`, `guard1`, `guard2`, `guard3`, `guard4`): value is readonly [A, B, C, D]

Checks if value type is [A, B, C, D].

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
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`C`\> | Guard for type C. |
| `guard4` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`D`\> | Guard for type D. |

#### Returns

value is readonly [A, B, C, D]

_True_ if value type is [A, B, C, D], _false_ otherwise.

___

### undefined

▸ **undefined**(`value`): value is undefined

Checks if value is _undefined_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined

_True_ if value is _undefined_, _false_ otherwise.

___

### unknown

▸ **unknown**(`_value`): \_value is unknown

Checks if value is _unknown_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_value` | `unknown` | Value. |

#### Returns

\_value is unknown

_True_.

___

### unknowns

▸ **unknowns**(`value`): value is readonly unknown[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly unknown[]

_True_ if value type is T, _false_ otherwise.

___

### unknownsU

▸ **unknownsU**(`value`): value is undefined \| readonly unknown[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly unknown[]

_True_ if value type is T, _false_ otherwise.
