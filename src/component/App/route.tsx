import { createBrowserRouter, } from "react-router-dom";
import MyTab from "../../page/MyTab";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MyTab />,
  },
]);
