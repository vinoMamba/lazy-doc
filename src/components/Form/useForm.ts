import { MutableRefObject, useEffect, useRef } from "react"
import { FormRef, FormProps } from "./type"

type Method = {
  validate: () => Promise<Recordable>
  resetFields: () => void
}

type ReturnType = [
  MutableRefObject<FormRef | null>,
  Method
]



export const useForm = (initProps: FormProps) => {
  const formRef = useRef<FormRef | null>(null)

  const getInstance = () => {
    return formRef.current
  }

  useEffect(() => {
    getInstance()?.setProps((props: FormProps) => ({
      ...props,
      ...initProps
    }) as FormProps)
  }, [initProps])

  const method = {
    validate: async () => {
      const instance = getInstance()
      let validate: Recordable | undefined = undefined
      try {
        validate = await instance?.form.validateFields()
      } catch (e) {
        console.error(e)
      }
      return validate
    },
    resetFields: () => {
      getInstance()?.form.resetFields()
    }
  }

  return [formRef, method] as ReturnType
}
