import type * as keys from "./object.keys";
import type { And } from "./core";

export type Optional<T extends object> = And<
  { [K in keys.WritableDefined<T>]: T[K] },
  { [K in keys.WritableUndefined<T>]?: Exclude<T[K], undefined> },
  { readonly [K in keys.ReadonlyDefined<T>]: T[K] },
  { readonly [K in keys.ReadonlyUndefined<T>]?: Exclude<T[K], undefined> }
>;

export type OptionalUndefined<T extends object> = And<
  { [K in keys.WritableDefined<T>]: T[K] },
  { [K in keys.WritableUndefined<T>]?: T[K] | undefined },
  { readonly [K in keys.ReadonlyDefined<T>]: T[K] },
  { readonly [K in keys.ReadonlyUndefined<T>]?: T[K] | undefined }
>;

export type Undefined<T extends object> = And<
  { [K in keys.WritableDefined<T>]: T[K] },
  { [K in keys.WritableUndefined<T>]: T[K] | undefined },
  { readonly [K in keys.ReadonlyDefined<T>]: T[K] },
  { readonly [K in keys.ReadonlyUndefined<T>]: T[K] | undefined }
>;
