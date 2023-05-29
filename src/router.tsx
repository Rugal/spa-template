import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
import MainFramework from "./page/MainFramework";
import App from "./component/App";
import PostList from "./component/PostList";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    children: [
    ],
  },
  {
    path: "/",
    element: <MainFramework />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "torrent",
        element: <PostList />,
      },
      {
        path: "candidate",
        element: <App />,
      },
      {
        path: "preference",
        element: <App />,
      },
    ],
  },
]);

export const FinalRouter = (): JSX.Element => <RouterProvider router={router} />;
