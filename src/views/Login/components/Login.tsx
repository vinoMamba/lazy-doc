import { type FC, useEffect, useState } from 'react'
import { Button, Input } from 'antd'
import type { LoginParams } from '@/api/useLogin'
import { useLogin } from '@/api/useLogin'

export const Login: FC = () => {
  const [disabled, setDisabled] = useState(true)
  const [loginParams, setLoginParams] = useState<LoginParams>({
    email: '',
    password: '',
  })

  const { handleLogin } = useLogin()

  useEffect(() => {
    setDisabled(
      loginParams.email === ''
      || loginParams.password === '',
    )
  }, [loginParams])

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="请输入邮箱"
        value={loginParams.email}
        onChange={e => setLoginParams(prev => ({ ...prev, email: e.target.value }))}
      />
      <Input
        type="password"
        placeholder="请输入密码"
        value={loginParams.password}
        onChange={e => setLoginParams(prev => ({ ...prev, password: e.target.value }))}
      />
      <p className="text-center text-small">
        还没有账号?
        {' '}
        <Button type="link">
          去注册
        </Button>
      </p>
      <Button disabled={disabled} onClick={() => handleLogin(loginParams)}>登录</Button>
    </div>
  )
}
