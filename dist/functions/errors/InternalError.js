"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalError = void 0;
class InternalError extends Error {
    name = "InternalError";
    /**
     * Creates class instance.
     * @param message - Message.
     */
    constructor(message = "Internal error") {
        super(message);
    }
}
exports.InternalError = InternalError;
//# sourceMappingURL=InternalError.js.map