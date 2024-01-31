export { _delete as delete };

/**
 * Sets key.
 *
 * @param map - Map.
 * @param key - Key.
 * @param value - Value.
 * @returns Map with key set.
 */
export function set<K, V>(
  map: ReadonlyMap<K, V>,
  key: K,
  value: V
): ReadonlyMap<K, V> {
  // eslint-disable-next-line misc/typescript-misc/functions/prefer-readonly-map -- Ok
  const result = new Map(map);

  result.set(key, value);

  return result;
}

/**
 * Removes key.
 *
 * @param map - Map.
 * @param key - Key.
 * @returns Map with key removed.
 */
function _delete<K, V>(map: ReadonlyMap<K, V>, key: K): ReadonlyMap<K, V> {
  // eslint-disable-next-line misc/typescript-misc/functions/prefer-readonly-map -- Ok
  const result = new Map(map);

  result.delete(key);

  return result;
}
