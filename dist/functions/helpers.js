"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapProxyHandler = exports.wait = exports.safeAccess = exports.onDemand = exports.neverDemand = exports.createFacade = exports.classToInterface = exports.ProxyHandlerAction = void 0;
const tslib_1 = require("tslib");
const as = tslib_1.__importStar(require("./inline-assertions"));
const cast = tslib_1.__importStar(require("./converters"));
const fn = tslib_1.__importStar(require("./function"));
const is = tslib_1.__importStar(require("./guards"));
const o = tslib_1.__importStar(require("./object"));
const reflect = tslib_1.__importStar(require("./reflect"));
const core_1 = require("./core");
var ProxyHandlerAction;
(function (ProxyHandlerAction) {
    ProxyHandlerAction["doDefault"] = "doDefault";
    ProxyHandlerAction["throw"] = "throw";
})(ProxyHandlerAction || (exports.ProxyHandlerAction = ProxyHandlerAction = {}));
/**
 * Self-binds all methods.
 *
 * @param obj - Object.
 * @returns Proxy.
 */
function classToInterface(obj) {
    return new Proxy(obj, wrapProxyHandler("classToInterface", ProxyHandlerAction.doDefault, {
        get: (target, key) => {
            const result = reflect.get(target, key);
            return is.callable(result) ? result.bind(target) : result;
        }
    }));
}
exports.classToInterface = classToInterface;
/**
 * Creates facade.
 *
 * @param name - Facade name.
 * @param extension - Facade extension.
 * @returns Facade.
 */
function createFacade(name, extension) {
    let _implementation;
    const ownMethods = {
        setImplementation: value => {
            _implementation = value;
        },
        ...extension
    };
    const proxy = new Proxy(fn.noop, wrapProxyHandler("createFacade", ProxyHandlerAction.throw, {
        apply: (_target, thisArg, args) => reflect.apply(as.callable(target()), thisArg, args),
        get: (_target, key) => reflect.get(target(key), key),
        getOwnPropertyDescriptor: (_target, key) => reflect.getOwnPropertyDescriptor(target(key), key),
        has: (_target, key) => reflect.has(target(key), key),
        isExtensible: () => reflect.isExtensible(target()),
        ownKeys: () => reflect.ownKeys(target()),
        set: (_target, key, value) => reflect.set(target(key), key, value)
    }));
    return proxy;
    function target(key) {
        if (is.not.empty(key) && key in ownMethods)
            return ownMethods;
        if (is.not.empty(_implementation))
            return _implementation;
        try {
            throw new Error("Get stack trace");
        }
        catch (e) {
            if (e instanceof Error &&
                is.not.empty(e.stack) &&
                e.stack.includes("isLikelyComponentType"))
                return ownMethods;
        }
        throw new Error(is.not.empty(key)
            ? `Missing facade implementation: ${name} (key: ${cast.string(key)})`
            : `Missing facade implementation: ${name}`);
    }
}
exports.createFacade = createFacade;
/**
 * Returns an object that throws an error on any attempted accessed.
 *
 * @returns An object.
 */
function neverDemand() {
    return onDemand(() => {
        throw new Error("This object should never be demanded");
    });
}
exports.neverDemand = neverDemand;
/**
 * Generates resource on demand.
 *
 * @param generator - Resource generator.
 * @returns Resource.
 */
function onDemand(generator) {
    let _obj;
    const proxy = new Proxy({}, wrapProxyHandler("onDemand", ProxyHandlerAction.throw, {
        get: (_target, key) => reflect.get(obj(), key),
        getOwnPropertyDescriptor: (_target, key) => reflect.getOwnPropertyDescriptor(obj(), key),
        has: (_target, key) => reflect.has(obj(), key),
        isExtensible: () => reflect.isExtensible(obj()),
        ownKeys: () => reflect.ownKeys(obj()),
        set: (_target, key, value) => {
            reflect.set(obj(), key, value);
            return true;
        }
    }));
    return proxy;
    function obj() {
        _obj ?? (_obj = generator());
        return _obj;
    }
}
exports.onDemand = onDemand;
/**
 * Creates safe access interface for an object.
 *
 * @param obj - Object.
 * @param guards - Guards.
 * @param readonlyKeys - Readonly keys.
 * @returns Safe access interface.
 */
function safeAccess(obj, guards, readonlyKeys = []) {
    const guardsMap = new core_1.ReadonlyMap(o.entries(guards));
    const writableKeys = o.keys(guards);
    const keys = [...writableKeys, ...readonlyKeys];
    const keysSet = new core_1.ReadonlySet(keys);
    return new Proxy(obj, wrapProxyHandler("safeAccess", ProxyHandlerAction.throw, {
        get: (target, key) => {
            if (keysSet.has(key))
                return reflect.get(target, key);
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
                if (guard(value))
                    return reflect.set(target, key, value);
                throw new Error(`Type check failed: ${cast.string(key)}`);
            }
            throw new Error(`Write access denied: ${cast.string(key)}`);
        }
    }));
}
exports.safeAccess = safeAccess;
/**
 * Delays program execution.
 *
 * @param timeout - Timeout (ms).
 */
async function wait(timeout) {
    // eslint-disable-next-line promise/avoid-new -- Ok
    await new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}
exports.wait = wait;
/**
 * Adds missing methods to proxy handler.
 *
 * @param id - ID.
 * @param action - Action for missing methods.
 * @param handler - Handler.
 * @returns New handler with missing methods added.
 */
function wrapProxyHandler(id, action, handler) {
    switch (action) {
        case ProxyHandlerAction.doDefault:
            return (0, core_1.typedef)({
                apply: (target, thisArg, args) => reflect.apply(as.callable(target), thisArg, args),
                construct: (target, args, newTarget) => as.object(reflect.construct(as.constructor(target), args, as.constructor(newTarget))),
                defineProperty: (target, key, attrs) => reflect.defineProperty(target, key, attrs),
                deleteProperty: (target, key) => reflect.deleteProperty(target, key),
                get: (target, key) => reflect.get(target, key),
                getOwnPropertyDescriptor: (target, key) => reflect.getOwnPropertyDescriptor(target, key),
                getPrototypeOf: target => reflect.getPrototypeOf(target),
                has: (target, key) => reflect.has(target, key),
                isExtensible: target => reflect.isExtensible(target),
                ownKeys: target => reflect.ownKeys(target),
                preventExtensions: target => reflect.preventExtensions(target),
                set: (target, key, value) => reflect.set(target, key, value),
                setPrototypeOf: (target, proto) => reflect.setPrototypeOf(target, proto),
                ...handler
            });
        case ProxyHandlerAction.throw:
            return (0, core_1.typedef)({
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
exports.wrapProxyHandler = wrapProxyHandler;
//# sourceMappingURL=helpers.js.map