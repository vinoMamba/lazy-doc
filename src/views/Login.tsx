import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToggleMode } from '@/components/ToggleMode'

export const Login: FC = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/home')
  }
  return (
    <main className=" flex items-center justify-center h-screen w-screen">
      <div className=" card card-compact bg-base-200 w-[300px] shadow-lg">
        <div className="card-title p-4 pb-0">
          Login
          <ToggleMode />
        </div>
        <div className="card-body">
          <input type="text" placeholder="username / email" className=" input input-bordered w-full" />
          <input type="password" placeholder="password" className=" input input-bordered w-full" />
        </div>
        <div className=" card-actions p-4 pt-0">
          <button className=" btn btn-neutral btn-md w-full" onClick={handleLogin}>login</button>
        </div>
      </div>
    </main>
  )
}
