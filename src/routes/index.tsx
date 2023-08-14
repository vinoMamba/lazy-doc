import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "/@/views/Login";
import { Home } from "../views/Home";
import { Erd } from "../views/erd";
import { Doc } from "../views/doc";

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
    path:"home",
    element:<Home/>
  },
  {
    path:"erd",
    element:<Erd/>
  },
  {
    path:"doc",
    element:<Doc/>
  },
]);

