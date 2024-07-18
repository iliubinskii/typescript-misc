[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [types/object.keys](../index.md) / PickGroups

# Type Alias: PickGroups\<T, O\>

> **PickGroups**\<`T`, `O`\>: [`And`](../../core/type-aliases/And.md)\<`If`\<`Extends`\<`"defined"`, `O`\>, [`Defined`](Defined.md)\<`T`\>, keyof `T`\>, `If`\<`Extends`\<`"optional"`, `O`\>, `Optional`\<`T`\>, keyof `T`\>, `If`\<`Extends`\<`"readonly"`, `O`\>, `Readonly`\<`T`\>, keyof `T`\>, `If`\<`Extends`\<`"required"`, `O`\>, `Required`\<`T`\>, keyof `T`\>, `If`\<`Extends`\<`"undefined"`, `O`\>, [`Undefined`](Undefined.md)\<`T`\>, keyof `T`\>, `If`\<`Extends`\<`"writable"`, `O`\>, `Writable`\<`T`\>, keyof `T`\>\>

## Type Parameters

• **T** *extends* `object`

• **O** *extends* [`PickGroupsOption`](../../object.keys.internal/type-aliases/PickGroupsOption.md)
