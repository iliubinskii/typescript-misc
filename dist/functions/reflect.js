"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPrototypeOf = exports.set = exports.preventExtensions = exports.ownKeys = exports.isExtensible = exports.has = exports.getPrototypeOf = exports.getOwnPropertyDescriptor = exports.deleteProperty = exports.defineProperty = exports.construct = exports.apply = void 0;
exports.defineMetadata = defineMetadata;
exports.defineMetadataKey = defineMetadataKey;
exports.get = get;
exports.getMetadata = getMetadata;
exports.getMetadataKey = getMetadataKey;
exports.getOwnMetadata = getOwnMetadata;
exports.getOwnMetadataKey = getOwnMetadataKey;
exports.hasMetadata = hasMetadata;
exports.hasMetadataKey = hasMetadataKey;
exports.hasOwnMetadata = hasOwnMetadata;
exports.hasOwnMetadataKey = hasOwnMetadataKey;
const tslib_1 = require("tslib");
require("reflect-metadata");
const as = tslib_1.__importStar(require("./inline-assertions"));
const is = tslib_1.__importStar(require("./guards"));
/**
 * Typed version of Reflect.apply.
 * @param target - Target function.
 * @param thisArg - This argument.
 * @param args - Arguments.
 * @returns Function execution result.
 */
exports.apply = Reflect.apply;
/**
 * Typed version of Reflect.construct.
 * @param target - Target function.
 * @param args - Arguments.
 * @param newTarget - New target function.
 * @returns Constructed object.
 */
exports.construct = Reflect.construct;
exports.defineProperty = Reflect.defineProperty;
exports.deleteProperty = Reflect.deleteProperty;
exports.getOwnPropertyDescriptor = Reflect.getOwnPropertyDescriptor;
exports.getPrototypeOf = Reflect.getPrototypeOf;
exports.has = Reflect.has;
exports.isExtensible = Reflect.isExtensible;
exports.ownKeys = Reflect.ownKeys;
exports.preventExtensions = Reflect.preventExtensions;
exports.set = Reflect.set;
exports.setPrototypeOf = Reflect.setPrototypeOf;
/**
 * Typed version of Reflect.defineMetadata.
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 */
function defineMetadata(metadataKey, metadataValue, target) {
    Reflect.defineMetadata(metadataKey, metadataValue, target);
}
/**
 * Typed version of Reflect.defineMetadata.
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 * @param key - Property key.
 */
function defineMetadataKey(metadataKey, metadataValue, target, key) {
    Reflect.defineMetadata(metadataKey, metadataValue, target, key);
}
/**
 * Typed version of Reflect.get.
 * @param target - Target object.
 * @param key - Property key.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Property value if its type is T.
 */
function get(target, key, guard = is.unknown, defVal) {
    return as.byGuard(Reflect.get(target, key) ?? defVal, guard);
}
/**
 * Typed version of Reflect.getMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Metadata value if its type is T.
 */
function getMetadata(metadataKey, target, guard = is.unknown, defVal) {
    return as.byGuard(Reflect.getMetadata(metadataKey, target) ?? defVal, guard);
}
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
function getMetadataKey(metadataKey, target, key, guard = is.unknown, defVal) {
    return as.byGuard(Reflect.getMetadata(metadataKey, target, key) ?? defVal, guard);
}
/**
 * Typed version of Reflect.getOwnMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Metadata value if its type is T.
 * @throws AssertionError otherwise.
 */
function getOwnMetadata(metadataKey, target, guard = is.unknown, defVal) {
    return as.byGuard(Reflect.getOwnMetadata(metadataKey, target) ?? defVal, guard);
}
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
function getOwnMetadataKey(metadataKey, target, key, guard = is.unknown, defVal) {
    return as.byGuard(Reflect.getOwnMetadata(metadataKey, target, key) ?? defVal, guard);
}
/**
 * Typed version of Reflect.hasMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns _True_ if key exists, _false_ otherwise.
 */
function hasMetadata(metadataKey, target) {
    return Reflect.hasMetadata(metadataKey, target);
}
/**
 * Typed version of Reflect.hasMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns _True_ if key exists, _false_ otherwise.
 */
function hasMetadataKey(metadataKey, target, key) {
    return Reflect.hasMetadata(metadataKey, target, key);
}
/**
 * Typed version of Reflect.hasOwnMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns _True_ if key exists, _false_ otherwise.
 */
function hasOwnMetadata(metadataKey, target) {
    return Reflect.hasOwnMetadata(metadataKey, target);
}
/**
 * Typed version of Reflect.hasOwnMetadata.
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns _True_ if key exists, _false_ otherwise.
 */
function hasOwnMetadataKey(metadataKey, target, key) {
    return Reflect.hasOwnMetadata(metadataKey, target, key);
}
//# sourceMappingURL=reflect.js.map