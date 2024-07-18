[**Typescript library**](../../../../../index.md) • **Docs**

***

[Typescript library](../../../../../modules.md) / [facade-implementations/lang/dictionary/Definition.internal](../index.md) / Definitions

# Interface: Definitions

## Properties

### get()

> `readonly` **get**: (`key`, `context`, `count`, `replacements`, `forms`?) => [`WordInfo`](../../core/interfaces/WordInfo.md)

#### Parameters

• **key**: `string`

Key.

• **context**: `undefined` \| `"InXDays"`

Context.

• **count**: `number`

Count for plural form.

• **replacements**: `ReadonlyMap`\<`string`, `string`\>

Replacements.

• **forms?**: `string` \| [`strings`](../../../../../types/core/type-aliases/strings.md)

Candidate word forms.

#### Returns

[`WordInfo`](../../core/interfaces/WordInfo.md)

Word.
