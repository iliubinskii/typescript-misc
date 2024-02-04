[Utility functions](../index.md) / [Exports](../modules.md) / [facades/datetime](../modules/facades_datetime.md) / [datetime](../modules/facades_datetime.datetime.md) / DateTime

# Interface: DateTime

[facades/datetime](../modules/facades_datetime.md).[datetime](../modules/facades_datetime.datetime.md).DateTime

## Implemented by

- [`DateTime`](../classes/facade_implementations_datetime_date_fns_wrapper_DateTime.DateTime.md)

## Table of contents

### Properties

- [add](facades_datetime.datetime.DateTime.md#add)
- [dayOfMonth](facades_datetime.datetime.DateTime.md#dayofmonth)
- [dayOfWeek](facades_datetime.datetime.DateTime.md#dayofweek)
- [differenceInDays](facades_datetime.datetime.DateTime.md#differenceindays)
- [differenceInHours](facades_datetime.datetime.DateTime.md#differenceinhours)
- [differenceInMinutes](facades_datetime.datetime.DateTime.md#differenceinminutes)
- [differenceInMonths](facades_datetime.datetime.DateTime.md#differenceinmonths)
- [differenceInYears](facades_datetime.datetime.DateTime.md#differenceinyears)
- [format](facades_datetime.datetime.DateTime.md#format)
- [hours](facades_datetime.datetime.DateTime.md#hours)
- [isSameDay](facades_datetime.datetime.DateTime.md#issameday)
- [isSameHour](facades_datetime.datetime.DateTime.md#issamehour)
- [isSameMinute](facades_datetime.datetime.DateTime.md#issameminute)
- [isSameMonth](facades_datetime.datetime.DateTime.md#issamemonth)
- [isSameYear](facades_datetime.datetime.DateTime.md#issameyear)
- [isStartOfDay](facades_datetime.datetime.DateTime.md#isstartofday)
- [isStartOfHour](facades_datetime.datetime.DateTime.md#isstartofhour)
- [isStartOfMinute](facades_datetime.datetime.DateTime.md#isstartofminute)
- [isStartOfMonth](facades_datetime.datetime.DateTime.md#isstartofmonth)
- [isStartOfWeek](facades_datetime.datetime.DateTime.md#isstartofweek)
- [isStartOfWeekLocale](facades_datetime.datetime.DateTime.md#isstartofweeklocale)
- [isStartOfYear](facades_datetime.datetime.DateTime.md#isstartofyear)
- [minutes](facades_datetime.datetime.DateTime.md#minutes)
- [month](facades_datetime.datetime.DateTime.md#month)
- [setDayOfMonth](facades_datetime.datetime.DateTime.md#setdayofmonth)
- [setDayOfWeek](facades_datetime.datetime.DateTime.md#setdayofweek)
- [setDayOfWeekLocale](facades_datetime.datetime.DateTime.md#setdayofweeklocale)
- [setHours](facades_datetime.datetime.DateTime.md#sethours)
- [setMinutes](facades_datetime.datetime.DateTime.md#setminutes)
- [setMonth](facades_datetime.datetime.DateTime.md#setmonth)
- [setStartOfDay](facades_datetime.datetime.DateTime.md#setstartofday)
- [setStartOfHour](facades_datetime.datetime.DateTime.md#setstartofhour)
- [setStartOfMinute](facades_datetime.datetime.DateTime.md#setstartofminute)
- [setStartOfMonth](facades_datetime.datetime.DateTime.md#setstartofmonth)
- [setStartOfNextDay](facades_datetime.datetime.DateTime.md#setstartofnextday)
- [setStartOfNextHour](facades_datetime.datetime.DateTime.md#setstartofnexthour)
- [setStartOfNextMinute](facades_datetime.datetime.DateTime.md#setstartofnextminute)
- [setStartOfNextMonth](facades_datetime.datetime.DateTime.md#setstartofnextmonth)
- [setStartOfNextWeek](facades_datetime.datetime.DateTime.md#setstartofnextweek)
- [setStartOfNextWeekLocale](facades_datetime.datetime.DateTime.md#setstartofnextweeklocale)
- [setStartOfNextYear](facades_datetime.datetime.DateTime.md#setstartofnextyear)
- [setStartOfWeek](facades_datetime.datetime.DateTime.md#setstartofweek)
- [setStartOfWeekLocale](facades_datetime.datetime.DateTime.md#setstartofweeklocale)
- [setStartOfYear](facades_datetime.datetime.DateTime.md#setstartofyear)
- [setYear](facades_datetime.datetime.DateTime.md#setyear)
- [sub](facades_datetime.datetime.DateTime.md#sub)
- [toDate](facades_datetime.datetime.DateTime.md#todate)
- [toString](facades_datetime.datetime.DateTime.md#tostring)
- [toTime](facades_datetime.datetime.DateTime.md#totime)
- [toTimeSec](facades_datetime.datetime.DateTime.md#totimesec)
- [year](facades_datetime.datetime.DateTime.md#year)

## Properties

### add

• `Readonly` **add**: (`amount`: `number`, `unit`: [`TimeUnit`](../enums/facades_types.TimeUnit.md)) => [`DateTime`](facades_datetime.datetime.DateTime.md)

Adds time interval.

**`Param`**

Amount to be added.

**`Param`**

Unit.

#### Type declaration

▸ (`amount`, `unit`): [`DateTime`](facades_datetime.datetime.DateTime.md)

Adds time interval.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Amount to be added. |
| `unit` | [`TimeUnit`](../enums/facades_types.TimeUnit.md) | Unit. |

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### dayOfMonth

• `Readonly` **dayOfMonth**: () => `number`

Returns day of month.

#### Type declaration

▸ (): `number`

Returns day of month.

##### Returns

`number`

Day of month.

___

### dayOfWeek

• `Readonly` **dayOfWeek**: () => `number`

Returns day of week.

#### Type declaration

▸ (): `number`

Returns day of week.

##### Returns

`number`

Day of week (Sunday = 0, Monday = 1).

___

### differenceInDays

• `Readonly` **differenceInDays**: (`date`: [`DateTime`](facades_datetime.datetime.DateTime.md)) => `number`

Calculates difference between two dates in days.

**`Param`**

Date.

#### Type declaration

▸ (`date`): `number`

Calculates difference between two dates in days.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](facades_datetime.datetime.DateTime.md) | Date. |

##### Returns

`number`

Difference between two dates in days.

___

### differenceInHours

• `Readonly` **differenceInHours**: (`date`: [`DateTime`](facades_datetime.datetime.DateTime.md)) => `number`

Calculates difference between two dates in hours.

**`Param`**

Date.

#### Type declaration

▸ (`date`): `number`

Calculates difference between two dates in hours.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](facades_datetime.datetime.DateTime.md) | Date. |

##### Returns

`number`

Difference between two dates in hours.

___

### differenceInMinutes

• `Readonly` **differenceInMinutes**: (`date`: [`DateTime`](facades_datetime.datetime.DateTime.md)) => `number`

Calculates difference between two dates in minutes.

**`Param`**

Date.

#### Type declaration

▸ (`date`): `number`

Calculates difference between two dates in minutes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](facades_datetime.datetime.DateTime.md) | Date. |

##### Returns

`number`

Difference between two dates in minutes.

___

### differenceInMonths

• `Readonly` **differenceInMonths**: (`date`: [`DateTime`](facades_datetime.datetime.DateTime.md)) => `number`

Calculates difference between two dates in months.

**`Param`**

Date.

#### Type declaration

▸ (`date`): `number`

Calculates difference between two dates in months.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](facades_datetime.datetime.DateTime.md) | Date. |

##### Returns

`number`

Difference between two dates in months.

___

### differenceInYears

• `Readonly` **differenceInYears**: (`date`: [`DateTime`](facades_datetime.datetime.DateTime.md)) => `number`

Calculates difference between two dates in years.

**`Param`**

Date.

#### Type declaration

▸ (`date`): `number`

Calculates difference between two dates in years.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](facades_datetime.datetime.DateTime.md) | Date. |

##### Returns

`number`

Difference between two dates in years.

___

### format

• `Readonly` **format**: (`format`: `string`) => `string`

Formats date.

**`Param`**

Format.

#### Type declaration

▸ (`format`): `string`

Formats date.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` | Format. |

##### Returns

`string`

Formatted string.

___

### hours

• `Readonly` **hours**: () => `number`

Returns hours.

#### Type declaration

▸ (): `number`

Returns hours.

##### Returns

`number`

Hours.

___

### isSameDay

• `Readonly` **isSameDay**: (`date`: [`DateTime`](facades_datetime.datetime.DateTime.md)) => `boolean`

Compares two dates up to day.

**`Param`**

Date.

#### Type declaration

▸ (`date`): `boolean`

Compares two dates up to day.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](facades_datetime.datetime.DateTime.md) | Date. |

##### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

___

### isSameHour

• `Readonly` **isSameHour**: (`date`: [`DateTime`](facades_datetime.datetime.DateTime.md)) => `boolean`

Compares two dates up to hours.

**`Param`**

Date.

#### Type declaration

▸ (`date`): `boolean`

Compares two dates up to hours.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](facades_datetime.datetime.DateTime.md) | Date. |

##### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

___

### isSameMinute

• `Readonly` **isSameMinute**: (`date`: [`DateTime`](facades_datetime.datetime.DateTime.md)) => `boolean`

Compares two dates up to minutes.

**`Param`**

Date.

#### Type declaration

▸ (`date`): `boolean`

Compares two dates up to minutes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](facades_datetime.datetime.DateTime.md) | Date. |

##### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

___

### isSameMonth

• `Readonly` **isSameMonth**: (`date`: [`DateTime`](facades_datetime.datetime.DateTime.md)) => `boolean`

Compares two dates up to month.

**`Param`**

Date.

#### Type declaration

▸ (`date`): `boolean`

Compares two dates up to month.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](facades_datetime.datetime.DateTime.md) | Date. |

##### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

___

### isSameYear

• `Readonly` **isSameYear**: (`date`: [`DateTime`](facades_datetime.datetime.DateTime.md)) => `boolean`

Compares two dates up to year.

**`Param`**

Date.

#### Type declaration

▸ (`date`): `boolean`

Compares two dates up to year.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](facades_datetime.datetime.DateTime.md) | Date. |

##### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

___

### isStartOfDay

• `Readonly` **isStartOfDay**: () => `boolean`

Checks if date is a start of day.

#### Type declaration

▸ (): `boolean`

Checks if date is a start of day.

##### Returns

`boolean`

_True_ if date is a start of day, _false_ otherwise.

___

### isStartOfHour

• `Readonly` **isStartOfHour**: () => `boolean`

Checks if date is a start of hour.

#### Type declaration

▸ (): `boolean`

Checks if date is a start of hour.

##### Returns

`boolean`

_True_ if date is a start of hour, _false_ otherwise.

___

### isStartOfMinute

• `Readonly` **isStartOfMinute**: () => `boolean`

Checks if date is a start of minute.

#### Type declaration

▸ (): `boolean`

Checks if date is a start of minute.

##### Returns

`boolean`

_True_ if date is a start of minute, _false_ otherwise.

___

### isStartOfMonth

• `Readonly` **isStartOfMonth**: () => `boolean`

Checks if date is a start of month.

#### Type declaration

▸ (): `boolean`

Checks if date is a start of month.

##### Returns

`boolean`

_True_ if date is a start of month, _false_ otherwise.

___

### isStartOfWeek

• `Readonly` **isStartOfWeek**: (`weekStartsOn`: ``0`` \| ``1``) => `boolean`

Checks if date is a start of week.

**`Param`**

Start of week (Sunday = 0, Monday = 1).

#### Type declaration

▸ (`weekStartsOn`): `boolean`

Checks if date is a start of week.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `weekStartsOn` | ``0`` \| ``1`` | Start of week (Sunday = 0, Monday = 1). |

##### Returns

`boolean`

_True_ if date is a start of week, _false_ otherwise.

___

### isStartOfWeekLocale

• `Readonly` **isStartOfWeekLocale**: () => `boolean`

Checks if date is a start of week.

#### Type declaration

▸ (): `boolean`

Checks if date is a start of week.

##### Returns

`boolean`

_True_ if date is a start of week, _false_ otherwise.

___

### isStartOfYear

• `Readonly` **isStartOfYear**: () => `boolean`

Checks if date is a start of year.

#### Type declaration

▸ (): `boolean`

Checks if date is a start of year.

##### Returns

`boolean`

_True_ if date is a start of year, _false_ otherwise.

___

### minutes

• `Readonly` **minutes**: () => `number`

Returns minutes.

#### Type declaration

▸ (): `number`

Returns minutes.

##### Returns

`number`

Minutes.

___

### month

• `Readonly` **month**: () => `number`

Returns month.

#### Type declaration

▸ (): `number`

Returns month.

##### Returns

`number`

Month (0 = January).

___

### setDayOfMonth

• `Readonly` **setDayOfMonth**: (`day`: `number`) => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets day of month.

**`Param`**

Day of month.

#### Type declaration

▸ (`day`): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets day of month.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `day` | `number` | Day of month. |

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setDayOfWeek

• `Readonly` **setDayOfWeek**: (`day`: `number`, `weekStartsOn`: ``0`` \| ``1``) => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets day of week.

**`Param`**

Day of week (Sunday = 0, Monday = 1).

**`Param`**

Start of week (Sunday = 0, Monday = 1).

#### Type declaration

▸ (`day`, `weekStartsOn`): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets day of week.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `day` | `number` | Day of week (Sunday = 0, Monday = 1). |
| `weekStartsOn` | ``0`` \| ``1`` | Start of week (Sunday = 0, Monday = 1). |

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setDayOfWeekLocale

• `Readonly` **setDayOfWeekLocale**: (`day`: `number`) => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets day of week.

**`Param`**

Day of week (Sunday = 0, Monday = 1).

#### Type declaration

▸ (`day`): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets day of week.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `day` | `number` | Day of week (Sunday = 0, Monday = 1). |

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setHours

• `Readonly` **setHours**: (`hours`: `number`) => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets hours.

**`Param`**

Hours.

#### Type declaration

▸ (`hours`): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets hours.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hours` | `number` | Hours. |

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setMinutes

• `Readonly` **setMinutes**: (`minutes`: `number`) => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets minutes.

**`Param`**

Minutes.

#### Type declaration

▸ (`minutes`): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets minutes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minutes` | `number` | Minutes. |

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setMonth

• `Readonly` **setMonth**: (`month`: `number`) => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets month (0 = January).

**`Param`**

Month.

#### Type declaration

▸ (`month`): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets month (0 = January).

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `month` | `number` | Month. |

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setStartOfDay

• `Readonly` **setStartOfDay**: () => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of day.

#### Type declaration

▸ (): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of day.

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setStartOfHour

• `Readonly` **setStartOfHour**: () => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of hour.

#### Type declaration

▸ (): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of hour.

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setStartOfMinute

• `Readonly` **setStartOfMinute**: () => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of minute.

#### Type declaration

▸ (): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of minute.

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setStartOfMonth

• `Readonly` **setStartOfMonth**: () => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of month.

#### Type declaration

▸ (): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of month.

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setStartOfNextDay

• `Readonly` **setStartOfNextDay**: () => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of next day.

#### Type declaration

▸ (): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of next day.

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setStartOfNextHour

• `Readonly` **setStartOfNextHour**: () => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of next hour.

#### Type declaration

▸ (): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of next hour.

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setStartOfNextMinute

• `Readonly` **setStartOfNextMinute**: () => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of next minute.

#### Type declaration

▸ (): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of next minute.

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setStartOfNextMonth

• `Readonly` **setStartOfNextMonth**: () => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of next month.

#### Type declaration

▸ (): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of next month.

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setStartOfNextWeek

• `Readonly` **setStartOfNextWeek**: (`weekStartsOn`: ``0`` \| ``1``) => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of next week.

**`Param`**

Start of week (Sunday = 0, Monday = 1).

#### Type declaration

▸ (`weekStartsOn`): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of next week.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `weekStartsOn` | ``0`` \| ``1`` | Start of week (Sunday = 0, Monday = 1). |

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setStartOfNextWeekLocale

• `Readonly` **setStartOfNextWeekLocale**: () => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of next week.

#### Type declaration

▸ (): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of next week.

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setStartOfNextYear

• `Readonly` **setStartOfNextYear**: () => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of next year.

#### Type declaration

▸ (): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of next year.

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setStartOfWeek

• `Readonly` **setStartOfWeek**: (`weekStartsOn`: ``0`` \| ``1``) => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of week.

**`Param`**

Start of week (Sunday = 0, Monday = 1).

#### Type declaration

▸ (`weekStartsOn`): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of week.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `weekStartsOn` | ``0`` \| ``1`` | Start of week (Sunday = 0, Monday = 1). |

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setStartOfWeekLocale

• `Readonly` **setStartOfWeekLocale**: () => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of week.

#### Type declaration

▸ (): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of week.

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setStartOfYear

• `Readonly` **setStartOfYear**: () => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of year.

#### Type declaration

▸ (): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets date to the start of year.

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### setYear

• `Readonly` **setYear**: (`year`: `number`) => [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets year.

**`Param`**

Year.

#### Type declaration

▸ (`year`): [`DateTime`](facades_datetime.datetime.DateTime.md)

Sets year.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | Year. |

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### sub

• `Readonly` **sub**: (`amount`: `number`, `unit`: [`TimeUnit`](../enums/facades_types.TimeUnit.md)) => [`DateTime`](facades_datetime.datetime.DateTime.md)

Subtracts time interval.

**`Param`**

Amount to be subtracted.

**`Param`**

Unit.

#### Type declaration

▸ (`amount`, `unit`): [`DateTime`](facades_datetime.datetime.DateTime.md)

Subtracts time interval.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Amount to be subtracted. |
| `unit` | [`TimeUnit`](../enums/facades_types.TimeUnit.md) | Unit. |

##### Returns

[`DateTime`](facades_datetime.datetime.DateTime.md)

New instance.

___

### toDate

• `Readonly` **toDate**: () => `Date`

Returns date as a Date object.

#### Type declaration

▸ (): `Date`

Returns date as a Date object.

##### Returns

`Date`

Date object.

___

### toString

• `Readonly` **toString**: () => `string`

Returns date as "yyyy-MM-dd HH:mm" / "yyyy-MM-dd HH:mm:ss" formatted string.

#### Type declaration

▸ (): `string`

Returns date as "yyyy-MM-dd HH:mm" / "yyyy-MM-dd HH:mm:ss" formatted string.

##### Returns

`string`

Formatted string.

___

### toTime

• `Readonly` **toTime**: () => `number`

Returns date as a number of milliseconds.

#### Type declaration

▸ (): `number`

Returns date as a number of milliseconds.

##### Returns

`number`

Number of milliseconds.

___

### toTimeSec

• `Readonly` **toTimeSec**: () => `number`

Returns date as a number of seconds.

#### Type declaration

▸ (): `number`

Returns date as a number of seconds.

##### Returns

`number`

Number of seconds.

___

### year

• `Readonly` **year**: () => `number`

Returns year.

#### Type declaration

▸ (): `number`

Returns year.

##### Returns

`number`

Year.
