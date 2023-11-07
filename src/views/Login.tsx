import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login: FC = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/home')
  }
  return (
    <main className=" flex items-center justify-center h-screen w-screen">
      <div className=" card card-compact w-[300px] shadow-sm">
        <div className="card-title p-4 pb-0">Login</div>
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
