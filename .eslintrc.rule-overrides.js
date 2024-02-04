const { eslint } = require("project-chore/api");

const consistentImport = eslint.rules["misc/consistent-import"];

module.exports = {
  rules: {
    "misc/consistent-import": [
      "warn",
      {
        sources: [
          {
            _id: "typescript-misc/src/facade-implementations/datetime",
            source: "typescript-misc/src/facade-implementations/datetime",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/facade-implementations/dump",
            source: "typescript-misc/src/facade-implementations/dump",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/facade-implementations/faker",
            source: "typescript-misc/src/facade-implementations/faker",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/facade-implementations/lang",
            source: "typescript-misc/src/facade-implementations/lang",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/facade-implementations/lang/dictionary",
            source:
              "typescript-misc/src/facade-implementations/lang/dictionary",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/functions/array",
            localName: "a",
            source: "typescript-misc/src/functions/array",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/functions/assertions",
            localName: "assert",
            source: "typescript-misc/src/functions/assertions",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/functions/converters",
            localName: "cast",
            source: "typescript-misc/src/functions/converters",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/functions/function",
            localName: "fn",
            source: "typescript-misc/src/functions/function",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/functions/guards",
            localName: "is",
            source: "typescript-misc/src/functions/guards",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/functions/inline-assertions",
            localName: "as",
            source: "typescript-misc/src/functions/inline-assertions",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/functions/json",
            source: "typescript-misc/src/functions/json",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/functions/map",
            source: "typescript-misc/src/functions/map",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/functions/number",
            localName: "num",
            source: "typescript-misc/src/functions/number",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/functions/object",
            localName: "o",
            source: "typescript-misc/src/functions/object",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/functions/program-flow",
            source: "typescript-misc/src/functions/program-flow",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/functions/reflect",
            source: "typescript-misc/src/functions/reflect",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/functions/regexp",
            source: "typescript-misc/src/functions/regexp",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/functions/set",
            source: "typescript-misc/src/functions/set",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/functions/string",
            localName: "s",
            source: "typescript-misc/src/functions/string",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/types/function",
            localName: "fn",
            source: "typescript-misc/src/types/function",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/types/function",
            localName: "fn",
            source: "typescript-misc/src/types/function",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/types/index.types",
            source: "typescript-misc/src/types/index.types",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/types/index.types",
            source: "typescript-misc/src/types/index.types",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/types/index.types.object",
            localName: "object",
            source: "typescript-misc/src/types/index.types.object",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/types/index.types.object",
            localName: "object",
            source: "typescript-misc/src/types/index.types.object",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/types/object.keys",
            localName: "keys",
            source: "typescript-misc/src/types/object.keys",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/types/object.keys",
            localName: "keys",
            source: "typescript-misc/src/types/object.keys",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/types/object.style",
            localName: "style",
            source: "typescript-misc/src/types/object.style",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/types/object.style",
            localName: "style",
            source: "typescript-misc/src/types/object.style",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/types/string",
            source: "typescript-misc/src/types/string",
            wildcard: true
          },
          {
            _id: "typescript-misc/src/types/string",
            source: "typescript-misc/src/types/string",
            wildcard: true
          },
          ...consistentImport.sources
        ]
      }
    ],
    "misc/no-sibling-import": [
      "warn",
      {
        rules: [
          {
            _id: "/src/facade-implementations/lang/dictionary",
            filesToLint: ["./src/facade-implementations/lang/dictionary/*"],
            hierarchy: [["./Definition"], ["./Definitions"], ["./Dictionary"]]
          },
          {
            _id: "/src/functions/test-utils",
            filesToLint: ["./src/test-utils/*"],
            hierarchy: [["./expect"], ["./jest.internal"]]
          },
          {
            _id: "/src/types",
            filesToLint: ["./src/types/*"],
            hierarchy: [["./*"], ["./*"]]
          },
          {
            _id: "src/functions",
            filesToLint: ["./src/functions/*"],
            hierarchy: [
              ["./core"],
              ["./guards"],
              ["./assertions", "./inline-assertions"],
              [
                "./array",
                "./converters",
                "./function",
                "./number",
                "./program-flow",
                "./reflect",
                "./string"
              ],
              ["./object"],
              ["./helpers", "./json"]
            ]
          }
        ]
      }
    ]
  },
  overrides: [
    {
      files: "./src/functions/**",
      rules: {
        "misc/no-relative-parent-import": [
          "warn",
          {
            allow: [
              "../../../../types",
              "../../../types",
              "../../types",
              "../types"
            ]
          }
        ]
      }
    },
    {
      files: "./src/facades/**",
      rules: {
        "misc/no-relative-parent-import": [
          "warn",
          {
            allow: [
              "../../../../functions",
              "../../../../types",
              "../../../functions",
              "../../../types",
              "../../functions",
              "../../types",
              "../functions",
              "../types"
            ]
          }
        ]
      }
    },
    {
      files: "./src/facade-implementations/**",
      rules: {
        "misc/no-relative-parent-import": [
          "warn",
          {
            allow: [
              "../../../../facades",
              "../../../../functions",
              "../../../../types",
              "../../../facades",
              "../../../functions",
              "../../../types",
              "../../facades",
              "../../functions",
              "../../types",
              "../facades",
              "../functions",
              "../types"
            ]
          }
        ]
      }
    },
    {
      files: "./src/test-utils/**",
      rules: {
        "misc/no-relative-parent-import": [
          "warn",
          {
            allow: [
              "../../../../facade-implementations",
              "../../../../facades",
              "../../../../functions",
              "../../../../types",
              "../../../facade-implementations",
              "../../../facades",
              "../../../functions",
              "../../../types",
              "../../facade-implementations",
              "../../facades",
              "../../functions",
              "../../types",
              "../facade-implementations",
              "../facades",
              "../functions",
              "../types"
            ]
          }
        ]
      }
    }
  ]
};
