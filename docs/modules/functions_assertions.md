[Utility functions](../index.md) / [Exports](../modules.md) / functions/assertions

# Module: functions/assertions

## Table of contents

### Type Aliases

- [ErrorArg](functions_assertions.md#errorarg)

### Variables

- [not](functions_assertions.md#not)

### Functions

- [array](functions_assertions.md#array)
- [boolean](functions_assertions.md#boolean)
- [byGuard](functions_assertions.md#byguard)
- [callable](functions_assertions.md#callable)
- [constructor](functions_assertions.md#constructor)
- [empty](functions_assertions.md#empty)
- [enumeration](functions_assertions.md#enumeration)
- [indexedObject](functions_assertions.md#indexedobject)
- [instanceOf](functions_assertions.md#instanceof)
- [instancesOf](functions_assertions.md#instancesof)
- [map](functions_assertions.md#map)
- [numStr](functions_assertions.md#numstr)
- [number](functions_assertions.md#number)
- [object](functions_assertions.md#object)
- [propertyKey](functions_assertions.md#propertykey)
- [set](functions_assertions.md#set)
- [string](functions_assertions.md#string)
- [stringU](functions_assertions.md#stringu)
- [symbol](functions_assertions.md#symbol)
- [toBeFalse](functions_assertions.md#tobefalse)
- [toBeTrue](functions_assertions.md#tobetrue)
- [wrapError](functions_assertions.md#wraperror)

## Type Aliases

### ErrorArg

Ƭ **ErrorArg**: [`ErrorArgFn`](../interfaces/functions_assertions_internal.ErrorArgFn.md) \| `string`

## Variables

### not

• `Const` **not**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `empty` | \<T\>(`value`: `T`, `error`: [`ErrorArg`](functions_assertions.md#errorarg)) => asserts value is Exclude\<T, empty\> | Asserts that value type is not empty. |

## Functions

### array

▸ **array**(`value`, `error`): asserts value is unknowns

Asserts that value is an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is unknowns

___

### boolean

▸ **boolean**(`value`, `error`): asserts value is boolean

Asserts that value is a boolean.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is boolean

___

### byGuard

▸ **byGuard**\<`T`\>(`value`, `guard`, `error`): asserts value is T

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
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is T

___

### callable

▸ **callable**\<`T`\>(`value`, `error`): asserts value is T

Asserts that value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Callable`](../interfaces/types_function.Callable.md)\<`unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is T

___

### constructor

▸ **constructor**\<`T`\>(`value`, `error`): asserts value is T

Asserts that value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](../interfaces/types_function.Constructor.md)\<`unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is T

___

### empty

▸ **empty**(`value`, `error`): asserts value is empty

Asserts that value type is empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is empty

___

### enumeration

▸ **enumeration**\<`T`\>(`value`, `en`, `error`): asserts value is T

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
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is T

___

### indexedObject

▸ **indexedObject**(`value`, `error`): asserts value is IndexedObject

Asserts that value type is IndexedObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is IndexedObject

___

### instanceOf

▸ **instanceOf**\<`T`\>(`value`, `ctor`, `error`): asserts value is T

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
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is T

___

### instancesOf

▸ **instancesOf**\<`T`\>(`value`, `ctor`, `error`): asserts value is readonly T[]

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
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is readonly T[]

___

### map

▸ **map**(`value`, `error`): asserts value is ReadonlyMap\<unknown, unknown\>

Asserts that value type is Map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is ReadonlyMap\<unknown, unknown\>

___

### numStr

▸ **numStr**(`value`, `error`): asserts value is NumStr

Asserts that value type is NumStr.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is NumStr

___

### number

▸ **number**(`value`, `error`): asserts value is number

Asserts that value is a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is number

___

### object

▸ **object**(`value`, `error`): asserts value is object

Asserts that value is an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is object

___

### propertyKey

▸ **propertyKey**(`value`, `error`): asserts value is PropertyKey

Asserts that value type is PropertyKey.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is PropertyKey

___

### set

▸ **set**(`value`, `error`): asserts value is ReadonlySet\<unknown\>

Asserts that value type is Set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is ReadonlySet\<unknown\>

___

### string

▸ **string**(`value`, `error`): asserts value is string

Asserts that value is a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is string

___

### stringU

▸ **stringU**(`value`, `error`): asserts value is stringU

Asserts that value is a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is stringU

___

### symbol

▸ **symbol**(`value`, `error`): asserts value is symbol

Asserts that value is a symbol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is symbol

___

### toBeFalse

▸ **toBeFalse**(`value`, `error`): asserts value is false

Asserts value to be _false_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is false

___

### toBeTrue

▸ **toBeTrue**(`value`, `error`): asserts value is true

Asserts value to be _true_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](functions_assertions.md#errorarg) | Error. |

#### Returns

asserts value is true

___

### wrapError

▸ **wrapError**\<`T`\>(`e`): () => `T`

Wraps error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `T` | Error. |

#### Returns

`fn`

Wrapped error.

▸ (): `T`

##### Returns

`T`
