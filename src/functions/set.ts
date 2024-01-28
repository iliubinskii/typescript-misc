export { _delete as delete };

/**
 * Adds value.
 *
 * @param set - Set.
 * @param value - Value.
 * @returns Set with value added.
 */
export function add<T>(set: ReadonlySet<T>, value: T): ReadonlySet<T> {
  // eslint-disable-next-line misc/ts-misc/functions/prefer-readonly-set -- Ok
  const result = new Set(set);

  result.add(value);

  return result;
}

/**
 * Removes value.
 *
 * @param set - Set.
 * @param value - Value.
 * @returns Set with value removed.
 */
function _delete<T>(set: ReadonlySet<T>, value: T): ReadonlySet<T> {
  // eslint-disable-next-line misc/ts-misc/functions/prefer-readonly-set -- Ok
  const result = new Set(set);

  result.delete(value);

  return result;
}
