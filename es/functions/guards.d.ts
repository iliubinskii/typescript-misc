import type { IndexedObject, IndexedRecord, NumStr, empty as baseEmpty, stringU as baseStringU, unknowns as baseUnknowns, types } from "../types";
export { _false as false, _null as null, _true as true, _undefined as undefined };
export declare const and: {
    <A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is A & B;
    <A, B, C>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): value is A & B & C;
    <A, B, C, D>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): value is A & B & C & D;
} & Readonly<{
    factory: {
        <A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A & B>;
        <A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<A & B & C>;
        <A, B, C, D>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): Guard<A & B & C & D>;
    };
}>;
export declare const or: {
    <A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is A | B;
    <A, B, C>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): value is A | B | C;
    <A, B, C, D>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): value is A | B | C | D;
} & Readonly<{
    factory: {
        <A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A | B>;
        <A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<A | B | C>;
        <A, B, C, D>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): Guard<A | B | C | D>;
    };
}>;
export declare const array: ((value: unknown) => value is baseUnknowns) & Readonly<{
    /**
     * Checks if value type is T[].
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is T[], _false_ otherwise.
     */
    of: <T>(value: unknown, guard: Guard<T>) => value is readonly T[];
}>;
export declare const arrayU: Guard<baseUnknowns | undefined>;
export declare const arrays: Guard<readonly baseUnknowns[]>;
export declare const arraysU: Guard<readonly baseUnknowns[] | undefined>;
export declare const booleanU: Guard<boolean | undefined>;
export declare const booleans: Guard<readonly boolean[]>;
export declare const booleansU: Guard<readonly boolean[] | undefined>;
export declare const indexedObject: ((value: unknown) => value is IndexedObject) & Readonly<{
    /**
     * Checks if value type is IndexedObject\<T\>.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
     */
    of: <T>(value: unknown, guard: Guard<T>) => value is IndexedObject<T>;
}>;
export declare const indexedObjectU: Guard<IndexedObject | undefined>;
export declare const indexedObjects: Guard<readonly IndexedObject[]>;
export declare const indexedObjectsU: Guard<readonly IndexedObject[] | undefined>;
export declare const map: ((value: unknown) => value is ReadonlyMap<unknown, unknown>) & Readonly<{
    /**
     * Checks if value type is Map\<K, V\>.
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
     */
    of: <K, V>(value: unknown, keyGuard: Guard<K>, valueGuard: Guard<V>) => value is ReadonlyMap<K, V>;
}>;
export declare const mapU: Guard<ReadonlyMap<unknown, unknown> | undefined>;
export declare const maps: Guard<readonly ReadonlyMap<unknown, unknown>[]>;
export declare const mapsU: Guard<readonly ReadonlyMap<unknown, unknown>[] | undefined>;
export declare const numStrU: Guard<NumStr | undefined>;
export declare const numStrs: Guard<readonly NumStr[]>;
export declare const numStrsU: Guard<readonly NumStr[] | undefined>;
export declare const numberU: Guard<number | undefined>;
export declare const numbers: Guard<readonly number[]>;
export declare const numbersU: Guard<readonly number[] | undefined>;
export declare const object: ((value: unknown) => value is object) & Readonly<{
    factory: {
        <R extends object, O extends object>(required: GuardsRecord<R, keyof R>, optional: GuardsRecord<O, keyof O>): Guard<types.object.style.Optional<Partial<O>> & types.object.style.Undefined<R>>;
        <T extends object>(required: GuardsRecord<T, types.object.keys.Required<T>>, optional: GuardsRecord<T, types.object.keys.Optional<T>>): Guard<T>;
    };
    of: {
        <R extends object, O extends object>(value: unknown, required: GuardsRecord<R, keyof R>, optional: GuardsRecord<O, keyof O>): value is types.object.style.Optional<Partial<O>> & types.object.style.Undefined<R>;
        <T extends object>(value: unknown, required: GuardsRecord<T, types.object.keys.Required<T>>, optional: GuardsRecord<T, types.object.keys.Optional<T>>): value is T;
    };
}>;
export declare const objectU: Guard<object | undefined>;
export declare const objects: Guard<readonly object[]>;
export declare const objectsU: Guard<readonly object[] | undefined>;
export declare const propertyKeyU: Guard<PropertyKey | undefined>;
export declare const propertyKeys: Guard<readonly PropertyKey[]>;
export declare const propertyKeysU: Guard<readonly PropertyKey[] | undefined>;
export declare const set: ((value: unknown) => value is ReadonlySet<unknown>) & Readonly<{
    /**
     * Checks if value type is Set\<T\>.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
     */
    of: <T>(value: unknown, guard: Guard<T>) => value is ReadonlySet<T>;
}>;
export declare const setU: Guard<ReadonlySet<unknown> | undefined>;
export declare const sets: Guard<readonly ReadonlySet<unknown>[]>;
export declare const setsU: Guard<readonly ReadonlySet<unknown>[] | undefined>;
export declare const strings: Guard<readonly string[]>;
export declare const stringsU: Guard<readonly string[] | undefined>;
export declare const symbolU: Guard<symbol | undefined>;
export declare const symbols: Guard<readonly symbol[]>;
export declare const symbolsU: Guard<readonly symbol[] | undefined>;
export declare const tuple: {
    <A>(value: unknown, guard: Guard<A>): value is readonly [A];
    <A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is readonly [A, B];
    <A, B, C>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): value is readonly [A, B, C];
    <A, B, C, D>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): value is readonly [A, B, C, D];
} & Readonly<{
    factory: {
        <A>(guard: Guard<A>): Guard<readonly [A]>;
        <A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<readonly [A, B]>;
        <A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<readonly [A, B, C]>;
        <A, B, C, D>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): Guard<readonly [A, B, C, D]>;
    };
}>;
export declare const unknowns: Guard<readonly unknown[]>;
export declare const unknownsU: Guard<readonly unknown[] | undefined>;
export declare const not: (<T, V>(value: V, guard: Guard<T>) => value is Exclude<V, T>) & Readonly<{
    array: ExclusionGuard<baseUnknowns>;
    boolean: ExclusionGuard<boolean>;
    empty: ExclusionGuard<baseEmpty>;
    factory: typeof _notFactory;
    false: ExclusionGuard<false>;
    indexedObject: ExclusionGuard<IndexedObject>;
    map: ExclusionGuard<ReadonlyMap<unknown, unknown>>;
    null: ExclusionGuard<null>;
    numStr: ExclusionGuard<NumStr>;
    number: ExclusionGuard<number>;
    object: ExclusionGuard<object>;
    propertyKey: ExclusionGuard<PropertyKey>;
    set: ExclusionGuard<ReadonlySet<unknown>>;
    string: ExclusionGuard<string>;
    stringU: ExclusionGuard<baseStringU>;
    symbol: ExclusionGuard<symbol>;
    true: ExclusionGuard<true>;
    undefined: ExclusionGuard<undefined>;
}>;
/**
 * Checks if value is a boolean.
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
export declare function boolean(value: unknown): value is boolean;
/**
 * Checks if value type is T.
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export declare function callable<T extends types.fn.Callable>(value: unknown): value is T;
/**
 * Checks if value type is T.
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export declare function constructor<T extends types.fn.Constructor>(value: unknown): value is T;
/**
 * Checks if value type is empty.
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
export declare function empty(value: unknown): value is baseEmpty;
/**
 * Checks if value type is T.
 * @param value - Value.
 * @param en - Validation object.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export declare function enumeration<T extends string>(value: unknown, en: IndexedRecord<T>): value is T;
/**
 * Creates single-arg guard.
 * @param guard - Multi-arg guard.
 * @param args - Arguments.
 * @returns Single-arg guard.
 */
export declare function factory<T, A extends baseUnknowns>(guard: MultiArgGuard<T, A>, ...args: A): Guard<T>;
/**
 * Checks if value type is T.
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export declare function instanceOf<T>(value: unknown, ctor: types.fn.Constructor<T>): value is T;
/**
 * Checks if value type is T[].
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export declare function instancesOf<T>(value: unknown, ctor: types.fn.Constructor<T>): value is readonly T[];
/**
 * Checks if value is _never_.
 * @param _value - Value.
 * @returns _False_.
 */
export declare function never(_value: unknown): _value is never;
/**
 * Checks if value type is NumStr.
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
export declare function numStr(value: unknown): value is NumStr;
/**
 * Checks if value is a number.
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
export declare function number(value: unknown): value is number;
/**
 * Checks if value type is PropertyKey.
 * @param value - Value.
 * @returns _True_ if value type is PropertyKey, _false_ otherwise.
 */
export declare function propertyKey(value: unknown): value is PropertyKey;
/**
 * Checks if value is a string.
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export declare function string(value: unknown): value is string;
/**
 * Checks if value is a string.
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export declare function stringU(value: unknown): value is baseStringU;
/**
 * Checks if value is a symbol.
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
export declare function symbol(value: unknown): value is symbol;
/**
 * Checks if value is _unknown_.
 * @param _value - Value.
 * @returns _True_.
 */
export declare function unknown(_value: unknown): _value is unknown;
export interface ExclusionGuard<T> {
    /**
     * Checks if value type is not T.
     * @param value - Value.
     * @returns _True_ if value type is not T, _false_ otherwise.
     */
    <V>(value: V): value is Exclude<V, T>;
}
export interface Guard<T = unknown> {
    /**
     * Checks if value type is T.
     * @param value - Value.
     * @returns _True_ if value type is T, _false_ otherwise.
     */
    (value: unknown): value is T;
}
export type Guards = readonly Guard[];
export type GuardsRecord<T, K extends keyof T = keyof T> = {
    readonly [L in K]-?: Guard<T[L]>;
};
export interface MultiArgGuard<T, A extends baseUnknowns> {
    /**
     * Checks if value type is T.
     * @param value - Value.
     * @param args - Arguments.
     * @returns _True_ if value type is T, _false_ otherwise.
     */
    (value: unknown, ...args: A): value is T;
}
/**
 * Checks if value is _false_.
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
declare function _false(value: unknown): value is false;
/**
 * Creates guard for type not T.
 * @param guard - Guard for type T.
 * @returns Guard for type not T.
 */
declare function _notFactory<T>(guard: Guard<T>): ExclusionGuard<T>;
/**
 * Checks if value is _null_.
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
declare function _null(value: unknown): value is null;
/**
 * Checks if value is _true_.
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
declare function _true(value: unknown): value is true;
/**
 * Checks if value is _undefined_.
 * @param value - Value.
 * @returns _True_ if value is _undefined_, _false_ otherwise.
 */
declare function _undefined(value: unknown): value is undefined;
//# sourceMappingURL=guards.d.ts.map