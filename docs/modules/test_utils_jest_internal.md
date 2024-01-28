[Utility functions](../index.md) / [Exports](../modules.md) / test-utils/jest.internal

# Module: test-utils/jest.internal

## Table of contents

### Interfaces

- [ExecutionResult](../interfaces/test_utils_jest_internal.ExecutionResult.md)

### Type Aliases

- [Calls](test_utils_jest_internal.md#calls)

### Variables

- [matchers](test_utils_jest_internal.md#matchers)

### Functions

- [error](test_utils_jest_internal.md#error)
- [warn](test_utils_jest_internal.md#warn)

## Type Aliases

### Calls

Ƭ **Calls**: readonly [`unknowns`](types_core.md#unknowns)[]

## Variables

### matchers

• `Const` **matchers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `datetimeToBe` | [`ExpectFromMatcher`](../interfaces/test_utils_expect.ExpectFromMatcher.md)\<``"datetimeToBe"``\> |
| `executionResultToBe` | [`ExpectFromMatcher`](../interfaces/test_utils_expect.ExpectFromMatcher.md)\<``"executionResultToBe"``\> |
| `executionTimeToBe` | [`ExpectFromMatcher`](../interfaces/test_utils_expect.ExpectFromMatcher.md)\<``"executionTimeToBe"``\> |
| `mockCallsToBe` | [`ExpectFromMatcher`](../interfaces/test_utils_expect.ExpectFromMatcher.md)\<``"mockCallsToBe"``\> |
| `promiseResultToBe` | [`ExpectFromMatcher`](../interfaces/test_utils_expect.ExpectFromMatcher.md)\<``"promiseResultToBe"``\> |
| `toBeSameAs` | [`ExpectFromMatcher`](../interfaces/test_utils_expect.ExpectFromMatcher.md)\<``"toBeSameAs"``\> |

## Functions

### error

▸ **error**(`...args`): `void`

Function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | readonly `any`[] | Arguments. |

#### Returns

`void`

Result.

___

### warn

▸ **warn**(`...args`): `void`

Function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | readonly `any`[] | Arguments. |

#### Returns

`void`

Result.
