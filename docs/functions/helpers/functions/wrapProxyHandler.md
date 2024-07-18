[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/helpers](../index.md) / wrapProxyHandler

# Function: wrapProxyHandler()

> **wrapProxyHandler**\<`T`\>(`id`, `action`, `handler`): `ProxyHandler`\<`T`\>

Adds missing methods to proxy handler.

## Type Parameters

• **T** *extends* `object`

## Parameters

• **id**: `string`

ID.

• **action**: [`ProxyHandlerAction`](../enumerations/ProxyHandlerAction.md)

Action for missing methods.

• **handler**: `Readonly`\<`ProxyHandler`\<`T`\>\>

Handler.

## Returns

`ProxyHandler`\<`T`\>

New handler with missing methods added.
