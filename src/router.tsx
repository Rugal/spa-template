import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "./page/Login";
import Dashboard from "./page/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
    ],
  },
]);

export const FinalRouter = (): JSX.Element => <RouterProvider router={router} />;
