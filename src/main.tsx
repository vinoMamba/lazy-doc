import { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Loading } from './components/Loading'

const Login = lazy(() => import('./views/Login').then(r => ({ default: r.Login })))

const router = createBrowserRouter([
  {
    // "/" 重定向到 '/login'
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  // 404 route
  {
    path: '*',
    element: <div>404</div>,
  },
])

const container = document.getElementById('root')

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

container && createRoot(container).render(<App />)
