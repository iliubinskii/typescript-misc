[**Typescript library**](../../../../../index.md) • **Docs**

***

[Typescript library](../../../../../modules.md) / [facades/lang](../../../index.md) / [lang](../index.md) / Dictionary

# Interface: Dictionary\<W, C\>

## Type Parameters

• **W** *extends* [`Word`](../type-aliases/Word.md)

• **C** *extends* [`Context`](../type-aliases/Context.md)

## Properties

### context()

> `readonly` **context**: (`context`) => [`Lang`](../type-aliases/Lang.md)\<`W`, `C`\>

#### Parameters

• **context**: `C`

Context.

#### Returns

[`Lang`](../type-aliases/Lang.md)\<`W`, `C`\>

Dictionary.

***

### get()

> `readonly` **get**: (`key`) => `string`

#### Parameters

• **key**: [`Key`](../type-aliases/Key.md)\<[`Word`](../type-aliases/Word.md)\>

Word ID.

#### Returns

`string`

Word.

***

### getIfExists()

> `readonly` **getIfExists**: (`key`) => `string`

#### Parameters

• **key**: `string`

Word ID.

#### Returns

`string`

Word.

***

### has()

> `readonly` **has**: (`key`) => `key is Key<Word>`

#### Parameters

• **key**: `string`

Word ID.

#### Returns

`key is Key<Word>`

_True_ if word exists, _false_ otherwise.

***

### keys

> `readonly` **keys**: [`Rec`](../../../../../types/core/type-aliases/Rec.md)\<[`Transforms`](../type-aliases/Transforms.md)\<`W`\>, [`Transforms`](../type-aliases/Transforms.md)\<[`Word`](../type-aliases/Word.md)\>\>

***

### plain()

> `readonly` **plain**: (`str`) => \`plain:$\{string\}\`

#### Parameters

• **str**: `string`

Plain text.

#### Returns

\`plain:$\{string\}\`

Wrapped plain text.

***

### plural()

> `readonly` **plural**: (`count`) => [`Lang`](../type-aliases/Lang.md)\<`W`, `C`\>

#### Parameters

• **count**: `number`

Count for plural form.

#### Returns

[`Lang`](../type-aliases/Lang.md)\<`W`, `C`\>

Dictionary.

***

### with()

> `readonly` **with**: (`name`, `replacement`) => [`Lang`](../type-aliases/Lang.md)\<`W`, `C`\>

#### Parameters

• **name**: `string`

Name.

• **replacement**: [`NumStr`](../../../../../types/core/type-aliases/NumStr.md)

Value or word ID.

#### Returns

[`Lang`](../type-aliases/Lang.md)\<`W`, `C`\>

Dictionary.
