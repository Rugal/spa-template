import { createBrowserRouter, } from "react-router-dom";
import HomePage from "../../page/HomePage";
import TorrentList from "../TorrentList";
import MyTimeLine from "../MyTimeLine";
import Chart from "../Chart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "",
        element: <MyTimeLine />
      },
      {
        path: "torrent",
        element: <TorrentList />
      },
      {
        path: "statistic",
        element: <Chart />
      },
    ],
  },
]);
