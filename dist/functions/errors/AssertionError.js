"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssertionError = void 0;
class AssertionError extends Error {
    /**
     * Creates class instance.
     *
     * @param message - Message.
     */
    constructor(message = "Assertion failed") {
        super(message);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "AssertionError"
        });
    }
}
exports.AssertionError = AssertionError;
//# sourceMappingURL=AssertionError.js.map