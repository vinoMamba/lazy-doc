import { Col, Form } from "antd"
import { FC } from "react"
import { FormProps, FormSchema } from "../type"
import { compoentMap } from "../componentMap"

const { Item } = Form

type Props = {
  schema: FormSchema
  formProps: FormProps
}

export const FormItem: FC<Props> = ({ schema, formProps }) => {
  const { labelWidth = 100 } = formProps
  const { label, field, component, componentProps, span } = schema

  const getContent = () => {
    const Comp = compoentMap.get(component) as FC
    return (<Comp {...componentProps} />)
  }
  return (
    <Col span={span || 24} className="px-4">
      <Item
        label={
          <span style={{ width: labelWidth }}>{label}</span>
        }
        name={field} >
        {getContent()}
      </Item>
    </Col>
  )
}
