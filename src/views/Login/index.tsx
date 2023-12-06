import type { FC } from 'react'
import { useState } from 'react'
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import { LandingIntro } from './components/LandingIntro'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { ToggleMode } from '@/components/ToggleMode'
import { LoginContext } from '@/store/useLoginContext'

export const LoginPaner: FC = () => {
  const [currentTab, setCurrentTab] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState<string>('')
  return (
    <div className="w-full h-screen flex justify-center items-start cursor-default relative">
      <Card isBlurred className=" bg-content1 absolute top-1/4">
        <CardBody>
          <div className=" grid grid-cols-2 gap-4 py-8 px-4">
            <LandingIntro />
            <div className="flex flex-col gap-4 relative">
              <div className=" absolute top-0 right-1">
                <ToggleMode />
              </div>
              <LoginContext.Provider value={{
                setCurrentTab,
                email,
                setEmail,
              }}
              >
                <Tabs
                  selectedKey={currentTab}
                  onSelectionChange={key => setCurrentTab(key as 'login' | 'register')}
                  aria-label="login-register"
                  size="sm"
                  variant="underlined"
                >
                  <Tab key="login" title="登录">
                    <Login />
                  </Tab>
                  <Tab key="register" title="注册">
                    <Register />
                  </Tab>
                </Tabs>
              </LoginContext.Provider>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
