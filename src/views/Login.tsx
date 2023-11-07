import { Button, Card, Input } from 'antd'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login: FC = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/home')
  }
  return (
    <main className=" flex items-center justify-center h-screen w-screen">
      <Card title="Login" bordered={false} style={{ width: 300 }}>
        <div className="flex flex-col   gap-4">
          <Input placeholder="username/email" />
          <Input placeholder="password" type="password" />
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </Card>
    </main>
  )
}
