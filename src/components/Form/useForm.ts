import { MutableRefObject, useEffect, useRef } from "react"
import { FormRef, FormProps } from "./type"
import { NamePath } from "antd/es/form/interface"

type Method = {
  validate: () => Promise<Recordable>
  resetFields: () => void
  setFieldValue: (name: NamePath, value: unknown) => void;
  setFieldsValue: (values: Recordable) => void;
}

type ReturnType = [
  MutableRefObject<FormRef | null>,
  Method
]



export const useForm = (initProps: FormProps) => {
  const formRef = useRef<FormRef | null>(null)

  const getInstance = () => {
    console.log(formRef.current)
    return formRef.current
  }

  useEffect(() => {
    getInstance()?.setProps((props: FormProps) => ({
      ...props,
      ...initProps
    }) as FormProps)
  }, [formRef, initProps])

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
    },
    setFieldValue: (name: NamePath, value: unknown) => {
      getInstance()?.form.setFieldValue(name, value)
    },
    setFieldsValue: (values:Recordable) => {
      getInstance()?.form.setFieldsValue(values)
    },
  }

  return [formRef, method] as ReturnType
}
