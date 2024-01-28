import type { Omit1, Omit2 } from "./object.internal";

export type { Optional } from "ts-toolbelt/out/Object/Optional";
export type { Readonly } from "ts-toolbelt/out/Object/Readonly";
export type { Required } from "ts-toolbelt/out/Object/Required";
export type { Writable } from "ts-toolbelt/out/Object/Writable";

export type Omit<T, K extends keyof T> = Omit1<T, K> & Omit2<K>;
