import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import { Register } from "./pages/Register";
import HomePage from "./pages/home/HomePage";
import { Settings } from "./pages/home/Settings";
import { Profile } from "./pages/home/Profile";
import { TaskBoard } from "./pages/home/TaskBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "/homepage", element: <HomePage /> },
  { path: "/settings", element: <Settings /> },
  { path: "/profile", element: <Profile /> },
  { path: "/taskboard", element: <TaskBoard /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
