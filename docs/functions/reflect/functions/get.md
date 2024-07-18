[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/reflect](../index.md) / get

# Function: get()

Typed version of Reflect.get.

## Param

Target object.

## Param

Property key.

## Param

Guard for type T.

## Param

Default value.

## get(target, key)

> **get**(`target`, `key`): `unknown`

Typed version of Reflect.get.

### Parameters

• **target**: `object`

Target object.

• **key**: `PropertyKey`

Property key.

### Returns

`unknown`

Property value.

## get(target, key, guard, defVal)

> **get**\<`T`\>(`target`, `key`, `guard`?, `defVal`?): `T`

Typed version of Reflect.get.

### Type Parameters

• **T**

### Parameters

• **target**: `object`

Target object.

• **key**: `PropertyKey`

Property key.

• **guard?**: [`Guard`](../../guards/interfaces/Guard.md)\<`T`\>

Guard for type T.

• **defVal?**: `T`

Default value.

### Returns

`T`

Property value if its type is T.

### Throws

AssertionError otherwise.
