import type { FirstDayOfWeek, Options } from "./core";
import type { NumStr } from "../../../types";
import { TimeUnit } from "../../../facades";
import type { datetime } from "../../../facades";
export declare class DateTime implements datetime.DateTime {
    /**
     * Creates class instance.
     *
     * @param date - Date.
     * @param options - Options.
     */
    constructor(date: Date | datetime.DateTime | NumStr | undefined, options: Options);
    add(amount: number, unit: TimeUnit): datetime.DateTime;
    dayOfMonth(): number;
    dayOfWeek(): number;
    differenceInDays(date: datetime.DateTime): number;
    differenceInHours(date: datetime.DateTime): number;
    differenceInMinutes(date: datetime.DateTime): number;
    differenceInMonths(date: datetime.DateTime): number;
    differenceInYears(date: datetime.DateTime): number;
    format(format: string): string;
    hours(): number;
    isSameDay(date: datetime.DateTime): boolean;
    isSameHour(date: datetime.DateTime): boolean;
    isSameMinute(date: datetime.DateTime): boolean;
    isSameMonth(date: datetime.DateTime): boolean;
    isSameYear(date: datetime.DateTime): boolean;
    isStartOfDay(): boolean;
    isStartOfHour(): boolean;
    isStartOfMinute(): boolean;
    isStartOfMonth(): boolean;
    isStartOfWeek(weekStartsOn: 0 | 1): boolean;
    isStartOfWeekLocale(): boolean;
    isStartOfYear(): boolean;
    minutes(): number;
    month(): number;
    setDayOfMonth(day: number): datetime.DateTime;
    setDayOfWeek(day: number, weekStartsOn: FirstDayOfWeek): datetime.DateTime;
    setDayOfWeekLocale(day: number): datetime.DateTime;
    setHours(hours: number): datetime.DateTime;
    setMinutes(minutes: number): datetime.DateTime;
    setMonth(month: number): datetime.DateTime;
    setStartOfDay(): datetime.DateTime;
    setStartOfHour(): datetime.DateTime;
    setStartOfMinute(): datetime.DateTime;
    setStartOfMonth(): datetime.DateTime;
    setStartOfNextDay(): datetime.DateTime;
    setStartOfNextHour(): datetime.DateTime;
    setStartOfNextMinute(): datetime.DateTime;
    setStartOfNextMonth(): datetime.DateTime;
    setStartOfNextWeek(weekStartsOn: FirstDayOfWeek): datetime.DateTime;
    setStartOfNextWeekLocale(): datetime.DateTime;
    setStartOfNextYear(): datetime.DateTime;
    setStartOfWeek(weekStartsOn: FirstDayOfWeek): datetime.DateTime;
    setStartOfWeekLocale(): datetime.DateTime;
    setStartOfYear(): datetime.DateTime;
    setYear(year: number): datetime.DateTime;
    sub(amount: number, unit: TimeUnit): datetime.DateTime;
    toDate(): Date;
    toString(): string;
    toTime(): number;
    toTimeSec(): number;
    year(): number;
    protected readonly options: Options;
    protected readonly value: Date;
    /**
     * Creates DateTime object with the same options.
     *
     * @param date - Date.
     * @returns DateTime object.
     */
    protected create(date: Date | datetime.DateTime | NumStr | undefined): datetime.DateTime;
}
//# sourceMappingURL=DateTime.d.ts.map