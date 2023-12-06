import { Button, Input, Link } from '@nextui-org/react'
import { type FC, useContext, useEffect, useState } from 'react'
import { LoginContext } from '@/store/useLoginContext'
import type { LoginParams } from '@/api/useLogin'
import { useLogin } from '@/api/useLogin'

export const Login: FC = () => {
  const [disabled, setDisabled] = useState(true)
  const { email, setCurrentTab } = useContext(LoginContext)!
  const [loginParams, setLoginParams] = useState<LoginParams>({
    email: '',
    password: '',
  })

  const { handleLogin } = useLogin()

  useEffect(() => {
    setLoginParams(prev => ({ ...prev, email }))
  }, [email])

  useEffect(() => {
    setDisabled(
      loginParams.email === ''
      || loginParams.password === '',
    )
  }, [loginParams])

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="邮箱"
        isRequired
        type="text"
        placeholder="请输入邮箱"
        value={loginParams.email}
        onChange={e => setLoginParams(prev => ({ ...prev, email: e.target.value }))}
      />
      <Input
        label="密码"
        isRequired
        type="password"
        placeholder="请输入密码"
        value={loginParams.password}
        onChange={e => setLoginParams(prev => ({ ...prev, password: e.target.value }))}
      />
      <p className="text-center text-small">
        还没有账号?
        {' '}
        <Link size="sm" onPress={() => setCurrentTab('register')}>
          去注册
        </Link>
      </p>
      <Button isDisabled={disabled} color="secondary" onClick={() => handleLogin(loginParams)}>登录</Button>
    </div>
  )
}
