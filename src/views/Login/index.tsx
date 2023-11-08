import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { LandingIntro } from './components/LandingIntro'
import { Input } from '@/components/Input'

export const Login: FC = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/home')
  }
  return (
    <main className=" w-screen h-screen flex items-center justify-center bg-base-100">
      <div className="card card-side bg-base-200">
        <LandingIntro />
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div className="h-full flex flex-col gap-4 mt-4">
            <Input type="text" placeholder="email" />
            <Input type="password" placeholder="password" />
            <button className="btn btn-neutral w-full" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </main>
  )
}
