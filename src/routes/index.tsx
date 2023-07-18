import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "/@/views/Login";
import { ProjectLayout } from "../views/ProjectLayout";
import { ProjectList } from "../components/Project";
import { Project } from "../views/Project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "project",
    element: <ProjectLayout />,
    children: [
      {
        path: 'list',
        element: <ProjectList />
      },
      {
        path: ":projectId",
        element: <Project />
      }
    ]
  },
]);

