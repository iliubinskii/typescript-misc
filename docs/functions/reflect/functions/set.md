[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/reflect](../index.md) / set

# Function: set()

## set(target, propertyKey, value, receiver)

> **set**\<`T`, `P`\>(`target`, `propertyKey`, `value`, `receiver`?): `boolean`

Sets the property of target, equivalent to `target[propertyKey] = value` when `receiver === target`.

### Type Parameters

• **T** *extends* `object`

• **P** *extends* `PropertyKey`

### Parameters

• **target**: `T`

Object that contains the property on itself or in its prototype chain.

• **propertyKey**: `P`

Name of the property.

• **value**: `P` *extends* keyof `T` ? `T`\[`P`\<`P`\>\] : `any`

• **receiver?**: `any`

The reference to use as the `this` value in the setter function,
       if `target[propertyKey]` is an accessor property.

### Returns

`boolean`

## set(target, propertyKey, value, receiver)

> **set**(`target`, `propertyKey`, `value`, `receiver`?): `boolean`

### Parameters

• **target**: `object`

• **propertyKey**: `PropertyKey`

• **value**: `any`

• **receiver?**: `any`

### Returns

`boolean`
