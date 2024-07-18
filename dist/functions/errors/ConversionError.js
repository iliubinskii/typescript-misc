"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionError = void 0;
class ConversionError extends Error {
    name = "ConversionError";
    /**
     * Creates class instance.
     * @param message - Message.
     */
    constructor(message = "Conversion error") {
        super(message);
    }
}
exports.ConversionError = ConversionError;
//# sourceMappingURL=ConversionError.js.map