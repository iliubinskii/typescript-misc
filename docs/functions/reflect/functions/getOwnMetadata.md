[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/reflect](../index.md) / getOwnMetadata

# Function: getOwnMetadata()

Typed version of Reflect.getOwnMetadata.

## Param

Metadata key.

## Param

Target object.

## Param

Guard for type T.

## Param

Default value.

## Throws

AssertionError otherwise.

## getOwnMetadata(metadataKey, target)

> **getOwnMetadata**(`metadataKey`, `target`): `unknown`

Typed version of Reflect.getOwnMetadata.

### Parameters

• **metadataKey**: [`MetadataKey`](../type-aliases/MetadataKey.md)

Metadata key.

• **target**: `object`

Target object.

### Returns

`unknown`

Metadata value.

## getOwnMetadata(metadataKey, target, guard, defVal)

> **getOwnMetadata**\<`T`\>(`metadataKey`, `target`, `guard`?, `defVal`?): `T`

Typed version of Reflect.getOwnMetadata.

### Type Parameters

• **T**

### Parameters

• **metadataKey**: [`MetadataKey`](../type-aliases/MetadataKey.md)

Metadata key.

• **target**: `object`

Target object.

• **guard?**: [`Guard`](../../guards/interfaces/Guard.md)\<`T`\>

Guard for type T.

• **defVal?**: `T`

Default value.

### Returns

`T`

Metadata value if its type is T.

### Throws

AssertionError otherwise.
