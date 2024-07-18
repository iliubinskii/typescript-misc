[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/reflect](../index.md) / deleteProperty

# Function: deleteProperty()

> **deleteProperty**(`target`, `propertyKey`): `boolean`

Removes a property from an object, equivalent to `delete target[propertyKey]`,
except it won't throw if `target[propertyKey]` is non-configurable.

## Parameters

• **target**: `object`

Object from which to remove the own property.

• **propertyKey**: `PropertyKey`

The property name.

## Returns

`boolean`
