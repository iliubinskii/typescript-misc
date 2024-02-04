/* eslint-disable misc/max-identifier-blocks -- Ok */

import type { FirstDayOfWeek, Options } from "./core";
import {
  add,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInYears,
  format as formatDate,
  getDate,
  getDay,
  getHours,
  getMinutes,
  getMonth,
  getSeconds,
  getYear,
  isSameDay,
  isSameHour,
  isSameMinute,
  isSameMonth,
  isSameYear,
  isValid,
  parse,
  setDate,
  setDay,
  setHours,
  setMinutes,
  setMonth,
  setYear,
  startOfDay,
  startOfHour,
  startOfMinute,
  startOfMonth,
  startOfWeek,
  startOfYear,
  sub
} from "date-fns";
import type { Duration } from "date-fns";
import type { NumStr } from "../../../types";
import { TimeUnit } from "../../../facades";
import type { datetime } from "../../../facades";
import { formatStrings } from "./core";
import { is } from "../../../functions";

export class DateTime implements datetime.DateTime {
  /**
   * Creates class instance.
   *
   * @param date - Date.
   * @param options - Options.
   */
  public constructor(
    date: Date | datetime.DateTime | NumStr | undefined,
    options: Options
  ) {
    if (date instanceof Date) this.value = date;
    else if (date instanceof DateTime) this.value = date.value;
    else if (is.number(date)) this.value = new Date(date);
    else if (is.string(date)) this.value = parseString(date);
    else this.value = new Date();

    this.options = options;

    function parseString(str: string): Date {
      const now = Date.now();

      for (const formatString of formatStrings) {
        const result = parse(str, formatString, now);

        if (isValid(result)) return result;
      }

      throw new Error(`Unknown date format: ${str}`);
    }
  }

  public add(amount: number, unit: TimeUnit): datetime.DateTime {
    return amount === 0
      ? this
      : this.create(add(this.value, getDuration(amount, unit)));
  }

  public dayOfMonth(): number {
    return getDate(this.value);
  }

  public dayOfWeek(): number {
    return getDay(this.value);
  }

  public differenceInDays(date: datetime.DateTime): number {
    return differenceInDays(this.value, date.toDate());
  }

  public differenceInHours(date: datetime.DateTime): number {
    return differenceInHours(this.value, date.toDate());
  }

  public differenceInMinutes(date: datetime.DateTime): number {
    return differenceInMinutes(this.value, date.toDate());
  }

  public differenceInMonths(date: datetime.DateTime): number {
    return differenceInMonths(this.value, date.toDate());
  }

  public differenceInYears(date: datetime.DateTime): number {
    return differenceInYears(this.value, date.toDate());
  }

  public format(format: string): string {
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

    return formatDate(this.value, format, { locale: this.options.locale });
  }

  public hours(): number {
    return getHours(this.value);
  }

  public isSameDay(date: datetime.DateTime): boolean {
    return isSameDay(this.value, date.toDate());
  }

  public isSameHour(date: datetime.DateTime): boolean {
    return isSameHour(this.value, date.toDate());
  }

  public isSameMinute(date: datetime.DateTime): boolean {
    return isSameMinute(this.value, date.toDate());
  }

  public isSameMonth(date: datetime.DateTime): boolean {
    return isSameMonth(this.value, date.toDate());
  }

  public isSameYear(date: datetime.DateTime): boolean {
    return isSameYear(this.value, date.toDate());
  }

  public isStartOfDay(): boolean {
    return this.setStartOfDay().toString() === this.toString();
  }

  public isStartOfHour(): boolean {
    return this.setStartOfHour().toString() === this.toString();
  }

  public isStartOfMinute(): boolean {
    return this.setStartOfMinute().toString() === this.toString();
  }

  public isStartOfMonth(): boolean {
    return this.setStartOfMonth().toString() === this.toString();
  }

  public isStartOfWeek(weekStartsOn: 0 | 1): boolean {
    return this.setStartOfWeek(weekStartsOn).toString() === this.toString();
  }

  public isStartOfWeekLocale(): boolean {
    return this.setStartOfWeekLocale().toString() === this.toString();
  }

  public isStartOfYear(): boolean {
    return this.setStartOfYear().toString() === this.toString();
  }

  public minutes(): number {
    return getMinutes(this.value);
  }

  public month(): number {
    return getMonth(this.value);
  }

  public setDayOfMonth(day: number): datetime.DateTime {
    return this.create(setDate(this.value, day));
  }

  public setDayOfWeek(
    day: number,
    weekStartsOn: FirstDayOfWeek
  ): datetime.DateTime {
    return this.create(setDay(this.value, day, { weekStartsOn }));
  }

  public setDayOfWeekLocale(day: number): datetime.DateTime {
    const weekStartsOn = this.options.firstDayOfWeek;

    return this.create(setDay(this.value, day, { weekStartsOn }));
  }

  public setHours(hours: number): datetime.DateTime {
    return this.create(setHours(this.value, hours));
  }

  public setMinutes(minutes: number): datetime.DateTime {
    return this.create(setMinutes(this.value, minutes));
  }

  public setMonth(month: number): datetime.DateTime {
    return this.create(setMonth(this.value, month));
  }

  public setStartOfDay(): datetime.DateTime {
    return this.create(startOfDay(this.value));
  }

  public setStartOfHour(): datetime.DateTime {
    return this.create(startOfHour(this.value));
  }

  public setStartOfMinute(): datetime.DateTime {
    return this.create(startOfMinute(this.value));
  }

  public setStartOfMonth(): datetime.DateTime {
    return this.create(startOfMonth(this.value));
  }

  public setStartOfNextDay(): datetime.DateTime {
    return this.create(startOfDay(this.value)).add(1, TimeUnit.day);
  }

  public setStartOfNextHour(): datetime.DateTime {
    return this.create(startOfHour(this.value)).add(1, TimeUnit.hour);
  }

  public setStartOfNextMinute(): datetime.DateTime {
    return this.create(startOfMinute(this.value)).add(1, TimeUnit.minute);
  }

  public setStartOfNextMonth(): datetime.DateTime {
    return this.create(startOfMonth(this.value)).add(1, TimeUnit.month);
  }

  public setStartOfNextWeek(weekStartsOn: FirstDayOfWeek): datetime.DateTime {
    return this.create(startOfWeek(this.value, { weekStartsOn })).add(
      1,
      TimeUnit.week
    );
  }

  public setStartOfNextWeekLocale(): datetime.DateTime {
    const weekStartsOn = this.options.firstDayOfWeek;

    return this.create(startOfWeek(this.value, { weekStartsOn })).add(
      1,
      TimeUnit.week
    );
  }

  public setStartOfNextYear(): datetime.DateTime {
    return this.create(startOfYear(this.value)).add(1, TimeUnit.year);
  }

  public setStartOfWeek(weekStartsOn: FirstDayOfWeek): datetime.DateTime {
    return this.create(startOfWeek(this.value, { weekStartsOn }));
  }

  public setStartOfWeekLocale(): datetime.DateTime {
    const weekStartsOn = this.options.firstDayOfWeek;

    return this.create(startOfWeek(this.value, { weekStartsOn }));
  }

  public setStartOfYear(): datetime.DateTime {
    return this.create(startOfYear(this.value));
  }

  public setYear(year: number): datetime.DateTime {
    return this.create(setYear(this.value, year));
  }

  public sub(amount: number, unit: TimeUnit): datetime.DateTime {
    return amount === 0
      ? this
      : this.create(sub(this.value, getDuration(amount, unit)));
  }

  public toDate(): Date {
    return this.value;
  }

  public toString(): string {
    return getSeconds(this.value)
      ? formatDate(this.value, "yyyy-MM-dd HH:mm:ss")
      : formatDate(this.value, "yyyy-MM-dd HH:mm");
  }

  public toTime(): number {
    return this.value.getTime();
  }

  public toTimeSec(): number {
    return this.value.getTime() / 1000;
  }

  public year(): number {
    return getYear(this.value);
  }

  protected readonly options: Options;

  protected readonly value: Date;

  /**
   * Creates DateTime object with the same options.
   *
   * @param date - Date.
   * @returns DateTime object.
   */
  protected create(
    date: Date | datetime.DateTime | NumStr | undefined
  ): datetime.DateTime {
    return new DateTime(date, this.options);
  }
}

/**
 * Creates date-fns duration.
 *
 * @param amount - Amount.
 * @param unit - Unit.
 * @returns Duration.
 */
function getDuration(amount: number, unit: TimeUnit): Duration {
  const result: Duration = {};

  switch (unit) {
    case TimeUnit.minute:
    case TimeUnit.minutes:
      result.minutes = amount;

      break;

    case TimeUnit.hour:
    case TimeUnit.hours:
      result.hours = amount;

      break;

    case TimeUnit.day:
    case TimeUnit.days:
      result.days = amount;

      break;

    case TimeUnit.week:
    case TimeUnit.weeks:
      result.weeks = amount;

      break;

    case TimeUnit.month:
    case TimeUnit.months:
      result.months = amount;

      break;

    case TimeUnit.year:
    case TimeUnit.years:
      result.years = amount;
  }

  return result;
}
