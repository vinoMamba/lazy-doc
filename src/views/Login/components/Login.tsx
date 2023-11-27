import { Button, Input, Link } from '@nextui-org/react'
import { type FC, useContext, useEffect, useState } from 'react'
import useSWRMutation from 'swr/mutation'
import { LoginFetcher, type LoginParams } from '@/api/user'
import { router } from '@/router/router'
import { LoginContext } from '@/store/useLoginContext'

export const Login: FC = () => {
  const [disabled, setDisabled] = useState(true)
  const { username, setCurrentTab } = useContext(LoginContext)!
  const [loginParams, setLoginParams] = useState<LoginParams>({
    username: '',
    password: '',
  })

  const { trigger, data } = useSWRMutation('/api/user/login', LoginFetcher)

  useEffect(() => {
    if (data && data.code === 0) {
      window.localStorage.setItem('token', data.data.token)
      router.navigate('/project/list')
    }
  }, [data])

  useEffect(() => {
    setLoginParams(prev => ({ ...prev, username }))
  }, [username])

  useEffect(() => {
    setDisabled(
      loginParams.username === ''
      || loginParams.password === '',
    )
  }, [loginParams])

  const handleLogin = () => {
    trigger(loginParams)
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        labelPlacement="outside"
        label="username"
        isRequired
        type="text"
        placeholder="Enter your username"
        size="sm"
        value={loginParams.username}
        onChange={(e) => {
          setLoginParams(prev => ({ ...prev, username: e.target.value }))
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
      <Button isDisabled={disabled} color="secondary" onClick={handleLogin}>login</Button>
    </div>
  )
}
