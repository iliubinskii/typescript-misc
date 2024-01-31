/* eslint-disable misc/typescript-misc/functions/array/prefer-clone -- Ok */
/* eslint-disable misc/typescript-misc/functions/array/prefer-fromIterable -- Ok */
/* eslint-disable misc/typescript-misc/functions/object/prefer-entries -- Ok */
/* eslint-disable misc/typescript-misc/functions/object/prefer-hasOwnProp -- Ok */
/* eslint-disable misc/typescript-misc/functions/object/prefer-values -- Ok */

import type {
  IndexedObject,
  IndexedRecord,
  NumStr,
  empty as baseEmpty,
  stringU as baseStringU,
  unknowns as baseUnknowns,
  types
} from "../types";
import { defineFn, overload } from "./core";

export {
  _false as false,
  _null as null,
  _true as true,
  _undefined as undefined
};

export const and = defineFn(
  overload(() => {
    return result;

    /**
     * Checks if value type is A & B.
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @returns _True_ if value type is A & B, _false_ otherwise.
     */
    function result<A, B>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>
    ): value is A & B;

    /**
     * Checks if value type is A & B & C.
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @returns _True_ if value type is A & B & C, _false_ otherwise.
     */
    function result<A, B, C>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>,
      guard3: Guard<C>
    ): value is A & B & C;

    /**
     * Checks if value type is A & B & C & D.
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @param guard4 - Guard for type D.
     * @returns _True_ if value type is A & B & C & D, _false_ otherwise.
     */
    function result<A, B, C, D>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>,
      guard3: Guard<C>,
      guard4: Guard<D>
    ): value is A & B & C & D;

    function result(value: unknown, ...guards: Guards): value is unknown {
      return guards.every(guard => guard(value));
    }
  }),
  {
    factory: overload(() => {
      return result;

      /**
       * Creates guard for type A & B.
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @returns Guard for type A & B.
       */
      function result<A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A & B>;

      /**
       * Creates guard for type A & B & C.
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @param guard3 - Guard for type C.
       * @returns Guard for type A & B & C.
       */
      function result<A, B, C>(
        guard1: Guard<A>,
        guard2: Guard<B>,
        guard3: Guard<C>
      ): Guard<A & B & C>;

      /**
       * Creates guard for type A & B & C & D.
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @param guard3 - Guard for type C.
       * @param guard4 - Guard for type D.
       * @returns Guard for type A & B & C & D.
       */
      function result<A, B, C, D>(
        guard1: Guard<A>,
        guard2: Guard<B>,
        guard3: Guard<C>,
        guard4: Guard<D>
      ): Guard<A & B & C & D>;

      function result(...guards: Guards): Guard {
        return (value): value is unknown => guards.every(guard => guard(value));
      }
    })
  }
);

export const or = defineFn(
  overload(() => {
    return result;

    /**
     * Checks if value type is A | B.
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @returns _True_ if value type is A | B, _false_ otherwise.
     */
    function result<A, B>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>
    ): value is A | B;

    /**
     * Checks if value type is A | B | C.
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @returns _True_ if value type is A | B | C, _false_ otherwise.
     */
    function result<A, B, C>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>,
      guard3: Guard<C>
    ): value is A | B | C;

    /**
     * Checks if value type is A | B | C | D.
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @param guard4 - Guard for type D.
     * @returns _True_ if value type is A | B | C | D, _false_ otherwise.
     */
    function result<A, B, C, D>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>,
      guard3: Guard<C>,
      guard4: Guard<D>
    ): value is A | B | C | D;

    function result(value: unknown, ...guards: Guards): value is unknown {
      return guards.some(guard => guard(value));
    }
  }),
  {
    factory: overload(() => {
      return result;

      /**
       * Creates guard for type A | B.
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @returns Guard for type A | B.
       */
      function result<A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A | B>;

      /**
       * Creates guard for type A | B | C.
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @param guard3 - Guard for type C.
       * @returns Guard for type A | B | C.
       */
      function result<A, B, C>(
        guard1: Guard<A>,
        guard2: Guard<B>,
        guard3: Guard<C>
      ): Guard<A | B | C>;

      /**
       * Creates guard for type A | B | C | D.
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @param guard3 - Guard for type C.
       * @param guard4 - Guard for type D.
       * @returns Guard for type A | B | C | D.
       */
      function result<A, B, C, D>(
        guard1: Guard<A>,
        guard2: Guard<B>,
        guard3: Guard<C>,
        guard4: Guard<D>
      ): Guard<A | B | C | D>;

      function result(...guards: Guards): Guard {
        return (value): value is unknown => guards.some(guard => guard(value));
      }
    })
  }
);

export const array = defineFn(
  /**
   * Checks if value is an array.
   *
   * @param value - Value.
   * @returns _True_ if value is an array, _false_ otherwise.
   */
  (value: unknown): value is baseUnknowns => Array.isArray(value),
  {
    /**
     * Checks if value type is T[].
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is T[], _false_ otherwise.
     */
    of: <T>(value: unknown, guard: Guard<T>): value is readonly T[] =>
      array(value) && value.every(guard)
  }
);

export const arrayU = or.factory(array, _undefined);

export const arrays = factory(array.of, array);

export const arraysU = or.factory(arrays, _undefined);

export const booleanU = or.factory(boolean, _undefined);

export const booleans = factory(array.of, boolean);

export const booleansU = or.factory(booleans, _undefined);

export const indexedObject = defineFn(
  /**
   * Checks if value type is IndexedObject.
   *
   * @param value - Value.
   * @returns _True_ if value type is IndexedObject, _false_ otherwise.
   */
  (value: unknown): value is IndexedObject =>
    typeof value === "object" && value !== null,
  {
    /**
     * Checks if value type is IndexedObject\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
     */
    of: <T>(value: unknown, guard: Guard<T>): value is IndexedObject<T> =>
      object(value) && Object.values(value).every(guard)
  }
);

export const indexedObjectU = or.factory(indexedObject, _undefined);

export const indexedObjects = factory(array.of, indexedObject);

export const indexedObjectsU = or.factory(indexedObjects, _undefined);

export const map = defineFn(
  /**
   * Checks if value type is Map.
   *
   * @param value - Value.
   * @returns _True_ if value type is Map, _false_ otherwise.
   */
  (value: unknown): value is ReadonlyMap<unknown, unknown> =>
    value instanceof Map,
  {
    /**
     * Checks if value type is Map\<K, V\>.
     *
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
     */
    of: <K, V>(
      value: unknown,
      keyGuard: Guard<K>,
      valueGuard: Guard<V>
    ): value is ReadonlyMap<K, V> =>
      map(value) && [...value].every(([k, v]) => keyGuard(k) && valueGuard(v))
  }
);

export const mapU = or.factory(map, _undefined);

export const maps = factory(array.of, map);

export const mapsU = or.factory(maps, _undefined);

export const numStrU = or.factory(numStr, _undefined);

export const numStrs = factory(array.of, numStr);

export const numStrsU = or.factory(numStrs, _undefined);

export const numberU = or.factory(number, _undefined);

export const numbers = factory(array.of, number);

export const numbersU = or.factory(numbers, _undefined);

export const object = defineFn(
  /**
   * Checks if value is an object.
   *
   * @param value - Value.
   * @returns _True_ if value is an object, _false_ otherwise.
   */
  (value: unknown): value is object =>
    typeof value === "object" && value !== null,
  {
    factory: overload(() => {
      return result;

      /**
       * Creates object guard.
       *
       * @param required - Guards for required properties.
       * @param optional - Guards for optional properties.
       * @returns Object guard.
       */
      function result<R extends object, O extends object>(
        required: GuardsRecord<R, keyof R>,
        optional: GuardsRecord<O, keyof O>
      ): Guard<
        types.object.style.Optional<Partial<O>> &
          types.object.style.Undefined<R>
      >;

      /**
       * Creates object guard.
       *
       * @param required - Guards for required properties.
       * @param optional - Guards for optional properties.
       * @returns Object guard.
       */
      function result<T extends object>(
        required: GuardsRecord<T, types.object.keys.Required<T>>,
        optional: GuardsRecord<T, types.object.keys.Optional<T>>
      ): Guard<T>;

      function result<T extends object>(
        required: GuardsRecord<T, types.object.keys.Required<T>>,
        optional: GuardsRecord<T, types.object.keys.Optional<T>>
      ): Guard<T> {
        return (value): value is T => object.of(value, required, optional);
      }
    }),
    of: overload(() => {
      return result;

      /**
       * Checks if value is an object.
       *
       * @param value - Value.
       * @param required - Guards for required properties.
       * @param optional - Guards for optional properties.
       * @returns _True_ if value is an object, _false_ otherwise.
       */
      function result<R extends object, O extends object>(
        value: unknown,
        required: GuardsRecord<R, keyof R>,
        optional: GuardsRecord<O, keyof O>
      ): value is types.object.style.Optional<Partial<O>> &
        types.object.style.Undefined<R>;

      /**
       * Checks if value is an object.
       *
       * @param value - Value.
       * @param required - Guards for required properties.
       * @param optional - Guards for optional properties.
       * @returns _True_ if value is an object, _false_ otherwise.
       */
      function result<T extends object>(
        value: unknown,
        required: GuardsRecord<T, types.object.keys.Required<T>>,
        optional: GuardsRecord<T, types.object.keys.Optional<T>>
      ): value is T;

      function result<T extends object>(
        value: unknown,
        required: GuardsRecord<T, types.object.keys.Required<T>>,
        optional: GuardsRecord<T, types.object.keys.Optional<T>>
      ): value is T {
        return (
          indexedObject(value) &&
          Object.entries(required).every(([key, guard]) =>
            checkRequiredProp(value, key, guard as Guard)
          ) &&
          Object.entries(optional).every(([key, guard]) =>
            checkOptionalProp(value, key, guard as Guard)
          )
        );
      }
    })
  }
);

export const objectU = or.factory(object, _undefined);

export const objects = factory(array.of, object);

export const objectsU = or.factory(objects, _undefined);

export const propertyKeyU = or.factory(propertyKey, _undefined);

export const propertyKeys = factory(array.of, propertyKey);

export const propertyKeysU = or.factory(propertyKeys, _undefined);

export const set = defineFn(
  /**
   * Checks if value type is Set.
   *
   * @param value - Value.
   * @returns _True_ if value type is Set, _false_ otherwise.
   */
  (value: unknown): value is ReadonlySet<unknown> => value instanceof Set,
  {
    /**
     * Checks if value type is Set\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
     */
    of: <T>(value: unknown, guard: Guard<T>): value is ReadonlySet<T> =>
      set(value) && [...value].every(v => guard(v))
  }
);

export const setU = or.factory(set, _undefined);

export const sets = factory(array.of, set);

export const setsU = or.factory(sets, _undefined);

export const strings = factory(array.of, string);

export const stringsU = or.factory(strings, _undefined);

export const symbolU = or.factory(symbol, _undefined);

export const symbols = factory(array.of, symbol);

export const symbolsU = or.factory(symbols, _undefined);

export const tuple = defineFn(
  overload(() => {
    return result;

    /**
     * Checks if value type is [A].
     *
     * @param value - Value.
     * @param guard - Guard for type A.
     * @returns _True_ if value type is [A], _false_ otherwise.
     */
    function result<A>(value: unknown, guard: Guard<A>): value is readonly [A];

    /**
     * Checks if value type is [A, B].
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @returns _True_ if value type is [A, B], _false_ otherwise.
     */
    function result<A, B>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>
      // eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
    ): value is readonly [A, B];

    /**
     * Checks if value type is [A, B, C].
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @returns _True_ if value type is [A, B, C], _false_ otherwise.
     */
    function result<A, B, C>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>,
      guard3: Guard<C>
      // eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
    ): value is readonly [A, B, C];

    /**
     * Checks if value type is [A, B, C, D].
     *
     * @param value - Value.
     * @param guard1 - Guard for type A.
     * @param guard2 - Guard for type B.
     * @param guard3 - Guard for type C.
     * @param guard4 - Guard for type D.
     * @returns _True_ if value type is [A, B, C, D], _false_ otherwise.
     */
    function result<A, B, C, D>(
      value: unknown,
      guard1: Guard<A>,
      guard2: Guard<B>,
      guard3: Guard<C>,
      guard4: Guard<D>
      // eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
    ): value is readonly [A, B, C, D];

    function result(value: unknown, ...guards: Guards): value is unknown {
      return (
        array(value) && guards.every((guard, index) => guard(value[index]))
      );
    }
  }),
  {
    factory: overload(() => {
      return result;

      /**
       * Creates guard for type [A].
       *
       * @param guard - Guard for type A.
       * @returns Guard for type [A].
       */
      function result<A>(guard: Guard<A>): Guard<readonly [A]>;

      /**
       * Creates guard for type [A, B].
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @returns Guard for type [A, B].
       */
      function result<A, B>(
        guard1: Guard<A>,
        guard2: Guard<B>
        // eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
      ): Guard<readonly [A, B]>;

      /**
       * Creates guard for type [A, B, C].
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @param guard3 - Guard for type C.
       * @returns Guard for type [A, B, C].
       */
      function result<A, B, C>(
        guard1: Guard<A>,
        guard2: Guard<B>,
        guard3: Guard<C>
        // eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
      ): Guard<readonly [A, B, C]>;

      /**
       * Creates guard for type [A, B, C, D].
       *
       * @param guard1 - Guard for type A.
       * @param guard2 - Guard for type B.
       * @param guard3 - Guard for type C.
       * @param guard4 - Guard for type D.
       * @returns Guard for type [A, B, C, D].
       */
      function result<A, B, C, D>(
        guard1: Guard<A>,
        guard2: Guard<B>,
        guard3: Guard<C>,
        guard4: Guard<D>
        // eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
      ): Guard<readonly [A, B, C, D]>;

      function result(...guards: Guards): Guard {
        return (value): value is unknown =>
          array(value) && guards.every((guard, index) => guard(value[index]));
      }
    })
  }
);

export const unknowns = factory(array.of, unknown);

export const unknownsU = or.factory(unknowns, _undefined);

export const not = defineFn(
  /**
   * Checks if value type is not T.
   *
   * @param value - Value.
   * @param guard - Guard for type T.
   * @returns _True_ if value type is not T, _false_ otherwise.
   */
  <T, V>(value: V, guard: Guard<T>): value is Exclude<V, T> => !guard(value),
  {
    array: _notFactory(array),
    boolean: _notFactory(boolean),
    empty: _notFactory(empty),
    factory: _notFactory,
    false: _notFactory(_false),
    indexedObject: _notFactory(indexedObject),
    map: _notFactory(map),
    null: _notFactory(_null),
    numStr: _notFactory(numStr),
    number: _notFactory(number),
    object: _notFactory(object),
    propertyKey: _notFactory(propertyKey),
    set: _notFactory(set),
    string: _notFactory(string),
    stringU: _notFactory(stringU),
    symbol: _notFactory(symbol),
    true: _notFactory(_true),
    undefined: _notFactory(_undefined)
  }
);

/**
 * Checks if value is a boolean.
 *
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
export function boolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

/**
 * Checks if value type is T.
 *
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function callable<T extends types.fn.Callable>(
  value: unknown
): value is T {
  return typeof value === "function";
}

/**
 * Checks if value type is T.
 *
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function constructor<T extends types.fn.Constructor>(
  value: unknown
): value is T {
  return typeof value === "function";
}

/**
 * Checks if value type is empty.
 *
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
export function empty(value: unknown): value is baseEmpty {
  return value === null || value === undefined;
}

/**
 * Checks if value type is T.
 *
 * @param value - Value.
 * @param en - Validation object.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function enumeration<T extends string>(
  value: unknown,
  en: IndexedRecord<T>
): value is T {
  return Object.values<unknown>(en).includes(value);
}

/**
 * Creates single-arg guard.
 *
 * @param guard - Multi-arg guard.
 * @param args - Arguments.
 * @returns Single-arg guard.
 */
export function factory<T, A extends baseUnknowns>(
  guard: MultiArgGuard<T, A>,
  ...args: A
): Guard<T> {
  return (value): value is T => guard(value, ...args);
}

/**
 * Checks if value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function instanceOf<T>(
  value: unknown,
  ctor: types.fn.Constructor<T>
): value is T {
  return value instanceof ctor;
}

/**
 * Checks if value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export function instancesOf<T>(
  value: unknown,
  ctor: types.fn.Constructor<T>
): value is readonly T[] {
  return array(value) && value.every(v => v instanceof ctor);
}

/**
 * Checks if value is _never_.
 *
 * @param _value - Value.
 * @returns _False_.
 */
export function never(_value: unknown): _value is never {
  return false;
}

/**
 * Checks if value type is NumStr.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
export function numStr(value: unknown): value is NumStr {
  switch (typeof value) {
    case "number":
      return !Number.isNaN(value);

    case "string":
      return true;

    default:
      return false;
  }
}

/**
 * Checks if value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
export function number(value: unknown): value is number {
  return typeof value === "number" && !Number.isNaN(value);
}

/**
 * Checks if value type is PropertyKey.
 *
 * @param value - Value.
 * @returns _True_ if value type is PropertyKey, _false_ otherwise.
 */
export function propertyKey(value: unknown): value is PropertyKey {
  switch (typeof value) {
    case "number":
      return !Number.isNaN(value);

    case "string":
      return true;

    case "symbol":
      return true;

    default:
      return false;
  }
}

/**
 * Checks if value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export function string(value: unknown): value is string {
  return typeof value === "string";
}

/**
 * Checks if value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export function stringU(value: unknown): value is baseStringU {
  switch (typeof value) {
    case "string":
      return value !== "";

    case "undefined":
      return true;

    default:
      return false;
  }
}

/**
 * Checks if value is a symbol.
 *
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
export function symbol(value: unknown): value is symbol {
  return typeof value === "symbol";
}

/**
 * Checks if value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_.
 */
export function unknown(_value: unknown): _value is unknown {
  return true;
}

export interface ExclusionGuard<T> {
  /**
   * Checks if value type is not T.
   *
   * @param value - Value.
   * @returns _True_ if value type is not T, _false_ otherwise.
   */
  <V>(value: V): value is Exclude<V, T>;
}

export interface Guard<T = unknown> {
  /**
   * Checks if value type is T.
   *
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
   *
   * @param value - Value.
   * @param args - Arguments.
   * @returns _True_ if value type is T, _false_ otherwise.
   */
  (value: unknown, ...args: A): value is T;
}

/**
 * Checks if value is _false_.
 *
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
function _false(value: unknown): value is false {
  return value === false;
}

/**
 * Creates guard for type not T.
 *
 * @param guard - Guard for type T.
 * @returns Guard for type not T.
 */
function _notFactory<T>(guard: Guard<T>): ExclusionGuard<T> {
  return <V>(value: V): value is Exclude<V, T> => !guard(value);
}

/**
 * Checks if value is _null_.
 *
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
function _null(value: unknown): value is null {
  return value === null;
}

/**
 * Checks if value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
function _true(value: unknown): value is true {
  return value === true;
}

/**
 * Checks if value is _undefined_.
 *
 * @param value - Value.
 * @returns _True_ if value is _undefined_, _false_ otherwise.
 */
function _undefined(value: unknown): value is undefined {
  return value === undefined;
}

/**
 * Checks if object has optional property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns _True_ if object has optional property, _false_ otherwise.
 */
function checkOptionalProp(
  obj: IndexedObject,
  key: PropertyKey,
  guard: Guard
): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key)
    ? guard(obj[key])
    : true;
}

/**
 * Checks if object has required property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns _True_ if object has required property, _false_ otherwise.
 */
function checkRequiredProp(
  obj: IndexedObject,
  key: PropertyKey,
  guard: Guard
): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key)
    ? guard(obj[key])
    : false;
}
