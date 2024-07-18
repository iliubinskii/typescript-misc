export class InternalError extends Error {
  public override readonly name = "InternalError";

  /**
   * Creates class instance.
   * @param message - Message.
   */
  public constructor(message = "Internal error") {
    super(message);
  }
}
