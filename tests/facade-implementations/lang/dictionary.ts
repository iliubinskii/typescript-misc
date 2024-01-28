/* eslint jest/max-expects: [warn, { max: 5 }] -- Ok */

import { dictionary, typedef } from "@";
import type { lang } from "@";

const { Definitions, Dictionary, pluralReduce } = dictionary;

const langEn = Dictionary.create(
  new Definitions({
    pluralReduce,
    wordForms: {},
    words: {
      Confirm: "Password confirm",
      Correct: "Correct",
      Day: { 1: "Day", 2: "Days" },
      FieldIsTooShort: "<Field> must have at least @min characters",
      In: "In",
      Must: "Must",
      MustBeSameAs: "Must be same as <field2>",
      MustBeValidField: "Must be valid <field>",
      MustBeValidString: "Must be valid String",
      Password: "Password",
      String: "String"
    }
  })
);

const langRu = Dictionary.create(
  new Definitions({
    pluralReduce: pluralReduce.ru,
    wordForms: {
      "кем-чем": ["кем-чем-им", "кем-чем-ей", "кем-чем-им-ср"],
      "кого-чего": ["кого-чего-его", "кого-чего-ее", "кого-чего-его-ср"],
      "кого-что": ["кого-что-его", "кого-что-ее", "кого-что-его-ср"],
      "ком-чем": ["ком-чем-нем", "ком-чем-ней", "ком-чем-нем-ср"],
      "кому-чему": ["кому-чему-ему", "кому-чему-ей", "кому-чему-ему-ср"],
      "кто-что": ["кто-что-он", "кто-что-она", "кто-что-оно"]
    },
    words: {
      Confirm: { "кто-что-оно": "Подтверждение пароля" },
      Correct: [
        "кого-что-его",
        {
          "кого-что-его": "Корректный",
          "кого-что-его-ср": "Корректное",
          "кого-что-ее": "Корректную"
        }
      ],
      Day: [
        "кто-что-он",
        {
          "кого-чего-его": { 1: "Дня", 2: "Дней", 5: "Дней" },
          "кто-что-он": { 1: "День", 2: "Дня", 5: "Дней" }
        },
        { InXDays: "кого-чего-его" }
      ],
      FieldIsTooShort:
        "<Field:кто-что> {must} содержать не менее @min символов",
      In: "В течение",
      Must: [
        "кто-что-он",
        {
          "кто-что-он": "Должен",
          "кто-что-она": "Должна",
          "кто-что-оно": "Должно"
        }
      ],
      MustBeSameAs: "<Field:кто-что> {must} совпадать с <field2.кем-чем>",
      MustBeValidField: "Введите {correct} <field:кого-что>",
      MustBeValidString: "Введите {correct.кого-что-ее} Строку",
      Password: [
        "кто-что-он",
        { "кем-чем-им": "Паролем", "кто-что-он": "Пароль" }
      ],
      String: [
        "кто-что-она",
        {
          "кого-что-ее": { 1: "Строку", 2: "Строки", 5: "Строк" },
          "кто-что-она": { 1: "Строка", 2: "Строки", 5: "Строк" }
        }
      ]
    }
  })
);

test("Dictionary.context", () => {
  expect(langRu.day).toBe("день");
  expect(langRu.context("InXDays").day).toBe("дня");
  expect(langRu.context("InXDays").day).toBe("дня");
  expect(langRu.context("InXDays").context("InXDays").day).toBe("дня");
  expect(langRu.context("InXDays").context("InXDays").day).toBe("дня");
});

test.each([
  {
    expectedEn: "Must be valid String",
    expectedRu: "Введите корректную Строку",
    key: typedef<lang.Key>("MustBeValidString")
  },
  {
    expectedEn: "must be valid String",
    expectedRu: "введите корректную Строку",
    key: typedef<lang.Key>("mustBeValidString")
  },
  {
    expectedEn: "MUST BE VALID STRING",
    expectedRu: "ВВЕДИТЕ КОРРЕКТНУЮ СТРОКУ",
    key: typedef<lang.Key>("MUSTBEVALIDSTRING")
  },
  {
    expectedEn: "must be valid string",
    expectedRu: "введите корректную строку",
    // eslint-disable-next-line spellcheck/spell-checker -- Ok
    key: typedef<lang.Key>("mustbevalidstring")
  },
  {
    expectedEn: "Unknown",
    expectedRu: "Unknown",
    key: typedef<lang.Key>("plain:Unknown")
  }
])("Dictionary.get", ({ expectedEn, expectedRu, key }) => {
  expect(langEn.get(key)).toBe(expectedEn);
  expect(langRu.get(key)).toBe(expectedRu);
});

test.each([
  { expectedEn: "Day", expectedRu: "День", key: "Day" },
  { expectedEn: "Unknown", expectedRu: "Unknown", key: "plain:Unknown" },
  { expectedEn: "Unknown", expectedRu: "Unknown", key: "Unknown" }
])("Dictionary.getIfExists", ({ expectedEn, expectedRu, key }) => {
  expect(langEn.getIfExists(key)).toBe(expectedEn);
  expect(langRu.getIfExists(key)).toBe(expectedRu);
});

test.each([
  { expected: true, key: "MustBeValidString" },
  { expected: true, key: "mustBeValidString" },
  { expected: true, key: "MUSTBEVALIDSTRING" },
  {
    expected: true,
    // eslint-disable-next-line spellcheck/spell-checker -- Ok
    key: "mustbevalidstring"
  },
  { expected: true, key: "plain:Unknown" },
  { expected: false, key: "Unknown" }
])("Dictionary.has", ({ expected, key }) => {
  expect(langEn.has(key)).toBe(expected);
  expect(langRu.has(key)).toBe(expected);
});

test.each(["str1", "str2"])("Dictionary.plain", str => {
  expect(langEn.plain(str)).toStartWith(`plain:${str}`);
});

test.each([
  { count: 1, expectedEn: "1 day", expectedRu: "1 день" },
  { count: 2, expectedEn: "2 days", expectedRu: "2 дня" },
  { count: 3, expectedEn: "3 days", expectedRu: "3 дня" },
  { count: 4, expectedEn: "4 days", expectedRu: "4 дня" },
  { count: 5, expectedEn: "5 days", expectedRu: "5 дней" }
])("Dictionary.plural", ({ count, expectedEn, expectedRu }) => {
  expect(`${count} ${langEn.plural(count).day}`).toBe(expectedEn);
  expect(`${count} ${langRu.plural(count).day}`).toBe(expectedRu);
});

test.each(["string", "String"])("Dictionary.with: FieldIsTooShort", field => {
  const subEn = langEn.with("field", field).with("min", 10);

  const subRu = langRu.with("field", field).with("min", 10);

  const expectedEn = "String must have at least 10 characters";

  const expectedRu = "Строка должна содержать не менее 10 символов";

  expect(subEn.FieldIsTooShort).toBe(expectedEn);
  expect(subRu.FieldIsTooShort).toBe(expectedRu);
});

test.each([
  { field: "confirm", field2: "password" },
  { field: "Confirm", field2: "Password" }
])("Dictionary.with: MustBeSameAs", ({ field, field2 }) => {
  const subEn = langEn.with("field", field).with("field2", field2);

  const subRu = langRu.with("field", field).with("field2", field2);

  const expectedEn = "Must be same as password";

  const expectedRu = "Подтверждение пароля должно совпадать с паролем";

  expect(subEn.MustBeSameAs).toBe(expectedEn);
  expect(subRu.MustBeSameAs).toBe(expectedRu);
});

test.each(["string", "String"])("Dictionary.with: MustBeValidField", field => {
  const subEn = langEn.with("field", field);

  const subRu = langRu.with("field", field);

  const expectedEn = "Must be valid string";

  const expectedRu = "Введите корректную строку";

  expect(subEn.MustBeValidField).toBe(expectedEn);
  expect(subRu.MustBeValidField).toBe(expectedRu);
});

test.each([
  { count: 0, expected: 2 },
  { count: 1, expected: 1 },
  { count: 2, expected: 2 },
  { count: 3, expected: 2 }
])("pluralReduce", ({ count, expected }) => {
  expect(pluralReduce(count)).toBe(expected);
});

test.each([
  { count: 0, expected: 5 },
  { count: 1, expected: 1 },
  { count: 2, expected: 2 },
  { count: 3, expected: 2 },
  { count: 4, expected: 2 },
  { count: 5, expected: 5 },
  { count: 10, expected: 5 },
  { count: 20, expected: 5 },
  { count: 21, expected: 1 },
  { count: 22, expected: 2 },
  { count: 23, expected: 2 },
  { count: 24, expected: 2 },
  { count: 25, expected: 5 }
])("pluralReduce.ru", ({ count, expected }) => {
  expect(pluralReduce.ru(count)).toBe(expected);
});
