import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "./page/Login";
import Dashboard from "./page/Dashboard";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    children: [
    ],
  },
  {
    path: "/",
    element: <Dashboard />,
    children: [
    ],
  },
]);

export const FinalRouter = (): JSX.Element => <RouterProvider router={router} />;
