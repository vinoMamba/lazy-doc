import { Action, ActionState } from "@/types/action"
import { useCallback, useState, useTransition } from "react"


export const useAction = <I, O = null>(
  action: Action<I, O>,
  options?: {
    onSuccess?: (data: any) => void
    onError?: (error: any) => void
    onCompleted?: () => void
  }
) => {
  const [isPending, setTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<any>(null)

  const execute = useCallback(
    (values: I) => {
      setTransition(async () => {
        try {
          setError(null)
          setData(null)
          const result = await action(values)
          if (result) {
            if (result.error) {
              setError(result.error)
              options?.onError?.(result.error)
            }
            if (result.data) {
              setData(result.data)
              options?.onSuccess?.(result.data)
            }
          }

        } finally {
          options?.onCompleted?.()
        }
      })
    },
    [action, setTransition]
  )

  return {
    isPending,
    error,
    data,
    execute
  }
}
