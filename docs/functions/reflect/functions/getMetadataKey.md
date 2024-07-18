[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/reflect](../index.md) / getMetadataKey

# Function: getMetadataKey()

Typed version of Reflect.getMetadata.

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

## getMetadataKey(metadataKey, target, key)

> **getMetadataKey**(`metadataKey`, `target`, `key`): `unknown`

Typed version of Reflect.getMetadata.

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

## getMetadataKey(metadataKey, target, key, guard, defVal)

> **getMetadataKey**\<`T`\>(`metadataKey`, `target`, `key`, `guard`?, `defVal`?): `T`

Typed version of Reflect.getMetadata.

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
