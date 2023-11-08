import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { LandingIntro } from './components/LandingIntro'

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
          <div className="card-actions">
            <button className="btn w-full" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </main>
  )
}
