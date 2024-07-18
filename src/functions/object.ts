import * as a from "./array";
import * as as from "./inline-assertions";
import * as is from "./guards";
import type {
  Entry,
  NumStr,
  PartialRecord,
  Rec,
  Writable,
  WritableIndexedObject,
  WritablePartialRecord,
  objectU,
  types
} from "../types";
import { ReadonlySet, defineFn, indexed } from "./core";

/**
 * Typed version of Object.assign.
 * @param target - Target.
 * @param sources - Sources.
 * @returns Target.
 */
export const assign: <T>(
  target: Writable<T>,
  ...sources: ReadonlyArray<Readonly<Partial<T>>>
) => T = Object.assign;

/**
 * Typed version of Object.defineProperty.
 * @param obj - Object.
 * @param key - Key.
 * @param descriptor - Descriptor.
 */
export const defineProperty: <T, K extends keyof T = keyof T>(
  obj: T,
  key: K,
  descriptor: Descriptor<T, K>
) => void = Object.defineProperty.bind(Object);

export const entries: {
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
} = Object.entries;

export const fromEntries = defineFn(
  /**
   * Creates object from entries.
   * @param entries - Entries.
   * @returns Object.
   */
  <K extends PropertyKey, V>(
    // eslint-disable-next-line misc/no-shadow -- Ok
    entries: Iterable<Entry<K, V>>
  ): PartialRecord<K, V> => {
    const result: WritablePartialRecord<K, V> = {};

    for (const entry of entries) result[entry[0]] = entry[1];

    return result;
  },
  {
    /**
     * Creates object from entries.
     * @param entries - Entries.
     * @returns Object.
     */
    exhaustive: <K extends PropertyKey, V>(
      // eslint-disable-next-line misc/no-shadow -- Ok
      entries: Iterable<Entry<K, V>>
    ): Rec<K, V> => {
      const result: WritablePartialRecord<K, V> = {};

      for (const entry of entries) result[entry[0]] = entry[1];

      return result as Rec<K, V>;
    }
  }
);

export const keys: {
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
} = Object.keys;

export const values: {
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
} = Object.values;

export const removeUndefinedKeys = defineFn(
  /**
   * Removes undefined keys.
   * @param obj - Object.
   * @returns New object with undefined keys removed.
   */
  <T extends object>(obj: types.object.style.OptionalUndefined<T>): T =>
    filter(obj as object, is.not.empty) as T,
  {
    /**
     * Removes undefined keys.
     * @param obj - Object.
     * @returns New object with undefined keys removed.
     */
    alt: <T extends object>(obj: T): types.object.style.Optional<T> =>
      filter(obj as object, is.not.empty) as types.object.style.Optional<T>
  }
);

/**
 * Clones object.
 * @param obj - Object.
 * @returns New object.
 */
export function clone<T>(obj: T): Writable<T> {
  return { ...obj };
}

/**
 * Checks if every object property satisfies condition.
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if every object property satisfies condition, _false_ otherwise.
 */
export function every<T>(obj: T, predicate: Predicate<T>): boolean {
  return entries(obj).every(([key, value]) => predicate(value, key));
}

/**
 * Picks object entries by predicate.
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns New object.
 */
export function filter<T>(obj: T, predicate: Predicate<T>): Partial<T> {
  const result: Partial<T> = {};

  for (const [key, value] of entries(obj))
    if (predicate(value, key)) set(result, key, value);

  return result;
}

/**
 * Returns object property.
 * @param obj - Object.
 * @param key - Key.
 * @returns Object property.
 */
export function get(obj: object, key: PropertyKey): unknown;

/**
 * Returns object property.
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Object property if its type is T.
 * @throws AssertionError otherwise.
 */
export function get<T>(
  obj: object,
  key: PropertyKey,
  guard?: is.Guard<T>,
  defVal?: T
): T;

/**
 * Returns object property.
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Object property if its type is T.
 * @throws AssertionError otherwise.
 */
export function get(
  obj: object,
  key: PropertyKey,
  guard: is.Guard = is.unknown,
  defVal?: unknown
): unknown {
  return as.byGuard(indexed(obj)[key] ?? defVal, guard);
}

/**
 * Returns object prototype.
 * @param obj - Object.
 * @returns Object prototype if available, _undefined_ otherwise.
 */
export function getPrototypeOf(obj: object): objectU {
  const prototype = Object.getPrototypeOf(obj) as unknown;

  return is.object(prototype) ? prototype : undefined;
}

/**
 * Checks if object has property.
 * @param key - Key.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
export function hasOwnProp(key: PropertyKey, obj: object): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * Applies callback to each property.
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
export function map<K extends string, V, R>(
  obj: Rec<K, V>,
  callback: (value: V, key: K) => R
): Rec<K, R> {
  return fromEntries.exhaustive(
    entries(obj).map(([key, value]) => [key, callback(value, key)])
  );
}

/**
 * Omit object entries by predicate.
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns New object.
 */
export function omit<T>(obj: T, predicate: Predicate<T>): Partial<T> {
  const result: Partial<T> = {};

  for (const [key, value] of entries(obj))
    if (predicate(value, key)) {
      // Omit
    } else set(result, key, value);

  return result;
}

/**
 * Removes keys from object.
 * @param obj - Object.
 * @param exclude - Keys to omit.
 * @returns New object.
 */
export function omitKeys<
  T extends object,
  K extends types.object.keys.Optional<T> & string
>(obj: T, ...exclude: readonly K[]): T;

/**
 * Removes keys from object.
 * @param obj - Object.
 * @param exclude - Keys to omit.
 * @returns New object.
 */
export function omitKeys<T, K extends string & keyof T>(
  obj: T,
  ...exclude: readonly K[]
): types.object.Omit<T, K>;

/**
 * Removes keys from object.
 * @param obj - Object.
 * @param exclude - Keys to omit.
 * @returns New object.
 */
export function omitKeys<T, K extends string & keyof T>(
  obj: T,
  ...exclude: readonly K[]
): types.object.Omit<T, K> {
  const excludeSet = new ReadonlySet<keyof T>(exclude);

  const result = filter(obj, (_value, key) => !excludeSet.has(key));

  return result as types.object.Omit<T, K>;
}

/**
 * Adds prefix to object keys.
 * @param obj - Object.
 * @param prefix - Prefix.
 * @returns Object with prefixed keys.
 */
export function prefixKeys<T, P extends string>(
  obj: T,
  prefix: P
): PrefixKeys<T, P> {
  const result = fromEntries(
    entries(obj).map(([key, value]): Prefixed => [`${prefix}${key}`, value])
  );

  return result as unknown as PrefixKeys<T, P>;

  type Prefixed = Entry<`${P}${string & keyof T}`, T[keyof T]>;
}

/**
 * Sets object property.
 * @param obj - Object.
 * @param key - Key.
 * @param value - Value.
 */
export function set(obj: object, key: PropertyKey, value: unknown): void {
  (obj as WritableIndexedObject)[key] = value;
}

/**
 * Returns the number of enumerable properties.
 * @param obj - Object.
 * @returns The number of enumerable properties.
 */
export function size(obj: object): number {
  return keys(obj).length;
}

/**
 * Checks if some object property satisfies condition.
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if some object property satisfies condition, _false_ otherwise.
 */
export function some<T>(obj: T, predicate: Predicate<T>): boolean {
  return entries(obj).some(([key, value]) => predicate(value, key));
}

/**
 * Sorts object.
 * @param obj - Object.
 * @param compareFn - Comparison function.
 * @returns New object.
 */
export function sort<K extends string, V>(
  obj: Rec<K, V>,
  compareFn?: CompareFn<Rec<K, V>>
): Rec<K, V>;

/**
 * Sorts object.
 * @param obj - Object.
 * @param compareFn - Comparison function.
 * @returns New object.
 */
export function sort<T>(obj: T, compareFn?: CompareFn<T>): T;

/**
 * Sorts object.
 * @param obj - Object.
 * @param compareFn - Comparison function.
 * @returns New object.
 */
export function sort<K extends string, V>(
  obj: Rec<K, V>,
  compareFn?: CompareFn<Rec<K, V>>
): Rec<K, V> {
  return fromEntries.exhaustive(
    a.sort(
      entries(obj),
      compareFn
        ? (entry1, entry2): number =>
            compareFn(entry1[1], entry2[1], entry1[0], entry2[0])
        : undefined
    )
  );
}

export interface CompareFn<T> {
  /**
   * Compares two object entries.
   * @param value1 - Value 1.
   * @param value2 - Value 2.
   * @param key1 - Key 1.
   * @param key2 - Key 2.
   */
  (
    value1: T[keyof T],
    value2: T[keyof T],
    key1: keyof T,
    key2: keyof T
  ): number;
}

export interface Descriptor<T, K extends keyof T = keyof T>
  extends PropertyDescriptor {
  /**
   * Property getter.
   * @param this - This argument.
   * @returns Value.
   */
  // eslint-disable-next-line misc/consistent-optional-props -- Ok
  readonly get?: (this: T) => T[K];
  /**
   * Property setter.
   * @param this - This argument.
   * @param value - New value.
   */
  // eslint-disable-next-line misc/consistent-optional-props -- Ok
  readonly set?: (this: T, value: T[K]) => void;
  // eslint-disable-next-line misc/consistent-optional-props -- Ok
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
