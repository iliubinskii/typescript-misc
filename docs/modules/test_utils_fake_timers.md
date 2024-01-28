[Utility functions](../index.md) / [Exports](../modules.md) / test-utils/fake-timers

# Module: test-utils/fake-timers

## Table of contents

### Interfaces

- [Options](../interfaces/test_utils_fake_timers.Options.md)

### Variables

- [clock](test_utils_fake_timers.md#clock)

### Functions

- [installFakeTimer](test_utils_fake_timers.md#installfaketimer)
- [run](test_utils_fake_timers.md#run)
- [setRandomSystemTime](test_utils_fake_timers.md#setrandomsystemtime)

## Variables

### clock

• `Const` **clock**: `Clock`

## Functions

### installFakeTimer

▸ **installFakeTimer**(`options?`): `void`

Installs fake timer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`Options`](../interfaces/test_utils_fake_timers.Options.md) | Options. |

#### Returns

`void`

___

### run

▸ **run**\<`T`\>(`mixed`): `Promise`\<`T`\>

Executes promise or async function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mixed` | [`Async`](../interfaces/types_function.Async.md)\<`T`, readonly []\> | Promise or async function. |

#### Returns

`Promise`\<`T`\>

The result of callback execution.

___

### setRandomSystemTime

▸ **setRandomSystemTime**(): `void`

Sets random system time.

#### Returns

`void`
