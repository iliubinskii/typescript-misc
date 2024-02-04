[Utility functions](../index.md) / [Exports](../modules.md) / [facade-implementations/datetime/date-fns-wrapper/DateTime](../modules/facade_implementations_datetime_date_fns_wrapper_DateTime.md) / DateTime

# Class: DateTime

[facade-implementations/datetime/date-fns-wrapper/DateTime](../modules/facade_implementations_datetime_date_fns_wrapper_DateTime.md).DateTime

## Implements

- [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

## Table of contents

### Constructors

- [constructor](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#constructor)

### Properties

- [options](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#options)
- [value](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#value)

### Methods

- [add](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#add)
- [create](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#create)
- [dayOfMonth](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#dayofmonth)
- [dayOfWeek](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#dayofweek)
- [differenceInDays](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#differenceindays)
- [differenceInHours](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#differenceinhours)
- [differenceInMinutes](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#differenceinminutes)
- [differenceInMonths](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#differenceinmonths)
- [differenceInYears](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#differenceinyears)
- [format](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#format)
- [hours](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#hours)
- [isSameDay](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#issameday)
- [isSameHour](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#issamehour)
- [isSameMinute](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#issameminute)
- [isSameMonth](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#issamemonth)
- [isSameYear](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#issameyear)
- [isStartOfDay](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#isstartofday)
- [isStartOfHour](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#isstartofhour)
- [isStartOfMinute](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#isstartofminute)
- [isStartOfMonth](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#isstartofmonth)
- [isStartOfWeek](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#isstartofweek)
- [isStartOfWeekLocale](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#isstartofweeklocale)
- [isStartOfYear](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#isstartofyear)
- [minutes](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#minutes)
- [month](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#month)
- [setDayOfMonth](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setdayofmonth)
- [setDayOfWeek](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setdayofweek)
- [setDayOfWeekLocale](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setdayofweeklocale)
- [setHours](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#sethours)
- [setMinutes](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setminutes)
- [setMonth](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setmonth)
- [setStartOfDay](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setstartofday)
- [setStartOfHour](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setstartofhour)
- [setStartOfMinute](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setstartofminute)
- [setStartOfMonth](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setstartofmonth)
- [setStartOfNextDay](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setstartofnextday)
- [setStartOfNextHour](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setstartofnexthour)
- [setStartOfNextMinute](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setstartofnextminute)
- [setStartOfNextMonth](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setstartofnextmonth)
- [setStartOfNextWeek](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setstartofnextweek)
- [setStartOfNextWeekLocale](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setstartofnextweeklocale)
- [setStartOfNextYear](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setstartofnextyear)
- [setStartOfWeek](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setstartofweek)
- [setStartOfWeekLocale](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setstartofweeklocale)
- [setStartOfYear](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setstartofyear)
- [setYear](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#setyear)
- [sub](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#sub)
- [toDate](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#todate)
- [toString](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#tostring)
- [toTime](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#totime)
- [toTimeSec](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#totimesec)
- [year](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md#year)

## Constructors

### constructor

• **new DateTime**(`date`, `options`): [`DateTime`](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md)

Creates class instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `undefined` \| [`NumStr`](../modules/types_core.md#numstr) \| [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md) \| `Date` | Date. |
| `options` | [`Options`](../interfaces/facade_implementations_datetime_date_fns_wrapper_core.Options.md) | Options. |

#### Returns

[`DateTime`](facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md)

## Properties

### options

• `Protected` `Readonly` **options**: [`Options`](../interfaces/facade_implementations_datetime_date_fns_wrapper_core.Options.md)

___

### value

• `Protected` `Readonly` **value**: `Date`

## Methods

### add

▸ **add**(`amount`, `unit`): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Adds time interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Amount to be added. |
| `unit` | [`TimeUnit`](../enums/facades_types.TimeUnit.md) | Unit. |

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[add](../interfaces/facades_datetime.datetime.DateTime.md#add)

___

### create

▸ **create**(`date`): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Creates DateTime object with the same options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `undefined` \| [`NumStr`](../modules/types_core.md#numstr) \| [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md) \| `Date` | Date. |

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

DateTime object.

___

### dayOfMonth

▸ **dayOfMonth**(): `number`

Returns day of month.

#### Returns

`number`

Day of month.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[dayOfMonth](../interfaces/facades_datetime.datetime.DateTime.md#dayofmonth)

___

### dayOfWeek

▸ **dayOfWeek**(): `number`

Returns day of week.

#### Returns

`number`

Day of week (Sunday = 0, Monday = 1).

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[dayOfWeek](../interfaces/facades_datetime.datetime.DateTime.md#dayofweek)

___

### differenceInDays

▸ **differenceInDays**(`date`): `number`

Calculates difference between two dates in days.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md) | Date. |

#### Returns

`number`

Difference between two dates in days.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[differenceInDays](../interfaces/facades_datetime.datetime.DateTime.md#differenceindays)

___

### differenceInHours

▸ **differenceInHours**(`date`): `number`

Calculates difference between two dates in hours.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md) | Date. |

#### Returns

`number`

Difference between two dates in hours.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[differenceInHours](../interfaces/facades_datetime.datetime.DateTime.md#differenceinhours)

___

### differenceInMinutes

▸ **differenceInMinutes**(`date`): `number`

Calculates difference between two dates in minutes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md) | Date. |

#### Returns

`number`

Difference between two dates in minutes.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[differenceInMinutes](../interfaces/facades_datetime.datetime.DateTime.md#differenceinminutes)

___

### differenceInMonths

▸ **differenceInMonths**(`date`): `number`

Calculates difference between two dates in months.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md) | Date. |

#### Returns

`number`

Difference between two dates in months.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[differenceInMonths](../interfaces/facades_datetime.datetime.DateTime.md#differenceinmonths)

___

### differenceInYears

▸ **differenceInYears**(`date`): `number`

Calculates difference between two dates in years.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md) | Date. |

#### Returns

`number`

Difference between two dates in years.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[differenceInYears](../interfaces/facades_datetime.datetime.DateTime.md#differenceinyears)

___

### format

▸ **format**(`format`): `string`

Formats date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` | Format. |

#### Returns

`string`

Formatted string.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[format](../interfaces/facades_datetime.datetime.DateTime.md#format)

___

### hours

▸ **hours**(): `number`

Returns hours.

#### Returns

`number`

Hours.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[hours](../interfaces/facades_datetime.datetime.DateTime.md#hours)

___

### isSameDay

▸ **isSameDay**(`date`): `boolean`

Compares two dates up to day.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md) | Date. |

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[isSameDay](../interfaces/facades_datetime.datetime.DateTime.md#issameday)

___

### isSameHour

▸ **isSameHour**(`date`): `boolean`

Compares two dates up to hours.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md) | Date. |

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[isSameHour](../interfaces/facades_datetime.datetime.DateTime.md#issamehour)

___

### isSameMinute

▸ **isSameMinute**(`date`): `boolean`

Compares two dates up to minutes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md) | Date. |

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[isSameMinute](../interfaces/facades_datetime.datetime.DateTime.md#issameminute)

___

### isSameMonth

▸ **isSameMonth**(`date`): `boolean`

Compares two dates up to month.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md) | Date. |

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[isSameMonth](../interfaces/facades_datetime.datetime.DateTime.md#issamemonth)

___

### isSameYear

▸ **isSameYear**(`date`): `boolean`

Compares two dates up to year.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md) | Date. |

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[isSameYear](../interfaces/facades_datetime.datetime.DateTime.md#issameyear)

___

### isStartOfDay

▸ **isStartOfDay**(): `boolean`

Checks if date is a start of day.

#### Returns

`boolean`

_True_ if date is a start of day, _false_ otherwise.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[isStartOfDay](../interfaces/facades_datetime.datetime.DateTime.md#isstartofday)

___

### isStartOfHour

▸ **isStartOfHour**(): `boolean`

Checks if date is a start of hour.

#### Returns

`boolean`

_True_ if date is a start of hour, _false_ otherwise.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[isStartOfHour](../interfaces/facades_datetime.datetime.DateTime.md#isstartofhour)

___

### isStartOfMinute

▸ **isStartOfMinute**(): `boolean`

Checks if date is a start of minute.

#### Returns

`boolean`

_True_ if date is a start of minute, _false_ otherwise.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[isStartOfMinute](../interfaces/facades_datetime.datetime.DateTime.md#isstartofminute)

___

### isStartOfMonth

▸ **isStartOfMonth**(): `boolean`

Checks if date is a start of month.

#### Returns

`boolean`

_True_ if date is a start of month, _false_ otherwise.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[isStartOfMonth](../interfaces/facades_datetime.datetime.DateTime.md#isstartofmonth)

___

### isStartOfWeek

▸ **isStartOfWeek**(`weekStartsOn`): `boolean`

Checks if date is a start of week.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `weekStartsOn` | ``0`` \| ``1`` | Start of week (Sunday = 0, Monday = 1). |

#### Returns

`boolean`

_True_ if date is a start of week, _false_ otherwise.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[isStartOfWeek](../interfaces/facades_datetime.datetime.DateTime.md#isstartofweek)

___

### isStartOfWeekLocale

▸ **isStartOfWeekLocale**(): `boolean`

Checks if date is a start of week.

#### Returns

`boolean`

_True_ if date is a start of week, _false_ otherwise.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[isStartOfWeekLocale](../interfaces/facades_datetime.datetime.DateTime.md#isstartofweeklocale)

___

### isStartOfYear

▸ **isStartOfYear**(): `boolean`

Checks if date is a start of year.

#### Returns

`boolean`

_True_ if date is a start of year, _false_ otherwise.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[isStartOfYear](../interfaces/facades_datetime.datetime.DateTime.md#isstartofyear)

___

### minutes

▸ **minutes**(): `number`

Returns minutes.

#### Returns

`number`

Minutes.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[minutes](../interfaces/facades_datetime.datetime.DateTime.md#minutes)

___

### month

▸ **month**(): `number`

Returns month.

#### Returns

`number`

Month (0 = January).

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[month](../interfaces/facades_datetime.datetime.DateTime.md#month)

___

### setDayOfMonth

▸ **setDayOfMonth**(`day`): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets day of month.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `day` | `number` | Day of month. |

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setDayOfMonth](../interfaces/facades_datetime.datetime.DateTime.md#setdayofmonth)

___

### setDayOfWeek

▸ **setDayOfWeek**(`day`, `weekStartsOn`): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets day of week.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `day` | `number` | Day of week (Sunday = 0, Monday = 1). |
| `weekStartsOn` | [`FirstDayOfWeek`](../modules/facade_implementations_datetime_date_fns_wrapper_core.md#firstdayofweek) | Start of week (Sunday = 0, Monday = 1). |

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setDayOfWeek](../interfaces/facades_datetime.datetime.DateTime.md#setdayofweek)

___

### setDayOfWeekLocale

▸ **setDayOfWeekLocale**(`day`): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets day of week.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `day` | `number` | Day of week (Sunday = 0, Monday = 1). |

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setDayOfWeekLocale](../interfaces/facades_datetime.datetime.DateTime.md#setdayofweeklocale)

___

### setHours

▸ **setHours**(`hours`): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets hours.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hours` | `number` | Hours. |

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setHours](../interfaces/facades_datetime.datetime.DateTime.md#sethours)

___

### setMinutes

▸ **setMinutes**(`minutes`): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets minutes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minutes` | `number` | Minutes. |

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setMinutes](../interfaces/facades_datetime.datetime.DateTime.md#setminutes)

___

### setMonth

▸ **setMonth**(`month`): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets month (0 = January).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `month` | `number` | Month. |

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setMonth](../interfaces/facades_datetime.datetime.DateTime.md#setmonth)

___

### setStartOfDay

▸ **setStartOfDay**(): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets date to the start of day.

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setStartOfDay](../interfaces/facades_datetime.datetime.DateTime.md#setstartofday)

___

### setStartOfHour

▸ **setStartOfHour**(): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets date to the start of hour.

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setStartOfHour](../interfaces/facades_datetime.datetime.DateTime.md#setstartofhour)

___

### setStartOfMinute

▸ **setStartOfMinute**(): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets date to the start of minute.

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setStartOfMinute](../interfaces/facades_datetime.datetime.DateTime.md#setstartofminute)

___

### setStartOfMonth

▸ **setStartOfMonth**(): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets date to the start of month.

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setStartOfMonth](../interfaces/facades_datetime.datetime.DateTime.md#setstartofmonth)

___

### setStartOfNextDay

▸ **setStartOfNextDay**(): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets date to the start of next day.

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setStartOfNextDay](../interfaces/facades_datetime.datetime.DateTime.md#setstartofnextday)

___

### setStartOfNextHour

▸ **setStartOfNextHour**(): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets date to the start of next hour.

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setStartOfNextHour](../interfaces/facades_datetime.datetime.DateTime.md#setstartofnexthour)

___

### setStartOfNextMinute

▸ **setStartOfNextMinute**(): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets date to the start of next minute.

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setStartOfNextMinute](../interfaces/facades_datetime.datetime.DateTime.md#setstartofnextminute)

___

### setStartOfNextMonth

▸ **setStartOfNextMonth**(): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets date to the start of next month.

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setStartOfNextMonth](../interfaces/facades_datetime.datetime.DateTime.md#setstartofnextmonth)

___

### setStartOfNextWeek

▸ **setStartOfNextWeek**(`weekStartsOn`): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets date to the start of next week.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `weekStartsOn` | [`FirstDayOfWeek`](../modules/facade_implementations_datetime_date_fns_wrapper_core.md#firstdayofweek) | Start of week (Sunday = 0, Monday = 1). |

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setStartOfNextWeek](../interfaces/facades_datetime.datetime.DateTime.md#setstartofnextweek)

___

### setStartOfNextWeekLocale

▸ **setStartOfNextWeekLocale**(): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets date to the start of next week.

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setStartOfNextWeekLocale](../interfaces/facades_datetime.datetime.DateTime.md#setstartofnextweeklocale)

___

### setStartOfNextYear

▸ **setStartOfNextYear**(): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets date to the start of next year.

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setStartOfNextYear](../interfaces/facades_datetime.datetime.DateTime.md#setstartofnextyear)

___

### setStartOfWeek

▸ **setStartOfWeek**(`weekStartsOn`): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets date to the start of week.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `weekStartsOn` | [`FirstDayOfWeek`](../modules/facade_implementations_datetime_date_fns_wrapper_core.md#firstdayofweek) | Start of week (Sunday = 0, Monday = 1). |

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setStartOfWeek](../interfaces/facades_datetime.datetime.DateTime.md#setstartofweek)

___

### setStartOfWeekLocale

▸ **setStartOfWeekLocale**(): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets date to the start of week.

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setStartOfWeekLocale](../interfaces/facades_datetime.datetime.DateTime.md#setstartofweeklocale)

___

### setStartOfYear

▸ **setStartOfYear**(): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets date to the start of year.

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setStartOfYear](../interfaces/facades_datetime.datetime.DateTime.md#setstartofyear)

___

### setYear

▸ **setYear**(`year`): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Sets year.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | Year. |

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[setYear](../interfaces/facades_datetime.datetime.DateTime.md#setyear)

___

### sub

▸ **sub**(`amount`, `unit`): [`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

Subtracts time interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Amount to be subtracted. |
| `unit` | [`TimeUnit`](../enums/facades_types.TimeUnit.md) | Unit. |

#### Returns

[`DateTime`](../interfaces/facades_datetime.datetime.DateTime.md)

New instance.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[sub](../interfaces/facades_datetime.datetime.DateTime.md#sub)

___

### toDate

▸ **toDate**(): `Date`

Returns date as a Date object.

#### Returns

`Date`

Date object.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[toDate](../interfaces/facades_datetime.datetime.DateTime.md#todate)

___

### toString

▸ **toString**(): `string`

Returns date as "yyyy-MM-dd HH:mm" / "yyyy-MM-dd HH:mm:ss" formatted string.

#### Returns

`string`

Formatted string.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[toString](../interfaces/facades_datetime.datetime.DateTime.md#tostring)

___

### toTime

▸ **toTime**(): `number`

Returns date as a number of milliseconds.

#### Returns

`number`

Number of milliseconds.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[toTime](../interfaces/facades_datetime.datetime.DateTime.md#totime)

___

### toTimeSec

▸ **toTimeSec**(): `number`

Returns date as a number of seconds.

#### Returns

`number`

Number of seconds.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[toTimeSec](../interfaces/facades_datetime.datetime.DateTime.md#totimesec)

___

### year

▸ **year**(): `number`

Returns year.

#### Returns

`number`

Year.

#### Implementation of

[DateTime](../interfaces/facades_datetime.datetime.DateTime.md).[year](../interfaces/facades_datetime.datetime.DateTime.md#year)
