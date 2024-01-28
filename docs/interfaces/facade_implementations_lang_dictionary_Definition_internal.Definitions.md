[Utility functions](../index.md) / [Exports](../modules.md) / [facade-implementations/lang/dictionary/Definition.internal](../modules/facade_implementations_lang_dictionary_Definition_internal.md) / Definitions

# Interface: Definitions

[facade-implementations/lang/dictionary/Definition.internal](../modules/facade_implementations_lang_dictionary_Definition_internal.md).Definitions

## Table of contents

### Properties

- [get](facade_implementations_lang_dictionary_Definition_internal.Definitions.md#get)

## Properties

### get

• `Readonly` **get**: (`key`: `string`, `context`: `undefined` \| ``"InXDays"``, `count`: `number`, `replacements`: `ReadonlyMap`\<`string`, `string`\>, `forms?`: `string` \| [`strings`](../modules/types_core.md#strings)) => [`WordInfo`](facade_implementations_lang_dictionary_core.WordInfo.md)

Returns word based on context, count, and replacements.

**`Param`**

Key.

**`Param`**

Context.

**`Param`**

Count for plural form.

**`Param`**

Replacements.

**`Param`**

Candidate word forms.

#### Type declaration

▸ (`key`, `context`, `count`, `replacements`, `forms?`): [`WordInfo`](facade_implementations_lang_dictionary_core.WordInfo.md)

Returns word based on context, count, and replacements.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Key. |
| `context` | `undefined` \| ``"InXDays"`` | Context. |
| `count` | `number` | Count for plural form. |
| `replacements` | `ReadonlyMap`\<`string`, `string`\> | Replacements. |
| `forms?` | `string` \| [`strings`](../modules/types_core.md#strings) | Candidate word forms. |

##### Returns

[`WordInfo`](facade_implementations_lang_dictionary_core.WordInfo.md)

Word.
