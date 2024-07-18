import * as testUtils from "@/test-utils";
import type { NumStr, datetime } from "@";
import { TimeUnit, dateFnsWrapper as dateFns } from "@";
import { enUS, ru } from "date-fns/locale";
import type { PartialOptions } from "@/facade-implementations/datetime/date-fns-wrapper/core";

const monday: 0 | 1 = 1;

const sunday: 0 | 1 = 0;

testUtils.installFakeTimer();

function d(
  date: Date | datetime.DateTime | NumStr = "1950-06-15 14:30:30",
  options?: PartialOptions
): datetime.DateTime {
  return dateFns(options).create(date);
}

test.each([
  { unit: TimeUnit.minute },
  { unit: TimeUnit.hour },
  { unit: TimeUnit.day },
  { unit: TimeUnit.week },
  { unit: TimeUnit.month },
  { unit: TimeUnit.year }
])("DateTime.add: 0", ({ unit }) => {
  const d1 = d();

  const d2 = d1.add(0, unit);

  expect(d2).toBeSameAs(d1);
});

test.each([
  { expected: "1950-06-15 14:31:30", unit: TimeUnit.minute },
  { expected: "1950-06-15 15:30:30", unit: TimeUnit.hour },
  { expected: "1950-06-16 14:30:30", unit: TimeUnit.day },
  { expected: "1950-06-22 14:30:30", unit: TimeUnit.week },
  { expected: "1950-07-15 14:30:30", unit: TimeUnit.month },
  { expected: "1951-06-15 14:30:30", unit: TimeUnit.year }
])("DateTime.add: 1", ({ expected, unit }) => {
  const d1 = d();

  const d2 = d1.add(1, unit);

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe(expected);
});

test.each([
  { expected: "1950-06-15 14:32:30", unit: TimeUnit.minute },
  { expected: "1950-06-15 16:30:30", unit: TimeUnit.hour },
  { expected: "1950-06-17 14:30:30", unit: TimeUnit.day },
  { expected: "1950-06-29 14:30:30", unit: TimeUnit.week },
  { expected: "1950-08-15 14:30:30", unit: TimeUnit.month },
  { expected: "1952-06-15 14:30:30", unit: TimeUnit.year }
])("DateTime.add: 2", ({ expected, unit }) => {
  const d1 = d();

  const d2 = d1.add(2, unit);

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe(expected);
});

test.each([
  { date: "1950-06-01 14:30", expected: 1 },
  { date: "1950-06-15 14:30", expected: 15 },
  { date: "1950-06-30 14:30", expected: 30 }
])("DateTime.dayOfMonth", ({ date, expected }) => {
  expect(d(date).dayOfMonth()).toBe(expected);
});

test.each([
  { date: "1950-06-11 14:30", expected: 0, firstDayOfWeek: 0 as const },
  { date: "1950-06-12 14:30", expected: 1, firstDayOfWeek: 1 as const },
  { date: "1950-06-17 14:30", expected: 6, firstDayOfWeek: 1 as const }
])("DateTime.dayOfWeek", ({ date, expected, firstDayOfWeek }) => {
  expect(d(date, { firstDayOfWeek }).dayOfWeek()).toBe(expected);
});

test("DateTime.differenceInDays", () => {
  expect(
    d("1950-06-15 14:30:30").differenceInDays(d("1950-06-14 10:00:00"))
  ).toBe(1);
});

test("DateTime.differenceInHours", () => {
  expect(
    d("1950-06-15 14:30:30").differenceInHours(d("1950-06-15 13:00:00"))
  ).toBe(1);
});

test("DateTime.differenceInMinutes", () => {
  expect(
    d("1950-06-15 14:30:30").differenceInMinutes(d("1950-06-15 14:29:00"))
  ).toBe(1);
});

test("DateTime.differenceInMonths", () => {
  expect(
    d("1950-06-15 14:30:30").differenceInMonths(d("1950-05-01 10:00:00"))
  ).toBe(1);
});

test("DateTime.differenceInYears", () => {
  expect(
    d("1950-06-15 14:30:30").differenceInYears(d("1949-01-01 10:00:00"))
  ).toBe(1);
});

test.each([
  { expected: "15 Jun 1950", format: "d MMM yyyy" },
  { expected: "02:30 PM", format: "HHHH:mm A" },
  { expected: "2:30 PM", format: "HHH:mm A" },
  { expected: "02:30 PM", format: "hh:mm a" },
  { expected: "2:30 PM", format: "h:mm a" },
  { expected: "14:30", format: "HH:mm" },
  { expected: "14:30", format: "H:mm" }
])("DateTime.format: English", ({ expected, format }) => {
  expect(d(undefined, { locale: enUS, pm: true }).format(format)).toBe(
    expected
  );
});

test.each([
  { expected: "15 июн. 1950", format: "d MMM yyyy" },
  { expected: "14:30", format: "HHHH:mm A" },
  { expected: "14:30", format: "HHH:mm A" },
  { expected: "02:30 ПП", format: "hh:mm a" },
  { expected: "2:30 ПП", format: "h:mm a" },
  { expected: "14:30", format: "HH:mm" },
  { expected: "14:30", format: "H:mm" }
])("DateTime.format: Russian", ({ expected, format }) => {
  expect(d(undefined, { locale: ru, pm: false }).format(format)).toBe(expected);
});

test.each([
  { date: "1950-06-15 00:30", expected: 0 },
  { date: "1950-06-15 12:30", expected: 12 },
  { date: "1950-06-15 23:30", expected: 23 }
])("DateTime.hours", ({ date, expected }) => {
  expect(d(date).hours()).toBe(expected);
});

test.each([
  { date: "1950-06-15 14:30", expected: true },
  { date: "1950-06-15 14:31", expected: true },
  { date: "1950-06-15 15:30", expected: true },
  { date: "1950-06-16 14:30", expected: false },
  { date: "1950-07-15 14:30", expected: false },
  { date: "1951-06-15 14:30", expected: false }
])("DateTime.isSameDay", ({ date, expected }) => {
  expect(d().isSameDay(d(date))).toBe(expected);
});

test.each([
  { date: "1950-06-15 14:30", expected: true },
  { date: "1950-06-15 14:31", expected: true },
  { date: "1950-06-15 15:30", expected: false },
  { date: "1950-06-16 14:30", expected: false },
  { date: "1950-07-15 14:30", expected: false },
  { date: "1951-06-15 14:30", expected: false }
])("DateTime.isSameHour", ({ date, expected }) => {
  expect(d().isSameHour(d(date))).toBe(expected);
});

test.each([
  { date: "1950-06-15 14:30", expected: true },
  { date: "1950-06-15 14:31", expected: false },
  { date: "1950-06-15 15:30", expected: false },
  { date: "1950-06-16 14:30", expected: false },
  { date: "1950-07-15 14:30", expected: false },
  { date: "1951-06-15 14:30", expected: false }
])("DateTime.isSameMinute", ({ date, expected }) => {
  expect(d().isSameMinute(d(date))).toBe(expected);
});

test.each([
  { date: "1950-06-15 14:30", expected: true },
  { date: "1950-06-15 14:31", expected: true },
  { date: "1950-06-15 15:30", expected: true },
  { date: "1950-06-16 14:30", expected: true },
  { date: "1950-07-15 14:30", expected: false },
  { date: "1951-06-15 14:30", expected: false }
])("DateTime.isSameMonth", ({ date, expected }) => {
  expect(d().isSameMonth(d(date))).toBe(expected);
});

test.each([
  { date: "1950-06-15 14:30", expected: true },
  { date: "1950-06-15 14:31", expected: true },
  { date: "1950-06-15 15:30", expected: true },
  { date: "1950-06-16 14:30", expected: true },
  { date: "1950-07-15 14:30", expected: true },
  { date: "1951-06-15 14:30", expected: false }
])("DateTime.isSameYear", ({ date, expected }) => {
  expect(d().isSameYear(d(date))).toBe(expected);
});

test.each([
  { date: "1950-01-01 00:00:00", expected: true },
  { date: "1950-06-01 00:00:00", expected: true },
  { date: "1950-06-15 00:00:00", expected: true },
  { date: "1950-06-15 01:00:00", expected: false },
  { date: "1950-06-15 01:01:00", expected: false },
  { date: "1950-06-15 01:01:01", expected: false }
])("DateTime.isStartOfDay", ({ date, expected }) => {
  expect(d(date).isStartOfDay()).toBe(expected);
});

test.each([
  { date: "1950-01-01 00:00:00", expected: true },
  { date: "1950-06-01 00:00:00", expected: true },
  { date: "1950-06-15 00:00:00", expected: true },
  { date: "1950-06-15 01:00:00", expected: true },
  { date: "1950-06-15 01:01:00", expected: false },
  { date: "1950-06-15 01:01:01", expected: false }
])("DateTime.isStartOfHour", ({ date, expected }) => {
  expect(d(date).isStartOfHour()).toBe(expected);
});

test.each([
  { date: "1950-01-01 00:00:00", expected: true },
  { date: "1950-06-01 00:00:00", expected: true },
  { date: "1950-06-15 00:00:00", expected: true },
  { date: "1950-06-15 01:00:00", expected: true },
  { date: "1950-06-15 01:01:00", expected: true },
  { date: "1950-06-15 01:01:01", expected: false }
])("DateTime.isStartOfMinute", ({ date, expected }) => {
  expect(d(date).isStartOfMinute()).toBe(expected);
});

test.each([
  { date: "1950-01-01 00:00:00", expected: true },
  { date: "1950-06-01 00:00:00", expected: true },
  { date: "1950-06-15 00:00:00", expected: false },
  { date: "1950-06-15 01:00:00", expected: false },
  { date: "1950-06-15 01:01:00", expected: false },
  { date: "1950-06-15 01:01:01", expected: false }
])("DateTime.isStartOfMonth", ({ date, expected }) => {
  expect(d(date).isStartOfMonth()).toBe(expected);
});

test.each([
  { date: "2023-08-20", expected: true, firstDayOfWeek: sunday },
  { date: "2023-08-21", expected: false, firstDayOfWeek: sunday },
  { date: "2023-08-22", expected: false, firstDayOfWeek: sunday },
  { date: "2023-08-20", expected: false, firstDayOfWeek: monday },
  { date: "2023-08-21", expected: true, firstDayOfWeek: monday },
  { date: "2023-08-22", expected: false, firstDayOfWeek: monday }
])("DateTime.isStartOfWeek", ({ date, expected, firstDayOfWeek }) => {
  expect(d(date).isStartOfWeek(firstDayOfWeek)).toBe(expected);
});

test.each([
  { date: "2023-08-20", expected: true, firstDayOfWeek: sunday },
  { date: "2023-08-21", expected: false, firstDayOfWeek: sunday },
  { date: "2023-08-22", expected: false, firstDayOfWeek: sunday },
  { date: "2023-08-20", expected: false, firstDayOfWeek: monday },
  { date: "2023-08-21", expected: true, firstDayOfWeek: monday },
  { date: "2023-08-22", expected: false, firstDayOfWeek: monday }
])("DateTime.isStartOfWeekLocale", ({ date, expected, firstDayOfWeek }) => {
  expect(d(date, { firstDayOfWeek }).isStartOfWeekLocale()).toBe(expected);
});

test.each([
  { date: "1950-01-01 00:00:00", expected: true },
  { date: "1950-06-01 00:00:00", expected: false },
  { date: "1950-06-15 00:00:00", expected: false },
  { date: "1950-06-15 01:00:00", expected: false },
  { date: "1950-06-15 01:01:00", expected: false },
  { date: "1950-06-15 01:01:01", expected: false }
])("DateTime.isStartOfYear", ({ date, expected }) => {
  expect(d(date).isStartOfYear()).toBe(expected);
});

test.each([
  { date: "1950-06-15 14:00", expected: 0 },
  { date: "1950-06-15 14:30", expected: 30 },
  { date: "1950-06-15 14:59", expected: 59 }
])("DateTime.minutes", ({ date, expected }) => {
  expect(d(date).minutes()).toBe(expected);
});

test.each([
  { date: "1950-01-15 14:30", expected: 0 },
  { date: "1950-06-15 14:30", expected: 5 },
  { date: "1950-12-15 14:30", expected: 11 }
])("DateTime.month", ({ date, expected }) => {
  expect(d(date).month()).toBe(expected);
});

test.each([
  { day: 1, expected: "1950-06-01 14:30:30" },
  { day: 15, expected: "1950-06-15 14:30:30" },
  { day: 30, expected: "1950-06-30 14:30:30" }
])("DateTime.setDayOfMonth", ({ day, expected }) => {
  const d1 = d();

  const d2 = d1.setDayOfMonth(day);

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe(expected);
});

test.each([
  { day: 0, expected: "1950-06-11 14:30:30" },
  { day: 1, expected: "1950-06-12 14:30:30" },
  { day: 6, expected: "1950-06-17 14:30:30" }
])("DateTime.setDayOfWeek: 0", ({ day, expected }) => {
  const d1 = d();

  const d2 = d1.setDayOfWeek(day, 0);

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe(expected);
});

test.each([
  { day: 0, expected: "1950-06-18 14:30:30" },
  { day: 1, expected: "1950-06-12 14:30:30" },
  { day: 6, expected: "1950-06-17 14:30:30" }
])("DateTime.setDayOfWeek: 1", ({ day, expected }) => {
  const d1 = d();

  const d2 = d1.setDayOfWeek(day, 1);

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe(expected);
});

test.each([
  { day: 0, expected: "1950-06-11 14:30:30" },
  { day: 1, expected: "1950-06-12 14:30:30" },
  { day: 6, expected: "1950-06-17 14:30:30" }
])("DateTime.setDayOfWeekLocale", ({ day, expected }) => {
  const d1 = d(undefined, { firstDayOfWeek: 0 });

  const d2 = d1.setDayOfWeekLocale(day);

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe(expected);
});

test.each([
  { day: 0, expected: "1950-06-18 14:30:30" },
  { day: 1, expected: "1950-06-12 14:30:30" },
  { day: 6, expected: "1950-06-17 14:30:30" }
])("DateTime.setDayOfWeekLocale", ({ day, expected }) => {
  const d1 = d(undefined, { firstDayOfWeek: 1 });

  const d2 = d1.setDayOfWeekLocale(day);

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe(expected);
});

test.each([
  { expected: "1950-06-15 00:30:30", hours: 0 },
  { expected: "1950-06-15 12:30:30", hours: 12 },
  { expected: "1950-06-15 23:30:30", hours: 23 }
])("DateTime.setHours", ({ expected, hours }) => {
  const d1 = d();

  const d2 = d1.setHours(hours);

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe(expected);
});

test.each([
  { expected: "1950-06-15 14:00:30", minutes: 0 },
  { expected: "1950-06-15 14:30:30", minutes: 30 },
  { expected: "1950-06-15 14:59:30", minutes: 59 }
])("DateTime.setMinutes", ({ expected, minutes }) => {
  const d1 = d();

  const d2 = d1.setMinutes(minutes);

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe(expected);
});

test.each([
  { expected: "1950-01-15 14:30:30", month: 0 },
  { expected: "1950-06-15 14:30:30", month: 5 },
  { expected: "1950-12-15 14:30:30", month: 11 }
])("DateTime.setMonth", ({ expected, month }) => {
  const d1 = d();

  const d2 = d1.setMonth(month);

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe(expected);
});

test("DateTime.setStartOfDay", () => {
  const d1 = d();

  const d2 = d1.setStartOfDay();

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe("1950-06-15 00:00");
});

test("DateTime.setStartOfHour", () => {
  const d1 = d();

  const d2 = d1.setStartOfHour();

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe("1950-06-15 14:00");
});

test("DateTime.setStartOfMinute", () => {
  const d1 = d();

  const d2 = d1.setStartOfMinute();

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe("1950-06-15 14:30");
});

test("DateTime.setStartOfMonth", () => {
  const d1 = d();

  const d2 = d1.setStartOfMonth();

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe("1950-06-01 00:00");
});

test("DateTime.setStartOfNextDay", () => {
  const d1 = d();

  const d2 = d1.setStartOfNextDay();

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe("1950-06-16 00:00");
});

test("DateTime.setStartOfNextHour", () => {
  const d1 = d();

  const d2 = d1.setStartOfNextHour();

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe("1950-06-15 15:00");
});

test("DateTime.setStartOfNextMinute", () => {
  const d1 = d();

  const d2 = d1.setStartOfNextMinute();

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe("1950-06-15 14:31");
});

test("DateTime.setStartOfNextMonth", () => {
  const d1 = d();

  const d2 = d1.setStartOfNextMonth();

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe("1950-07-01 00:00");
});

test.each([
  { expected: "1950-06-18 00:00", firstDayOfWeek: 0 as const },
  { expected: "1950-06-19 00:00", firstDayOfWeek: 1 as const }
])("DateTime.setStartOfNextWeek", ({ expected, firstDayOfWeek }) => {
  expect(d().setStartOfNextWeek(firstDayOfWeek)).datetimeToBe(expected);
});

test.each([
  { expected: "1950-06-18 00:00", firstDayOfWeek: 0 as const },
  { expected: "1950-06-19 00:00", firstDayOfWeek: 1 as const }
])("DateTime.setStartOfNextWeekLocale", ({ expected, firstDayOfWeek }) => {
  expect(
    d(undefined, { firstDayOfWeek }).setStartOfNextWeekLocale()
  ).datetimeToBe(expected);
});

test("DateTime.setStartOfNextYear", () => {
  const d1 = d();

  const d2 = d1.setStartOfNextYear();

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe("1951-01-01 00:00");
});

test.each([
  { expected: "1950-06-11 00:00", firstDayOfWeek: 0 as const },
  { expected: "1950-06-12 00:00", firstDayOfWeek: 1 as const }
])("DateTime.setStartOfWeek", ({ expected, firstDayOfWeek }) => {
  expect(d().setStartOfWeek(firstDayOfWeek)).datetimeToBe(expected);
});

test.each([
  { expected: "1950-06-11 00:00", firstDayOfWeek: 0 as const },
  { expected: "1950-06-12 00:00", firstDayOfWeek: 1 as const }
])("DateTime.setStartOfWeekLocale", ({ expected, firstDayOfWeek }) => {
  expect(d(undefined, { firstDayOfWeek }).setStartOfWeekLocale()).datetimeToBe(
    expected
  );
});

test("DateTime.setStartOfYear", () => {
  const d1 = d();

  const d2 = d1.setStartOfYear();

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe("1950-01-01 00:00");
});

test.each([
  { expected: "1951-06-15 14:30:30", year: 1951 },
  { expected: "1952-06-15 14:30:30", year: 1952 },
  { expected: "1953-06-15 14:30:30", year: 1953 }
])("DateTime.setYear", ({ expected, year }) => {
  const d1 = d();

  const d2 = d1.setYear(year);

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe(expected);
});

test.each([
  { unit: TimeUnit.minute },
  { unit: TimeUnit.hour },
  { unit: TimeUnit.day },
  { unit: TimeUnit.week },
  { unit: TimeUnit.month },
  { unit: TimeUnit.year }
])("DateTime.sub: 0", ({ unit }) => {
  const d1 = d();

  const d2 = d1.sub(0, unit);

  expect(d2).toBeSameAs(d1);
});

test.each([
  { expected: "1950-06-15 14:29:30", unit: TimeUnit.minute },
  { expected: "1950-06-15 13:30:30", unit: TimeUnit.hour },
  { expected: "1950-06-14 14:30:30", unit: TimeUnit.day },
  { expected: "1950-06-08 14:30:30", unit: TimeUnit.week },
  { expected: "1950-05-15 14:30:30", unit: TimeUnit.month },
  { expected: "1949-06-15 14:30:30", unit: TimeUnit.year }
])("DateTime.sub: 1", ({ expected, unit }) => {
  const d1 = d();

  const d2 = d1.sub(1, unit);

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe(expected);
});

test.each([
  { expected: "1950-06-15 14:28:30", unit: TimeUnit.minutes },
  { expected: "1950-06-15 12:30:30", unit: TimeUnit.hours },
  { expected: "1950-06-13 14:30:30", unit: TimeUnit.days },
  { expected: "1950-06-01 14:30:30", unit: TimeUnit.weeks },
  { expected: "1950-04-15 14:30:30", unit: TimeUnit.months },
  { expected: "1948-06-15 14:30:30", unit: TimeUnit.years }
])("DateTime.sub: 2", ({ expected, unit }) => {
  const d1 = d();

  const d2 = d1.sub(2, unit);

  expect(d1).datetimeToBe("1950-06-15 14:30:30");
  expect(d2).datetimeToBe(expected);
});

test.each(["1950-06-15 14:30", "1950-06-15 14:30:30"])(
  "DateTime.toDate",
  date => {
    expect(d(date).toDate()).toStrictEqual(new Date(date));
  }
);

test.each([
  { date: "1950-06-15 14:30", pm: true },
  { date: "1950-06-15 14:30:30", pm: false }
])("DateTime.toString", ({ date, pm }) => {
  expect(d(date, { pm }).toString()).toBe(date);
});

test("DateTime.toTime", () => {
  const date = new Date();

  expect(d(date).toTime()).toBe(date.getTime());
});

test("DateTime.toTimeSec", () => {
  const date = new Date();

  expect(d(date).toTimeSec()).toBe(date.getTime() / 1000);
});

test.each([
  { date: "1950-06-15 14:30", expected: 1950 },
  { date: "1951-06-15 14:30", expected: 1951 },
  { date: "1952-06-15 14:30", expected: 1952 }
])("DateTime.year", ({ date, expected }) => {
  expect(d(date).year()).toBe(expected);
});

test.each([
  { date: d(), expected: "1950-06-15 14:30:30" },
  { date: d().toDate(), expected: "1950-06-15 14:30:30" },
  { date: d().toString(), expected: "1950-06-15 14:30:30" },
  { date: d().toTime(), expected: "1950-06-15 14:30:30" },
  {
    date: "invalid",
    expected: new Error("Unknown date format: invalid"),
    expectedToThrow: true
  }
])("create", ({ date, expected, expectedToThrow }) => {
  expect(() => dateFns().create(date).toString()).executionResultToBe(
    expected,
    expectedToThrow
  );
});

test("now", () => {
  expect(dateFns().now()).toBe(dateFns().create().toString());
});

test("time", () => {
  expect(dateFns().time()).toBe(Date.now());
});

test("timeSec", () => {
  expect(dateFns().timeSec()).toBe(Date.now() / 1000);
});

test.each([
  { date: "1950-06-15 02:30:30 AM", expected: true },
  { date: "1950-06-15 02:30:30 PM", expected: true },
  { date: "1950-06-15 2:30:30 AM", expected: true },
  { date: "1950-06-15 2:30:30 PM", expected: true },
  { date: "1950-06-15 14:30:30", expected: true },
  { date: "1950-06-15 02:30 AM", expected: true },
  { date: "1950-06-15 02:30 PM", expected: true },
  { date: "1950-06-15 2:30 AM", expected: true },
  { date: "1950-06-15 2:30 PM", expected: true },
  { date: "1950-06-15 14:30", expected: true },
  { date: "1950-06-15", expected: true },
  { date: "1", expected: false },
  { date: "", expected: false }
])("validate", ({ date, expected }) => {
  expect(dateFns().validate(date)).toBe(expected);
});
