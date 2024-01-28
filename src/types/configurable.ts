/* eslint-disable misc/only-export-name -- Ok */

import type * as keys from "./object.keys";

declare global {
  namespace configurable {
    // eslint-disable-next-line misc/typescript/no-empty-interfaces -- Ok
    interface LocaleName {}
  }
}

export type LocaleName = keys.Pick<configurable.LocaleName, true, "extends->">;
