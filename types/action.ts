export type ActionState<O> = {
  error?: string | null
  data?: O | null
} | void

export type Action<I, O = null> = (values?: I) => Promise<ActionState<O>>
