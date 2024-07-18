export class AssertionError extends Error {
  public override readonly name = "AssertionError";

  /**
   * Creates class instance.
   * @param message - Message.
   */
  public constructor(message = "Assertion failed") {
    super(message);
  }
}
