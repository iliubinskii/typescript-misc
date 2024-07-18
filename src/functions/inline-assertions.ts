import * as is from "./guards";
import type {
  IndexedObject,
  IndexedRecord,
  NumStr,
  empty as baseEmpty,
  stringU as baseStringU,
  unknowns as baseUnknowns,
  types
} from "../types";
import { AssertionError } from "./errors";
import { defineFn } from "./core";

export {
  _false as false,
  _null as null,
  _true as true,
  _undefined as undefined
};

export const array = defineFn(factory(is.array), {
  /**
   * Asserts that value type is T[].
   * @param value - Value.
   * @param guard - Guard for type T.
   * @returns Value if value type is T[].
   * @throws Error otherwise.
   */
  of: <T>(value: unknown, guard: is.Guard<T>): readonly T[] => {
    if (is.array.of(value, guard)) return value;

    throw new AssertionError();
  }
});

export const arrayU = factory(is.arrayU);

export const arrays = factory(is.arrays);

export const arraysU = factory(is.arraysU);

export const boolean = factory(is.boolean);

export const booleanU = factory(is.booleanU);

export const booleans = factory(is.booleans);

export const booleansU = factory(is.booleansU);

export const empty = factory(is.empty);

export const indexedObject = defineFn(factory(is.indexedObject), {
  /**
   * Asserts that value type is IndexedObject\<T\>.
   * @param value - Value.
   * @param guard - Guard for type T.
   * @returns Value if value type is IndexedObject\<T\>.
   * @throws Error otherwise.
   */
  of: <T>(value: unknown, guard: is.Guard<T>): IndexedObject<T> => {
    if (is.indexedObject.of(value, guard)) return value;

    throw new AssertionError();
  }
});

export const indexedObjects = factory(is.indexedObjects);

export const indexedObjectsU = factory(is.indexedObjectsU);

export const map = defineFn(factory(is.map), {
  /**
   * Asserts that value type is Map\<K, V\>.
   * @param value - Value.
   * @param keyGuard - Key guard.
   * @param valueGuard - Value guard.
   * @returns Value if value type is Map\<K, V\>.
   * @throws Error otherwise.
   */
  of: <K, V>(
    value: unknown,
    keyGuard: is.Guard<K>,
    valueGuard: is.Guard<V>
  ): ReadonlyMap<K, V> => {
    if (is.map.of(value, keyGuard, valueGuard)) return value;

    throw new AssertionError();
  }
});

export const mapU = factory(is.mapU);

export const maps = factory(is.maps);

export const mapsU = factory(is.mapsU);

export const never = factory(is.never);

export const numStr = factory(is.numStr);

export const numStrU = factory(is.numStrU);

export const numStrs = factory(is.numStrs);

export const numStrsU = factory(is.numStrsU);

export const number = factory(is.number);

export const numberU = factory(is.numberU);

export const numbers = factory(is.numbers);

export const numbersU = factory(is.numbersU);

export const object = factory(is.object);

export const objectU = factory(is.objectU);

export const objects = factory(is.objects);

export const objectsU = factory(is.objectsU);

export const propertyKey = factory(is.propertyKey);

export const propertyKeyU = factory(is.propertyKeyU);

export const propertyKeys = factory(is.propertyKeys);

export const propertyKeysU = factory(is.propertyKeyU);

export const set = defineFn(factory(is.set), {
  /**
   * Asserts that value type is Set\<T\>.
   * @param value - Value.
   * @param guard - Guard for type T.
   * @returns Value if value type is Set\<T\>.
   * @throws Error otherwise.
   */
  of: <T>(value: unknown, guard: is.Guard<T>): ReadonlySet<T> => {
    if (is.set.of(value, guard)) return value;

    throw new AssertionError();
  }
});

export const setU = factory(is.setU);

export const sets = factory(is.sets);

export const setsU = factory(is.setsU);

export const string = factory(is.string);

export const stringU = factory(is.stringU);

export const strings = factory(is.strings);

export const stringsU = factory(is.stringsU);

export const symbol = factory(is.symbol);

export const symbolU = factory(is.symbolU);

export const symbols = factory(is.symbols);

export const symbolsU = factory(is.symbolsU);

export const unknown = factory(is.unknown);

export const unknowns = factory(is.unknowns);

export const unknownsU = factory(is.unknownsU);

export const not = {
  array: notFactory<baseUnknowns>(is.not.array),
  boolean: notFactory<boolean>(is.not.boolean),
  empty: notFactory<baseEmpty>(is.not.empty),
  false: notFactory<false>(is.not.false),
  indexedObject: notFactory<IndexedObject>(is.not.indexedObject),
  map: notFactory<ReadonlyMap<unknown, unknown>>(is.not.map),
  null: notFactory<null>(is.not.null),
  numStr: notFactory<NumStr>(is.not.numStr),
  number: notFactory<number>(is.not.number),
  object: notFactory<object>(is.not.object),
  propertyKey: notFactory<PropertyKey>(is.not.propertyKey),
  set: notFactory<ReadonlySet<unknown>>(is.not.set),
  string: notFactory<string>(is.not.string),
  stringU: notFactory<baseStringU>(is.not.stringU),
  symbol: notFactory<symbol>(is.not.symbol),
  true: notFactory<true>(is.not.true),
  undefined: notFactory<undefined>(is.not.undefined)
} as const;

/**
 * Asserts that value type is T.
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function byGuard<T>(value: unknown, guard: is.Guard<T>): T {
  if (guard(value)) return value;

  throw new AssertionError();
}

/**
 * Asserts that value type is T.
 * @param value - Value.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function callable<T extends types.fn.Callable>(value: unknown): T {
  if (is.callable<T>(value)) return value;

  throw new AssertionError();
}

/**
 * Asserts that value type is T.
 * @param value - Value.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function constructor<T extends types.fn.Constructor>(value: unknown): T {
  if (is.constructor<T>(value)) return value;

  throw new AssertionError();
}

/**
 * Asserts that value type is T.
 * @param value - Value.
 * @param en - Validation object.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function enumeration<T extends string>(
  value: unknown,
  en: IndexedRecord<T>
): T {
  if (is.enumeration(value, en)) return value;

  throw new AssertionError();
}

/**
 * Asserts that value type is T.
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function instanceOf<T>(
  value: unknown,
  ctor: types.fn.Constructor<T>
): T {
  if (is.instanceOf(value, ctor)) return value;

  throw new AssertionError();
}

/**
 * Asserts that value type is T[].
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if value type is T[].
 * @throws Error otherwise.
 */
export function instancesOf<T>(
  value: unknown,
  ctor: types.fn.Constructor<T>
): readonly T[] {
  if (is.instancesOf(value, ctor)) return value;

  throw new AssertionError();
}

export interface ExclusionInlineAssertion<T> {
  /**
   * Asserts value type.
   * @param value - Value.
   * @returns Value if its type is not T.
   * @throws Error otherwise.
   */
  <V>(value: V): Exclude<V, T>;
}

export interface InlineAssertion<T> {
  /**
   * Asserts value type.
   * @param value - Value.
   * @returns Value if its type is T.
   * @throws Error otherwise.
   */
  (value: unknown): T;
}

const _false = factory(is.false);

const _null = factory(is.null);

const _true = factory(is.true);

const _undefined = factory(is.undefined);

/**
 * Creates inline assertion.
 * @param guard - Guard for type T.
 * @returns Inline assertion for type T.
 */
function factory<T>(guard: is.Guard<T>): InlineAssertion<T> {
  /**
   * Asserts that value has expected type.
   * @param value - Value.
   * @returns Value if value has expected type.
   * @throws Error otherwise.
   */
  return (value: unknown): T => {
    if (guard(value)) return value;

    throw new AssertionError();
  };
}

/**
 * Creates inline assertion.
 * @param guard - Guard for type not T.
 * @returns Inline assertion for type not T.
 */
function notFactory<T>(
  guard: is.ExclusionGuard<T>
): ExclusionInlineAssertion<T> {
  /**
   * Asserts that value has expected type.
   * @param value - Value.
   * @returns Value if value has expected type.
   * @throws Error otherwise.
   */
  return <V>(value: V): Exclude<V, T> => {
    if (guard(value)) return value;

    throw new AssertionError();
  };
}
