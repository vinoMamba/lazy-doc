import type { FC } from 'react'
import { SideNav } from './components/SideNav'
import { ApiList } from './components/ApiList'
import { Header } from '@/components/Header'

export const Home: FC = () => {
  return (
    <div>
      <Header />
      <section className=" max-w-screen-lg m-auto grid grid-cols-4">
        <div className="relative overflow-visible z-10">
          <aside className="sticky top-16 h-[calc(100vh-65px)] w-full p-2">
            <SideNav />
          </aside>
        </div>
        <div className="col-span-3 bg-default-50 ">
          <ApiList />
        </div>
      </section>
    </div>
  )
}
