import { add, differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInYears, format as formatDate, getDate, getDay, getHours, getMinutes, getMonth, getSeconds, getYear, isSameDay, isSameHour, isSameMinute, isSameMonth, isSameYear, isValid, parse, setDate, setDay, setHours, setMinutes, setMonth, setYear, startOfDay, startOfHour, startOfMinute, startOfMonth, startOfWeek, startOfYear, sub } from "date-fns";
import { TimeUnit } from "../../../facades";
import { formatStrings } from "./core";
import { is } from "../../../functions";
export class DateTime {
    /**
     * Creates class instance.
     * @param date - Date.
     * @param options - Options.
     */
    constructor(date, options) {
        if (date instanceof Date)
            this.value = date;
        else if (date instanceof DateTime)
            this.value = date.value;
        else if (is.number(date))
            this.value = new Date(date);
        else if (is.string(date))
            this.value = parseString(date);
        else
            this.value = new Date();
        this.options = options;
        /**
         * Parses string.
         * @param str - String.
         * @returns Date.
         */
        function parseString(str) {
            const now = Date.now();
            for (const formatString of formatStrings) {
                const result = parse(str, formatString, now);
                if (isValid(result))
                    return result;
            }
            throw new Error(`Unknown date format: ${str}`);
        }
    }
    add(amount, unit) {
        return amount === 0
            ? this
            : this.create(add(this.value, getDuration(amount, unit)));
    }
    dayOfMonth() {
        return getDate(this.value);
    }
    dayOfWeek() {
        return getDay(this.value);
    }
    differenceInDays(date) {
        return differenceInDays(this.value, date.toDate());
    }
    differenceInHours(date) {
        return differenceInHours(this.value, date.toDate());
    }
    differenceInMinutes(date) {
        return differenceInMinutes(this.value, date.toDate());
    }
    differenceInMonths(date) {
        return differenceInMonths(this.value, date.toDate());
    }
    differenceInYears(date) {
        return differenceInYears(this.value, date.toDate());
    }
    format(format) {
        format = this.options.pm
            ? format
                .replaceAll(/H{4}/gu, "hh")
                .replaceAll(/H{3}/gu, "h")
                .replaceAll("A", "a")
                .trim()
            : format
                .replaceAll(/H{4}/gu, "HH")
                .replaceAll(/H{3}/gu, "H")
                .replaceAll("A", "")
                .trim();
        return formatDate(this.value, format, { locale: this.options.locale });
    }
    hours() {
        return getHours(this.value);
    }
    isSameDay(date) {
        return isSameDay(this.value, date.toDate());
    }
    isSameHour(date) {
        return isSameHour(this.value, date.toDate());
    }
    isSameMinute(date) {
        return isSameMinute(this.value, date.toDate());
    }
    isSameMonth(date) {
        return isSameMonth(this.value, date.toDate());
    }
    isSameYear(date) {
        return isSameYear(this.value, date.toDate());
    }
    isStartOfDay() {
        return this.setStartOfDay().toString() === this.toString();
    }
    isStartOfHour() {
        return this.setStartOfHour().toString() === this.toString();
    }
    isStartOfMinute() {
        return this.setStartOfMinute().toString() === this.toString();
    }
    isStartOfMonth() {
        return this.setStartOfMonth().toString() === this.toString();
    }
    isStartOfWeek(weekStartsOn) {
        return this.setStartOfWeek(weekStartsOn).toString() === this.toString();
    }
    isStartOfWeekLocale() {
        return this.setStartOfWeekLocale().toString() === this.toString();
    }
    isStartOfYear() {
        return this.setStartOfYear().toString() === this.toString();
    }
    minutes() {
        return getMinutes(this.value);
    }
    month() {
        return getMonth(this.value);
    }
    setDayOfMonth(day) {
        return this.create(setDate(this.value, day));
    }
    setDayOfWeek(day, weekStartsOn) {
        return this.create(setDay(this.value, day, { weekStartsOn }));
    }
    setDayOfWeekLocale(day) {
        const weekStartsOn = this.options.firstDayOfWeek;
        return this.create(setDay(this.value, day, { weekStartsOn }));
    }
    setHours(hours) {
        return this.create(setHours(this.value, hours));
    }
    setMinutes(minutes) {
        return this.create(setMinutes(this.value, minutes));
    }
    setMonth(month) {
        return this.create(setMonth(this.value, month));
    }
    setStartOfDay() {
        return this.create(startOfDay(this.value));
    }
    setStartOfHour() {
        return this.create(startOfHour(this.value));
    }
    setStartOfMinute() {
        return this.create(startOfMinute(this.value));
    }
    setStartOfMonth() {
        return this.create(startOfMonth(this.value));
    }
    setStartOfNextDay() {
        return this.create(startOfDay(this.value)).add(1, TimeUnit.day);
    }
    setStartOfNextHour() {
        return this.create(startOfHour(this.value)).add(1, TimeUnit.hour);
    }
    setStartOfNextMinute() {
        return this.create(startOfMinute(this.value)).add(1, TimeUnit.minute);
    }
    setStartOfNextMonth() {
        return this.create(startOfMonth(this.value)).add(1, TimeUnit.month);
    }
    setStartOfNextWeek(weekStartsOn) {
        return this.create(startOfWeek(this.value, { weekStartsOn })).add(1, TimeUnit.week);
    }
    setStartOfNextWeekLocale() {
        const weekStartsOn = this.options.firstDayOfWeek;
        return this.create(startOfWeek(this.value, { weekStartsOn })).add(1, TimeUnit.week);
    }
    setStartOfNextYear() {
        return this.create(startOfYear(this.value)).add(1, TimeUnit.year);
    }
    setStartOfWeek(weekStartsOn) {
        return this.create(startOfWeek(this.value, { weekStartsOn }));
    }
    setStartOfWeekLocale() {
        const weekStartsOn = this.options.firstDayOfWeek;
        return this.create(startOfWeek(this.value, { weekStartsOn }));
    }
    setStartOfYear() {
        return this.create(startOfYear(this.value));
    }
    setYear(year) {
        return this.create(setYear(this.value, year));
    }
    sub(amount, unit) {
        return amount === 0
            ? this
            : this.create(sub(this.value, getDuration(amount, unit)));
    }
    toDate() {
        return this.value;
    }
    toString() {
        return getSeconds(this.value)
            ? formatDate(this.value, "yyyy-MM-dd HH:mm:ss")
            : formatDate(this.value, "yyyy-MM-dd HH:mm");
    }
    toTime() {
        return this.value.getTime();
    }
    toTimeSec() {
        return this.value.getTime() / 1000;
    }
    year() {
        return getYear(this.value);
    }
    options;
    value;
    /**
     * Creates DateTime object with the same options.
     * @param date - Date.
     * @returns DateTime object.
     */
    create(date) {
        return new DateTime(date, this.options);
    }
}
/**
 * Creates date-fns duration.
 * @param amount - Amount.
 * @param unit - Unit.
 * @returns Duration.
 */
function getDuration(amount, unit) {
    const result = {};
    switch (unit) {
        case TimeUnit.minute:
        case TimeUnit.minutes: {
            result.minutes = amount;
            break;
        }
        case TimeUnit.hour:
        case TimeUnit.hours: {
            result.hours = amount;
            break;
        }
        case TimeUnit.day:
        case TimeUnit.days: {
            result.days = amount;
            break;
        }
        case TimeUnit.week:
        case TimeUnit.weeks: {
            result.weeks = amount;
            break;
        }
        case TimeUnit.month:
        case TimeUnit.months: {
            result.months = amount;
            break;
        }
        case TimeUnit.year:
        case TimeUnit.years: {
            result.years = amount;
        }
    }
    return result;
}
//# sourceMappingURL=DateTime.js.map