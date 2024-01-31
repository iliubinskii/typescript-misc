import * as _ from "lodash-commonjs-es";
import { TimeUnit, datetime } from "../../../facades";
import { a, evaluate, is, num, o } from "../../../functions";
import { loremIpsum } from "lorem-ipsum";
export const loremIpsumWrapper = {
    boolean: (trueWeight = 0.5, falseWeight = 0.5) => Math.random() < trueWeight / (trueWeight + falseWeight),
    configure: config => {
        o.assign(moduleConfig, config);
    },
    date: (from, to, step = 1, unit = TimeUnit.minute) => {
        const from2 = is.string(from)
            ? datetime.create(from).toTime()
            : datetime.create().add(from[0], from[1]).toTime();
        const to2 = is.string(to)
            ? datetime.create(to).toTime()
            : datetime.create().add(to[0], to[1]).toTime();
        const step2 = evaluate(() => {
            switch (unit) {
                case TimeUnit.day:
                case TimeUnit.days:
                    return step * 24 * 3600 * 1000;
                case TimeUnit.hour:
                case TimeUnit.hours:
                    return step * 3600 * 1000;
                case TimeUnit.minute:
                case TimeUnit.minutes:
                    return step * 60 * 1000;
                case TimeUnit.month:
                case TimeUnit.months:
                    return step * 30 * 24 * 3600 * 1000;
                case TimeUnit.week:
                case TimeUnit.weeks:
                    return step * 7 * 24 * 3600 * 1000;
                case TimeUnit.year:
                case TimeUnit.years:
                    return step * 365 * 24 * 3600 * 1000;
            }
        });
        const time = num.floor.step(_.random(from2, to2), step2);
        return datetime.create(time).toString();
    },
    getConfiguration: () => moduleConfig,
    number: (from, to, step = 1) => num.floor.step(_.random(from, to), step),
    oneOf: (values) => a.get(values, _.random(0, values.length - 1)),
    paragraph: (minSentences, maxSentences, minWords, maxWords) => loremIpsum({
        paragraphLowerBound: minSentences ?? moduleConfig.minSentences,
        paragraphUpperBound: maxSentences ?? moduleConfig.maxSentences,
        sentenceLowerBound: minWords ?? moduleConfig.minWords,
        sentenceUpperBound: maxWords ?? moduleConfig.maxWords,
        suffix: "\n",
        units: "paragraphs"
    }),
    phrase: (minWords, maxWords) => loremIpsum({
        sentenceLowerBound: minWords ?? moduleConfig.minWords,
        sentenceUpperBound: maxWords ?? moduleConfig.maxWords,
        suffix: "\n",
        units: "sentences"
    }).replace(/\.$/u, ""),
    sentence: (minWords, maxWords) => loremIpsum({
        sentenceLowerBound: minWords ?? moduleConfig.minWords,
        sentenceUpperBound: maxWords ?? moduleConfig.maxWords,
        suffix: "\n",
        units: "sentences"
    }),
    word: () => loremIpsum({ suffix: "\n", units: "words" })
};
const moduleConfig = {
    maxSentences: 5,
    maxWords: 10,
    minSentences: 3,
    minWords: 5
};
//# sourceMappingURL=index.js.map