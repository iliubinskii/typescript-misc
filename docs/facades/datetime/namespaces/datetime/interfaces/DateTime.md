[**Typescript library**](../../../../../index.md) • **Docs**

***

[Typescript library](../../../../../modules.md) / [facades/datetime](../../../index.md) / [datetime](../index.md) / DateTime

# Interface: DateTime

## Properties

### add()

> `readonly` **add**: (`amount`, `unit`) => [`DateTime`](DateTime.md)

#### Parameters

• **amount**: `number`

Amount to be added.

• **unit**: [`TimeUnit`](../../../../types/enumerations/TimeUnit.md)

Unit.

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### dayOfMonth()

> `readonly` **dayOfMonth**: () => `number`

#### Returns

`number`

Day of month.

***

### dayOfWeek()

> `readonly` **dayOfWeek**: () => `number`

#### Returns

`number`

Day of week (Sunday = 0, Monday = 1).

***

### differenceInDays()

> `readonly` **differenceInDays**: (`date`) => `number`

#### Parameters

• **date**: [`DateTime`](DateTime.md)

Date.

#### Returns

`number`

Difference between two dates in days.

***

### differenceInHours()

> `readonly` **differenceInHours**: (`date`) => `number`

#### Parameters

• **date**: [`DateTime`](DateTime.md)

Date.

#### Returns

`number`

Difference between two dates in hours.

***

### differenceInMinutes()

> `readonly` **differenceInMinutes**: (`date`) => `number`

#### Parameters

• **date**: [`DateTime`](DateTime.md)

Date.

#### Returns

`number`

Difference between two dates in minutes.

***

### differenceInMonths()

> `readonly` **differenceInMonths**: (`date`) => `number`

#### Parameters

• **date**: [`DateTime`](DateTime.md)

Date.

#### Returns

`number`

Difference between two dates in months.

***

### differenceInYears()

> `readonly` **differenceInYears**: (`date`) => `number`

#### Parameters

• **date**: [`DateTime`](DateTime.md)

Date.

#### Returns

`number`

Difference between two dates in years.

***

### format()

> `readonly` **format**: (`format`) => `string`

#### Parameters

• **format**: `string`

Format.

#### Returns

`string`

Formatted string.

***

### hours()

> `readonly` **hours**: () => `number`

#### Returns

`number`

Hours.

***

### isSameDay()

> `readonly` **isSameDay**: (`date`) => `boolean`

#### Parameters

• **date**: [`DateTime`](DateTime.md)

Date.

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

***

### isSameHour()

> `readonly` **isSameHour**: (`date`) => `boolean`

#### Parameters

• **date**: [`DateTime`](DateTime.md)

Date.

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

***

### isSameMinute()

> `readonly` **isSameMinute**: (`date`) => `boolean`

#### Parameters

• **date**: [`DateTime`](DateTime.md)

Date.

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

***

### isSameMonth()

> `readonly` **isSameMonth**: (`date`) => `boolean`

#### Parameters

• **date**: [`DateTime`](DateTime.md)

Date.

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

***

### isSameYear()

> `readonly` **isSameYear**: (`date`) => `boolean`

#### Parameters

• **date**: [`DateTime`](DateTime.md)

Date.

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

***

### isStartOfDay()

> `readonly` **isStartOfDay**: () => `boolean`

#### Returns

`boolean`

_True_ if date is a start of day, _false_ otherwise.

***

### isStartOfHour()

> `readonly` **isStartOfHour**: () => `boolean`

#### Returns

`boolean`

_True_ if date is a start of hour, _false_ otherwise.

***

### isStartOfMinute()

> `readonly` **isStartOfMinute**: () => `boolean`

#### Returns

`boolean`

_True_ if date is a start of minute, _false_ otherwise.

***

### isStartOfMonth()

> `readonly` **isStartOfMonth**: () => `boolean`

#### Returns

`boolean`

_True_ if date is a start of month, _false_ otherwise.

***

### isStartOfWeek()

> `readonly` **isStartOfWeek**: (`weekStartsOn`) => `boolean`

#### Parameters

• **weekStartsOn**: `0` \| `1`

Start of week (Sunday = 0, Monday = 1).

#### Returns

`boolean`

_True_ if date is a start of week, _false_ otherwise.

***

### isStartOfWeekLocale()

> `readonly` **isStartOfWeekLocale**: () => `boolean`

#### Returns

`boolean`

_True_ if date is a start of week, _false_ otherwise.

***

### isStartOfYear()

> `readonly` **isStartOfYear**: () => `boolean`

#### Returns

`boolean`

_True_ if date is a start of year, _false_ otherwise.

***

### minutes()

> `readonly` **minutes**: () => `number`

#### Returns

`number`

Minutes.

***

### month()

> `readonly` **month**: () => `number`

#### Returns

`number`

Month (0 = January).

***

### setDayOfMonth()

> `readonly` **setDayOfMonth**: (`day`) => [`DateTime`](DateTime.md)

#### Parameters

• **day**: `number`

Day of month.

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setDayOfWeek()

> `readonly` **setDayOfWeek**: (`day`, `weekStartsOn`) => [`DateTime`](DateTime.md)

#### Parameters

• **day**: `number`

Day of week (Sunday = 0, Monday = 1).

• **weekStartsOn**: `0` \| `1`

Start of week (Sunday = 0, Monday = 1).

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setDayOfWeekLocale()

> `readonly` **setDayOfWeekLocale**: (`day`) => [`DateTime`](DateTime.md)

#### Parameters

• **day**: `number`

Day of week (Sunday = 0, Monday = 1).

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setHours()

> `readonly` **setHours**: (`hours`) => [`DateTime`](DateTime.md)

#### Parameters

• **hours**: `number`

Hours.

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setMinutes()

> `readonly` **setMinutes**: (`minutes`) => [`DateTime`](DateTime.md)

#### Parameters

• **minutes**: `number`

Minutes.

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setMonth()

> `readonly` **setMonth**: (`month`) => [`DateTime`](DateTime.md)

#### Parameters

• **month**: `number`

Month.

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setStartOfDay()

> `readonly` **setStartOfDay**: () => [`DateTime`](DateTime.md)

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setStartOfHour()

> `readonly` **setStartOfHour**: () => [`DateTime`](DateTime.md)

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setStartOfMinute()

> `readonly` **setStartOfMinute**: () => [`DateTime`](DateTime.md)

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setStartOfMonth()

> `readonly` **setStartOfMonth**: () => [`DateTime`](DateTime.md)

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setStartOfNextDay()

> `readonly` **setStartOfNextDay**: () => [`DateTime`](DateTime.md)

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setStartOfNextHour()

> `readonly` **setStartOfNextHour**: () => [`DateTime`](DateTime.md)

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setStartOfNextMinute()

> `readonly` **setStartOfNextMinute**: () => [`DateTime`](DateTime.md)

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setStartOfNextMonth()

> `readonly` **setStartOfNextMonth**: () => [`DateTime`](DateTime.md)

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setStartOfNextWeek()

> `readonly` **setStartOfNextWeek**: (`weekStartsOn`) => [`DateTime`](DateTime.md)

#### Parameters

• **weekStartsOn**: `0` \| `1`

Start of week (Sunday = 0, Monday = 1).

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setStartOfNextWeekLocale()

> `readonly` **setStartOfNextWeekLocale**: () => [`DateTime`](DateTime.md)

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setStartOfNextYear()

> `readonly` **setStartOfNextYear**: () => [`DateTime`](DateTime.md)

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setStartOfWeek()

> `readonly` **setStartOfWeek**: (`weekStartsOn`) => [`DateTime`](DateTime.md)

#### Parameters

• **weekStartsOn**: `0` \| `1`

Start of week (Sunday = 0, Monday = 1).

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setStartOfWeekLocale()

> `readonly` **setStartOfWeekLocale**: () => [`DateTime`](DateTime.md)

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setStartOfYear()

> `readonly` **setStartOfYear**: () => [`DateTime`](DateTime.md)

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### setYear()

> `readonly` **setYear**: (`year`) => [`DateTime`](DateTime.md)

#### Parameters

• **year**: `number`

Year.

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### sub()

> `readonly` **sub**: (`amount`, `unit`) => [`DateTime`](DateTime.md)

#### Parameters

• **amount**: `number`

Amount to be subtracted.

• **unit**: [`TimeUnit`](../../../../types/enumerations/TimeUnit.md)

Unit.

#### Returns

[`DateTime`](DateTime.md)

New instance.

***

### toDate()

> `readonly` **toDate**: () => `Date`

#### Returns

`Date`

Date object.

***

### toString()

> `readonly` **toString**: () => `string`

#### Returns

`string`

Formatted string.

***

### toTime()

> `readonly` **toTime**: () => `number`

#### Returns

`number`

Number of milliseconds.

***

### toTimeSec()

> `readonly` **toTimeSec**: () => `number`

#### Returns

`number`

Number of seconds.

***

### year()

> `readonly` **year**: () => `number`

#### Returns

`number`

Year.
