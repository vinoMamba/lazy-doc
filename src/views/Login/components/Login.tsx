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
        labelPlacement="outside"
        label="username"
        isRequired
        type="text"
        placeholder="Enter your username"
        size="sm"
        value={loginParams.email}
        onChange={(e) => {
          setLoginParams(prev => ({ ...prev, email: e.target.value }))
        }}
      />
      <Input
        labelPlacement="outside"
        label="password"
        isRequired
        type="password"
        placeholder="Enter your password"
        size="sm"
        value={loginParams.password}
        onChange={(e) => {
          setLoginParams(prev => ({ ...prev, password: e.target.value }))
        }}
      />
      <p className="text-center text-small">
        Need to create an account?
        {' '}
        <Link size="sm" onPress={() => setCurrentTab('register')}>
          Register
        </Link>
      </p>
      <Button isDisabled={disabled} color="secondary" onClick={() => handleLogin(loginParams)}>login</Button>
    </div>
  )
}
