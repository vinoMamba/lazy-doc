import { Card, Input, Button } from 'antd'
export const Login = () => {
  return (
    <main className="m-screen h-screen bg-#fafafa flex items-center justify-center">
      <Card title="登录" bordered={false} style={{ width: 300 }}>
        <div className='flex-col justify-center items-center'>
          <Input placeholder='用户名' className='mb-8' size="large" />
          <Input placeholder='密码' className='mb-8' size="large" type="password" />
          <Button className='w-full' size="large" type="primary">登录</Button>
        </div>
      </Card>
    </main>
  )
}
