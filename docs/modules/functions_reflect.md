[Utility functions](../index.md) / [Exports](../modules.md) / functions/reflect

# Module: functions/reflect

## Table of contents

### Type Aliases

- [MetadataKey](functions_reflect.md#metadatakey)

### Functions

- [apply](functions_reflect.md#apply)
- [construct](functions_reflect.md#construct)
- [defineMetadata](functions_reflect.md#definemetadata)
- [defineMetadataKey](functions_reflect.md#definemetadatakey)
- [defineProperty](functions_reflect.md#defineproperty)
- [deleteProperty](functions_reflect.md#deleteproperty)
- [get](functions_reflect.md#get)
- [getMetadata](functions_reflect.md#getmetadata)
- [getMetadataKey](functions_reflect.md#getmetadatakey)
- [getOwnMetadata](functions_reflect.md#getownmetadata)
- [getOwnMetadataKey](functions_reflect.md#getownmetadatakey)
- [getOwnPropertyDescriptor](functions_reflect.md#getownpropertydescriptor)
- [getPrototypeOf](functions_reflect.md#getprototypeof)
- [has](functions_reflect.md#has)
- [hasMetadata](functions_reflect.md#hasmetadata)
- [hasMetadataKey](functions_reflect.md#hasmetadatakey)
- [hasOwnMetadata](functions_reflect.md#hasownmetadata)
- [hasOwnMetadataKey](functions_reflect.md#hasownmetadatakey)
- [isExtensible](functions_reflect.md#isextensible)
- [ownKeys](functions_reflect.md#ownkeys)
- [preventExtensions](functions_reflect.md#preventextensions)
- [set](functions_reflect.md#set)
- [setPrototypeOf](functions_reflect.md#setprototypeof)

## Type Aliases

### MetadataKey

Ƭ **MetadataKey**: `string` \| `symbol`

## Functions

### apply

▸ **apply**(`target`, `thisArg`, `args`): `unknown`

Typed version of Reflect.apply.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Callable`](../interfaces/types_function.Callable.md)\<`unknown`\> | Target function. |
| `thisArg` | `unknown` | This argument. |
| `args` | `ArrayLike`\<`unknown`\> | Arguments. |

#### Returns

`unknown`

Function execution result.

___

### construct

▸ **construct**(`target`, `args`, `newTarget?`): `unknown`

Typed version of Reflect.construct.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Constructor`](../interfaces/types_function.Constructor.md)\<`unknown`\> | Target function. |
| `args` | `ArrayLike`\<`unknown`\> | Arguments. |
| `newTarget?` | [`Constructor`](../interfaces/types_function.Constructor.md)\<`unknown`\> | New target function. |

#### Returns

`unknown`

Constructed object.

___

### defineMetadata

▸ **defineMetadata**(`metadataKey`, `metadataValue`, `target`): `void`

Typed version of Reflect.defineMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](functions_reflect.md#metadatakey) | Metadata key. |
| `metadataValue` | `unknown` | Metadata value. |
| `target` | `object` | Target object. |

#### Returns

`void`

___

### defineMetadataKey

▸ **defineMetadataKey**(`metadataKey`, `metadataValue`, `target`, `key`): `void`

Typed version of Reflect.defineMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](functions_reflect.md#metadatakey) | Metadata key. |
| `metadataValue` | `unknown` | Metadata value. |
| `target` | `object` | Target object. |
| `key` | [`MetadataKey`](functions_reflect.md#metadatakey) | Property key. |

#### Returns

`void`

___

### defineProperty

▸ **defineProperty**(`target`, `propertyKey`, `attributes`): `boolean`

Adds a property to an object, or modifies attributes of an existing property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object. |
| `propertyKey` | `PropertyKey` | The property name. |
| `attributes` | `PropertyDescriptor` & `ThisType`\<`any`\> | Descriptor for the property. It can be for a data property or an accessor property. |

#### Returns

`boolean`

___

### deleteProperty

▸ **deleteProperty**(`target`, `propertyKey`): `boolean`

Removes a property from an object, equivalent to `delete target[propertyKey]`,
except it won't throw if `target[propertyKey]` is non-configurable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Object from which to remove the own property. |
| `propertyKey` | `PropertyKey` | The property name. |

#### Returns

`boolean`

___

### get

▸ **get**(`target`, `key`): `unknown`

Typed version of Reflect.get.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Target object. |
| `key` | `PropertyKey` | Property key. |

#### Returns

`unknown`

Property value.

▸ **get**\<`T`\>(`target`, `key`, `guard?`, `defVal?`): `T`

Typed version of Reflect.get.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Target object. |
| `key` | `PropertyKey` | Property key. |
| `guard?` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`T`\> | Guard for type T. |
| `defVal?` | `T` | Default value. |

#### Returns

`T`

Property value if its type is T.

**`Throws`**

AssertionError otherwise.

___

### getMetadata

▸ **getMetadata**(`metadataKey`, `target`): `unknown`

Typed version of Reflect.getMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](functions_reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |

#### Returns

`unknown`

Metadata value.

▸ **getMetadata**\<`T`\>(`metadataKey`, `target`, `guard?`, `defVal?`): `T`

Typed version of Reflect.getMetadata.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](functions_reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `guard?` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`T`\> | Guard for type T. |
| `defVal?` | `T` | Default value. |

#### Returns

`T`

Metadata value if its type is T.

**`Throws`**

AssertionError otherwise.

___

### getMetadataKey

▸ **getMetadataKey**(`metadataKey`, `target`, `key`): `unknown`

Typed version of Reflect.getMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](functions_reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `key` | [`MetadataKey`](functions_reflect.md#metadatakey) | Property key. |

#### Returns

`unknown`

Metadata value.

▸ **getMetadataKey**\<`T`\>(`metadataKey`, `target`, `key`, `guard?`, `defVal?`): `T`

Typed version of Reflect.getMetadata.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](functions_reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `key` | [`MetadataKey`](functions_reflect.md#metadatakey) | Property key. |
| `guard?` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`T`\> | Guard for type T. |
| `defVal?` | `T` | Default value. |

#### Returns

`T`

Metadata value if its type is T.

**`Throws`**

AssertionError otherwise.

___

### getOwnMetadata

▸ **getOwnMetadata**(`metadataKey`, `target`): `unknown`

Typed version of Reflect.getOwnMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](functions_reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |

#### Returns

`unknown`

Metadata value.

▸ **getOwnMetadata**\<`T`\>(`metadataKey`, `target`, `guard?`, `defVal?`): `T`

Typed version of Reflect.getOwnMetadata.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](functions_reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `guard?` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`T`\> | Guard for type T. |
| `defVal?` | `T` | Default value. |

#### Returns

`T`

Metadata value if its type is T.

**`Throws`**

AssertionError otherwise.

___

### getOwnMetadataKey

▸ **getOwnMetadataKey**(`metadataKey`, `target`, `key`): `unknown`

Typed version of Reflect.getOwnMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](functions_reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `key` | [`MetadataKey`](functions_reflect.md#metadatakey) | Property key. |

#### Returns

`unknown`

Metadata value.

▸ **getOwnMetadataKey**\<`T`\>(`metadataKey`, `target`, `key`, `guard?`, `defVal?`): `T`

Typed version of Reflect.getOwnMetadata.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](functions_reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `key` | [`MetadataKey`](functions_reflect.md#metadatakey) | Property key. |
| `guard?` | [`Guard`](../interfaces/functions_guards.Guard.md)\<`T`\> | Guard for type T. |
| `defVal?` | `T` | Default value. |

#### Returns

`T`

Metadata value if its type is T.

**`Throws`**

AssertionError otherwise.

___

### getOwnPropertyDescriptor

▸ **getOwnPropertyDescriptor**\<`T`, `P`\>(`target`, `propertyKey`): `TypedPropertyDescriptor`\<`P` extends keyof `T` ? `T`[`P`] : `any`\> \| `undefined`

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `P` | extends `PropertyKey` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | Object that contains the property. |
| `propertyKey` | `P` | The property name. |

#### Returns

`TypedPropertyDescriptor`\<`P` extends keyof `T` ? `T`[`P`] : `any`\> \| `undefined`

___

### getPrototypeOf

▸ **getPrototypeOf**(`target`): `object` \| ``null``

Returns the prototype of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | The object that references the prototype. |

#### Returns

`object` \| ``null``

___

### has

▸ **has**(`target`, `propertyKey`): `boolean`

Equivalent to `propertyKey in target`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Object that contains the property on itself or in its prototype chain. |
| `propertyKey` | `PropertyKey` | Name of the property. |

#### Returns

`boolean`

___

### hasMetadata

▸ **hasMetadata**(`metadataKey`, `target`): `boolean`

Typed version of Reflect.hasMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](functions_reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |

#### Returns

`boolean`

_True_ if key exists, _false_ otherwise.

___

### hasMetadataKey

▸ **hasMetadataKey**(`metadataKey`, `target`, `key`): `boolean`

Typed version of Reflect.hasMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](functions_reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `key` | [`MetadataKey`](functions_reflect.md#metadatakey) | Property key. |

#### Returns

`boolean`

_True_ if key exists, _false_ otherwise.

___

### hasOwnMetadata

▸ **hasOwnMetadata**(`metadataKey`, `target`): `boolean`

Typed version of Reflect.hasOwnMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](functions_reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |

#### Returns

`boolean`

_True_ if key exists, _false_ otherwise.

___

### hasOwnMetadataKey

▸ **hasOwnMetadataKey**(`metadataKey`, `target`, `key`): `boolean`

Typed version of Reflect.hasOwnMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](functions_reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `key` | [`MetadataKey`](functions_reflect.md#metadatakey) | Property key. |

#### Returns

`boolean`

_True_ if key exists, _false_ otherwise.

___

### isExtensible

▸ **isExtensible**(`target`): `boolean`

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Object to test. |

#### Returns

`boolean`

___

### ownKeys

▸ **ownKeys**(`target`): (`string` \| `symbol`)[]

Returns the string and symbol keys of the own properties of an object. The own properties of an object
are those that are defined directly on that object, and are not inherited from the object's prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Object that contains the own properties. |

#### Returns

(`string` \| `symbol`)[]

___

### preventExtensions

▸ **preventExtensions**(`target`): `boolean`

Prevents the addition of new properties to an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Object to make non-extensible. |

#### Returns

`boolean`

Whether the object has been made non-extensible.

___

### set

▸ **set**\<`T`, `P`\>(`target`, `propertyKey`, `value`, `receiver?`): `boolean`

Sets the property of target, equivalent to `target[propertyKey] = value` when `receiver === target`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `P` | extends `PropertyKey` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | Object that contains the property on itself or in its prototype chain. |
| `propertyKey` | `P` | Name of the property. |
| `value` | `P` extends keyof `T` ? `T`[`P`] : `any` | - |
| `receiver?` | `any` | The reference to use as the `this` value in the setter function, if `target[propertyKey]` is an accessor property. |

#### Returns

`boolean`

▸ **set**(`target`, `propertyKey`, `value`, `receiver?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |
| `propertyKey` | `PropertyKey` |
| `value` | `any` |
| `receiver?` | `any` |

#### Returns

`boolean`

___

### setPrototypeOf

▸ **setPrototypeOf**(`target`, `proto`): `boolean`

Sets the prototype of a specified object o to object proto or null.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | The object to change its prototype. |
| `proto` | ``null`` \| `object` | The value of the new prototype or null. |

#### Returns

`boolean`

Whether setting the prototype was successful.
