import { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Button, Input } from 'antd'
import type { RegisterParams } from '@/api/useRegister'
import { useRegister } from '@/api/useRegister'

export const Register: FC = () => {
  const [disabled, setDisabled] = useState(true)
  const [registerParams, setRegisterParams] = useState<RegisterParams>({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { handleRegister } = useRegister()

  useEffect(() => {
    setDisabled(
      registerParams.email === ''
      || registerParams.password === ''
      || registerParams.confirmPassword === '',
    )
  }, [registerParams])

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="请输入邮箱"
        value={registerParams.email}
        onChange={(e) => {
          setRegisterParams(prev => ({ ...prev, email: e.target.value }))
        }}
      />
      <Input
        type="password"
        placeholder="请输入密码"
        value={registerParams.password}
        onChange={(e) => {
          setRegisterParams(prev => ({ ...prev, password: e.target.value }))
        }}
      />
      <Input
        type="password"
        placeholder="请再次输入密码"
        value={registerParams.confirmPassword}
        onChange={(e) => {
          setRegisterParams(prev => ({ ...prev, confirmPassword: e.target.value }))
        }}
      />

      <p className="text-center text-small">
        已经有账号了?
        {' '}
        <Button type="link">
          去登录
        </Button>
      </p>
      <Button
        disabled={disabled}
        onClick={() => handleRegister(registerParams)}
      >
        注册
      </Button>
    </div>
  )
}
