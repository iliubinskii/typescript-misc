[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/reflect](../index.md) / getMetadata

# Function: getMetadata()

Typed version of Reflect.getMetadata.

## Param

Metadata key.

## Param

Target object.

## Param

Guard for type T.

## Param

Default value.

## getMetadata(metadataKey, target)

> **getMetadata**(`metadataKey`, `target`): `unknown`

Typed version of Reflect.getMetadata.

### Parameters

• **metadataKey**: [`MetadataKey`](../type-aliases/MetadataKey.md)

Metadata key.

• **target**: `object`

Target object.

### Returns

`unknown`

Metadata value.

## getMetadata(metadataKey, target, guard, defVal)

> **getMetadata**\<`T`\>(`metadataKey`, `target`, `guard`?, `defVal`?): `T`

Typed version of Reflect.getMetadata.

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
