import type { FC } from 'react'
import { useState } from 'react'
import { Button, Card, CardBody, Input, Tab, Tabs } from '@nextui-org/react'
import { LandingIntro } from './components/LandingIntro'
import { Register } from './components/Register'
import { ToggleMode } from '@/components/ToggleMode'
import { router } from '@/router/router'
import { LoginContext } from '@/store/useLoginContext'

export const Login: FC = () => {
  const [currentTab, setCurrentTab] = useState<'login' | 'register'>('login')
  const handleClick = () => {
    router.navigate('/project/list')
  }
  return (
    <div className="w-full h-screen flex items-center justify-center cursor-default">
      <Card isBlurred className=" bg-content1">
        <CardBody>
          <div className=" grid grid-cols-2 gap-4 py-8 px-4">
            <LandingIntro />
            <div className="flex flex-col gap-4 relative">
              <div className=" absolute top-0 right-1">
                <ToggleMode />
              </div>
              <LoginContext.Provider value={{ setCurrentTab }}>
                <Tabs
                  selectedKey={currentTab}
                  onSelectionChange={key => setCurrentTab(key as 'login' | 'register')}
                  aria-label="login-register"
                  size="sm"
                  variant="underlined"
                >
                  <Tab key="login" title="Login" className=" flex flex-col gap-4">
                    <Input type="text" placeholder="username" size="sm" />
                    <Input type="password" placeholder="password" size="sm" />
                    <Button onClick={handleClick}>Login</Button>
                  </Tab>
                  <Tab key="register" title="Register">
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
