import { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const Login = lazy(() => import('@/views/Login').then(r => ({ default: r.LoginPaner })))
const Project = lazy(() => import('@/views/Project').then(r => ({ default: r.Project })))
const ProjectList = lazy(() => import('@/views/ProjectList').then(r => ({ default: r.ProjectList })))
const ProejctItem = lazy(() => import('@/views/ProjectItem').then(r => ({ default: r.ProjectItem })))

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
    element: <Project />,
    children: [
      {
        path: 'list',
        element: <ProjectList />,
      },
      {
        path: 'item/:id',
        element: <ProejctItem />,
      },
    ],
  },
  // 404 route
  {
    path: '*',
    element: <div>404</div>,
  },
])
