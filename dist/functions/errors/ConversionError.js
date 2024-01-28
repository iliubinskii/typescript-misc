"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionError = void 0;
class ConversionError extends Error {
    /**
     * Creates class instance.
     *
     * @param message - Message.
     */
    constructor(message = "Conversion error") {
        super(message);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "ConversionError"
        });
    }
}
exports.ConversionError = ConversionError;
//# sourceMappingURL=ConversionError.js.map