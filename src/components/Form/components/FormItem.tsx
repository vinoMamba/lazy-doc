import { Form } from "antd"
import { FC } from "react"
import { FormSchema } from "../type"
import { compoentMap } from "../componentMap"

const { Item } = Form

type Props = {
  schema: FormSchema
}

export const FormItem: FC<Props> = ({ schema }) => {
  const { label, field, component, componentProps } = schema

  const getContent = () => {
    const Comp = compoentMap.get(component) as FC
    return (<Comp {...componentProps} />)
  }
  return (
    <Item label={label} name={field} >
      {getContent()}
    </Item>
  )
}
