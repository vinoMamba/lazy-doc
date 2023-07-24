import { Col, Form } from "antd"
import { FC } from "react"
import { CompProps, FormProps, FormSchema } from "../type"
import { compoentMap } from "../componentMap"

const { Item } = Form

type Props = {
  schema: FormSchema
  formProps: FormProps
}

export const FormItem: FC<Props> = ({ schema, formProps }) => {
  const { labelWidth = 100 } = formProps
  const { label, field, component, span, required } = schema

  const getContent = () => {
    let { componentProps = {} } = schema;

    if (typeof componentProps === 'function') {
      componentProps = componentProps({ schema }) as CompProps
    }

    const Comp = compoentMap.get(component) as FC

    return (<Comp {...componentProps} />)
  }
  return (
    <Col span={span || 24} className="px-4">
      <Item
        required={required}
        label={label}
        labelCol={{
          style: {
            width: labelWidth
          }
        }}
        name={field}>
        {getContent()}
      </Item>
    </Col>
  )
}
