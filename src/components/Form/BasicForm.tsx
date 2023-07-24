import { Form } from "antd"
import { forwardRef, useImperativeHandle, useState } from "react"
import { FormRef, FormProps } from "./type"
import { FormItem } from "./components/FormItem"

export const BasicForm = forwardRef<FormRef, FormProps>((props, ref) => {

  const [initProps, setProps] = useState<FormProps>(props)
  const { schemas = [] } = initProps

  const [form] = Form.useForm()

  useImperativeHandle(ref, () => ({ setProps, form }))

  return (
    <Form
      form={form}
    >{
        schemas.map(schema => (
          <FormItem key={schema.field} schema={schema} />
        ))
      }</Form>
  )
})
