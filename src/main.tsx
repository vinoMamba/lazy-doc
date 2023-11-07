import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { RouterProvider } from 'react-router-dom'
import { Loading } from '@/components/Loading'
import { LayoutProvider } from '@/components/LayoutProvider'
import { router } from '@/router/router'

const container = document.getElementById('root')

function App() {
  return (
    <LayoutProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </LayoutProvider>
  )
}

container && createRoot(container).render(<App />)
