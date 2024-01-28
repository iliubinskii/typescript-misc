import "reflect-metadata";
import * as as from "./inline-assertions";
import * as is from "./guards";
import type { types } from "../types";

/**
 * Typed version of Reflect.apply.
 *
 * @param target - Target function.
 * @param thisArg - This argument.
 * @param args - Arguments.
 * @returns Function execution result.
 */
export const apply: (
  target: types.fn.Callable,
  thisArg: unknown,
  args: ArrayLike<unknown>
) => unknown = Reflect.apply;

/**
 * Typed version of Reflect.construct.
 *
 * @param target - Target function.
 * @param args - Arguments.
 * @param newTarget - New target function.
 * @returns Constructed object.
 */
export const construct: (
  target: types.fn.Constructor,
  args: ArrayLike<unknown>,
  newTarget?: types.fn.Constructor
) => unknown = Reflect.construct;

export const defineProperty = Reflect.defineProperty;

export const deleteProperty = Reflect.deleteProperty;

export const getOwnPropertyDescriptor = Reflect.getOwnPropertyDescriptor;

export const getPrototypeOf = Reflect.getPrototypeOf;

export const has = Reflect.has;

export const isExtensible = Reflect.isExtensible;

export const ownKeys = Reflect.ownKeys;

export const preventExtensions = Reflect.preventExtensions;

export const set = Reflect.set;

export const setPrototypeOf = Reflect.setPrototypeOf;

/**
 * Typed version of Reflect.defineMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 */
export function defineMetadata(
  metadataKey: MetadataKey,
  metadataValue: unknown,
  target: object
): void {
  Reflect.defineMetadata(metadataKey, metadataValue, target);
}

/**
 * Typed version of Reflect.defineMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 * @param key - Property key.
 */
export function defineMetadataKey(
  metadataKey: MetadataKey,
  metadataValue: unknown,
  target: object,
  key: MetadataKey
): void {
  Reflect.defineMetadata(metadataKey, metadataValue, target, key);
}

/**
 * Typed version of Reflect.get.
 *
 * @param target - Target object.
 * @param key - Property key.
 * @returns Property value.
 */
export function get(target: object, key: PropertyKey): unknown;

/**
 * Typed version of Reflect.get.
 *
 * @param target - Target object.
 * @param key - Property key.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Property value if its type is T.
 * @throws AssertionError otherwise.
 */
export function get<T>(
  target: object,
  key: PropertyKey,
  guard?: is.Guard<T>,
  defVal?: T
): T;

export function get(
  target: object,
  key: PropertyKey,
  guard: is.Guard = is.unknown,
  defVal?: unknown
): unknown {
  return as.byGuard(Reflect.get(target, key) ?? defVal, guard);
}

/**
 * Typed version of Reflect.getMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
export function getMetadata(metadataKey: MetadataKey, target: object): unknown;

/**
 * Typed version of Reflect.getMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Metadata value if its type is T.
 * @throws AssertionError otherwise.
 */
export function getMetadata<T>(
  metadataKey: MetadataKey,
  target: object,
  guard?: is.Guard<T>,
  defVal?: T
): T;

export function getMetadata(
  metadataKey: MetadataKey,
  target: object,
  guard: is.Guard = is.unknown,
  defVal?: unknown
): unknown {
  return as.byGuard(Reflect.getMetadata(metadataKey, target) ?? defVal, guard);
}

/**
 * Typed version of Reflect.getMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns Metadata value.
 */
export function getMetadataKey(
  metadataKey: MetadataKey,
  target: object,
  key: MetadataKey
): unknown;

/**
 * Typed version of Reflect.getMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Metadata value if its type is T.
 * @throws AssertionError otherwise.
 */
export function getMetadataKey<T>(
  metadataKey: MetadataKey,
  target: object,
  key: MetadataKey,
  guard?: is.Guard<T>,
  defVal?: T
): T;

export function getMetadataKey(
  metadataKey: MetadataKey,
  target: object,
  key: MetadataKey,
  guard: is.Guard = is.unknown,
  defVal?: unknown
): unknown {
  return as.byGuard(
    Reflect.getMetadata(metadataKey, target, key) ?? defVal,
    guard
  );
}

/**
 * Typed version of Reflect.getOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
export function getOwnMetadata(
  metadataKey: MetadataKey,
  target: object
): unknown;

/**
 * Typed version of Reflect.getOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Metadata value if its type is T.
 * @throws AssertionError otherwise.
 */
export function getOwnMetadata<T>(
  metadataKey: MetadataKey,
  target: object,
  guard?: is.Guard<T>,
  defVal?: T
): T;

export function getOwnMetadata(
  metadataKey: MetadataKey,
  target: object,
  guard: is.Guard = is.unknown,
  defVal?: unknown
): unknown {
  return as.byGuard(
    Reflect.getOwnMetadata(metadataKey, target) ?? defVal,
    guard
  );
}

/**
 * Typed version of Reflect.getOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns Metadata value.
 */
export function getOwnMetadataKey(
  metadataKey: MetadataKey,
  target: object,
  key: MetadataKey
): unknown;

/**
 * Typed version of Reflect.getOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Metadata value if its type is T.
 * @throws AssertionError otherwise.
 */
export function getOwnMetadataKey<T>(
  metadataKey: MetadataKey,
  target: object,
  key: MetadataKey,
  guard?: is.Guard<T>,
  defVal?: T
): T;

export function getOwnMetadataKey(
  metadataKey: MetadataKey,
  target: object,
  key: MetadataKey,
  guard: is.Guard = is.unknown,
  defVal?: unknown
): unknown {
  return as.byGuard(
    Reflect.getOwnMetadata(metadataKey, target, key) ?? defVal,
    guard
  );
}

/**
 * Typed version of Reflect.hasMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export function hasMetadata(metadataKey: MetadataKey, target: object): boolean {
  return Reflect.hasMetadata(metadataKey, target);
}

/**
 * Typed version of Reflect.hasMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export function hasMetadataKey(
  metadataKey: MetadataKey,
  target: object,
  key: MetadataKey
): boolean {
  return Reflect.hasMetadata(metadataKey, target, key);
}

/**
 * Typed version of Reflect.hasOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export function hasOwnMetadata(
  metadataKey: MetadataKey,
  target: object
): boolean {
  return Reflect.hasOwnMetadata(metadataKey, target);
}

/**
 * Typed version of Reflect.hasOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export function hasOwnMetadataKey(
  metadataKey: MetadataKey,
  target: object,
  key: MetadataKey
): boolean {
  return Reflect.hasOwnMetadata(metadataKey, target, key);
}

export type MetadataKey = string | symbol;
