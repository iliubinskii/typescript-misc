import { s } from "@";

test.each([
  { expected: "\n", str: "a\nb\nc" },
  { expected: "\r\n", str: "a\nb\r\nc" },
  { expected: "\r\n", str: "a\r\nb\nc" }
])("detectEol", ({ expected, str }) => {
  expect(s.detectEol(str)).toBe(expected);
});

test.each([
  { expected: true, str: " \n\r\t " },
  { expected: false, str: " \n\r\t - \n\r\t " }
])("empty", ({ expected, str }) => {
  expect(s.empty(str)).toBe(expected);
});

test("escapeRegExpSpecialChars", () => {
  const str = "$()*+.?[\\]^{|}-";

  const expected = "\\$\\(\\)\\*\\+\\.\\?\\[\\\\\\]\\^\\{\\|\\}\\x2d";

  expect(s.escapeRegExpSpecialChars(str)).toBe(expected);
});

test("firstLine", () => {
  expect(s.firstLine("abc\r\n123")).toBe("abc");
});

test.each([
  { expected: "aBC", str: "ABC" },
  { expected: "", str: "" }
])("lcFirst", ({ expected, str }) => {
  expect(s.lcFirst(str)).toBe(expected);
});

test("leadingSpaces", () => {
  expect(s.leadingSpaces(" \n\r\t abc")).toBe(" \n\r\t ");
});

test("lines", () => {
  expect(s.lines("a\nb\r\nc")).toStrictEqual(["a", "b", "c"]);
});

test.each([
  { expected: true, str: "a\nb" },
  { expected: false, str: "ab" }
])("multiline", ({ expected, str }) => {
  expect(s.multiline(str)).toBe(expected);
});

test.each(["a", "/a", "\\a", "//a", "\\\\a"])("path.addLeadingSlash", path => {
  expect(s.path.addLeadingSlash(path)).toBe("/a");
});

test.each(["a", "a/", "a\\", "a//", "a\\\\"])("path.addTrailingSlash", path => {
  expect(s.path.addTrailingSlash(path)).toBe("a/");
});

test.each([
  { expected: "a/b/c", str: "a//b\\\\c" },
  { expected: "/a/b/c/", str: "//a//b\\\\c\\\\" }
])("path.canonicalize", ({ expected, str }) => {
  expect(s.path.canonicalize(str)).toBe(expected);
});

test.each([
  { parts: ["a", "b/", "c", "/d/", "/e"] },
  { parts: ["a", "b\\", "c", "\\d\\", "\\e"] },
  { parts: ["a", "b//", "c", "//d//", "//e"] },
  { parts: ["a", "b\\\\", "c", "\\\\d\\\\", "\\\\e"] }
])("path.join", ({ parts }) => {
  expect(s.path.join(...parts)).toBe("a/b/c/d/e");
});

test.each(["a/", "/a/", "\\a//", "//a\\", "\\\\a\\\\"])(
  "path.removeLeadingSlash",
  path => {
    expect(s.path.removeLeadingSlash(path)).toBe("a/");
  }
);

test.each(["/a", "/a/", "//a\\", "\\a//", "\\\\a\\\\"])(
  "path.removeTrailingSlash",
  path => {
    expect(s.path.removeTrailingSlash(path)).toBe("/a");
  }
);

test("replaceAll", () => {
  expect(s.replaceAll("a-a", "a", "b")).toBe("b-b");
});

test("replacePairs", () => {
  expect(s.replacePairs("a-a-b-b", { a: "c", b: "d" })).toBe("c-c-d-d");
});

test.each([
  { expected: true, str: "ab" },
  { expected: false, str: "a\nb" }
])("singleLine", ({ expected, str }) => {
  expect(s.singleLine(str)).toBe(expected);
});

test("trailingSpaces", () => {
  expect(s.trailingSpaces("abc \n\r\t ")).toBe(" \n\r\t ");
});

test.each([
  { expected: "abc", str: "abc \n\r\t " },
  { expected: "", str: " \n\r\t " }
])("trimEnd", ({ expected, str }) => {
  expect(s.trimEnd(str)).toBe(expected);
});

test.each([
  { expected: " ", str: " " },
  { expected: " ", str: " \n " },
  { expected: " ", str: " \r\n " },
  { expected: " ", str: " \n \r\n " },
  { expected: " ", str: " \r\n \n " },
  { expected: " - \r\n ", str: " \n - \r\n " },
  { expected: " - \n ", str: " \r\n - \n " }
])("trimLeadingEmptyLines", ({ expected, str }) => {
  expect(s.trimLeadingEmptyLines(str)).toBe(expected);
});

test.each([
  { expected: "abc", str: " \n\r\t abc" },
  { expected: "", str: " \n\r\t " }
])("trimStart", ({ expected, str }) => {
  expect(s.trimStart(str)).toBe(expected);
});

test.each([
  { expected: " ", str: " " },
  { expected: " ", str: " \n " },
  { expected: " ", str: " \r\n " },
  { expected: " ", str: " \n \r\n " },
  { expected: " ", str: " \r\n \n " },
  { expected: " \n - ", str: " \n - \r\n " },
  { expected: " \r\n - ", str: " \r\n - \n " }
])("trimTrailingEmptyLines", ({ expected, str }) => {
  expect(s.trimTrailingEmptyLines(str)).toBe(expected);
});

test.each([
  { expected: "Abc", str: "abc" },
  { expected: "", str: "" }
])("ucFirst", ({ expected, str }) => {
  expect(s.ucFirst(str)).toBe(expected);
});

test.each([
  { expected: "1;", str: "1;" },
  { expected: "{\n  1;\n}", str: "\n  {\n    1;\n  }\n    " },
  { expected: "{\r\n  1;\r\n}", str: "\r\n  {\r\n    1;\r\n  }\r\n    " }
])("unpadMultiline", ({ expected, str }) => {
  expect(s.unpadMultiline(str)).toBe(expected);
});
