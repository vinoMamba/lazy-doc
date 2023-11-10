import { Children, type FC, type PropsWithChildren, useEffect } from 'react'
import { Header } from '@/components/Header'

export const LayoutAside: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export const LayoutMain: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const aside = Children.map(children, (child) => {
    if (child.type === LayoutAside)
      return child
    else
      return null
  })

  const main = Children.map(children, (child) => {
    if (child.type === LayoutMain)
      return child
    else
      return null
  })
  return (
    <div>
      <Header />
      <section className=" max-w-screen-lg m-auto grid grid-cols-4">
        <div className="relative overflow-visible z-10">
          <aside className="sticky top-16 h-[calc(100vh-65px)] w-full p-2">
            {aside}
          </aside>
        </div>
        <div className="col-span-3 bg-default-50 ">
          {main}
        </div>
      </section>
    </div>
  )
}
