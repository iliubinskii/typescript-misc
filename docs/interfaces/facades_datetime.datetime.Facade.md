[Utility functions](../index.md) / [Exports](../modules.md) / [facades/datetime](../modules/facades_datetime.md) / [datetime](../modules/facades_datetime.datetime.md) / Facade

# Interface: Facade

[facades/datetime](../modules/facades_datetime.md).[datetime](../modules/facades_datetime.datetime.md).Facade

## Table of contents

### Properties

- [create](facades_datetime.datetime.Facade.md#create)
- [now](facades_datetime.datetime.Facade.md#now)
- [time](facades_datetime.datetime.Facade.md#time)
- [timeSec](facades_datetime.datetime.Facade.md#timesec)
- [validate](facades_datetime.datetime.Facade.md#validate)

## Properties

### create

• `Readonly` **create**: (`date?`: [`NumStr`](../modules/types_core.md#numstr) \| [`DateTime`](facades_datetime.datetime.DateTime.md) \| `Date`) => [`DateTime`](facades_datetime.datetime.DateTime.md)

Creates DateTime instance.

**`Param`**

Date.

#### Type declaration

▸ (`date?`): [`DateTime`](facades_datetime.datetime.DateTime.md)

Creates DateTime instance.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date?` | [`NumStr`](../modules/types_core.md#numstr) \| [`DateTime`](facades_datetime.datetime.DateTime.md) \| `Date` | Date. |

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

DateTime instance.

___

### now

• `Readonly` **now**: () => `string`

Returns current date as "yyyy-MM-dd HH:mm" / "yyyy-MM-dd HH:mm:ss" formatted string.

#### Type declaration

▸ (): `string`

Returns current date as "yyyy-MM-dd HH:mm" / "yyyy-MM-dd HH:mm:ss" formatted string.

##### Returns

`string`

Formatted string.

___

### time

• `Readonly` **time**: () => `number`

Returns current date as a number of milliseconds.

#### Type declaration

▸ (): `number`

Returns current date as a number of milliseconds.

##### Returns

`number`

Number of milliseconds.

___

### timeSec

• `Readonly` **timeSec**: () => `number`

Returns current date as a number of seconds.

#### Type declaration

▸ (): `number`

Returns current date as a number of seconds.

##### Returns

`number`

Number of seconds.

___

### validate

• `Readonly` **validate**: (`date`: `string`) => `boolean`

Validates date string.

**`Param`**

Date.

#### Type declaration

▸ (`date`): `boolean`

Validates date string.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `string` | Date. |

##### Returns

`boolean`

_True_ if date is valid, _false_ otherwise.
