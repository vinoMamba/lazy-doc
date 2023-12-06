import type { FC } from 'react'
import { Card, Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { LandingIntro } from './components/LandingIntro'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { ToggleMode } from '@/components/ToggleMode'

export const LoginPaner: FC = () => {
  const items: TabsProps['items'] = [
    {
      key: 'login',
      label: '登录',
      children: <Login />,
    },
    {
      key: 'register',
      label: '注册',
      children: <Register />,
    },
  ]
  return (
    <div className="w-full h-screen flex justify-center items-start cursor-default relative">
      <Card className="absolute top-1/4">
        <div className=" grid grid-cols-2 gap-4 py-8 px-4">
          <LandingIntro />
          <div className="flex flex-col gap-4 relative">
            <div className=" absolute top-0 right-1">
              <ToggleMode />
            </div>
            <Tabs defaultActiveKey="1" items={items} />
          </div>
        </div>
      </Card>
    </div>
  )
}
