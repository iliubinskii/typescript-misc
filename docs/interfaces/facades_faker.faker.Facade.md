[Utility functions](../index.md) / [Exports](../modules.md) / [facades/faker](../modules/facades_faker.md) / [faker](../modules/facades_faker.faker.md) / Facade

# Interface: Facade

[facades/faker](../modules/facades_faker.md).[faker](../modules/facades_faker.faker.md).Facade

## Table of contents

### Properties

- [boolean](facades_faker.faker.Facade.md#boolean)
- [date](facades_faker.faker.Facade.md#date)
- [number](facades_faker.faker.Facade.md#number)
- [oneOf](facades_faker.faker.Facade.md#oneof)
- [paragraph](facades_faker.faker.Facade.md#paragraph)
- [phrase](facades_faker.faker.Facade.md#phrase)
- [sentence](facades_faker.faker.Facade.md#sentence)
- [word](facades_faker.faker.Facade.md#word)

## Properties

### boolean

• `Readonly` **boolean**: (`trueWeight?`: `number`, `falseWeight?`: `number`) => `boolean`

Generates random boolean.

**`Param`**

Weight of the _true_ value.

**`Param`**

Weight of the _false_ value.

#### Type declaration

▸ (`trueWeight?`, `falseWeight?`): `boolean`

Generates random boolean.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `trueWeight?` | `number` | Weight of the _true_ value. |
| `falseWeight?` | `number` | Weight of the _false_ value. |

##### Returns

`boolean`

Random boolean.

___

### date

• `Readonly` **date**: (`from`: `string` \| [`TimeInterval`](../modules/facades_types.md#timeinterval), `to`: `string` \| [`TimeInterval`](../modules/facades_types.md#timeinterval), `step?`: `number`, `unit?`: [`TimeUnit`](../enums/facades_types.TimeUnit.md)) => `string`

Generates random date.

**`Param`**

Min date.

**`Param`**

Max date.

**`Param`**

Step.

**`Param`**

Step unit.

#### Type declaration

▸ (`from`, `to`, `step?`, `unit?`): `string`

Generates random date.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` \| [`TimeInterval`](../modules/facades_types.md#timeinterval) | Min date. |
| `to` | `string` \| [`TimeInterval`](../modules/facades_types.md#timeinterval) | Max date. |
| `step?` | `number` | Step. |
| `unit?` | [`TimeUnit`](../enums/facades_types.TimeUnit.md) | Step unit. |

##### Returns

`string`

Random date.

___

### number

• `Readonly` **number**: (`from`: `number`, `to`: `number`, `step?`: `number`) => `number`

Generates random number.

**`Param`**

Min value.

**`Param`**

Max value.

**`Param`**

Step.

#### Type declaration

▸ (`from`, `to`, `step?`): `number`

Generates random number.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `number` | Min value. |
| `to` | `number` | Max value. |
| `step?` | `number` | Step. |

##### Returns

`number`

Random number.

___

### oneOf

• `Readonly` **oneOf**: \<T\>(`values`: readonly `T`[]) => `T`

Returns random element from an array.

**`Param`**

Values.

#### Type declaration

▸ \<`T`\>(`values`): `T`

Returns random element from an array.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | readonly `T`[] | Values. |

##### Returns

`T`

Random element.

___

### paragraph

• `Readonly` **paragraph**: (`minSentences?`: `number`, `maxSentences?`: `number`, `minWords?`: `number`, `maxWords?`: `number`) => `string`

Generates random paragraph.

**`Param`**

Min sentences.

**`Param`**

Max sentences.

**`Param`**

Min words.

**`Param`**

Max words.

#### Type declaration

▸ (`minSentences?`, `maxSentences?`, `minWords?`, `maxWords?`): `string`

Generates random paragraph.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minSentences?` | `number` | Min sentences. |
| `maxSentences?` | `number` | Max sentences. |
| `minWords?` | `number` | Min words. |
| `maxWords?` | `number` | Max words. |

##### Returns

`string`

Random paragraph.

___

### phrase

• `Readonly` **phrase**: (`minWords?`: `number`, `maxWords?`: `number`) => `string`

Generates random phrase.

**`Param`**

Min words.

**`Param`**

Max words.

#### Type declaration

▸ (`minWords?`, `maxWords?`): `string`

Generates random phrase.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minWords?` | `number` | Min words. |
| `maxWords?` | `number` | Max words. |

##### Returns

`string`

Random phrase.

___

### sentence

• `Readonly` **sentence**: (`minWords?`: `number`, `maxWords?`: `number`) => `string`

Generates random sentence.

**`Param`**

Min words.

**`Param`**

Max words.

#### Type declaration

▸ (`minWords?`, `maxWords?`): `string`

Generates random sentence.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minWords?` | `number` | Min words. |
| `maxWords?` | `number` | Max words. |

##### Returns

`string`

Random sentence.

___

### word

• `Readonly` **word**: () => `string`

Generates random word.

#### Type declaration

▸ (): `string`

Generates random word.

##### Returns

`string`

Random word.
