[Utility functions](../index.md) / [Exports](../modules.md) / test-utils/expect

# Module: test-utils/expect

## Table of contents

### Interfaces

- [ExpectFromMatcher](../interfaces/test_utils_expect.ExpectFromMatcher.md)
- [ExpectResult](../interfaces/test_utils_expect.ExpectResult.md)

### Type Aliases

- [Matchers](test_utils_expect.md#matchers)

### Functions

- [buildEqualsResult](test_utils_expect.md#buildequalsresult)
- [buildResult](test_utils_expect.md#buildresult)

## Type Aliases

### Matchers

Ƭ **Matchers**: `Readonly`\<`jest.Matchers`\<`unknown`, `unknown`\>\>

## Functions

### buildEqualsResult

▸ **buildEqualsResult**(`pass`, `message`, `got`, `expected`, `immediate?`): [`ExpectResult`](../interfaces/test_utils_expect.ExpectResult.md)

Builds matcher result.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pass` | `boolean` | `undefined` | Pass. |
| `message` | `string` | `undefined` | Message. |
| `got` | `unknown` | `undefined` | Got. |
| `expected` | `unknown` | `undefined` | Expected. |
| `immediate` | `boolean` | `false` | Immediate. |

#### Returns

[`ExpectResult`](../interfaces/test_utils_expect.ExpectResult.md)

Matcher result.

___

### buildResult

▸ **buildResult**(`pass`, `expectSuccess`, `expectFailure`): [`ExpectResult`](../interfaces/test_utils_expect.ExpectResult.md)

Builds matcher result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pass` | `boolean` | Pass. |
| `expectSuccess` | `string` | Expect success message. |
| `expectFailure` | `string` | Expect failure message. |

#### Returns

[`ExpectResult`](../interfaces/test_utils_expect.ExpectResult.md)

Matcher result.
