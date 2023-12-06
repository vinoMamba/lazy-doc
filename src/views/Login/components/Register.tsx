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
        label="Email"
        isRequired
        type="text"
        placeholder="Enter your Email"
        size="sm"
        value={registerParams.email}
        onChange={(e) => {
          setRegisterParams(prev => ({ ...prev, email: e.target.value }))
        }}
      />
      <Input
        isRequired
        label="Password"
        type="password"
        placeholder="Enter your password"
        size="sm"
        value={registerParams.password}
        onChange={(e) => {
          setRegisterParams(prev => ({ ...prev, password: e.target.value }))
        }}
      />
      <Input
        isRequired
        label="ConfirmPassword"
        type="password"
        placeholder="Enter your password again"
        size="sm"
        value={registerParams.confirmPassword}

        onChange={(e) => {
          setRegisterParams(prev => ({ ...prev, confirmPassword: e.target.value }))
        }}
      />

      <p className="text-center text-small">
        Already have an account?
        {' '}
        <Link size="sm" onPress={() => setCurrentTab('login')}>
          Login
        </Link>
      </p>
      <Button
        color="secondary"
        isDisabled={disabled}
        onClick={() => handleRegister(registerParams)}
      >
        Register
      </Button>
    </div>
  )
}
