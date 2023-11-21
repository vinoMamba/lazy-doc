import { Button, Input } from '@nextui-org/react'
import { useContext, useEffect, useState } from 'react'
import type { FC } from 'react'
import useSWRMutation from 'swr/mutation'
import { type RegisterParams, registerFetcher } from '@/api/user'
import { LoginContext } from '@/store/useLoginContext'

export const Register: FC = () => {
  const { setCurrentTab } = useContext(LoginContext)!
  const [registerParams, setRegisterParams] = useState<RegisterParams>({
    username: '',
    password: '',
    confirmPassword: '',
  })

  const { trigger, data } = useSWRMutation('/api/user/register', registerFetcher)

  useEffect(() => {
    if (data && data.code === 0) {
      setCurrentTab('login')
    }
  }, [data])

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="username"
        size="sm"
        value={registerParams.username}
        onChange={(e) => {
          setRegisterParams(prev => ({ ...prev, username: e.target.value }))
        }}
      />
      <Input
        type="password"
        placeholder="password"
        size="sm"
        value={registerParams.password}
        onChange={(e) => {
          setRegisterParams(prev => ({ ...prev, password: e.target.value }))
        }}
      />
      <Input
        type="password"
        placeholder="confirm password"
        size="sm"
        value={registerParams.confirmPassword}
        onChange={(e) => {
          setRegisterParams(prev => ({ ...prev, confirmPassword: e.target.value }))
        }}
      />
      <Button onClick={() => trigger(registerParams)} variant="faded">Register</Button>
    </div>
  )
}
