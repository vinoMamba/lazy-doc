declare type ActionState<Output = null> = {
  error?: string
  data?: Output | null
}

declare type Action<Input, Output = null> = (values?: Input) => Promise<ActionState<Output>>
