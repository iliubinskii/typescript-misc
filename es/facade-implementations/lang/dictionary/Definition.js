import { a, as, assert, is, o, regexp } from "../../../functions";
export class Definition {
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
                if (is.array(raw)) {
                    this.subs = o.map(raw[1], (value, key) => new Definition(value, key));
                    this.sub = as.not.empty(this.subs[raw[0]]);
                    this.value = this.sub.value;
                    if (raw.length === 3)
                        this.contexts = raw[2];
                }
                else {
                    this.subs = o.map(raw, (value, key) => new Definition(value, key));
                    this.sub = a.first(o.values(this.subs));
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
        this.rulesRef = regexp.matchAll(this.value, reRef);
        this.rulesRefDependent = regexp.matchAll(this.value, reRefDependent);
        this.rulesRefSecondary = regexp.matchAll(this.value, reRefSecondary);
        this.rulesVal = regexp.matchAll(this.value, reVal);
        this.rulesWordDependent = regexp.matchAll(this.value, reWord);
        this.rulesWordSecondary = regexp.matchAll(this.value, reWordSecondary);
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
            if (is.not.empty(ref)) {
                const definition = this.subs[ref];
                assert.not.empty(definition, `Invalid context: ${context}`);
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
        let word = o.removeUndefinedKeys({
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
    const search = a.first(rule);
    const replacementId = a.second(rule);
    const form = a.third(rule).toLowerCase();
    const key = word.replacements.get(replacementId);
    assert.not.empty(key, `Missing replacement: ${replacementId}`);
    const replacement = owner.get(key, word.context, word.count, word.replacements, form);
    return {
        ...word,
        forms: replacement.forms,
        value: word.value.replace(search, replacement.value)
    };
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
    const search = a.first(rule);
    const replacementId = a.second(rule);
    const key = word.replacements.get(replacementId);
    assert.not.empty(key, `Missing replacement: ${replacementId}`);
    const replacement = owner.get(key, word.context, word.count, word.replacements, word.forms);
    return { ...word, value: word.value.replace(search, replacement.value) };
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
    const search = a.first(rule);
    const replacementId = a.second(rule);
    const form = a.third(rule).toLowerCase();
    const key = word.replacements.get(replacementId);
    assert.not.empty(key, `Missing replacement: ${replacementId}`);
    const replacement = owner.get(key, word.context, 1, word.replacements, form);
    return { ...word, value: word.value.replace(search, replacement.value) };
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
    const search = a.first(rule);
    const replacementId = a.second(rule);
    const replacement = word.replacements.get(replacementId);
    assert.not.empty(replacement, `Missing replacement: ${replacementId}`);
    return { ...word, value: word.value.replace(search, replacement) };
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
    const search = a.first(rule);
    const key = a.second(rule);
    const replacement = owner.get(key, word.context, word.count, word.replacements, word.forms);
    return { ...word, value: word.value.replace(search, replacement.value) };
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
    const search = a.first(rule);
    const key = a.second(rule);
    const form = a.third(rule).toLowerCase();
    const replacement = owner.get(key, word.context, 1, word.replacements, form);
    return { ...word, value: word.value.replace(search, replacement.value) };
}
//# sourceMappingURL=Definition.js.map