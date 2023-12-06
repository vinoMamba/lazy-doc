import { Button, Input, Link } from '@nextui-org/react'
import { useContext, useEffect, useState } from 'react'
import type { FC } from 'react'
import { LoginContext } from '@/store/useLoginContext'
import type { RegisterParams } from '@/api/useRegister'
import { useRegister } from '@/api/useRegister'

export const Register: FC = () => {
  const [disabled, setDisabled] = useState(true)
  const { setCurrentTab } = useContext(LoginContext)!
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
        label="邮箱"
        isRequired
        type="text"
        placeholder="请输入邮箱"
        value={registerParams.email}
        onChange={(e) => {
          setRegisterParams(prev => ({ ...prev, email: e.target.value }))
        }}
      />
      <Input
        isRequired
        label="密码"
        type="password"
        placeholder="请输入密码"
        value={registerParams.password}
        onChange={(e) => {
          setRegisterParams(prev => ({ ...prev, password: e.target.value }))
        }}
      />
      <Input
        isRequired
        label="确认密码"
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
        <Link size="sm" onPress={() => setCurrentTab('login')}>
          去登录
        </Link>
      </p>
      <Button
        color="secondary"
        isDisabled={disabled}
        onClick={() => handleRegister(registerParams)}
      >
        注册
      </Button>
    </div>
  )
}
