import { Button } from "antd"
import { BasicForm, useForm } from "../Form"


export const PageForm = () => {
  const [formRef, { validate, resetFields }] = useForm({
    schemas: [
      {
        field: 'username',
        label: '用户名',
        component: "Input",
      }
    ]
  })

  const handleClick = async () => {
    try {
      const values = await validate()
      console.log(values)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Button onClick={() => void handleClick()}>validation</Button>
      <Button onClick={() => resetFields()}>resetFields</Button>
      <BasicForm ref={formRef} />
    </>
  )
}
