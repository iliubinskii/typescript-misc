"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Definition = void 0;
const functions_1 = require("../../../functions");
class Definition {
    /**
     * Creates class instance.
     *
     * @param raw - Raw definition.
     * @param id - ID.
     */
    constructor(raw, id) {
        Object.defineProperty(this, "contexts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rulesRef", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rulesRefDependent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rulesRefSecondary", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rulesVal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rulesWordDependent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rulesWordSecondary", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sub", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "subs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = id;
        switch (typeof raw) {
            case "object":
                if (functions_1.is.array(raw)) {
                    this.subs = functions_1.o.map(raw[1], (value, key) => new Definition(value, key));
                    this.sub = functions_1.as.not.empty(this.subs[raw[0]]);
                    this.value = this.sub.value;
                    if (raw.length === 3)
                        this.contexts = raw[2];
                }
                else {
                    this.subs = functions_1.o.map(raw, (value, key) => new Definition(value, key));
                    this.sub = functions_1.a.first(functions_1.o.values(this.subs));
                    this.value = this.sub.value;
                }
                break;
            case "string":
                this.value = raw;
        }
        const reRef = /<([^\s.:<>{}]+):([^\s.:<>{}]+)>/u;
        const reRefDependent = /<([^\s.:<>{}]+)>/u;
        const reRefSecondary = /<([^\s.:<>{}]+)\.([^\s.:<>{}]+)>/u;
        const reVal = /@([A-Za-z]+)/u;
        const reWord = /\{([^\s.:<>{}]+)\}/u;
        const reWordSecondary = /\{([^\s.:<>{}]+)\.([^\s.:<>{}]+)\}/u;
        this.rulesRef = functions_1.regexp.matchAll(this.value, reRef);
        this.rulesRefDependent = functions_1.regexp.matchAll(this.value, reRefDependent);
        this.rulesRefSecondary = functions_1.regexp.matchAll(this.value, reRefSecondary);
        this.rulesVal = functions_1.regexp.matchAll(this.value, reVal);
        this.rulesWordDependent = functions_1.regexp.matchAll(this.value, reWord);
        this.rulesWordSecondary = functions_1.regexp.matchAll(this.value, reWordSecondary);
    }
    /**
     * Returns word based on context, count, and replacements.
     *
     * @param owner - Parent object.
     * @param context - Context.
     * @param count - Count for plural form.
     * @param replacements - Replacements.
     * @param forms - Candidate word forms.
     * @returns Word.
     */
    get(owner, context, count, replacements, forms) {
        if (context) {
            const ref = this.contexts[context];
            if (functions_1.is.not.empty(ref)) {
                const definition = this.subs[ref];
                functions_1.assert.not.empty(definition, `Invalid context: ${context}`);
                return definition.get(owner, context, count, replacements, forms);
            }
        }
        for (const form of forms) {
            const definition = this.subs[form];
            if (definition)
                return definition.get(owner, context, count, replacements, [form]);
        }
        if (count === 1) {
            // Plural form not needed
        }
        else {
            const definition = this.subs[count];
            if (definition)
                return definition.get(owner, context, count, replacements, forms);
        }
        if (this.sub)
            return this.sub.get(owner, context, count, replacements, forms);
        let word = functions_1.o.removeUndefinedKeys({
            context,
            count,
            forms,
            replacements,
            value: this.value
        });
        for (const rule of this.rulesRef)
            word = applyRuleRef(word, rule, owner);
        for (const rule of this.rulesRefDependent)
            word = applyRuleRefDependent(word, rule, owner);
        for (const rule of this.rulesRefSecondary)
            word = applyRuleRefSecondary(word, rule, owner);
        for (const rule of this.rulesVal)
            word = applyRuleVal(word, rule);
        for (const rule of this.rulesWordDependent)
            word = applyRuleWordDependent(word, rule, owner);
        for (const rule of this.rulesWordSecondary)
            word = applyRuleWordSecondary(word, rule, owner);
        return word;
    }
}
exports.Definition = Definition;
/**
 * Applies rules to the word.
 *
 * @param word - Word.
 * @param rule - Rule.
 * @param owner - Parent object.
 * @returns Modified word.
 */
function applyRuleRef(word, rule, owner) {
    // Format: <replacement-id:form>
    const search = functions_1.a.first(rule);
    const replacementId = functions_1.a.second(rule);
    const form = functions_1.a.third(rule).toLowerCase();
    const key = word.replacements.get(replacementId);
    functions_1.assert.not.empty(key, `Missing replacement: ${replacementId}`);
    const replacement = owner.get(key, word.context, word.count, word.replacements, form);
    return Object.assign(Object.assign({}, word), { forms: replacement.forms, value: word.value.replace(search, replacement.value) });
}
/**
 * Applies rules to the word.
 *
 * @param word - Word.
 * @param rule - Rule.
 * @param owner - Parent object.
 * @returns Modified word.
 */
function applyRuleRefDependent(word, rule, owner) {
    // Format: <replacement-id>
    const search = functions_1.a.first(rule);
    const replacementId = functions_1.a.second(rule);
    const key = word.replacements.get(replacementId);
    functions_1.assert.not.empty(key, `Missing replacement: ${replacementId}`);
    const replacement = owner.get(key, word.context, word.count, word.replacements, word.forms);
    return Object.assign(Object.assign({}, word), { value: word.value.replace(search, replacement.value) });
}
/**
 * Applies rules to the word.
 *
 * @param word - Word.
 * @param rule - Rule.
 * @param owner - Parent object.
 * @returns Modified word.
 */
function applyRuleRefSecondary(word, rule, owner) {
    // Format: <replacement-id.form>
    const search = functions_1.a.first(rule);
    const replacementId = functions_1.a.second(rule);
    const form = functions_1.a.third(rule).toLowerCase();
    const key = word.replacements.get(replacementId);
    functions_1.assert.not.empty(key, `Missing replacement: ${replacementId}`);
    const replacement = owner.get(key, word.context, 1, word.replacements, form);
    return Object.assign(Object.assign({}, word), { value: word.value.replace(search, replacement.value) });
}
/**
 * Applies rules to the word.
 *
 * @param word - Word.
 * @param rule - Rule.
 * @returns Modified word.
 */
function applyRuleVal(word, rule) {
    // Format: @replacement-id
    const search = functions_1.a.first(rule);
    const replacementId = functions_1.a.second(rule);
    const replacement = word.replacements.get(replacementId);
    functions_1.assert.not.empty(replacement, `Missing replacement: ${replacementId}`);
    return Object.assign(Object.assign({}, word), { value: word.value.replace(search, replacement) });
}
/**
 * Applies rules to the word.
 *
 * @param word - Word.
 * @param rule - Rule.
 * @param owner - Parent object.
 * @returns Modified word.
 */
function applyRuleWordDependent(word, rule, owner) {
    // Format: {key}
    const search = functions_1.a.first(rule);
    const key = functions_1.a.second(rule);
    const replacement = owner.get(key, word.context, word.count, word.replacements, word.forms);
    return Object.assign(Object.assign({}, word), { value: word.value.replace(search, replacement.value) });
}
/**
 * Applies rules to the word.
 *
 * @param word - Word.
 * @param rule - Rule.
 * @param owner - Parent object.
 * @returns Modified word.
 */
function applyRuleWordSecondary(word, rule, owner) {
    // Format: {key.form}
    const search = functions_1.a.first(rule);
    const key = functions_1.a.second(rule);
    const form = functions_1.a.third(rule).toLowerCase();
    const replacement = owner.get(key, word.context, 1, word.replacements, form);
    return Object.assign(Object.assign({}, word), { value: word.value.replace(search, replacement.value) });
}
//# sourceMappingURL=Definition.js.map