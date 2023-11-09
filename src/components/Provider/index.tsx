import type { FC, PropsWithChildren } from 'react'
import { NextUIProvider } from '@nextui-org/react'

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextUIProvider>
      <main className="text-foreground bg-background">
        {children}
      </main>
    </NextUIProvider>
  )
}
