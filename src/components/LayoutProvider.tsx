import type { FC, PropsWithChildren } from 'react'

export const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}
