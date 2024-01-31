import "reflect-metadata";
import * as as from "./inline-assertions";
import * as is from "./guards";
/**
 * Typed version of Reflect.apply.
 *
 * @param target - Target function.
 * @param thisArg - This argument.
 * @param args - Arguments.
 * @returns Function execution result.
 */
export const apply = Reflect.apply;
/**
 * Typed version of Reflect.construct.
 *
 * @param target - Target function.
 * @param args - Arguments.
 * @param newTarget - New target function.
 * @returns Constructed object.
 */
export const construct = Reflect.construct;
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
export function defineMetadata(metadataKey, metadataValue, target) {
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
export function defineMetadataKey(metadataKey, metadataValue, target, key) {
    Reflect.defineMetadata(metadataKey, metadataValue, target, key);
}
export function get(target, key, guard = is.unknown, defVal) {
    return as.byGuard(Reflect.get(target, key) ?? defVal, guard);
}
export function getMetadata(metadataKey, target, guard = is.unknown, defVal) {
    return as.byGuard(Reflect.getMetadata(metadataKey, target) ?? defVal, guard);
}
export function getMetadataKey(metadataKey, target, key, guard = is.unknown, defVal) {
    return as.byGuard(Reflect.getMetadata(metadataKey, target, key) ?? defVal, guard);
}
export function getOwnMetadata(metadataKey, target, guard = is.unknown, defVal) {
    return as.byGuard(Reflect.getOwnMetadata(metadataKey, target) ?? defVal, guard);
}
export function getOwnMetadataKey(metadataKey, target, key, guard = is.unknown, defVal) {
    return as.byGuard(Reflect.getOwnMetadata(metadataKey, target, key) ?? defVal, guard);
}
/**
 * Typed version of Reflect.hasMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export function hasMetadata(metadataKey, target) {
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
export function hasMetadataKey(metadataKey, target, key) {
    return Reflect.hasMetadata(metadataKey, target, key);
}
/**
 * Typed version of Reflect.hasOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export function hasOwnMetadata(metadataKey, target) {
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
export function hasOwnMetadataKey(metadataKey, target, key) {
    return Reflect.hasOwnMetadata(metadataKey, target, key);
}
//# sourceMappingURL=reflect.js.map