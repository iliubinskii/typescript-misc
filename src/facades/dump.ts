import { createFacade } from "../functions";

export const dump = createFacade<dump.Facade>("dump", {});

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace dump {
  export interface Facade {
    /**
     * Dumps value to string.
     *
     * @param value - Value.
     * @returns String.
     */
    (value: unknown): string;
  }
}
