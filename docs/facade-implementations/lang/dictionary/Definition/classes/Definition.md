[**Typescript library**](../../../../../index.md) • **Docs**

***

[Typescript library](../../../../../modules.md) / [facade-implementations/lang/dictionary/Definition](../index.md) / Definition

# Class: Definition

## Constructors

### new Definition()

> **new Definition**(`raw`, `id`): [`Definition`](Definition.md)

Creates class instance.

#### Parameters

• **raw**: [`RawDefinition`](../../core/type-aliases/RawDefinition.md)

Raw definition.

• **id**: [`NumStr`](../../../../../types/core/type-aliases/NumStr.md)

ID.

#### Returns

[`Definition`](Definition.md)

## Properties

### contexts

> `protected` `readonly` **contexts**: [`IndexedRecord`](../../../../../types/core/type-aliases/IndexedRecord.md)\<[`NumStr`](../../../../../types/core/type-aliases/NumStr.md)\> = `{}`

***

### id

> `protected` `readonly` **id**: [`NumStr`](../../../../../types/core/type-aliases/NumStr.md)

***

### rulesRef

> `protected` `readonly` **rulesRef**: [`Rules`](../../core/type-aliases/Rules.md)

***

### rulesRefDependent

> `protected` `readonly` **rulesRefDependent**: [`Rules`](../../core/type-aliases/Rules.md)

***

### rulesRefSecondary

> `protected` `readonly` **rulesRefSecondary**: [`Rules`](../../core/type-aliases/Rules.md)

***

### rulesVal

> `protected` `readonly` **rulesVal**: [`Rules`](../../core/type-aliases/Rules.md)

***

### rulesWordDependent

> `protected` `readonly` **rulesWordDependent**: [`Rules`](../../core/type-aliases/Rules.md)

***

### rulesWordSecondary

> `protected` `readonly` **rulesWordSecondary**: [`Rules`](../../core/type-aliases/Rules.md)

***

### sub?

> `protected` `readonly` `optional` **sub**: [`Definition`](Definition.md)

***

### subs

> `protected` `readonly` **subs**: [`IndexedRecord`](../../../../../types/core/type-aliases/IndexedRecord.md)\<[`Definition`](Definition.md)\> = `{}`

***

### value

> `protected` `readonly` **value**: `string`

## Methods

### get()

> **get**(`owner`, `context`, `count`, `replacements`, `forms`): [`WordInfo`](../../core/interfaces/WordInfo.md)

Returns word based on context, count, and replacements.

#### Parameters

• **owner**: [`Definitions`](../../Definition.internal/interfaces/Definitions.md)

Parent object.

• **context**: `undefined` \| `"InXDays"`

Context.

• **count**: `number`

Count for plural form.

• **replacements**: `ReadonlyMap`\<`string`, `string`\>

Replacements.

• **forms**: [`strings`](../../../../../types/core/type-aliases/strings.md)

Candidate word forms.

#### Returns

[`WordInfo`](../../core/interfaces/WordInfo.md)

Word.
