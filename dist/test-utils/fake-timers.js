"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRandomSystemTime = exports.run = exports.installFakeTimer = exports.clock = void 0;
const tslib_1 = require("tslib");
const _ = tslib_1.__importStar(require("lodash-commonjs-es"));
const fakeTimers = tslib_1.__importStar(require("@sinonjs/fake-timers"));
const functions_1 = require("../functions");
exports.clock = (0, functions_1.onDemand)(() => {
    functions_1.assert.not.empty(_clock, "Fake timer is not installed");
    return _clock;
});
/**
 * Installs fake timer.
 *
 * @param options - Options.
 */
function installFakeTimer(options = {}) {
    functions_1.assert.empty(_clock, "Fake timer is already installed");
    _clock = fakeTimers.install({
        advanceTimeDelta: 10,
        loopLimit: 1000,
        now: Date.now(),
        shouldAdvanceTime: false,
        toFake: [],
        ...options
    });
}
exports.installFakeTimer = installFakeTimer;
/**
 * Executes promise or async function.
 *
 * @param mixed - Promise or async function.
 * @returns The result of callback execution.
 */
async function run(mixed) {
    const result = await Promise.all([(0, functions_1.evaluate)(mixed), exports.clock.runAllAsync()]);
    return result[0];
}
exports.run = run;
/**
 * Sets random system time.
 */
function setRandomSystemTime() {
    exports.clock.setSystemTime((0, functions_1.evaluate)(() => {
        const date = new Date();
        date.setFullYear(_.random(2000, 2100));
        date.setMonth(functions_1.a.random([0, 11, _.random(1, 10)]));
        date.setDate(functions_1.a.random([1, 31, _.random(2, 30)]));
        date.setHours(functions_1.a.random([0, 23, _.random(1, 22)]));
        date.setMinutes(functions_1.a.random([0, 59, _.random(1, 58)]));
        date.setSeconds(functions_1.a.random([0, 59, _.random(1, 58)]));
        return date;
    }));
}
exports.setRandomSystemTime = setRandomSystemTime;
let _clock;
//# sourceMappingURL=fake-timers.js.map