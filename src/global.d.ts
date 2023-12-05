declare interface Result<T = any> {
  code: number
  data: T
  message: string
}

declare interface JSONValue {
  [key: string]: any
}
