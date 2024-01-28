[Utility functions](../index.md) / [Exports](../modules.md) / [functions/object](../modules/functions_object.md) / Descriptor

# Interface: Descriptor\<T, K\>

[functions/object](../modules/functions_object.md).Descriptor

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` = keyof `T` |

## Hierarchy

- `PropertyDescriptor`

  ↳ **`Descriptor`**

## Table of contents

### Properties

- [configurable](functions_object.Descriptor.md#configurable)
- [enumerable](functions_object.Descriptor.md#enumerable)
- [get](functions_object.Descriptor.md#get)
- [set](functions_object.Descriptor.md#set)
- [value](functions_object.Descriptor.md#value)
- [writable](functions_object.Descriptor.md#writable)

## Properties

### configurable

• `Optional` `Readonly` **configurable**: `boolean`

#### Overrides

PropertyDescriptor.configurable

___

### enumerable

• `Optional` `Readonly` **enumerable**: `boolean`

#### Overrides

PropertyDescriptor.enumerable

___

### get

• `Optional` `Readonly` **get**: (`this`: `T`) => `T`[`K`]

Property getter.

**`Param`**

This argument.

#### Type declaration

▸ (`this`): `T`[`K`]

Property getter.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | This argument. |

##### Returns

`T`[`K`]

Value.

#### Overrides

PropertyDescriptor.get

___

### set

• `Optional` `Readonly` **set**: (`this`: `T`, `value`: `T`[`K`]) => `void`

Property setter.

**`Param`**

This argument.

**`Param`**

New value.

#### Type declaration

▸ (`this`, `value`): `void`

Property setter.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | This argument. |
| `value` | `T`[`K`] | New value. |

##### Returns

`void`

#### Overrides

PropertyDescriptor.set

___

### value

• `Optional` `Readonly` **value**: `T`[`K`]

#### Overrides

PropertyDescriptor.value

___

### writable

• `Optional` `Readonly` **writable**: `boolean`

#### Overrides

PropertyDescriptor.writable
