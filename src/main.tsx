import { Suspense, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { useDarkMode } from './store/useDarkMode'
import { router } from '@/router/router'
import { Loading } from '@/components/Loading'
import { Provider } from '@/components/Provider'

import './global.css'

const container = document.getElementById('root')

function App() {
  const [isDarkMode] = useDarkMode(s => [s.isDarkMode])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <Provider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  )
}

container && createRoot(container).render(<App />)
