/* eslint-disable misc/ts-misc/types/prefer-undefined-shorthand -- Ok */

export type And<A, B, C = unknown, D = unknown, E = unknown, F = unknown> =
  // @prettier
  A & B & C & D & E & F;

// eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
export type Entry<K extends PropertyKey, T> = readonly [K, T];

// eslint-disable-next-line misc/ts-misc/types/prefer-IndexedObject -- Ok
export type IndexedObject<T = unknown> = Rec<PropertyKey, T>;

export type IndexedObjects<T = unknown> = ReadonlyArray<IndexedObject<T>>;

// eslint-disable-next-line misc/ts-misc/types/prefer-IndexedRecord -- Ok
export type IndexedRecord<T = unknown> = Rec<string, T>;

export type IndexedRecords<T = unknown> = ReadonlyArray<IndexedRecord<T>>;

// eslint-disable-next-line misc/ts-misc/types/prefer-NumStr -- Ok
export type NumStr = number | string;

export type NumStrE = empty | NumStr;

export type NumStrU = NumStr | undefined;

export type NumStrs = readonly NumStr[];

export type Optional<T> = { [K in keyof T]?: T[K] };

export type Or<A, B, C = never, D = never, E = never, F = never> =
  // @prettier
  A | B | C | D | E | F;

export type PartialRecord<K extends PropertyKey, V> = { readonly [L in K]?: V };

export type PartialRecords<K extends PropertyKey, V> =
  // @prettier
  ReadonlyArray<PartialRecord<K, V>>;

export type PropertyKeyE = empty | PropertyKey;

export type PropertyKeyU = PropertyKey | undefined;

export type PropertyKeys = readonly PropertyKey[];

export type Rec<K extends PropertyKey, V> = { readonly [L in K]: V };

export type Recs<K extends PropertyKey, V> = ReadonlyArray<Rec<K, V>>;

export type Writable<T> = { -readonly [K in keyof T]: T[K] };

// eslint-disable-next-line misc/ts-misc/types/prefer-WritableIndexedObject -- Ok
export type WritableIndexedObject<T = unknown> = WritableRecord<PropertyKey, T>;

export type WritableIndexedObjects<T = unknown> =
  // @prettier
  ReadonlyArray<WritableIndexedObject<T>>;

export type WritableIndexedRecord<T = unknown> = WritableRecord<string, T>;

export type WritableIndexedRecords<T = unknown> =
  // @prettier
  ReadonlyArray<WritableIndexedRecord<T>>;

export type WritablePartialRecord<K extends PropertyKey, V> = { [L in K]?: V };

export type WritablePartialRecords<K extends PropertyKey, V> =
  // @prettier
  ReadonlyArray<WritablePartialRecord<K, V>>;

export type WritableRecord<K extends PropertyKey, V> = { [L in K]: V };

export type WritableRecords<K extends PropertyKey, V> =
  // @prettier
  ReadonlyArray<WritableRecord<K, V>>;

export type booleanE = empty | boolean;

export type booleanU = boolean | undefined;

export type booleans = readonly boolean[];

export type empty = null | undefined;

export type falseU = false | undefined;

export type nevers = readonly never[];

export type numberE = empty | number;

export type numberU = number | undefined;

export type numbers = readonly number[];

export type objectE = empty | object;

export type objectU = object | undefined;

export type objects = readonly object[];

export type stringE = empty | string;

export type stringU = string | undefined;

export type strings = readonly string[];

export type trueU = true | undefined;

export type unknowns = readonly unknown[];
