import * as is from "./guards";
import type { IndexedObject, IndexedRecord, NumStr, empty as baseEmpty, stringU as baseStringU, unknowns as baseUnknowns, types } from "../types";
export { _false as false, _null as null, _true as true, _undefined as undefined };
export declare const array: InlineAssertion<baseUnknowns> & Readonly<{
    /**
     * Asserts that value type is T[].
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns Value if value type is T[].
     * @throws Error otherwise.
     */
    of: <T>(value: unknown, guard: is.Guard<T>) => readonly T[];
}>;
export declare const arrayU: InlineAssertion<baseUnknowns | undefined>;
export declare const arrays: InlineAssertion<readonly baseUnknowns[]>;
export declare const arraysU: InlineAssertion<readonly baseUnknowns[] | undefined>;
export declare const boolean: InlineAssertion<boolean>;
export declare const booleanU: InlineAssertion<boolean | undefined>;
export declare const booleans: InlineAssertion<readonly boolean[]>;
export declare const booleansU: InlineAssertion<readonly boolean[] | undefined>;
export declare const empty: InlineAssertion<baseEmpty>;
export declare const indexedObject: InlineAssertion<IndexedObject> & Readonly<{
    /**
     * Asserts that value type is IndexedObject\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns Value if value type is IndexedObject\<T\>.
     * @throws Error otherwise.
     */
    of: <T>(value: unknown, guard: is.Guard<T>) => IndexedObject<T>;
}>;
export declare const indexedObjects: InlineAssertion<readonly IndexedObject[]>;
export declare const indexedObjectsU: InlineAssertion<readonly IndexedObject[] | undefined>;
export declare const map: InlineAssertion<ReadonlyMap<unknown, unknown>> & Readonly<{
    /**
     * Asserts that value type is Map\<K, V\>.
     *
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @returns Value if value type is Map\<K, V\>.
     * @throws Error otherwise.
     */
    of: <K, V>(value: unknown, keyGuard: is.Guard<K>, valueGuard: is.Guard<V>) => ReadonlyMap<K, V>;
}>;
export declare const mapU: InlineAssertion<ReadonlyMap<unknown, unknown> | undefined>;
export declare const maps: InlineAssertion<readonly ReadonlyMap<unknown, unknown>[]>;
export declare const mapsU: InlineAssertion<readonly ReadonlyMap<unknown, unknown>[] | undefined>;
export declare const never: InlineAssertion<never>;
export declare const numStr: InlineAssertion<NumStr>;
export declare const numStrU: InlineAssertion<NumStr | undefined>;
export declare const numStrs: InlineAssertion<readonly NumStr[]>;
export declare const numStrsU: InlineAssertion<readonly NumStr[] | undefined>;
export declare const number: InlineAssertion<number>;
export declare const numberU: InlineAssertion<number | undefined>;
export declare const numbers: InlineAssertion<readonly number[]>;
export declare const numbersU: InlineAssertion<readonly number[] | undefined>;
export declare const object: InlineAssertion<object>;
export declare const objectU: InlineAssertion<object | undefined>;
export declare const objects: InlineAssertion<readonly object[]>;
export declare const objectsU: InlineAssertion<readonly object[] | undefined>;
export declare const propertyKey: InlineAssertion<PropertyKey>;
export declare const propertyKeyU: InlineAssertion<PropertyKey | undefined>;
export declare const propertyKeys: InlineAssertion<readonly PropertyKey[]>;
export declare const propertyKeysU: InlineAssertion<PropertyKey | undefined>;
export declare const set: InlineAssertion<ReadonlySet<unknown>> & Readonly<{
    /**
     * Asserts that value type is Set\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns Value if value type is Set\<T\>.
     * @throws Error otherwise.
     */
    of: <T>(value: unknown, guard: is.Guard<T>) => ReadonlySet<T>;
}>;
export declare const setU: InlineAssertion<ReadonlySet<unknown> | undefined>;
export declare const sets: InlineAssertion<readonly ReadonlySet<unknown>[]>;
export declare const setsU: InlineAssertion<readonly ReadonlySet<unknown>[] | undefined>;
export declare const string: InlineAssertion<string>;
export declare const stringU: InlineAssertion<baseStringU>;
export declare const strings: InlineAssertion<readonly string[]>;
export declare const stringsU: InlineAssertion<readonly string[] | undefined>;
export declare const symbol: InlineAssertion<symbol>;
export declare const symbolU: InlineAssertion<symbol | undefined>;
export declare const symbols: InlineAssertion<readonly symbol[]>;
export declare const symbolsU: InlineAssertion<readonly symbol[] | undefined>;
export declare const unknown: InlineAssertion<unknown>;
export declare const unknowns: InlineAssertion<readonly unknown[]>;
export declare const unknownsU: InlineAssertion<readonly unknown[] | undefined>;
export declare const not: {
    readonly array: ExclusionInlineAssertion<baseUnknowns>;
    readonly boolean: ExclusionInlineAssertion<boolean>;
    readonly empty: ExclusionInlineAssertion<baseEmpty>;
    readonly false: ExclusionInlineAssertion<false>;
    readonly indexedObject: ExclusionInlineAssertion<IndexedObject>;
    readonly map: ExclusionInlineAssertion<ReadonlyMap<unknown, unknown>>;
    readonly null: ExclusionInlineAssertion<null>;
    readonly numStr: ExclusionInlineAssertion<NumStr>;
    readonly number: ExclusionInlineAssertion<number>;
    readonly object: ExclusionInlineAssertion<object>;
    readonly propertyKey: ExclusionInlineAssertion<PropertyKey>;
    readonly set: ExclusionInlineAssertion<ReadonlySet<unknown>>;
    readonly string: ExclusionInlineAssertion<string>;
    readonly stringU: ExclusionInlineAssertion<baseStringU>;
    readonly symbol: ExclusionInlineAssertion<symbol>;
    readonly true: ExclusionInlineAssertion<true>;
    readonly undefined: ExclusionInlineAssertion<undefined>;
};
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function byGuard<T>(value: unknown, guard: is.Guard<T>): T;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function callable<T extends types.fn.Callable>(value: unknown): T;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function constructor<T extends types.fn.Constructor>(value: unknown): T;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param en - Validation object.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function enumeration<T extends string>(value: unknown, en: IndexedRecord<T>): T;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export declare function instanceOf<T>(value: unknown, ctor: types.fn.Constructor<T>): T;
/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if value type is T[].
 * @throws Error otherwise.
 */
export declare function instancesOf<T>(value: unknown, ctor: types.fn.Constructor<T>): readonly T[];
export interface ExclusionInlineAssertion<T> {
    /**
     * Asserts value type.
     *
     * @param value - Value.
     * @returns Value if its type is not T.
     * @throws Error otherwise.
     */
    <V>(value: V): Exclude<V, T>;
}
export interface InlineAssertion<T> {
    /**
     * Asserts value type.
     *
     * @param value - Value.
     * @returns Value if its type is T.
     * @throws Error otherwise.
     */
    (value: unknown): T;
}
declare const _false: InlineAssertion<false>;
declare const _null: InlineAssertion<null>;
declare const _true: InlineAssertion<true>;
declare const _undefined: InlineAssertion<undefined>;
//# sourceMappingURL=inline-assertions.d.ts.map