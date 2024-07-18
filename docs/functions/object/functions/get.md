[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/object](../index.md) / get

# Function: get()

Returns object property.

## Param

Object.

## Param

Key.

## Param

Guard for type T.

## Param

Default value.

## Throws

AssertionError otherwise.

## get(obj, key)

> **get**(`obj`, `key`): `unknown`

Returns object property.

### Parameters

• **obj**: `object`

Object.

• **key**: `PropertyKey`

Key.

### Returns

`unknown`

Object property.

## get(obj, key, guard, defVal)

> **get**\<`T`\>(`obj`, `key`, `guard`?, `defVal`?): `T`

Returns object property.

### Type Parameters

• **T**

### Parameters

• **obj**: `object`

Object.

• **key**: `PropertyKey`

Key.

• **guard?**: [`Guard`](../../guards/interfaces/Guard.md)\<`T`\>

Guard for type T.

• **defVal?**: `T`

Default value.

### Returns

`T`

Object property if its type is T.

### Throws

AssertionError otherwise.
