"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loremIpsumWrapper = void 0;
const tslib_1 = require("tslib");
const _ = tslib_1.__importStar(require("lodash-commonjs-es"));
const facades_1 = require("../../../facades");
const functions_1 = require("../../../functions");
const lorem_ipsum_1 = require("lorem-ipsum");
exports.loremIpsumWrapper = {
    boolean: (trueWeight = 0.5, falseWeight = 0.5) => Math.random() < trueWeight / (trueWeight + falseWeight),
    configure: config => {
        functions_1.o.assign(moduleConfig, config);
    },
    date: (from, to, step = 1, unit = facades_1.TimeUnit.minute) => {
        const from2 = functions_1.is.string(from)
            ? facades_1.datetime.create(from).toTime()
            : facades_1.datetime.create().add(from[0], from[1]).toTime();
        const to2 = functions_1.is.string(to)
            ? facades_1.datetime.create(to).toTime()
            : facades_1.datetime.create().add(to[0], to[1]).toTime();
        const step2 = (0, functions_1.evaluate)(() => {
            switch (unit) {
                case facades_1.TimeUnit.day:
                case facades_1.TimeUnit.days: {
                    return step * 24 * 3600 * 1000;
                }
                case facades_1.TimeUnit.hour:
                case facades_1.TimeUnit.hours: {
                    return step * 3600 * 1000;
                }
                case facades_1.TimeUnit.minute:
                case facades_1.TimeUnit.minutes: {
                    return step * 60 * 1000;
                }
                case facades_1.TimeUnit.month:
                case facades_1.TimeUnit.months: {
                    return step * 30 * 24 * 3600 * 1000;
                }
                case facades_1.TimeUnit.week:
                case facades_1.TimeUnit.weeks: {
                    return step * 7 * 24 * 3600 * 1000;
                }
                case facades_1.TimeUnit.year:
                case facades_1.TimeUnit.years: {
                    return step * 365 * 24 * 3600 * 1000;
                }
            }
        });
        const time = functions_1.num.floor.step(_.random(from2, to2), step2);
        return facades_1.datetime.create(time).toString();
    },
    getConfiguration: () => moduleConfig,
    number: (from, to, step = 1) => functions_1.num.floor.step(_.random(from, to), step),
    oneOf: (values) => functions_1.a.get(values, _.random(0, values.length - 1)),
    paragraph: (minSentences, maxSentences, minWords, maxWords) => (0, lorem_ipsum_1.loremIpsum)({
        paragraphLowerBound: minSentences ?? moduleConfig.minSentences,
        paragraphUpperBound: maxSentences ?? moduleConfig.maxSentences,
        sentenceLowerBound: minWords ?? moduleConfig.minWords,
        sentenceUpperBound: maxWords ?? moduleConfig.maxWords,
        suffix: "\n",
        units: "paragraphs"
    }),
    phrase: (minWords, maxWords) => (0, lorem_ipsum_1.loremIpsum)({
        sentenceLowerBound: minWords ?? moduleConfig.minWords,
        sentenceUpperBound: maxWords ?? moduleConfig.maxWords,
        suffix: "\n",
        units: "sentences"
    }).replace(/\.$/u, ""),
    sentence: (minWords, maxWords) => (0, lorem_ipsum_1.loremIpsum)({
        sentenceLowerBound: minWords ?? moduleConfig.minWords,
        sentenceUpperBound: maxWords ?? moduleConfig.maxWords,
        suffix: "\n",
        units: "sentences"
    }),
    word: () => (0, lorem_ipsum_1.loremIpsum)({ suffix: "\n", units: "words" })
};
const moduleConfig = {
    maxSentences: 5,
    maxWords: 10,
    minSentences: 3,
    minWords: 5
};
//# sourceMappingURL=index.js.map