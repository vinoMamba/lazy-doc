import { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const Login = lazy(() => import('@/views/Login').then(r => ({ default: r.LoginPaner })))
const Layout = lazy(() => import('@/components/Layout').then(r => ({ default: r.BasicLayout })))
const ProjectList = lazy(() => import('@/views/ProjectList').then(r => ({ default: r.ProjectList })))
const Proejct = lazy(() => import('@/views/Project').then(r => ({ default: r.Project })))

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
    path: '/project',
    element: <Layout />,
    children: [
      {
        path: 'list',
        element: <ProjectList />,
      },
      {
        path: 'item/:id',
        element: <Proejct />,
      },
    ],
  },
  // 404 route
  {
    path: '*',
    element: <div>404</div>,
  },
])
