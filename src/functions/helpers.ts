import * as as from "./inline-assertions";
import * as cast from "./converters";
import * as fn from "./function";
import * as is from "./guards";
import * as o from "./object";
import * as reflect from "./reflect";
import type { And, unknowns } from "../types";
import { ReadonlyMap, ReadonlySet, typedef } from "./core";

export enum ProxyHandlerAction {
  doDefault = "doDefault",
  throw = "throw"
}

/**
 * Self-binds all methods.
 *
 * @param obj - Object.
 * @returns Proxy.
 */
export function classToInterface<T extends object>(
  obj: T
): ClassToInterface<T> {
  return new Proxy(
    obj,
    wrapProxyHandler("classToInterface", ProxyHandlerAction.doDefault, {
      get: (target, key) => {
        const result = reflect.get(target, key);

        return is.callable(result) ? result.bind(target) : result;
      }
    })
  ) as ClassToInterface<T>;
}

/**
 * Creates facade.
 *
 * @param name - Facade name.
 * @param extension - Facade extension.
 * @returns Facade.
 */
export function createFacade<I extends object, E = unknown>(
  name: string,
  extension: E
): Facade<I, E> {
  let _implementation: I | undefined;

  const ownMethods: E & FacadeOwnMethods<I> = {
    setImplementation: value => {
      _implementation = value;
    },
    ...extension
  };

  const proxy = new Proxy(
    fn.noop,
    wrapProxyHandler("createFacade", ProxyHandlerAction.throw, {
      apply: (_target, thisArg, args: unknowns) =>
        reflect.apply(as.callable(target()), thisArg, args),
      get: (_target, key) => reflect.get(target(key), key),
      getOwnPropertyDescriptor: (_target, key) =>
        reflect.getOwnPropertyDescriptor(target(key), key),
      has: (_target, key) => reflect.has(target(key), key),
      isExtensible: () => reflect.isExtensible(target()),
      ownKeys: () => reflect.ownKeys(target()),
      set: (_target, key, value) => reflect.set(target(key), key, value)
    })
  );

  return proxy as Facade<I, E>;

  function target(key?: PropertyKey): object {
    if (is.not.empty(key) && key in ownMethods) return ownMethods;

    if (is.not.empty(_implementation)) return _implementation;

    try {
      throw new Error("Get stack trace");
    } catch (e) {
      if (
        e instanceof Error &&
        is.not.empty(e.stack) &&
        e.stack.includes("isLikelyComponentType")
      )
        return ownMethods;
    }

    throw new Error(
      is.not.empty(key)
        ? `Missing facade implementation: ${name} (key: ${cast.string(key)})`
        : `Missing facade implementation: ${name}`
    );
  }
}

/**
 * Returns an object that throws an error on any attempted accessed.
 *
 * @returns An object.
 */
export function neverDemand<T extends object>(): T {
  return onDemand((): T => {
    throw new Error("This object should never be demanded");
  });
}

/**
 * Generates resource on demand.
 *
 * @param generator - Resource generator.
 * @returns Resource.
 */
export function onDemand<T extends object>(generator: () => T): T {
  let _obj: T | undefined;

  const proxy = new Proxy(
    {} as T,
    wrapProxyHandler("onDemand", ProxyHandlerAction.throw, {
      get: (_target, key) => reflect.get(obj(), key),
      getOwnPropertyDescriptor: (_target, key) =>
        reflect.getOwnPropertyDescriptor(obj(), key),
      has: (_target, key) => reflect.has(obj(), key),
      isExtensible: () => reflect.isExtensible(obj()),
      ownKeys: () => reflect.ownKeys(obj()),
      set: (_target, key, value) => {
        reflect.set(obj(), key, value);

        return true;
      }
    })
  );

  return proxy;

  function obj(): object {
    _obj ??= generator();

    return _obj;
  }
}

/**
 * Creates safe access interface for an object.
 *
 * @param obj - Object.
 * @param guards - Guards.
 * @param readonlyKeys - Readonly keys.
 * @returns Safe access interface.
 */
export function safeAccess<
  T extends object,
  W extends string & keyof T,
  R extends string & keyof T
>(
  obj: T,
  guards: SafeAccessGuards<T, W>,
  readonlyKeys: readonly R[] = []
): SafeAccess<T, W, R> {
  const guardsMap = new ReadonlyMap<PropertyKey, is.Guard>(o.entries(guards));

  const writableKeys = o.keys(guards);

  const keys = [...writableKeys, ...readonlyKeys] as const;

  const keysSet = new ReadonlySet<PropertyKey>(keys);

  return new Proxy(
    obj,
    wrapProxyHandler("safeAccess", ProxyHandlerAction.throw, {
      get: (target, key) => {
        if (keysSet.has(key)) return reflect.get(target, key);

        throw new Error(`Read access denied: ${cast.string(key)}`);
      },
      getOwnPropertyDescriptor: (target, key) => {
        if (keysSet.has(key))
          return reflect.getOwnPropertyDescriptor(target, key);

        throw new Error(`Read access denied: ${cast.string(key)}`);
      },
      has: (_target, key) => keysSet.has(key),
      isExtensible: target => reflect.isExtensible(target),
      ownKeys: () => keys,
      set: (target, key, value) => {
        const guard = guardsMap.get(key);

        if (guard) {
          if (guard(value)) return reflect.set(target, key, value);

          throw new Error(`Type check failed: ${cast.string(key)}`);
        }

        throw new Error(`Write access denied: ${cast.string(key)}`);
      }
    })
  );
}

/**
 * Delays program execution.
 *
 * @param timeout - Timeout (ms).
 */
export async function wait(timeout: number): Promise<void> {
  // eslint-disable-next-line promise/avoid-new -- Ok
  await new Promise<void>(resolve => {
    setTimeout(resolve, timeout);
  });
}

/**
 * Adds missing methods to proxy handler.
 *
 * @param id - ID.
 * @param action - Action for missing methods.
 * @param handler - Handler.
 * @returns New handler with missing methods added.
 */
export function wrapProxyHandler<T extends object>(
  id: string,
  action: ProxyHandlerAction,
  handler: Readonly<ProxyHandler<T>>
): ProxyHandler<T> {
  switch (action) {
    case ProxyHandlerAction.doDefault:
      return typedef<ProxyHandler<T>>({
        apply: (target, thisArg, args: unknowns) =>
          reflect.apply(as.callable(target), thisArg, args),
        construct: (target, args: unknowns, newTarget) =>
          as.object(
            reflect.construct(
              as.constructor(target),
              args,
              as.constructor(newTarget)
            )
          ),
        defineProperty: (target, key, attrs) =>
          reflect.defineProperty(target, key, attrs),
        deleteProperty: (target, key) => reflect.deleteProperty(target, key),
        get: (target, key) => reflect.get(target, key),
        getOwnPropertyDescriptor: (target, key) =>
          reflect.getOwnPropertyDescriptor(target, key),
        getPrototypeOf: target => reflect.getPrototypeOf(target),
        has: (target, key) => reflect.has(target, key),
        isExtensible: target => reflect.isExtensible(target),
        ownKeys: target => reflect.ownKeys(target),
        preventExtensions: target => reflect.preventExtensions(target),
        set: (target, key, value) => reflect.set(target, key, value),
        setPrototypeOf: (target, proto) =>
          reflect.setPrototypeOf(target, proto),
        ...handler
      });

    case ProxyHandlerAction.throw:
      return typedef<ProxyHandler<T>>({
        apply: () => {
          throw new Error(`Not implemented: ${id}.apply`);
        },
        construct: () => {
          throw new Error(`Not implemented: ${id}.construct`);
        },
        defineProperty: () => {
          throw new Error(`Not implemented: ${id}.defineProperty`);
        },
        deleteProperty: () => {
          throw new Error(`Not implemented: ${id}.deleteProperty`);
        },
        get: () => {
          throw new Error(`Not implemented: ${id}.get`);
        },
        getOwnPropertyDescriptor: () => {
          throw new Error(`Not implemented: ${id}.getOwnPropertyDescriptor`);
        },
        getPrototypeOf: () => {
          throw new Error(`Not implemented: ${id}.getPrototypeOf`);
        },
        has: () => {
          throw new Error(`Not implemented: ${id}.has`);
        },
        isExtensible: () => {
          throw new Error(`Not implemented: ${id}.isExtensible`);
        },
        ownKeys: () => {
          throw new Error(`Not implemented: ${id}.ownKeys`);
        },
        preventExtensions: () => {
          throw new Error(`Not implemented: ${id}.preventExtensions`);
        },
        set: () => {
          throw new Error(`Not implemented: ${id}.set`);
        },
        setPrototypeOf: () => {
          throw new Error(`Not implemented: ${id}.setPrototypeOf`);
        },
        ...handler
      });
  }
}

export type ClassToInterface<T extends object> = { [K in keyof T]: T[K] };

export type Facade<I, E = unknown> = E & FacadeOwnMethods<I> & I;

export interface FacadeOwnMethods<I> {
  /**
   * Sets implementation.
   *
   * @param implementation - Implementation.
   */
  readonly setImplementation: (implementation: I) => void;
}

export type SafeAccess<
  T extends object,
  W extends string & keyof T,
  R extends string & keyof T
> = And<{ [K in W]: T[K] }, { readonly [K in R]: T[K] }>;

export declare type SafeAccessGuards<T, W extends string & keyof T> = {
  readonly [K in W]: is.Guard<T[K]>;
};
