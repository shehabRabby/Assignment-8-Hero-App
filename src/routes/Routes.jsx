import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import MainLayOut from "../Layouts/MainLayOut";
import Installation from "../pages/Installation";
import AppDetails from "../pages/AppDetails";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/install",
        element: <Installation></Installation>,
      },
      {
        path: "/details",
        element: <AppDetails></AppDetails>,
      },
    ],
  },
]);

export default router;
