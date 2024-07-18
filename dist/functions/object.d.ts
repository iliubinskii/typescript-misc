import * as is from "./guards";
import type { Entry, NumStr, PartialRecord, Rec, Writable, objectU, types } from "../types";
/**
 * Typed version of Object.assign.
 * @param target - Target.
 * @param sources - Sources.
 * @returns Target.
 */
export declare const assign: <T>(target: Writable<T>, ...sources: ReadonlyArray<Readonly<Partial<T>>>) => T;
/**
 * Typed version of Object.defineProperty.
 * @param obj - Object.
 * @param key - Key.
 * @param descriptor - Descriptor.
 */
export declare const defineProperty: <T, K extends keyof T = keyof T>(obj: T, key: K, descriptor: Descriptor<T, K>) => void;
export declare const entries: {
    /**
     * Typed version of Object.entries.
     * @param obj - Object.
     * @returns Object entries.
     */
    <K extends string, V>(obj: PartialRecord<K, V>): ReadonlyArray<Entry<K, V>>;
    /**
     * Typed version of Object.entries.
     * @param obj - Object.
     * @returns Object entries.
     */
    <T>(obj: T): ReadonlyArray<Entry<string & keyof T, T[NumStr & keyof T]>>;
};
export declare const fromEntries: (<K extends PropertyKey, V>(entries: Iterable<Entry<K, V>>) => PartialRecord<K, V>) & Readonly<{
    /**
     * Creates object from entries.
     * @param entries - Entries.
     * @returns Object.
     */
    exhaustive: <K extends PropertyKey, V>(entries: Iterable<Entry<K, V>>) => Rec<K, V>;
}>;
export declare const keys: {
    /**
     * Typed version of Object.keys.
     * @param obj - Object.
     * @returns Object keys.
     */
    <K extends string, V>(obj: PartialRecord<K, V>): readonly K[];
    /**
     * Typed version of Object.keys.
     * @param obj - Object.
     * @returns Object keys.
     */
    <T>(obj: T): ReadonlyArray<string & keyof T>;
};
export declare const values: {
    /**
     * Typed version of Object.values.
     * @param obj - Object.
     * @returns Object values.
     */
    <K extends string, V>(obj: PartialRecord<K, V>): readonly V[];
    /**
     * Typed version of Object.values.
     * @param obj - Object.
     * @returns Object values.
     */
    <T>(obj: T): ReadonlyArray<T[NumStr & keyof T]>;
};
export declare const removeUndefinedKeys: (<T extends object>(obj: types.object.style.OptionalUndefined<T>) => T) & Readonly<{
    /**
     * Removes undefined keys.
     * @param obj - Object.
     * @returns New object with undefined keys removed.
     */
    alt: <T extends object>(obj: T) => types.object.style.Optional<T>;
}>;
/**
 * Clones object.
 * @param obj - Object.
 * @returns New object.
 */
export declare function clone<T>(obj: T): Writable<T>;
/**
 * Checks if every object property satisfies condition.
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if every object property satisfies condition, _false_ otherwise.
 */
export declare function every<T>(obj: T, predicate: Predicate<T>): boolean;
/**
 * Picks object entries by predicate.
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns New object.
 */
export declare function filter<T>(obj: T, predicate: Predicate<T>): Partial<T>;
/**
 * Returns object property.
 * @param obj - Object.
 * @param key - Key.
 * @returns Object property.
 */
export declare function get(obj: object, key: PropertyKey): unknown;
/**
 * Returns object property.
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Object property if its type is T.
 * @throws AssertionError otherwise.
 */
export declare function get<T>(obj: object, key: PropertyKey, guard?: is.Guard<T>, defVal?: T): T;
/**
 * Returns object prototype.
 * @param obj - Object.
 * @returns Object prototype if available, _undefined_ otherwise.
 */
export declare function getPrototypeOf(obj: object): objectU;
/**
 * Checks if object has property.
 * @param key - Key.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
export declare function hasOwnProp(key: PropertyKey, obj: object): boolean;
/**
 * Applies callback to each property.
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
export declare function map<K extends string, V, R>(obj: Rec<K, V>, callback: (value: V, key: K) => R): Rec<K, R>;
/**
 * Omit object entries by predicate.
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns New object.
 */
export declare function omit<T>(obj: T, predicate: Predicate<T>): Partial<T>;
/**
 * Removes keys from object.
 * @param obj - Object.
 * @param exclude - Keys to omit.
 * @returns New object.
 */
export declare function omitKeys<T extends object, K extends types.object.keys.Optional<T> & string>(obj: T, ...exclude: readonly K[]): T;
/**
 * Removes keys from object.
 * @param obj - Object.
 * @param exclude - Keys to omit.
 * @returns New object.
 */
export declare function omitKeys<T, K extends string & keyof T>(obj: T, ...exclude: readonly K[]): types.object.Omit<T, K>;
/**
 * Adds prefix to object keys.
 * @param obj - Object.
 * @param prefix - Prefix.
 * @returns Object with prefixed keys.
 */
export declare function prefixKeys<T, P extends string>(obj: T, prefix: P): PrefixKeys<T, P>;
/**
 * Sets object property.
 * @param obj - Object.
 * @param key - Key.
 * @param value - Value.
 */
export declare function set(obj: object, key: PropertyKey, value: unknown): void;
/**
 * Returns the number of enumerable properties.
 * @param obj - Object.
 * @returns The number of enumerable properties.
 */
export declare function size(obj: object): number;
/**
 * Checks if some object property satisfies condition.
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if some object property satisfies condition, _false_ otherwise.
 */
export declare function some<T>(obj: T, predicate: Predicate<T>): boolean;
/**
 * Sorts object.
 * @param obj - Object.
 * @param compareFn - Comparison function.
 * @returns New object.
 */
export declare function sort<K extends string, V>(obj: Rec<K, V>, compareFn?: CompareFn<Rec<K, V>>): Rec<K, V>;
/**
 * Sorts object.
 * @param obj - Object.
 * @param compareFn - Comparison function.
 * @returns New object.
 */
export declare function sort<T>(obj: T, compareFn?: CompareFn<T>): T;
export interface CompareFn<T> {
    /**
     * Compares two object entries.
     * @param value1 - Value 1.
     * @param value2 - Value 2.
     * @param key1 - Key 1.
     * @param key2 - Key 2.
     */
    (value1: T[keyof T], value2: T[keyof T], key1: keyof T, key2: keyof T): number;
}
export interface Descriptor<T, K extends keyof T = keyof T> extends PropertyDescriptor {
    /**
     * Property getter.
     * @param this - This argument.
     * @returns Value.
     */
    readonly get?: (this: T) => T[K];
    /**
     * Property setter.
     * @param this - This argument.
     * @param value - New value.
     */
    readonly set?: (this: T, value: T[K]) => void;
    readonly value?: T[K];
}
export interface Predicate<T> {
    /**
     * Checks object entry.
     * @param value - Value.
     * @param key - Key.
     * @returns _True_ if object entry passes check, _false_ otherwise.
     */
    (value: T[keyof T], key: keyof T): boolean;
}
export type PrefixKeys<T, P extends string> = {
    [K in string & keyof T as `${P}${K}`]: T[K];
};
//# sourceMappingURL=object.d.ts.map