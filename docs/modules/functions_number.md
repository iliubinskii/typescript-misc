[Utility functions](../index.md) / [Exports](../modules.md) / functions/number

# Module: functions/number

## Table of contents

### Functions

- [average](functions_number.md#average)
- [ceil](functions_number.md#ceil)
- [floor](functions_number.md#floor)
- [limit](functions_number.md#limit)
- [rootMeanSquareDeviation](functions_number.md#rootmeansquaredeviation)
- [round](functions_number.md#round)
- [sum](functions_number.md#sum)

## Functions

### average

▸ **average**(`...values`): `number`

Averages values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...values` | [`numbers`](types_core.md#numbers) | Values. |

#### Returns

`number`

The average.

___

### ceil

▸ **ceil**(`value`, `precision`): `number`

Ceils number to a given precision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value. |
| `precision` | `number` | The number of digits to keep. |

#### Returns

`number`

Ceiled value.

___

### floor

▸ **floor**(`value`, `precision`): `number`

Rounds number down to a given precision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value. |
| `precision` | `number` | The number of digits to keep. |

#### Returns

`number`

Rounded value.

___

### limit

▸ **limit**(`value`, `min`, `max`): `number`

Limits value to be within [min, max] range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value. |
| `min` | `number` | Min. |
| `max` | `number` | Max. |

#### Returns

`number`

Limited value.

___

### rootMeanSquareDeviation

▸ **rootMeanSquareDeviation**(`...values`): `number`

Calculates root-mean-square deviation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...values` | [`numbers`](types_core.md#numbers) | Values. |

#### Returns

`number`

Root-mean-square deviation.

___

### round

▸ **round**(`value`, `precision`): `number`

Rounds number to a given precision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value. |
| `precision` | `number` | The number of digits to keep. |

#### Returns

`number`

Rounded value.

___

### sum

▸ **sum**(`...values`): `number`

Sums values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...values` | [`numbers`](types_core.md#numbers) | Values. |

#### Returns

`number`

The sum.
