declare type Recordable<T = any> = Record<string, T>;

type JSONValue = string | number | boolean | null | { [k: string | number]: JSONValue } | JSONValue[]

type Result<T> = {
  code: number
  data: T
  message: string
}

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
