[**Typescript library**](../../../../../index.md) • **Docs**

***

[Typescript library](../../../../../modules.md) / [facades/faker](../../../index.md) / [faker](../index.md) / Facade

# Interface: Facade

## Properties

### boolean()

> `readonly` **boolean**: (`trueWeight`?, `falseWeight`?) => `boolean`

#### Parameters

• **trueWeight?**: `number`

Weight of the _true_ value.

• **falseWeight?**: `number`

Weight of the _false_ value.

#### Returns

`boolean`

Random boolean.

***

### date()

> `readonly` **date**: (`from`, `to`, `step`?, `unit`?) => `string`

#### Parameters

• **from**: `string` \| [`TimeInterval`](../../../../types/type-aliases/TimeInterval.md)

Min date.

• **to**: `string` \| [`TimeInterval`](../../../../types/type-aliases/TimeInterval.md)

Max date.

• **step?**: `number`

Step.

• **unit?**: [`TimeUnit`](../../../../types/enumerations/TimeUnit.md)

Step unit.

#### Returns

`string`

Random date.

***

### number()

> `readonly` **number**: (`from`, `to`, `step`?) => `number`

#### Parameters

• **from**: `number`

Min value.

• **to**: `number`

Max value.

• **step?**: `number`

Step.

#### Returns

`number`

Random number.

***

### oneOf()

> `readonly` **oneOf**: \<`T`\>(`values`) => `T`

#### Type Parameters

• **T**

#### Parameters

• **values**: readonly `T`[]

Values.

#### Returns

`T`

Random element.

***

### paragraph()

> `readonly` **paragraph**: (`minSentences`?, `maxSentences`?, `minWords`?, `maxWords`?) => `string`

#### Parameters

• **minSentences?**: `number`

Min sentences.

• **maxSentences?**: `number`

Max sentences.

• **minWords?**: `number`

Min words.

• **maxWords?**: `number`

Max words.

#### Returns

`string`

Random paragraph.

***

### phrase()

> `readonly` **phrase**: (`minWords`?, `maxWords`?) => `string`

#### Parameters

• **minWords?**: `number`

Min words.

• **maxWords?**: `number`

Max words.

#### Returns

`string`

Random phrase.

***

### sentence()

> `readonly` **sentence**: (`minWords`?, `maxWords`?) => `string`

#### Parameters

• **minWords?**: `number`

Min words.

• **maxWords?**: `number`

Max words.

#### Returns

`string`

Random sentence.

***

### word()

> `readonly` **word**: () => `string`

#### Returns

`string`

Random word.
