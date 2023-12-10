import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'

export const BasicLayout: FC = () => {
  return (
    <div className=" h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
