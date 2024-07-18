[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/reflect](../index.md) / getOwnPropertyDescriptor

# Function: getOwnPropertyDescriptor()

> **getOwnPropertyDescriptor**\<`T`, `P`\>(`target`, `propertyKey`): `TypedPropertyDescriptor`\<`P` *extends* keyof `T` ? `T`\[`P`\] : `any`\> \| `undefined`

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

## Type Parameters

• **T** *extends* `object`

• **P** *extends* `PropertyKey`

## Parameters

• **target**: `T`

Object that contains the property.

• **propertyKey**: `P`

The property name.

## Returns

`TypedPropertyDescriptor`\<`P` *extends* keyof `T` ? `T`\[`P`\] : `any`\> \| `undefined`
