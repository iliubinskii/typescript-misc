import * as testUtils from "./src/test-utils";
import { dictionary } from "./src";

const definitions = new dictionary.Definitions({
  pluralReduce: dictionary.pluralReduce,
  wordForms: {},
  words: {
    Confirm: "Confirm",
    Correct: "Correct",
    Day: "Day",
    FieldIsTooShort: "Field is too short",
    In: "In",
    Must: "Must",
    MustBeSameAs: "Must be same as",
    MustBeValidField: "Must be valid field",
    MustBeValidString: "Must be valid string",
    Password: "Password",
    String: "String"
  }
});

testUtils.jestSetup();
testUtils.jestSetup.dictionary(definitions);
beforeEach(testUtils.jestReset);
beforeEach(() => {
  testUtils.jestReset.dictionary(definitions);
});
