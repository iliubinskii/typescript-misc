import type { numberU as baseNumberU, stringU as baseStringU, empty } from "../types";
export declare const not: {
    /**
     * Converts value to not empty.
     *
     * @param value - Value.
     * @param defVal - Default value.
     * @returns Value if it is not empty, defVal otherwise.
     */
    readonly empty: <T>(value: T, defVal: Exclude<T, empty>) => Exclude<T, empty>;
};
/**
 * Unifies empty values.
 *
 * @param value - Values.
 * @returns Unified value.
 */
export declare function emptyToNull<T>(value: empty | T): T | null;
/**
 * Unifies empty values.
 *
 * @param value - Values.
 * @returns Unified value.
 */
export declare function emptyToUndefined<T>(value: empty | T): T | undefined;
/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Converted value, defVal on failure.
 */
export declare function number(value: unknown, defVal?: number): number;
/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @returns Converted value, _undefined_ on failure.
 */
export declare function numberU(value: unknown): baseNumberU;
/**
 * Converts value to a string.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export declare function string(value: unknown): string;
/**
 * Converts value to type stringU.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export declare function stringU(value: unknown): baseStringU;
//# sourceMappingURL=converters.d.ts.map