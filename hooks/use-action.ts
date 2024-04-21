import { useCallback, useState, useTransition } from "react"

export const useAction = <Input, Output = null>(
  action: Action<Input, Output>,
  options?: {
    onSuccess?: (data: any) => void
    onError?: (error: any) => void
    onCompleted?: () => void
  }
) => {
  const [isPending, setTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<Output | null>(null)

  const execute = useCallback(
    (values: Input) => {
      setTransition(() => {
        setError(null)
        setData(null)
        action(values)
          .then((result) => {
            if (result.error) {
              setError(result.error)
              options?.onError?.(result.error)
            } else {
              setData(result.data || null)
              options?.onSuccess?.(result.data)
            }
          })
          .catch((error) => {
            setError(error.message)
            options?.onError?.(error.message)
          })
          .finally(() => {
            options?.onCompleted?.()
          })
      })
    }, [action, setTransition]
  )

  return { isPending, error, data, execute }
}
