import type { TimeInterval, numberU, unknowns } from "@";
import {
  TimeUnit,
  evaluate,
  loremIpsumWrapper as loremIpsum,
  typedef
} from "@";

test.each([
  { expected: [true, false] },
  { expected: [true], falseWeight: 0, trueWeight: 1 },
  { expected: [false], falseWeight: 1, trueWeight: 0 }
])("boolean", ({ expected, falseWeight, trueWeight }) => {
  expect(loremIpsum.boolean(trueWeight, falseWeight)).toBeOneOf(expected);
});

test.each([
  { config: typedef<loremIpsum.PartialConfiguration>({}), expected: 2 },
  { config: { minSentences: 3 }, expected: 3 }
])("configure, getConfiguration", ({ config, expected }) => {
  loremIpsum.configure(config);
  expect(loremIpsum.getConfiguration().minSentences).toBe(expected);
});

test.each(
  evaluate(() => {
    return typedef<Cases>([
      {
        from: [0, TimeUnit.days],
        step: 1,
        to: [100, TimeUnit.days],
        unit: TimeUnit.day
      },
      {
        from: [0, TimeUnit.days],
        step: 2,
        to: [100, TimeUnit.days],
        unit: TimeUnit.days
      },
      {
        from: [0, TimeUnit.hours],
        step: 1,
        to: [100, TimeUnit.hours],
        unit: TimeUnit.hour
      },
      {
        from: [0, TimeUnit.hours],
        step: 2,
        to: [100, TimeUnit.hours],
        unit: TimeUnit.hours
      },
      {
        from: [0, TimeUnit.minutes],
        step: 1,
        to: [100, TimeUnit.minutes],
        unit: TimeUnit.minute
      },
      {
        from: [0, TimeUnit.minutes],
        step: 2,
        to: [100, TimeUnit.minutes],
        unit: TimeUnit.minutes
      },
      {
        from: [0, TimeUnit.months],
        step: 1,
        to: [100, TimeUnit.months],
        unit: TimeUnit.month
      },
      {
        from: [0, TimeUnit.months],
        step: 2,
        to: [100, TimeUnit.months],
        unit: TimeUnit.months
      },
      {
        from: [0, TimeUnit.weeks],
        step: 1,
        to: [100, TimeUnit.weeks],
        unit: TimeUnit.week
      },
      {
        from: [0, TimeUnit.weeks],
        step: 2,
        to: [100, TimeUnit.weeks],
        unit: TimeUnit.weeks
      },
      {
        from: [0, TimeUnit.years],
        step: 1,
        to: [100, TimeUnit.years],
        unit: TimeUnit.year
      },
      {
        from: [0, TimeUnit.years],
        step: 2,
        to: [100, TimeUnit.years],
        unit: TimeUnit.years
      },
      { from: "2000-01-01", to: "2001-12-31" }
    ]);

    interface Case {
      readonly from: TimeInterval | string;
      readonly step?: numberU;
      readonly to: TimeInterval | string;
      readonly unit?: TimeUnit | undefined;
    }

    type Cases = readonly Case[];
  })
)("date", ({ from, step, to, unit }) => {
  const expected = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/u;

  expect(loremIpsum.date(from, to, step, unit)).toMatch(expected);
});

test("number", () => {
  expect(loremIpsum.number(0, 1000)).toBeWithin(0, 1000);
  expect(loremIpsum.number(0, 1000, 10) % 10).toBe(0);
});

test("oneOf", () => {
  const arr: unknowns = [true, 1, "abc"];

  expect(loremIpsum.oneOf(arr)).toBeOneOf(arr);
});

test.each([
  { expectedDots: 3, expectedSpaces: 6 },
  {
    expectedDots: 4,
    expectedSpaces: 12,
    sentences: 3,
    words: 4
  }
])("paragraph", ({ expectedDots, expectedSpaces, sentences, words }) => {
  const paragraph = loremIpsum.paragraph(sentences, sentences, words, words);

  expect(paragraph.split(".")).toHaveLength(expectedDots);
  expect(paragraph.split(" ")).toHaveLength(expectedSpaces);
});

test.each([{ expected: 3 }, { expected: 4, words: 4 }])(
  "phrase",
  ({ expected, words }) => {
    const phrase = loremIpsum.phrase(words, words);

    expect(phrase.split(".")).toHaveLength(1);
    expect(phrase.split(" ")).toHaveLength(expected);
  }
);

test.each([{ expected: 3 }, { expected: 4, words: 4 }])(
  "sentence",
  ({ expected, words }) => {
    const sentence = loremIpsum.sentence(words, words);

    expect(sentence.split(".")).toHaveLength(2);
    expect(sentence.split(" ")).toHaveLength(expected);
  }
);

test("word", () => {
  const word = loremIpsum.word();

  expect(word.split(".")).toHaveLength(1);
  expect(word.split(" ")).toHaveLength(1);
});
