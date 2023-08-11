import { Card, Input, Button } from 'antd'
import { ChangeEvent } from 'react'
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { LoginParams } from '../types'

type Key = keyof LoginParams

export const Login = () => {
  const [shouldFetch, setShouldFetch] = useState(false)
  const [loginParams, setLoginParams] = useState<LoginParams>({
    username: '',
    password: ''
  })
  const { isLoading } = useLogin(loginParams, shouldFetch)
  const handleClick = () => {
    setShouldFetch(true)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>, key: Key) => {
    setShouldFetch(false)
    const value = e.target.value
    setLoginParams(loginParams => {
      return {
        ...loginParams,
        [key]: value
      }
    })
  }
  return (
    <main className="m-screen h-screen bg-#fafafa flex items-center justify-center">
      <Card title="登录" bordered={false} style={{ width: 300 }}>
        <div className='flex-col justify-center items-center'>
          <Input
            placeholder='用户名'
            className='mb-8'
            size="large"
            value={loginParams.username}
            onChange={(e) => handleChange(e, 'username')}
          />
          <Input.Password
            placeholder='密码'
            className='mb-8'
            size="large"
            value={loginParams.password}
            onChange={(e) => handleChange(e, 'password')}
          />
          <Button loading={isLoading} className='w-full' size="large" type="primary" onClick={handleClick}>登录</Button>
        </div>
      </Card>
    </main>
  )
}
