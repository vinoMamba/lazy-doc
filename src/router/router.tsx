import { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const Login = lazy(() => import('@/views/Login').then(r => ({ default: r.Login })))
const Home = lazy(() => import('@/views/Home').then(r => ({ default: r.Home })))

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
  {
    path: '/home',
    element: <Home />,
  },
  // 404 route
  {
    path: '*',
    element: <div>404</div>,
  },
])
