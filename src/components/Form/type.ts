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
  labelWidth?: number
}

export interface FormSchema {
  field: string
  label: string
  component: ComponentType
  componentProps?: CompProps
  required?: boolean
  span?: number
}

export type CompProps = ((opt: { schema: FormSchema }) => Recordable) | Recordable

export type ComponentType =
  'Input'
  | 'TextArea'
  | 'InputNumber'
  | 'Select'
  | 'Table'
  | 'ByteEditor'
  | 'Upload'
