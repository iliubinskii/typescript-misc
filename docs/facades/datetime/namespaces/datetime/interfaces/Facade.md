[**Typescript library**](../../../../../index.md) • **Docs**

***

[Typescript library](../../../../../modules.md) / [facades/datetime](../../../index.md) / [datetime](../index.md) / Facade

# Interface: Facade

## Properties

### create()

> `readonly` **create**: (`date`?) => [`DateTime`](DateTime.md)

#### Parameters

• **date?**: [`NumStr`](../../../../../types/core/type-aliases/NumStr.md) \| [`DateTime`](DateTime.md) \| `Date`

Date.

#### Returns

[`DateTime`](DateTime.md)

DateTime instance.

***

### now()

> `readonly` **now**: () => `string`

#### Returns

`string`

Formatted string.

***

### time()

> `readonly` **time**: () => `number`

#### Returns

`number`

Number of milliseconds.

***

### timeSec()

> `readonly` **timeSec**: () => `number`

#### Returns

`number`

Number of seconds.

***

### validate()

> `readonly` **validate**: (`date`) => `boolean`

#### Parameters

• **date**: `string`

Date.

#### Returns

`boolean`

_True_ if date is valid, _false_ otherwise.
