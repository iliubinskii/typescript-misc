import "reflect-metadata";
import * as is from "./guards";
import type { types } from "../types";
/**
 * Typed version of Reflect.apply.
 * @param target - Target function.
 * @param thisArg - This argument.
 * @param args - Arguments.
 * @returns Function execution result.
 */
export declare const apply: (target: types.fn.Callable, thisArg: unknown, args: ArrayLike<unknown>) => unknown;
/**
 * Typed version of Reflect.construct.
 * @param target - Target function.
 * @param args - Arguments.
 * @param newTarget - New target function.
 * @returns Constructed object.
 */
export declare const construct: (target: types.fn.Constructor, args: ArrayLike<unknown>, newTarget?: types.fn.Constructor) => unknown;
export declare const defineProperty: typeof Reflect.defineProperty;
export declare const deleteProperty: typeof Reflect.deleteProperty;
export declare const getOwnPropertyDescriptor: typeof Reflect.getOwnPropertyDescriptor;
export declare const getPrototypeOf: typeof Reflect.getPrototypeOf;
export declare const has: typeof Reflect.has;
export declare const isExtensible: typeof Reflect.isExtensible;
export declare const ownKeys: typeof Reflect.ownKeys;
export declare const preventExtensions: typeof Reflect.preventExtensions;
export declare const set: typeof Reflect.set;
export declare const setPrototypeOf: typeof Reflect.setPrototypeOf;
/**
 * Typed version of Reflect.defineMetadata.
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 */
export declare function defineMetadata(metadataKey: MetadataKey, metadataValue: unknown, target: object): void;
/**
 * Typed version of Reflect.defineMetadata.
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 * @param key - Property key.
 */
export declare function defineMetadataKey(metadataKey: MetadataKey, metadataValue: unknown, target: object, key: MetadataKey): void;
/**
 * Typed version of Reflect.get.
 * @param target - Target object.
 * @param key - Property key.
 * @returns Property value.
 */
export declare function get(target: object, key: PropertyKey): unknown;
/**
 * Typed version of Reflect.get.
 * @param target - Target object.
 * @param key - Property key.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Property value if its type is T.
 * @throws AssertionError otherwise.
 */
export declare function get<T>(target: object, key: PropertyKey, guard?: is.Guard<T>, defVal?: T): T;
/**
 * Typed version of Reflect.getMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
export declare function getMetadata(metadataKey: MetadataKey, target: object): unknown;
/**
 * Typed version of Reflect.getMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Metadata value if its type is T.
 * @throws AssertionError otherwise.
 */
export declare function getMetadata<T>(metadataKey: MetadataKey, target: object, guard?: is.Guard<T>, defVal?: T): T;
/**
 * Typed version of Reflect.getMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns Metadata value.
 */
export declare function getMetadataKey(metadataKey: MetadataKey, target: object, key: MetadataKey): unknown;
/**
 * Typed version of Reflect.getMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Metadata value if its type is T.
 * @throws AssertionError otherwise.
 */
export declare function getMetadataKey<T>(metadataKey: MetadataKey, target: object, key: MetadataKey, guard?: is.Guard<T>, defVal?: T): T;
/**
 * Typed version of Reflect.getOwnMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
export declare function getOwnMetadata(metadataKey: MetadataKey, target: object): unknown;
/**
 * Typed version of Reflect.getOwnMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Metadata value if its type is T.
 * @throws AssertionError otherwise.
 */
export declare function getOwnMetadata<T>(metadataKey: MetadataKey, target: object, guard?: is.Guard<T>, defVal?: T): T;
/**
 * Typed version of Reflect.getOwnMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns Metadata value.
 */
export declare function getOwnMetadataKey(metadataKey: MetadataKey, target: object, key: MetadataKey): unknown;
/**
 * Typed version of Reflect.getOwnMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Metadata value if its type is T.
 * @throws AssertionError otherwise.
 */
export declare function getOwnMetadataKey<T>(metadataKey: MetadataKey, target: object, key: MetadataKey, guard?: is.Guard<T>, defVal?: T): T;
/**
 * Typed version of Reflect.hasMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export declare function hasMetadata(metadataKey: MetadataKey, target: object): boolean;
/**
 * Typed version of Reflect.hasMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export declare function hasMetadataKey(metadataKey: MetadataKey, target: object, key: MetadataKey): boolean;
/**
 * Typed version of Reflect.hasOwnMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export declare function hasOwnMetadata(metadataKey: MetadataKey, target: object): boolean;
/**
 * Typed version of Reflect.hasOwnMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export declare function hasOwnMetadataKey(metadataKey: MetadataKey, target: object, key: MetadataKey): boolean;
export type MetadataKey = string | symbol;
//# sourceMappingURL=reflect.d.ts.map