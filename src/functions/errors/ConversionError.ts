export class ConversionError extends Error {
  public override readonly name = "ConversionError";

  /**
   * Creates class instance.
   *
   * @param message - Message.
   */
  public constructor(message = "Conversion error") {
    super(message);
  }
}
