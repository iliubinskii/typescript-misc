import type * as keys from "./object.keys";
declare global {
    namespace configurable {
        interface LocaleName {
        }
    }
}
export type LocaleName = keys.Pick<configurable.LocaleName, true, "extends->">;
//# sourceMappingURL=configurable.d.ts.map