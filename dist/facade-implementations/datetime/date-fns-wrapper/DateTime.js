"use strict";
/* eslint-disable misc/max-identifier-blocks -- Ok */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTime = void 0;
const date_fns_1 = require("date-fns");
const facades_1 = require("../../../facades");
const core_1 = require("./core");
const functions_1 = require("../../../functions");
class DateTime {
    /**
     * Creates class instance.
     *
     * @param date - Date.
     * @param options - Options.
     */
    constructor(date, options) {
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (date instanceof Date)
            this.value = date;
        else if (date instanceof DateTime)
            this.value = date.value;
        else if (functions_1.is.number(date))
            this.value = new Date(date);
        else if (functions_1.is.string(date))
            this.value = parseString(date);
        else
            this.value = new Date();
        this.options = options;
        function parseString(str) {
            const now = Date.now();
            for (const formatString of core_1.formatStrings) {
                const result = (0, date_fns_1.parse)(str, formatString, now);
                if ((0, date_fns_1.isValid)(result))
                    return result;
            }
            throw new Error(`Unknown date format: ${str}`);
        }
    }
    add(amount, unit) {
        return amount === 0
            ? this
            : this.create((0, date_fns_1.add)(this.value, getDuration(amount, unit)));
    }
    dayOfMonth() {
        return (0, date_fns_1.getDate)(this.value);
    }
    dayOfWeek() {
        return (0, date_fns_1.getDay)(this.value);
    }
    differenceInDays(date) {
        return (0, date_fns_1.differenceInDays)(this.value, date.toDate());
    }
    differenceInHours(date) {
        return (0, date_fns_1.differenceInHours)(this.value, date.toDate());
    }
    differenceInMinutes(date) {
        return (0, date_fns_1.differenceInMinutes)(this.value, date.toDate());
    }
    differenceInMonths(date) {
        return (0, date_fns_1.differenceInMonths)(this.value, date.toDate());
    }
    differenceInYears(date) {
        return (0, date_fns_1.differenceInYears)(this.value, date.toDate());
    }
    format(format) {
        format = this.options.pm
            ? format
                .replace(/H{4}/gu, "hh")
                .replace(/H{3}/gu, "h")
                .replace(/A/gu, "a")
                .trim()
            : format
                .replace(/H{4}/gu, "HH")
                .replace(/H{3}/gu, "H")
                .replace(/A/gu, "")
                .trim();
        return (0, date_fns_1.format)(this.value, format, { locale: this.options.locale });
    }
    hours() {
        return (0, date_fns_1.getHours)(this.value);
    }
    isSameDay(date) {
        return (0, date_fns_1.isSameDay)(this.value, date.toDate());
    }
    isSameHour(date) {
        return (0, date_fns_1.isSameHour)(this.value, date.toDate());
    }
    isSameMinute(date) {
        return (0, date_fns_1.isSameMinute)(this.value, date.toDate());
    }
    isSameMonth(date) {
        return (0, date_fns_1.isSameMonth)(this.value, date.toDate());
    }
    isSameYear(date) {
        return (0, date_fns_1.isSameYear)(this.value, date.toDate());
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
        return (0, date_fns_1.getMinutes)(this.value);
    }
    month() {
        return (0, date_fns_1.getMonth)(this.value);
    }
    setDayOfMonth(day) {
        return this.create((0, date_fns_1.setDate)(this.value, day));
    }
    setDayOfWeek(day, weekStartsOn) {
        return this.create((0, date_fns_1.setDay)(this.value, day, { weekStartsOn }));
    }
    setDayOfWeekLocale(day) {
        const weekStartsOn = this.options.firstDayOfWeek;
        return this.create((0, date_fns_1.setDay)(this.value, day, { weekStartsOn }));
    }
    setHours(hours) {
        return this.create((0, date_fns_1.setHours)(this.value, hours));
    }
    setMinutes(minutes) {
        return this.create((0, date_fns_1.setMinutes)(this.value, minutes));
    }
    setMonth(month) {
        return this.create((0, date_fns_1.setMonth)(this.value, month));
    }
    setStartOfDay() {
        return this.create((0, date_fns_1.startOfDay)(this.value));
    }
    setStartOfHour() {
        return this.create((0, date_fns_1.startOfHour)(this.value));
    }
    setStartOfMinute() {
        return this.create((0, date_fns_1.startOfMinute)(this.value));
    }
    setStartOfMonth() {
        return this.create((0, date_fns_1.startOfMonth)(this.value));
    }
    setStartOfNextDay() {
        return this.create((0, date_fns_1.startOfDay)(this.value)).add(1, facades_1.TimeUnit.day);
    }
    setStartOfNextHour() {
        return this.create((0, date_fns_1.startOfHour)(this.value)).add(1, facades_1.TimeUnit.hour);
    }
    setStartOfNextMinute() {
        return this.create((0, date_fns_1.startOfMinute)(this.value)).add(1, facades_1.TimeUnit.minute);
    }
    setStartOfNextMonth() {
        return this.create((0, date_fns_1.startOfMonth)(this.value)).add(1, facades_1.TimeUnit.month);
    }
    setStartOfNextWeek(weekStartsOn) {
        return this.create((0, date_fns_1.startOfWeek)(this.value, { weekStartsOn })).add(1, facades_1.TimeUnit.week);
    }
    setStartOfNextWeekLocale() {
        const weekStartsOn = this.options.firstDayOfWeek;
        return this.create((0, date_fns_1.startOfWeek)(this.value, { weekStartsOn })).add(1, facades_1.TimeUnit.week);
    }
    setStartOfNextYear() {
        return this.create((0, date_fns_1.startOfYear)(this.value)).add(1, facades_1.TimeUnit.year);
    }
    setStartOfWeek(weekStartsOn) {
        return this.create((0, date_fns_1.startOfWeek)(this.value, { weekStartsOn }));
    }
    setStartOfWeekLocale() {
        const weekStartsOn = this.options.firstDayOfWeek;
        return this.create((0, date_fns_1.startOfWeek)(this.value, { weekStartsOn }));
    }
    setStartOfYear() {
        return this.create((0, date_fns_1.startOfYear)(this.value));
    }
    setYear(year) {
        return this.create((0, date_fns_1.setYear)(this.value, year));
    }
    sub(amount, unit) {
        return amount === 0
            ? this
            : this.create((0, date_fns_1.sub)(this.value, getDuration(amount, unit)));
    }
    toDate() {
        return this.value;
    }
    toString() {
        return (0, date_fns_1.getSeconds)(this.value)
            ? (0, date_fns_1.format)(this.value, "yyyy-MM-dd HH:mm:ss")
            : (0, date_fns_1.format)(this.value, "yyyy-MM-dd HH:mm");
    }
    toTime() {
        return this.value.getTime();
    }
    toTimeSec() {
        return this.value.getTime() / 1000;
    }
    year() {
        return (0, date_fns_1.getYear)(this.value);
    }
    /**
     * Creates DateTime object with the same options.
     *
     * @param date - Date.
     * @returns DateTime object.
     */
    create(date) {
        return new DateTime(date, this.options);
    }
}
exports.DateTime = DateTime;
/**
 * Creates date-fns duration.
 *
 * @param amount - Amount.
 * @param unit - Unit.
 * @returns Duration.
 */
function getDuration(amount, unit) {
    const result = {};
    switch (unit) {
        case facades_1.TimeUnit.minute:
        case facades_1.TimeUnit.minutes:
            result.minutes = amount;
            break;
        case facades_1.TimeUnit.hour:
        case facades_1.TimeUnit.hours:
            result.hours = amount;
            break;
        case facades_1.TimeUnit.day:
        case facades_1.TimeUnit.days:
            result.days = amount;
            break;
        case facades_1.TimeUnit.week:
        case facades_1.TimeUnit.weeks:
            result.weeks = amount;
            break;
        case facades_1.TimeUnit.month:
        case facades_1.TimeUnit.months:
            result.months = amount;
            break;
        case facades_1.TimeUnit.year:
        case facades_1.TimeUnit.years:
            result.years = amount;
    }
    return result;
}
//# sourceMappingURL=DateTime.js.map