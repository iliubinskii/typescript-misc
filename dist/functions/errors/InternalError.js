"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalError = void 0;
class InternalError extends Error {
    /**
     * Creates class instance.
     *
     * @param message - Message.
     */
    constructor(message = "Internal error") {
        super(message);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InternalError"
        });
    }
}
exports.InternalError = InternalError;
//# sourceMappingURL=InternalError.js.map