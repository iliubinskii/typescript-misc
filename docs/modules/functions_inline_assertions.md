[Utility functions](../index.md) / [Exports](../modules.md) / functions/inline-assertions

# Module: functions/inline-assertions

## Table of contents

### Interfaces

- [ExclusionInlineAssertion](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)
- [InlineAssertion](../interfaces/functions_inline_assertions.InlineAssertion.md)

### Variables

- [not](functions_inline_assertions.md#not)

### Functions

- [array](functions_inline_assertions.md#array)
- [arrayU](functions_inline_assertions.md#arrayu)
- [arrays](functions_inline_assertions.md#arrays)
- [arraysU](functions_inline_assertions.md#arraysu)
- [boolean](functions_inline_assertions.md#boolean)
- [booleanU](functions_inline_assertions.md#booleanu)
- [booleans](functions_inline_assertions.md#booleans)
- [booleansU](functions_inline_assertions.md#booleansu)
- [byGuard](functions_inline_assertions.md#byguard)
- [callable](functions_inline_assertions.md#callable)
- [constructor](functions_inline_assertions.md#constructor)
- [empty](functions_inline_assertions.md#empty)
- [enumeration](functions_inline_assertions.md#enumeration)
- [false](functions_inline_assertions.md#false)
- [indexedObject](functions_inline_assertions.md#indexedobject)
- [indexedObjects](functions_inline_assertions.md#indexedobjects)
- [indexedObjectsU](functions_inline_assertions.md#indexedobjectsu)
- [instanceOf](functions_inline_assertions.md#instanceof)
- [instancesOf](functions_inline_assertions.md#instancesof)
- [map](functions_inline_assertions.md#map)
- [mapU](functions_inline_assertions.md#mapu)
- [maps](functions_inline_assertions.md#maps)
- [mapsU](functions_inline_assertions.md#mapsu)
- [never](functions_inline_assertions.md#never)
- [null](functions_inline_assertions.md#null)
- [numStr](functions_inline_assertions.md#numstr)
- [numStrU](functions_inline_assertions.md#numstru)
- [numStrs](functions_inline_assertions.md#numstrs)
- [numStrsU](functions_inline_assertions.md#numstrsu)
- [number](functions_inline_assertions.md#number)
- [numberU](functions_inline_assertions.md#numberu)
- [numbers](functions_inline_assertions.md#numbers)
- [numbersU](functions_inline_assertions.md#numbersu)
- [object](functions_inline_assertions.md#object)
- [objectU](functions_inline_assertions.md#objectu)
- [objects](functions_inline_assertions.md#objects)
- [objectsU](functions_inline_assertions.md#objectsu)
- [propertyKey](functions_inline_assertions.md#propertykey)
- [propertyKeyU](functions_inline_assertions.md#propertykeyu)
- [propertyKeys](functions_inline_assertions.md#propertykeys)
- [propertyKeysU](functions_inline_assertions.md#propertykeysu)
- [set](functions_inline_assertions.md#set)
- [setU](functions_inline_assertions.md#setu)
- [sets](functions_inline_assertions.md#sets)
- [setsU](functions_inline_assertions.md#setsu)
- [string](functions_inline_assertions.md#string)
- [stringU](functions_inline_assertions.md#stringu)
- [strings](functions_inline_assertions.md#strings)
- [stringsU](functions_inline_assertions.md#stringsu)
- [symbol](functions_inline_assertions.md#symbol)
- [symbolU](functions_inline_assertions.md#symbolu)
- [symbols](functions_inline_assertions.md#symbols)
- [symbolsU](functions_inline_assertions.md#symbolsu)
- [true](functions_inline_assertions.md#true)
- [undefined](functions_inline_assertions.md#undefined)
- [unknown](functions_inline_assertions.md#unknown)
- [unknowns](functions_inline_assertions.md#unknowns)
- [unknownsU](functions_inline_assertions.md#unknownsu)

## Variables

### not

• `Const` **not**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `array` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<[`unknowns`](types_core.md#unknowns)\> |
| `boolean` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<`boolean`\> |
| `empty` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<[`empty`](types_core.md#empty)\> |
| `false` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<``false``\> |
| `indexedObject` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<[`IndexedObject`](types_core.md#indexedobject)\> |
| `map` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<`ReadonlyMap`\<`unknown`, `unknown`\>\> |
| `null` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<``null``\> |
| `numStr` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<[`NumStr`](types_core.md#numstr)\> |
| `number` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<`number`\> |
| `object` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<`object`\> |
| `propertyKey` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<`PropertyKey`\> |
| `set` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<`ReadonlySet`\<`unknown`\>\> |
| `string` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<`string`\> |
| `stringU` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<[`stringU`](types_core.md#stringu)\> |
| `symbol` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<`symbol`\> |
| `true` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<``true``\> |
| `undefined` | [`ExclusionInlineAssertion`](../interfaces/functions_inline_assertions.ExclusionInlineAssertion.md)\<`undefined`\> |

## Functions

### array

▸ **array**(`value`): [`unknowns`](types_core.md#unknowns)

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`unknowns`](types_core.md#unknowns)

Value if its type is T.

**`Throws`**

Error otherwise.

___

### arrayU

▸ **arrayU**(`value`): `undefined` \| [`unknowns`](types_core.md#unknowns)

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| [`unknowns`](types_core.md#unknowns)

Value if its type is T.

**`Throws`**

Error otherwise.

___

### arrays

▸ **arrays**(`value`): readonly [`unknowns`](types_core.md#unknowns)[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly [`unknowns`](types_core.md#unknowns)[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### arraysU

▸ **arraysU**(`value`): `undefined` \| readonly [`unknowns`](types_core.md#unknowns)[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly [`unknowns`](types_core.md#unknowns)[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### boolean

▸ **boolean**(`value`): `boolean`

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`boolean`

Value if its type is T.

**`Throws`**

Error otherwise.

___

### booleanU

▸ **booleanU**(`value`): `undefined` \| `boolean`

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `boolean`

Value if its type is T.

**`Throws`**

Error otherwise.

___

### booleans

▸ **booleans**(`value`): readonly `boolean`[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `boolean`[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### booleansU

▸ **booleansU**(`value`): `undefined` \| readonly `boolean`[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `boolean`[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### byGuard

▸ **byGuard**\<`T`\>(`value`, `guard`): `T`

Asserts that value type is T.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`T`\> | Guard for type T. |

#### Returns

`T`

Value if value type is T.

**`Throws`**

Error otherwise.

___

### callable

▸ **callable**\<`T`\>(`value`): `T`

Asserts that value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Callable`](../interfaces/types_function.Callable.md)\<`unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`T`

Value if value type is T.

**`Throws`**

Error otherwise.

___

### constructor

▸ **constructor**\<`T`\>(`value`): `T`

Asserts that value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](../interfaces/types_function.Constructor.md)\<`unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`T`

Value if value type is T.

**`Throws`**

Error otherwise.

___

### empty

▸ **empty**(`value`): [`empty`](types_core.md#empty)

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`empty`](types_core.md#empty)

Value if its type is T.

**`Throws`**

Error otherwise.

___

### enumeration

▸ **enumeration**\<`T`\>(`value`, `en`): `T`

Asserts that value type is T.

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

`T`

Value if value type is T.

**`Throws`**

Error otherwise.

___

### false

▸ **false**(`value`): ``false``

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

``false``

Value if its type is T.

**`Throws`**

Error otherwise.

___

### indexedObject

▸ **indexedObject**(`value`): [`IndexedObject`](types_core.md#indexedobject)

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`IndexedObject`](types_core.md#indexedobject)

Value if its type is T.

**`Throws`**

Error otherwise.

___

### indexedObjects

▸ **indexedObjects**(`value`): readonly [`IndexedObject`](types_core.md#indexedobject)[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly [`IndexedObject`](types_core.md#indexedobject)[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### indexedObjectsU

▸ **indexedObjectsU**(`value`): `undefined` \| readonly [`IndexedObject`](types_core.md#indexedobject)[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly [`IndexedObject`](types_core.md#indexedobject)[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### instanceOf

▸ **instanceOf**\<`T`\>(`value`, `ctor`): `T`

Asserts that value type is T.

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

`T`

Value if value type is T.

**`Throws`**

Error otherwise.

___

### instancesOf

▸ **instancesOf**\<`T`\>(`value`, `ctor`): readonly `T`[]

Asserts that value type is T[].

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

readonly `T`[]

Value if value type is T[].

**`Throws`**

Error otherwise.

___

### map

▸ **map**(`value`): `ReadonlyMap`\<`unknown`, `unknown`\>

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`ReadonlyMap`\<`unknown`, `unknown`\>

Value if its type is T.

**`Throws`**

Error otherwise.

___

### mapU

▸ **mapU**(`value`): `undefined` \| `ReadonlyMap`\<`unknown`, `unknown`\>

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `ReadonlyMap`\<`unknown`, `unknown`\>

Value if its type is T.

**`Throws`**

Error otherwise.

___

### maps

▸ **maps**(`value`): readonly `ReadonlyMap`\<`unknown`, `unknown`\>[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `ReadonlyMap`\<`unknown`, `unknown`\>[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### mapsU

▸ **mapsU**(`value`): `undefined` \| readonly `ReadonlyMap`\<`unknown`, `unknown`\>[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `ReadonlyMap`\<`unknown`, `unknown`\>[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### never

▸ **never**(`value`): `never`

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`never`

Value if its type is T.

**`Throws`**

Error otherwise.

___

### null

▸ **null**(`value`): ``null``

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

``null``

Value if its type is T.

**`Throws`**

Error otherwise.

___

### numStr

▸ **numStr**(`value`): [`NumStr`](types_core.md#numstr)

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`NumStr`](types_core.md#numstr)

Value if its type is T.

**`Throws`**

Error otherwise.

___

### numStrU

▸ **numStrU**(`value`): `undefined` \| [`NumStr`](types_core.md#numstr)

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| [`NumStr`](types_core.md#numstr)

Value if its type is T.

**`Throws`**

Error otherwise.

___

### numStrs

▸ **numStrs**(`value`): readonly [`NumStr`](types_core.md#numstr)[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly [`NumStr`](types_core.md#numstr)[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### numStrsU

▸ **numStrsU**(`value`): `undefined` \| readonly [`NumStr`](types_core.md#numstr)[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly [`NumStr`](types_core.md#numstr)[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### number

▸ **number**(`value`): `number`

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`number`

Value if its type is T.

**`Throws`**

Error otherwise.

___

### numberU

▸ **numberU**(`value`): `undefined` \| `number`

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `number`

Value if its type is T.

**`Throws`**

Error otherwise.

___

### numbers

▸ **numbers**(`value`): readonly `number`[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `number`[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### numbersU

▸ **numbersU**(`value`): `undefined` \| readonly `number`[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `number`[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### object

▸ **object**(`value`): `object`

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`object`

Value if its type is T.

**`Throws`**

Error otherwise.

___

### objectU

▸ **objectU**(`value`): `undefined` \| `object`

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `object`

Value if its type is T.

**`Throws`**

Error otherwise.

___

### objects

▸ **objects**(`value`): readonly `object`[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `object`[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### objectsU

▸ **objectsU**(`value`): `undefined` \| readonly `object`[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `object`[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### propertyKey

▸ **propertyKey**(`value`): `PropertyKey`

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`PropertyKey`

Value if its type is T.

**`Throws`**

Error otherwise.

___

### propertyKeyU

▸ **propertyKeyU**(`value`): `undefined` \| `PropertyKey`

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `PropertyKey`

Value if its type is T.

**`Throws`**

Error otherwise.

___

### propertyKeys

▸ **propertyKeys**(`value`): readonly `PropertyKey`[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `PropertyKey`[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### propertyKeysU

▸ **propertyKeysU**(`value`): `undefined` \| `PropertyKey`

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `PropertyKey`

Value if its type is T.

**`Throws`**

Error otherwise.

___

### set

▸ **set**(`value`): `ReadonlySet`\<`unknown`\>

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`ReadonlySet`\<`unknown`\>

Value if its type is T.

**`Throws`**

Error otherwise.

___

### setU

▸ **setU**(`value`): `undefined` \| `ReadonlySet`\<`unknown`\>

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `ReadonlySet`\<`unknown`\>

Value if its type is T.

**`Throws`**

Error otherwise.

___

### sets

▸ **sets**(`value`): readonly `ReadonlySet`\<`unknown`\>[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `ReadonlySet`\<`unknown`\>[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### setsU

▸ **setsU**(`value`): `undefined` \| readonly `ReadonlySet`\<`unknown`\>[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `ReadonlySet`\<`unknown`\>[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### string

▸ **string**(`value`): `string`

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`string`

Value if its type is T.

**`Throws`**

Error otherwise.

___

### stringU

▸ **stringU**(`value`): [`stringU`](types_core.md#stringu)

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`stringU`](types_core.md#stringu)

Value if its type is T.

**`Throws`**

Error otherwise.

___

### strings

▸ **strings**(`value`): readonly `string`[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `string`[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### stringsU

▸ **stringsU**(`value`): `undefined` \| readonly `string`[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `string`[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### symbol

▸ **symbol**(`value`): `symbol`

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`symbol`

Value if its type is T.

**`Throws`**

Error otherwise.

___

### symbolU

▸ **symbolU**(`value`): `undefined` \| `symbol`

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `symbol`

Value if its type is T.

**`Throws`**

Error otherwise.

___

### symbols

▸ **symbols**(`value`): readonly `symbol`[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `symbol`[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### symbolsU

▸ **symbolsU**(`value`): `undefined` \| readonly `symbol`[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `symbol`[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### true

▸ **true**(`value`): ``true``

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

``true``

Value if its type is T.

**`Throws`**

Error otherwise.

___

### undefined

▸ **undefined**(`value`): `undefined`

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined`

Value if its type is T.

**`Throws`**

Error otherwise.

___

### unknown

▸ **unknown**(`value`): `unknown`

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`unknown`

Value if its type is T.

**`Throws`**

Error otherwise.

___

### unknowns

▸ **unknowns**(`value`): readonly `unknown`[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `unknown`[]

Value if its type is T.

**`Throws`**

Error otherwise.

___

### unknownsU

▸ **unknownsU**(`value`): `undefined` \| readonly `unknown`[]

Asserts value type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `unknown`[]

Value if its type is T.

**`Throws`**

Error otherwise.
