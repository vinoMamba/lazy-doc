import type { FC } from 'react'
import { Button, Card, CardBody, Input } from '@nextui-org/react'
import { LandingIntro } from './components/LandingIntro'
import { ToggleMode } from '@/components/ToggleMode'

export const Login: FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center cursor-default">
      <Card isBlurred>
        <CardBody>
          <div className=" grid grid-cols-2 gap-4 py-8 px-4">
            <LandingIntro />
            <div className="flex flex-col gap-4 ">
              <h6 className=" text-2xl font-bold flex items-center justify-between">
                <span className="">Login</span>
                <ToggleMode />
              </h6>
              <Input type="text" placeholder="username" size="sm" />
              <Input type="password" placeholder="password" size="sm" />
              <Button>Login</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
