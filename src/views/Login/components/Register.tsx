import { useEffect } from 'react'
import type { FC } from 'react'
import { Button, Form, Input } from 'antd'
import useSWRMutation from 'swr/mutation'
import { useHttp } from '@/shared/http'
import { useMessage } from '@/hooks/useMessage'
import { useLoginTab } from '@/store/useLoginTab'

export interface RegisterParams {
  email: string
  password: string
  confirmPassword: string
}

export const Register: FC = () => {
  const [setLoginEmail, setTab] = useLoginTab(s => [s.setLoginEmail, s.setTab])
  const { message } = useMessage()
  const { post } = useHttp()
  const { trigger, data, isMutating } = useSWRMutation(
    '/api/user/register',
    (url, { arg }: { arg: RegisterParams }) => post<{ email: string }>(url, arg),
  )

  useEffect(() => {
    if (data) {
      message.success('注册成功')
      setLoginEmail(data.data.email)
      setTab('login')
    }
  }, [data])

  return (
    <Form<RegisterParams> onFinish={value => trigger(value)}>
      <Form.Item name="email" rules={[{ required: true, message: '请输入邮箱' }]}>
        <Input placeholder="请输入邮箱" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password placeholder="请输入密码" />
      </Form.Item>
      <Form.Item name="confirmPassword" rules={[{ required: true, message: '请确认密码' }]}>
        <Input.Password placeholder="请确认密码" />
      </Form.Item>
      <Form.Item>
        <Button loading={isMutating} type="primary" htmlType="submit" className=" w-full">
          注册
        </Button>
      </Form.Item>
    </Form>
  )
}
