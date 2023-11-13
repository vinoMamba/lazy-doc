import { Children, type FC, type PropsWithChildren, isValidElement } from 'react'
import { Header } from '../Header'

export const LayoutSideNav: FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-full border-small px-1 py-2 rounded-small border-default-200">{children}</div>
}

export const LayoutSideMain: FC<PropsWithChildren> = ({ children }) => {
  return children
}

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const layoutSideNav = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === LayoutSideNav)
      return child
  })
  const layoutMain = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === LayoutSideMain)
      return child
  })
  return (
    <div>
      <Header />
      <section className=" max-w-screen-lg m-auto grid grid-cols-4">
        <div className="relative overflow-visible z-10">
          <aside className="sticky top-16 h-[calc(100vh-65px)] w-full p-2">
            {layoutSideNav}
          </aside>
        </div>
        <div className="col-span-3">
          {layoutMain}
        </div>
      </section>
    </div>
  )
}
