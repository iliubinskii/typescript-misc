import * as testUtils from "@/test-utils";
import { a, num, wait } from "@";

testUtils.installFakeTimer();

test("clock", () => {
  expect(testUtils.clock.countTimers()).toBe(0);
});

test("run", async () => {
  expect.hasAssertions();
  await testUtils.run(async () => {
    await expect(async () => {
      await wait(1000);
    }).executionTimeToBe(1000);
  });
});

test.each([
  { max: 1000, min: 0, now: (): number => Date.now() },
  {
    max: Number.MAX_VALUE,
    min: 24 * 3600 * 1000,
    now: (): number => {
      testUtils.setRandomSystemTime();

      return Date.now();
    }
  }
])("setRandomSystemTime", ({ max, min, now }) => {
  expect(
    num.rootMeanSquareDeviation(...a.fromRange(1, 100).map(now))
  ).toBeWithin(min, max);
});
