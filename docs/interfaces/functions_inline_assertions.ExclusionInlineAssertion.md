[Utility functions](../index.md) / [Exports](../modules.md) / [functions/inline-assertions](../modules/functions_inline_assertions.md) / ExclusionInlineAssertion

# Interface: ExclusionInlineAssertion\<T\>

[functions/inline-assertions](../modules/functions_inline_assertions.md).ExclusionInlineAssertion

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### ExclusionInlineAssertion

▸ **ExclusionInlineAssertion**\<`V`\>(`value`): `Exclude`\<`V`, `T`\>

Asserts value type.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `V` | Value. |

#### Returns

`Exclude`\<`V`, `T`\>

Value if its type is not T.

**`Throws`**

Error otherwise.
