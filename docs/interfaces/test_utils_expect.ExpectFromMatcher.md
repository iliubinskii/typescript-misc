[Utility functions](../index.md) / [Exports](../modules.md) / [test-utils/expect](../modules/test_utils_expect.md) / ExpectFromMatcher

# Interface: ExpectFromMatcher\<K\>

[test-utils/expect](../modules/test_utils_expect.md).ExpectFromMatcher

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Matchers`](../modules/test_utils_expect.md#matchers) |

## Callable

### ExpectFromMatcher

▸ **ExpectFromMatcher**(`got`, `...args`): `If`\<`Extends`\<`ReturnType`\<`Readonly`\<`Matchers`\<`unknown`, `unknown`\>\>[`K`]\>, `Promise`\<`unknown`\>\>, `Promise`\<[`ExpectResult`](test_utils_expect.ExpectResult.md)\>, [`ExpectResult`](test_utils_expect.ExpectResult.md)\>

Expect function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got. |
| `...args` | `Parameters`\<`Readonly`\<`Matchers`\<`unknown`, `unknown`\>\>[`K`]\> | Arguments. |

#### Returns

`If`\<`Extends`\<`ReturnType`\<`Readonly`\<`Matchers`\<`unknown`, `unknown`\>\>[`K`]\>, `Promise`\<`unknown`\>\>, `Promise`\<[`ExpectResult`](test_utils_expect.ExpectResult.md)\>, [`ExpectResult`](test_utils_expect.ExpectResult.md)\>

Result.
