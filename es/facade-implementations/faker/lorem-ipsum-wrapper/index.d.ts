import type { faker } from "../../../facades";
export declare const loremIpsumWrapper: faker.Facade & loremIpsumWrapper.Configurable;
export declare namespace loremIpsumWrapper {
    interface Configurable {
        /**
         * Configures plugin.
         *
         * @param config - Plugin configuration.
         */
        readonly configure: (config: PartialConfiguration) => void;
        /**
         * Returns plugin configuration.
         *
         * @returns Plugin configuration.
         */
        readonly getConfiguration: () => Configuration;
    }
    interface Configuration {
        readonly maxSentences: number;
        readonly maxWords: number;
        readonly minSentences: number;
        readonly minWords: number;
    }
    interface PartialConfiguration extends Partial<Configuration> {
    }
}
//# sourceMappingURL=index.d.ts.map