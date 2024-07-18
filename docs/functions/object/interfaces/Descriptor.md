[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/object](../index.md) / Descriptor

# Interface: Descriptor\<T, K\>

## Extends

- `PropertyDescriptor`

## Type Parameters

• **T**

• **K** *extends* keyof `T` = keyof `T`

## Properties

### get()?

> `readonly` `optional` **get**: (`this`) => `T`\[`K`\]

#### Parameters

• **this**: `T`

This argument.

#### Returns

`T`\[`K`\]

Value.

#### Overrides

`PropertyDescriptor.get`

***

### set()?

> `readonly` `optional` **set**: (`this`, `value`) => `void`

Property setter.

#### Parameters

• **this**: `T`

This argument.

• **value**: `T`\[`K`\]

New value.

#### Returns

`void`

#### Overrides

`PropertyDescriptor.set`

***

### value?

> `readonly` `optional` **value**: `T`\[`K`\]

#### Overrides

`PropertyDescriptor.value`
