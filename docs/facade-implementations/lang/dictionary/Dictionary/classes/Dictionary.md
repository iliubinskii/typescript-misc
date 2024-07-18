[**Typescript library**](../../../../../index.md) • **Docs**

***

[Typescript library](../../../../../modules.md) / [facade-implementations/lang/dictionary/Dictionary](../index.md) / Dictionary

# Class: Dictionary

## Implements

- [`Dictionary`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md)\<[`Word`](../../../../../facades/lang/namespaces/lang/type-aliases/Word.md), [`Context`](../../../../../facades/lang/namespaces/lang/type-aliases/Context.md)\>

## Constructors

### new Dictionary()

> `protected` **new Dictionary**(`definitions`, `context`?, `count`?): [`Dictionary`](Dictionary.md)

Creates class instance.

#### Parameters

• **definitions**: [`Definitions`](../../Definitions/classes/Definitions.md)

Language definitions.

• **context?**: `"InXDays"`

Context.

• **count?**: `number` = `1`

Count for plural form.

#### Returns

[`Dictionary`](Dictionary.md)

## Properties

### \_context?

> `protected` `readonly` `optional` **\_context**: `"InXDays"`

***

### count

> `protected` `readonly` **count**: `number`

***

### definitions

> `protected` `readonly` **definitions**: [`Definitions`](../../Definitions/classes/Definitions.md)

***

### facade

> `protected` `readonly` **facade**: [`Facade`](../../../../../facades/lang/namespaces/lang/type-aliases/Facade.md)

***

### keys

> `readonly` **keys**: [`Rec`](../../../../../types/core/type-aliases/Rec.md)\<[`Transforms`](../../../../../facades/lang/namespaces/lang/type-aliases/Transforms.md)\<[`Word`](../../../../../facades/lang/namespaces/lang/type-aliases/Word.md)\>, [`Transforms`](../../../../../facades/lang/namespaces/lang/type-aliases/Transforms.md)\<[`Word`](../../../../../facades/lang/namespaces/lang/type-aliases/Word.md)\>\>

#### Implementation of

[`Dictionary`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md).[`keys`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md#keys)

***

### subs

> `protected` `readonly` **subs**: `Map`\<[`NumStr`](../../../../../types/core/type-aliases/NumStr.md), [`Facade`](../../../../../facades/lang/namespaces/lang/type-aliases/Facade.md)\>

## Methods

### context()

> **context**(`context`): [`Facade`](../../../../../facades/lang/namespaces/lang/type-aliases/Facade.md)

Sets context.

#### Parameters

• **context**: `"InXDays"`

Context.

#### Returns

[`Facade`](../../../../../facades/lang/namespaces/lang/type-aliases/Facade.md)

Dictionary.

#### Implementation of

[`Dictionary`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md).[`context`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md#context)

***

### get()

> **get**(`key`): `string`

Returns word. Uses previously set context, count and replacements.

#### Parameters

• **key**: [`Key`](../../../../../facades/lang/namespaces/lang/type-aliases/Key.md)\<[`Word`](../../../../../facades/lang/namespaces/lang/type-aliases/Word.md)\>

Word ID.

#### Returns

`string`

Word.

#### Implementation of

[`Dictionary`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md).[`get`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md#get)

***

### getIfExists()

> **getIfExists**(`key`): `string`

Returns word. Uses previously set context, count and replacements.

#### Parameters

• **key**: `string`

Word ID.

#### Returns

`string`

Word.

#### Implementation of

[`Dictionary`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md).[`getIfExists`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md#getifexists)

***

### has()

> **has**(`key`): `key is Key<Word>`

Checks if word exists.

#### Parameters

• **key**: `string`

Word ID.

#### Returns

`key is Key<Word>`

_True_ if word exists, _false_ otherwise.

#### Implementation of

[`Dictionary`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md).[`has`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md#has)

***

### plain()

> **plain**(`this`, `str`): \`plain:$\{string\}\`

Wraps plain text.

#### Parameters

• **this**: `void`

• **str**: `string`

Plain text.

#### Returns

\`plain:$\{string\}\`

Wrapped plain text.

#### Implementation of

[`Dictionary`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md).[`plain`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md#plain)

***

### plural()

> **plural**(`count`): [`Facade`](../../../../../facades/lang/namespaces/lang/type-aliases/Facade.md)

Sets count for plural form.

#### Parameters

• **count**: `number`

Count for plural form.

#### Returns

[`Facade`](../../../../../facades/lang/namespaces/lang/type-aliases/Facade.md)

Dictionary.

#### Implementation of

[`Dictionary`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md).[`plural`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md#plural)

***

### pluralReduce()

> `protected` **pluralReduce**(`count`): `number`

Reduces count for plural form.

#### Parameters

• **count**: `number`

Count.

#### Returns

`number`

Reduced count.

***

### with()

> **with**(`search`, `replace`): [`Facade`](../../../../../facades/lang/namespaces/lang/type-aliases/Facade.md)

Adds replacement.

#### Parameters

• **search**: `string`

• **replace**: [`NumStr`](../../../../../types/core/type-aliases/NumStr.md)

#### Returns

[`Facade`](../../../../../facades/lang/namespaces/lang/type-aliases/Facade.md)

Dictionary.

#### Implementation of

[`Dictionary`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md).[`with`](../../../../../facades/lang/namespaces/lang/interfaces/Dictionary.md#with)

***

### create()

> `static` **create**(`this`, `definitions`, `context`?, `count`?): [`Facade`](../../../../../facades/lang/namespaces/lang/type-aliases/Facade.md)

Creates dictionary.

#### Parameters

• **this**: `void`

No this.

• **definitions**: [`Definitions`](../../Definitions/classes/Definitions.md)

Language definitions.

• **context?**: `"InXDays"`

Context.

• **count?**: `number`

Count for plural form.

#### Returns

[`Facade`](../../../../../facades/lang/namespaces/lang/type-aliases/Facade.md)

Dictionary.
