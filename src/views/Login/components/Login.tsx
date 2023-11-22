import { Button, Input, Link } from '@nextui-org/react'
import { type FC, useContext, useEffect, useState } from 'react'
import useSWRMutation from 'swr/mutation'
import { LoginFetcher, type LoginParams } from '@/api/user'
import { router } from '@/router/router'
import { LoginContext } from '@/store/useLoginContext'

export const Login: FC = () => {
  const { username, setCurrentTab } = useContext(LoginContext)!
  const [loginParams, setLoginParams] = useState<LoginParams>({
    username: '',
    password: '',
  })

  const { trigger, data } = useSWRMutation('/api/user/login', LoginFetcher)
  useEffect(() => {
    if (data && data.code === 0) {
      router.navigate('/project/list')
    }
  }, [data])

  useEffect(() => {
    setLoginParams(prev => ({ ...prev, username }))
  }, [username])

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="username"
        size="sm"
        value={loginParams.username}
        onChange={(e) => {
          setLoginParams(prev => ({ ...prev, username: e.target.value }))
        }}
      />
      <Input
        type="password"
        placeholder="password"
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
      <Button color="secondary" onClick={() => trigger(loginParams)}>login</Button>
    </div>
  )
}
