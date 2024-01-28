export class ConversionError extends Error {
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
//# sourceMappingURL=ConversionError.js.map