[**Typescript library**](../../../../../index.md) • **Docs**

***

[Typescript library](../../../../../modules.md) / [facade-implementations/datetime/date-fns-wrapper/DateTime](../index.md) / DateTime

# Class: DateTime

## Implements

- [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

## Constructors

### new DateTime()

> **new DateTime**(`date`, `options`): [`DateTime`](DateTime.md)

Creates class instance.

#### Parameters

• **date**: `undefined` \| [`NumStr`](../../../../../types/core/type-aliases/NumStr.md) \| [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md) \| `Date`

Date.

• **options**: [`Options`](../../core/interfaces/Options.md)

Options.

#### Returns

[`DateTime`](DateTime.md)

## Properties

### options

> `protected` `readonly` **options**: [`Options`](../../core/interfaces/Options.md)

***

### value

> `protected` `readonly` **value**: `Date`

## Methods

### add()

> **add**(`amount`, `unit`): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Adds time interval.

#### Parameters

• **amount**: `number`

Amount to be added.

• **unit**: [`TimeUnit`](../../../../../facades/types/enumerations/TimeUnit.md)

Unit.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`add`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#add)

***

### create()

> `protected` **create**(`date`): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Creates DateTime object with the same options.

#### Parameters

• **date**: `undefined` \| [`NumStr`](../../../../../types/core/type-aliases/NumStr.md) \| [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md) \| `Date`

Date.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

DateTime object.

***

### dayOfMonth()

> **dayOfMonth**(): `number`

Returns day of month.

#### Returns

`number`

Day of month.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`dayOfMonth`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#dayofmonth)

***

### dayOfWeek()

> **dayOfWeek**(): `number`

Returns day of week.

#### Returns

`number`

Day of week (Sunday = 0, Monday = 1).

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`dayOfWeek`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#dayofweek)

***

### differenceInDays()

> **differenceInDays**(`date`): `number`

Calculates difference between two dates in days.

#### Parameters

• **date**: [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Date.

#### Returns

`number`

Difference between two dates in days.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`differenceInDays`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#differenceindays)

***

### differenceInHours()

> **differenceInHours**(`date`): `number`

Calculates difference between two dates in hours.

#### Parameters

• **date**: [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Date.

#### Returns

`number`

Difference between two dates in hours.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`differenceInHours`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#differenceinhours)

***

### differenceInMinutes()

> **differenceInMinutes**(`date`): `number`

Calculates difference between two dates in minutes.

#### Parameters

• **date**: [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Date.

#### Returns

`number`

Difference between two dates in minutes.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`differenceInMinutes`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#differenceinminutes)

***

### differenceInMonths()

> **differenceInMonths**(`date`): `number`

Calculates difference between two dates in months.

#### Parameters

• **date**: [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Date.

#### Returns

`number`

Difference between two dates in months.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`differenceInMonths`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#differenceinmonths)

***

### differenceInYears()

> **differenceInYears**(`date`): `number`

Calculates difference between two dates in years.

#### Parameters

• **date**: [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Date.

#### Returns

`number`

Difference between two dates in years.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`differenceInYears`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#differenceinyears)

***

### format()

> **format**(`format`): `string`

Formats date.

#### Parameters

• **format**: `string`

Format.

#### Returns

`string`

Formatted string.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`format`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#format)

***

### hours()

> **hours**(): `number`

Returns hours.

#### Returns

`number`

Hours.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`hours`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#hours)

***

### isSameDay()

> **isSameDay**(`date`): `boolean`

Compares two dates up to day.

#### Parameters

• **date**: [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Date.

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`isSameDay`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#issameday)

***

### isSameHour()

> **isSameHour**(`date`): `boolean`

Compares two dates up to hours.

#### Parameters

• **date**: [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Date.

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`isSameHour`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#issamehour)

***

### isSameMinute()

> **isSameMinute**(`date`): `boolean`

Compares two dates up to minutes.

#### Parameters

• **date**: [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Date.

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`isSameMinute`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#issameminute)

***

### isSameMonth()

> **isSameMonth**(`date`): `boolean`

Compares two dates up to month.

#### Parameters

• **date**: [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Date.

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`isSameMonth`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#issamemonth)

***

### isSameYear()

> **isSameYear**(`date`): `boolean`

Compares two dates up to year.

#### Parameters

• **date**: [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Date.

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`isSameYear`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#issameyear)

***

### isStartOfDay()

> **isStartOfDay**(): `boolean`

Checks if date is a start of day.

#### Returns

`boolean`

_True_ if date is a start of day, _false_ otherwise.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`isStartOfDay`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#isstartofday)

***

### isStartOfHour()

> **isStartOfHour**(): `boolean`

Checks if date is a start of hour.

#### Returns

`boolean`

_True_ if date is a start of hour, _false_ otherwise.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`isStartOfHour`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#isstartofhour)

***

### isStartOfMinute()

> **isStartOfMinute**(): `boolean`

Checks if date is a start of minute.

#### Returns

`boolean`

_True_ if date is a start of minute, _false_ otherwise.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`isStartOfMinute`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#isstartofminute)

***

### isStartOfMonth()

> **isStartOfMonth**(): `boolean`

Checks if date is a start of month.

#### Returns

`boolean`

_True_ if date is a start of month, _false_ otherwise.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`isStartOfMonth`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#isstartofmonth)

***

### isStartOfWeek()

> **isStartOfWeek**(`weekStartsOn`): `boolean`

Checks if date is a start of week.

#### Parameters

• **weekStartsOn**: `0` \| `1`

Start of week (Sunday = 0, Monday = 1).

#### Returns

`boolean`

_True_ if date is a start of week, _false_ otherwise.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`isStartOfWeek`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#isstartofweek)

***

### isStartOfWeekLocale()

> **isStartOfWeekLocale**(): `boolean`

Checks if date is a start of week.

#### Returns

`boolean`

_True_ if date is a start of week, _false_ otherwise.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`isStartOfWeekLocale`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#isstartofweeklocale)

***

### isStartOfYear()

> **isStartOfYear**(): `boolean`

Checks if date is a start of year.

#### Returns

`boolean`

_True_ if date is a start of year, _false_ otherwise.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`isStartOfYear`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#isstartofyear)

***

### minutes()

> **minutes**(): `number`

Returns minutes.

#### Returns

`number`

Minutes.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`minutes`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#minutes)

***

### month()

> **month**(): `number`

Returns month.

#### Returns

`number`

Month (0 = January).

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`month`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#month)

***

### setDayOfMonth()

> **setDayOfMonth**(`day`): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets day of month.

#### Parameters

• **day**: `number`

Day of month.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setDayOfMonth`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setdayofmonth)

***

### setDayOfWeek()

> **setDayOfWeek**(`day`, `weekStartsOn`): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets day of week.

#### Parameters

• **day**: `number`

Day of week (Sunday = 0, Monday = 1).

• **weekStartsOn**: [`FirstDayOfWeek`](../../core/type-aliases/FirstDayOfWeek.md)

Start of week (Sunday = 0, Monday = 1).

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setDayOfWeek`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setdayofweek)

***

### setDayOfWeekLocale()

> **setDayOfWeekLocale**(`day`): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets day of week.

#### Parameters

• **day**: `number`

Day of week (Sunday = 0, Monday = 1).

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setDayOfWeekLocale`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setdayofweeklocale)

***

### setHours()

> **setHours**(`hours`): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets hours.

#### Parameters

• **hours**: `number`

Hours.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setHours`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#sethours)

***

### setMinutes()

> **setMinutes**(`minutes`): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets minutes.

#### Parameters

• **minutes**: `number`

Minutes.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setMinutes`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setminutes)

***

### setMonth()

> **setMonth**(`month`): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets month (0 = January).

#### Parameters

• **month**: `number`

Month.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setMonth`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setmonth)

***

### setStartOfDay()

> **setStartOfDay**(): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets date to the start of day.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setStartOfDay`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setstartofday)

***

### setStartOfHour()

> **setStartOfHour**(): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets date to the start of hour.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setStartOfHour`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setstartofhour)

***

### setStartOfMinute()

> **setStartOfMinute**(): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets date to the start of minute.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setStartOfMinute`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setstartofminute)

***

### setStartOfMonth()

> **setStartOfMonth**(): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets date to the start of month.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setStartOfMonth`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setstartofmonth)

***

### setStartOfNextDay()

> **setStartOfNextDay**(): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets date to the start of next day.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setStartOfNextDay`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setstartofnextday)

***

### setStartOfNextHour()

> **setStartOfNextHour**(): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets date to the start of next hour.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setStartOfNextHour`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setstartofnexthour)

***

### setStartOfNextMinute()

> **setStartOfNextMinute**(): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets date to the start of next minute.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setStartOfNextMinute`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setstartofnextminute)

***

### setStartOfNextMonth()

> **setStartOfNextMonth**(): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets date to the start of next month.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setStartOfNextMonth`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setstartofnextmonth)

***

### setStartOfNextWeek()

> **setStartOfNextWeek**(`weekStartsOn`): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets date to the start of next week.

#### Parameters

• **weekStartsOn**: [`FirstDayOfWeek`](../../core/type-aliases/FirstDayOfWeek.md)

Start of week (Sunday = 0, Monday = 1).

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setStartOfNextWeek`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setstartofnextweek)

***

### setStartOfNextWeekLocale()

> **setStartOfNextWeekLocale**(): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets date to the start of next week.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setStartOfNextWeekLocale`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setstartofnextweeklocale)

***

### setStartOfNextYear()

> **setStartOfNextYear**(): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets date to the start of next year.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setStartOfNextYear`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setstartofnextyear)

***

### setStartOfWeek()

> **setStartOfWeek**(`weekStartsOn`): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets date to the start of week.

#### Parameters

• **weekStartsOn**: [`FirstDayOfWeek`](../../core/type-aliases/FirstDayOfWeek.md)

Start of week (Sunday = 0, Monday = 1).

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setStartOfWeek`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setstartofweek)

***

### setStartOfWeekLocale()

> **setStartOfWeekLocale**(): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets date to the start of week.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setStartOfWeekLocale`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setstartofweeklocale)

***

### setStartOfYear()

> **setStartOfYear**(): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets date to the start of year.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setStartOfYear`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setstartofyear)

***

### setYear()

> **setYear**(`year`): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Sets year.

#### Parameters

• **year**: `number`

Year.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`setYear`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#setyear)

***

### sub()

> **sub**(`amount`, `unit`): [`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

Subtracts time interval.

#### Parameters

• **amount**: `number`

Amount to be subtracted.

• **unit**: [`TimeUnit`](../../../../../facades/types/enumerations/TimeUnit.md)

Unit.

#### Returns

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md)

New instance.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`sub`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#sub)

***

### toDate()

> **toDate**(): `Date`

Returns date as a Date object.

#### Returns

`Date`

Date object.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`toDate`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#todate)

***

### toString()

> **toString**(): `string`

Returns date as "yyyy-MM-dd HH:mm" / "yyyy-MM-dd HH:mm:ss" formatted string.

#### Returns

`string`

Formatted string.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`toString`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#tostring)

***

### toTime()

> **toTime**(): `number`

Returns date as a number of milliseconds.

#### Returns

`number`

Number of milliseconds.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`toTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#totime)

***

### toTimeSec()

> **toTimeSec**(): `number`

Returns date as a number of seconds.

#### Returns

`number`

Number of seconds.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`toTimeSec`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#totimesec)

***

### year()

> **year**(): `number`

Returns year.

#### Returns

`number`

Year.

#### Implementation of

[`DateTime`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md).[`year`](../../../../../facades/datetime/namespaces/datetime/interfaces/DateTime.md#year)
