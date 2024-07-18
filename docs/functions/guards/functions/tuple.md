[**Typescript library**](../../../index.md) • **Docs**

***

[Typescript library](../../../modules.md) / [functions/guards](../index.md) / tuple

# Function: tuple()

## tuple(value, guard)

> **tuple**\<`A`\>(`value`, `guard`): `value is readonly [A]`

Checks if value type is [A].

### Type Parameters

• **A**

### Parameters

• **value**: `unknown`

Value.

• **guard**: [`Guard`](../interfaces/Guard.md)\<`A`\>

Guard for type A.

### Returns

`value is readonly [A]`

_True_ if value type is [A], _false_ otherwise.

## tuple(value, guard1, guard2)

> **tuple**\<`A`, `B`\>(`value`, `guard1`, `guard2`): `value is readonly [A, B]`

Checks if value type is [A, B].

### Type Parameters

• **A**

• **B**

### Parameters

• **value**: `unknown`

Value.

• **guard1**: [`Guard`](../interfaces/Guard.md)\<`A`\>

Guard for type A.

• **guard2**: [`Guard`](../interfaces/Guard.md)\<`B`\>

Guard for type B.

### Returns

`value is readonly [A, B]`

_True_ if value type is [A, B], _false_ otherwise.

## tuple(value, guard1, guard2, guard3)

> **tuple**\<`A`, `B`, `C`\>(`value`, `guard1`, `guard2`, `guard3`): `value is readonly [A, B, C]`

Checks if value type is [A, B, C].

### Type Parameters

• **A**

• **B**

• **C**

### Parameters

• **value**: `unknown`

Value.

• **guard1**: [`Guard`](../interfaces/Guard.md)\<`A`\>

Guard for type A.

• **guard2**: [`Guard`](../interfaces/Guard.md)\<`B`\>

Guard for type B.

• **guard3**: [`Guard`](../interfaces/Guard.md)\<`C`\>

Guard for type C.

### Returns

`value is readonly [A, B, C]`

_True_ if value type is [A, B, C], _false_ otherwise.

## tuple(value, guard1, guard2, guard3, guard4)

> **tuple**\<`A`, `B`, `C`, `D`\>(`value`, `guard1`, `guard2`, `guard3`, `guard4`): `value is readonly [A, B, C, D]`

Checks if value type is [A, B, C, D].

### Type Parameters

• **A**

• **B**

• **C**

• **D**

### Parameters

• **value**: `unknown`

Value.

• **guard1**: [`Guard`](../interfaces/Guard.md)\<`A`\>

Guard for type A.

• **guard2**: [`Guard`](../interfaces/Guard.md)\<`B`\>

Guard for type B.

• **guard3**: [`Guard`](../interfaces/Guard.md)\<`C`\>

Guard for type C.

• **guard4**: [`Guard`](../interfaces/Guard.md)\<`D`\>

Guard for type D.

### Returns

`value is readonly [A, B, C, D]`

_True_ if value type is [A, B, C, D], _false_ otherwise.
