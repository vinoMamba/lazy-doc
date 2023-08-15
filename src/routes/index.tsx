import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "/@/views/Login";
import { Home } from "../views/Home";
import { Erd } from "../views/erd";
import { Doc } from "../views/doc";
import { Project } from "../views/erd/project";
import { ProjectItem } from "../views/erd/projectItem";

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
    path: "home",
    element: <Home />
  },
  {
    path: "erd",
    element: <Erd />,
    children: [
      {
        path: "project",
        element: <Project />,
      },

      {
        path: "project/:projectId",
        element: <ProjectItem />,
        loader: async ({ params }) => {
          return params.projectId
        }
      },
      {
        path: "proejct-group",
        element: <div>1111</div>,
      }
    ]
  },
  {
    path: "doc",
    element: <Doc />
  },
]);

