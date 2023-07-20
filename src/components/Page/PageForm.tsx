import { Button, Form, Input } from "antd"

const { useForm, Item } = Form


export const PageForm = () => {
  const [form] = useForm()
  const handleClick = async () => {
    const value = await form.validateFields()
    console.log(value)
  }
  return (
    <>
      <Form
        form={form}
        name="pageForm"
        layout="vertical"
      >
        <Item name='url' label="请求URL">
          <Input />
        </Item>
        <Button onClick={handleClick}>ok</Button>
      </Form>
    </>
  )
}
