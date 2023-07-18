import { Card, Input, Button } from 'antd'
import { ChangeEvent } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type LoginParams = {
  username: string
  password: string
}

type Key = keyof LoginParams

export const Login = () => {
  const navigate = useNavigate()
  const [loginParams, setLoginParams] = useState<LoginParams>({
    username: '',
    password: ''
  })

  const handleClick = () => {
    navigate("/project/list")
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>, key: Key) => {
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
          <Button className='w-full' size="large" type="primary" onClick={handleClick}>登录</Button>
        </div>
      </Card>
    </main>
  )
}
