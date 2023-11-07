import type { FC } from 'react'
import { Header } from '@/components/Header/Header'

export const Home: FC = () => {
  return (
    <div>
      <Header />
      <main className=" bg-base-300 w-full h-screen"></main>
    </div>
  )
}
