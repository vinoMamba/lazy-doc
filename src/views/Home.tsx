import type { FC } from 'react'
import { Header } from '@/components/Header'

export const Home: FC = () => {
  return (
    <div>
      <Header />
      <main className=" bg-slate-400 w-full h-screen"></main>
    </div>
  )
}
