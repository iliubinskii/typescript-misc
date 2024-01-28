"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluralReduce = void 0;
const functions_1 = require("../../../../functions");
exports.pluralReduce = (0, functions_1.defineFn)(
/**
 * Reduces count for plural form.
 *
 * @param count - Count.
 * @returns Reduced count.
 */
(count) => {
    count = Math.abs(count);
    return Math.abs(count) === 1 ? 1 : 2;
}, {
    /**
     * Reduces count for plural form.
     *
     * @param count - Count.
     * @returns Reduced count.
     */
    ru: (count) => {
        count = Math.abs(count);
        if (count >= 10 && count <= 19)
            return 5;
        if (count % 10 === 1)
            return 1;
        if (count % 10 === 2)
            return 2;
        if (count % 10 === 3)
            return 2;
        if (count % 10 === 4)
            return 2;
        return 5;
    }
});
//# sourceMappingURL=index.js.map