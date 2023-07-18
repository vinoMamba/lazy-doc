import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "/@/views/Login";
import { Home } from "/@/views/Home";

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
]);

