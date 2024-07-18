import * as fakeTimers from "@sinonjs/fake-timers";
import type { booleanU, types } from "../types";
export declare const clock: fakeTimers.Clock;
/**
 * Installs fake timer.
 * @param options - Options.
 */
export declare function installFakeTimer(options?: Options): void;
/**
 * Executes promise or async function.
 * @param mixed - Promise or async function.
 * @returns The result of callback execution.
 */
export declare function run<T>(mixed: types.fn.Async<T>): Promise<T>;
/**
 * Sets random system time.
 */
export declare function setRandomSystemTime(): void;
export interface Options {
    readonly shouldAdvanceTime?: booleanU;
}
//# sourceMappingURL=fake-timers.d.ts.map