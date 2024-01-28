export type Omit1<T, K extends keyof T> = Omit<T, K>;

export type Omit2<K extends PropertyKey> = { [L in K]?: never };

// eslint-disable-next-line misc/typescript/prefer-enum -- Ok
export type PickGroupsOption =
  | "defined"
  | "optional"
  | "readonly"
  | "required"
  | "undefined"
  | "writable";
