"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssertionError = void 0;
class AssertionError extends Error {
    name = "AssertionError";
    /**
     * Creates class instance.
     * @param message - Message.
     */
    constructor(message = "Assertion failed") {
        super(message);
    }
}
exports.AssertionError = AssertionError;
//# sourceMappingURL=AssertionError.js.map