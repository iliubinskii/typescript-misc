import * as _ from "lodash-commonjs-es";
import * as fakeTimers from "@sinonjs/fake-timers";
import { a, assert, evaluate, onDemand } from "../functions";
import type { types } from "../types";

export const clock = onDemand((): fakeTimers.Clock => {
  assert.not.empty(_clock, "Fake timer is not installed");

  return _clock;
});

/**
 * Installs fake timer.
 *
 * @param options - Options.
 */
export function installFakeTimer(options: Options = {}): void {
  assert.empty(_clock, "Fake timer is already installed");
  _clock = fakeTimers.install({
    advanceTimeDelta: 10,
    loopLimit: 1000,
    now: Date.now(),
    shouldAdvanceTime: false,
    toFake: [],
    ...options
  });
}

/**
 * Executes promise or async function.
 *
 * @param mixed - Promise or async function.
 * @returns The result of callback execution.
 */
export async function run<T>(mixed: types.fn.Async<T>): Promise<T> {
  const result = await Promise.all([evaluate(mixed), clock.runAllAsync()]);

  return result[0];
}

/**
 * Sets random system time.
 */
export function setRandomSystemTime(): void {
  clock.setSystemTime(
    evaluate(() => {
      const date = new Date();

      date.setFullYear(_.random(2000, 2100));
      date.setMonth(a.random([0, 11, _.random(1, 10)]));
      date.setDate(a.random([1, 31, _.random(2, 30)]));
      date.setHours(a.random([0, 23, _.random(1, 22)]));
      date.setMinutes(a.random([0, 59, _.random(1, 58)]));
      date.setSeconds(a.random([0, 59, _.random(1, 58)]));

      return date;
    })
  );
}

export interface Options {
  readonly shouldAdvanceTime?: boolean;
}

let _clock: fakeTimers.Clock | undefined;
