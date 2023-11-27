import type { FC, PropsWithChildren } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { notification } from 'antd'
import type { NotifyContextProps } from '@/store/useNotifyContext'
import { NotifyContext } from '@/store/useNotifyContext'

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [api, notifyHolder] = notification.useNotification()
  const contextValue = {
    success: (message: string, opt?: NotifyContextProps) => {
      api.success({
        message,
        duration: opt?.duration ?? 2,
      })
    },
    error: (message: string, opt?: NotifyContextProps) => {
      api.error({
        message,
        duration: opt?.duration ?? 2,
      })
    },
  }
  return (
    <NextUIProvider>
      <NotifyContext.Provider value={contextValue}>
        {notifyHolder}
        <main className="text-foreground bg-background">
          {children}
        </main>
      </NotifyContext.Provider>
    </NextUIProvider>
  )
}
