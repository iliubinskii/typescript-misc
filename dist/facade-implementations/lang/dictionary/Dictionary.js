"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionary = void 0;
const functions_1 = require("../../../functions");
class Dictionary {
    /**
     * Creates dictionary.
     * @param this - No this.
     * @param definitions - Language definitions.
     * @param context - Context.
     * @param count - Count for plural form.
     * @returns Dictionary.
     */
    static create(definitions, context, count) {
        return new Dictionary(definitions, context, count).facade;
    }
    keys;
    context(context) {
        if (context === this._context)
            return this.facade;
        let sub = this.subs.get(context);
        if (sub) {
            // Already exists
        }
        else {
            sub = Dictionary.create(this.definitions, context, this.count);
            this.subs.set(context, sub);
        }
        return sub;
    }
    get(key) {
        if (key.startsWith("plain:"))
            return key.slice(6);
        return this.definitions.get(key, this._context, this.count, replacements)
            .value;
    }
    getIfExists(key) {
        if (key.startsWith("plain:"))
            return key.slice(6);
        return this.definitions.has(key)
            ? this.definitions.get(key, this._context, this.count, replacements).value
            : key;
    }
    has(key) {
        if (key.startsWith("plain:"))
            return true;
        return this.definitions.has(key);
    }
    plain(str) {
        return `plain:${str}`;
    }
    plural(count) {
        count = this.pluralReduce(count);
        if (count === this.count)
            return this.facade;
        let sub = this.subs.get(count);
        if (sub) {
            // Already exists
        }
        else {
            sub = Dictionary.create(this.definitions, this._context, count);
            this.subs.set(count, sub);
        }
        return sub;
    }
    with(search, replace) {
        switch (typeof replace) {
            case "number": {
                replacements.set(search.toUpperCase(), functions_1.cast.string(replace));
                replacements.set(search.toLowerCase(), functions_1.cast.string(replace));
                replacements.set(functions_1.s.ucFirst(search), functions_1.cast.string(replace));
                replacements.set(functions_1.s.lcFirst(search), functions_1.cast.string(replace));
                break;
            }
            case "string": {
                replacements.set(search.toUpperCase(), replace.toUpperCase());
                replacements.set(search.toLowerCase(), replace.toLowerCase());
                replacements.set(functions_1.s.ucFirst(search), functions_1.s.ucFirst(replace));
                replacements.set(functions_1.s.lcFirst(search), functions_1.s.lcFirst(replace));
            }
        }
        return this.facade;
    }
    _context;
    count;
    definitions;
    facade;
    subs = new Map();
    /**
     * Creates class instance.
     * @param definitions - Language definitions.
     * @param context - Context.
     * @param count - Count for plural form.
     */
    constructor(definitions, context, count = 1) {
        const facade = (0, functions_1.evaluate)(() => {
            const handler = (0, functions_1.wrapProxyHandler)("Dictionary", functions_1.ProxyHandlerAction.doDefault, {
                get: (target, key) => {
                    functions_1.assert.string(key, "Expecting string key");
                    return target.has(key) ? target.get(key) : functions_1.reflect.get(target, key);
                }
            });
            return new Proxy(this, handler);
        });
        this._context = context;
        this.count = count;
        this.definitions = definitions;
        this.facade = facade;
        this.keys = definitions.keys;
    }
    /**
     * Reduces count for plural form.
     * @param count - Count.
     * @returns Reduced count.
     */
    pluralReduce(count) {
        return this.definitions.pluralReduce(count);
    }
}
exports.Dictionary = Dictionary;
const replacements = new Map();
//# sourceMappingURL=Dictionary.js.map