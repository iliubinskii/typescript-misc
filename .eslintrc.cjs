/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  ignorePatterns: [
    "!.*",
    "/coverage/**",
    "/dist/**",
    "/es/**",
    "/node_modules/**"
  ],
  env: {
    es2022: true,
    jest: true
  },
  globals: {
    configurable: "readonly",
    facades: "readonly"
  },
  extends: "union",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2022,
    project: "tsconfig.json",
    sourceType: "module"
  },
  rules: {
    "@cspell/spellchecker": [
      "warn",
      {
        cspell: {
          words:
            // @sorted
            [
              "asyncs",
              "cjsx",
              "mjsx",
              "packagejson",
              "sonarjs",
              "strs",
              "subtest",
              "toolbelt",
              "uncapitalize",
              "unpad",
              "unpadded",
              "unpads",
              "unshifts"
            ]
        }
      }
    ],
    "@typescript-eslint/no-namespace": "off",
    "etc/no-internal": "off",
    "i18n-text/no-en": "off",
    "import/export": "off",
    "import/no-internal-modules": ["warn", { allow: ["date-fns/locale"] }],
    "import/no-namespace": "off",
    "misc/consistent-enum-members": "off",
    "no-magic-numbers": "off",
    "no-type-assertion/no-type-assertion": "off",
    "sonarjs/cognitive-complexity": "off"
  }
};

module.exports = config;
