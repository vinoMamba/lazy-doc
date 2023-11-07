import { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const Login = lazy(() => import('@/views/Login').then(r => ({ default: r.Login })))

export const router = createBrowserRouter([
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
