[Utility functions](../index.md) / [Exports](../modules.md) / types/string

# Module: types/string

## Table of contents

### Type Aliases

- [AddPrefix](types_string.md#addprefix)
- [LowercaseLetter](types_string.md#lowercaseletter)
- [RemovePrefix](types_string.md#removeprefix)
- [UppercaseLetter](types_string.md#uppercaseletter)

## Type Aliases

### AddPrefix

Ƭ **AddPrefix**\<`T`, `P`\>: \`$\{P}$\{T}\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
| `P` | extends `string` |

___

### LowercaseLetter

Ƭ **LowercaseLetter**: ``"a"`` \| ``"b"`` \| ``"c"`` \| ``"d"`` \| ``"e"`` \| ``"f"`` \| ``"g"`` \| ``"h"`` \| ``"i"`` \| ``"j"`` \| ``"k"`` \| ``"l"`` \| ``"m"`` \| ``"n"`` \| ``"o"`` \| ``"p"`` \| ``"q"`` \| ``"r"`` \| ``"s"`` \| ``"t"`` \| ``"u"`` \| ``"v"`` \| ``"w"`` \| ``"x"`` \| ``"y"`` \| ``"z"``

___

### RemovePrefix

Ƭ **RemovePrefix**\<`T`, `P`\>: `T` extends \`$\{P}$\{infer R}\` ? `R` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
| `P` | extends `string` |

___

### UppercaseLetter

Ƭ **UppercaseLetter**: ``"A"`` \| ``"B"`` \| ``"C"`` \| ``"D"`` \| ``"E"`` \| ``"F"`` \| ``"G"`` \| ``"H"`` \| ``"I"`` \| ``"J"`` \| ``"K"`` \| ``"L"`` \| ``"M"`` \| ``"N"`` \| ``"O"`` \| ``"P"`` \| ``"Q"`` \| ``"R"`` \| ``"S"`` \| ``"T"`` \| ``"U"`` \| ``"V"`` \| ``"W"`` \| ``"X"`` \| ``"Y"`` \| ``"Z"``
