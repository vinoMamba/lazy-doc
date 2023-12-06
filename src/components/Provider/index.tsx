import type { FC, PropsWithChildren } from 'react'
import { ConfigProvider, notification, theme } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import type { NotifyContextProps } from '@/store/useNotifyContext'
import { NotifyContext } from '@/store/useNotifyContext'
import { useDarkMode } from '@/store/useDarkMode'

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [isDarkMode] = useDarkMode(s => [s.isDarkMode])
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
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <NotifyContext.Provider value={contextValue}>
          {notifyHolder}
          <main className=" bg-white dark:bg-black">
            {children}
          </main>
        </NotifyContext.Provider>
      </ConfigProvider>
    </StyleProvider>
  )
}
