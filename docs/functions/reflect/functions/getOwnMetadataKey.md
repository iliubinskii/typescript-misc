[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/reflect](../index.md) / getOwnMetadataKey

# Function: getOwnMetadataKey()

Typed version of Reflect.getOwnMetadata.

## Param

Metadata key.

## Param

Target object.

## Param

Property key.

## Param

Guard for type T.

## Param

Default value.

## Throws

AssertionError otherwise.

## getOwnMetadataKey(metadataKey, target, key)

> **getOwnMetadataKey**(`metadataKey`, `target`, `key`): `unknown`

Typed version of Reflect.getOwnMetadata.

### Parameters

• **metadataKey**: [`MetadataKey`](../type-aliases/MetadataKey.md)

Metadata key.

• **target**: `object`

Target object.

• **key**: [`MetadataKey`](../type-aliases/MetadataKey.md)

Property key.

### Returns

`unknown`

Metadata value.

## getOwnMetadataKey(metadataKey, target, key, guard, defVal)

> **getOwnMetadataKey**\<`T`\>(`metadataKey`, `target`, `key`, `guard`?, `defVal`?): `T`

Typed version of Reflect.getOwnMetadata.

### Type Parameters

• **T**

### Parameters

• **metadataKey**: [`MetadataKey`](../type-aliases/MetadataKey.md)

Metadata key.

• **target**: `object`

Target object.

• **key**: [`MetadataKey`](../type-aliases/MetadataKey.md)

Property key.

• **guard?**: [`Guard`](../../guards/interfaces/Guard.md)\<`T`\>

Guard for type T.

• **defVal?**: `T`

Default value.

### Returns

`T`

Metadata value if its type is T.

### Throws

AssertionError otherwise.
