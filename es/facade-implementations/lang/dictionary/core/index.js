import { defineFn } from "../../../../functions";
export const pluralReduce = defineFn(
/**
 * Reduces count for plural form.
 * @param count - Count.
 * @returns Reduced count.
 */
(count) => {
    count = Math.abs(count);
    return Math.abs(count) === 1 ? 1 : 2;
}, {
    /**
     * Reduces count for plural form.
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