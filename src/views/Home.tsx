import type { FC } from 'react'
import { Header } from '@/components/Header'

export const Home: FC = () => {
  return (
    <div>
      <Header />
      <main className=" w-full h-screen flex justify-center">
        <h1 className=" text-blue-400 text-5xl">Home</h1>
      </main>
    </div>
  )
}
