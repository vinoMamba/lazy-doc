import { type FC, useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import useSWRMutation from 'swr/mutation'
import { type UserInfo, useUser } from '@/store/useUser'
import { useHttp } from '@/shared/http'
import { router } from '@/router/router'
import { useLoginTab } from '@/store/useLoginTab'

export interface LoginParams {
  email: string
  password: string
}

const { useForm } = Form

export const Login: FC = () => {
  const [form] = useForm()
  const [email] = useLoginTab(s => [s.email])
  const [setUserInfo] = useUser(s => [s.setUserInfo])
  const { post } = useHttp()
  const { trigger, data, isMutating } = useSWRMutation(
    '/api/user/login',
    (url, { arg }: { arg: LoginParams }) => post<UserInfo>(url, arg),
  )

  useEffect(() => {
    if (data) {
      setUserInfo(data.data)
      router.navigate('/project/list')
    }
  }, [data])

  useEffect(() => {
    if (email) {
      form.setFieldsValue({ email, password: '' })
    }
  }, [email])

  return (
    <Form<LoginParams> onFinish={v => trigger(v)} form={form}>
      <Form.Item name="email" rules={[{ required: true, message: '请输入邮箱' }]}>
        <Input placeholder="请输入邮箱" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password placeholder="请输入密码" />
      </Form.Item>
      <Form.Item>
        <Button loading={isMutating} type="primary" htmlType="submit" className=" w-full">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}
