import type { FC, PropsWithChildren } from 'react'
import { App, ConfigProvider, theme } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import { useDarkMode } from '@/store/useDarkMode'

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [isDarkMode] = useDarkMode(s => [s.isDarkMode])
  return (
    <App>
      <StyleProvider hashPriority="high">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#863eb9',
            },
            algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
          }}
        >
          <main className=" bg-white dark:bg-black">
            {children}
          </main>
        </ConfigProvider>
      </StyleProvider>
    </App>
  )
}
