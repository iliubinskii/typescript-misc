[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [test-utils/expect](../index.md) / ExpectFromMatcher

# Interface: ExpectFromMatcher()\<K\>

## Type Parameters

• **K** *extends* keyof [`Matchers`](../type-aliases/Matchers.md)

> **ExpectFromMatcher**(`got`, ...`args`): `If`\<`Extends`\<`ReturnType`\<`Readonly`\<`Matchers`\<`unknown`, `unknown`\>\>\[`K`\]\>, `Promise`\<`unknown`\>\>, `Promise`\<[`ExpectResult`](ExpectResult.md)\>, [`ExpectResult`](ExpectResult.md)\>

Expect function.

## Parameters

• **got**: `unknown`

Got.

• ...**args**: `Parameters`\<`Readonly`\<`Matchers`\<`unknown`, `unknown`\>\>\[`K`\]\>

Arguments.

## Returns

`If`\<`Extends`\<`ReturnType`\<`Readonly`\<`Matchers`\<`unknown`, `unknown`\>\>\[`K`\]\>, `Promise`\<`unknown`\>\>, `Promise`\<[`ExpectResult`](ExpectResult.md)\>, [`ExpectResult`](ExpectResult.md)\>

Result.
