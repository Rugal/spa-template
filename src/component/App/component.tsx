import React from "react";
import { RouterProvider, } from "react-router-dom";
import { router } from "./route";

interface Props {
}

// incorporate route, theme and others
const App: React.FC<Props> = () => <RouterProvider router={router} />;

export default App;
