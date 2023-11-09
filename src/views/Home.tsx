import type { FC } from 'react'
import { Header } from '@/components/Header'

export const Home: FC = () => {
  return (
    <div>
      <Header />
      <section className="max-w-[1280px] m-auto grid grid-cols-4">
        <div className="relative overflow-visible z-10">
          <aside className="sticky top-16 h-[calc(100vh-65px)] w-full bg-default-100">
          </aside>
        </div>
        <div className="col-span-3 bg-default-50 h-screen"></div>
      </section>
    </div>
  )
}
