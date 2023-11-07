import { Suspense, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { useDarkMode } from './store/useDarkMode'
import { router } from '@/router/router'
import { Loading } from '@/components/Loading'

import './global.css'

const container = document.getElementById('root')

function App() {
  const [isDarkMode] = useDarkMode(s => [s.isDarkMode])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

container && createRoot(container).render(<App />)
