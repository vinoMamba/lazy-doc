import { FormInstance } from "antd"
import { Dispatch, SetStateAction } from "react"

export type FormRef = {
  setProps: Dispatch<SetStateAction<FormProps>>
  form: FormInstance<Recordable>
}

export type FormProps = {
  name?: string
  layout?: 'horizontal' | 'vertical' | 'inline'
  schemas?: FormSchema[]
}

export interface FormSchema {
  field: string
  label: string
  component: ComponentType
  componentProps?: (() => Recordable) | Recordable
  required?: boolean
}

export type ComponentType = 'Input'
