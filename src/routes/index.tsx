import { createHashRouter } from "react-router-dom";
import Root from "../layout/Root";
import { DASHBOARD, LOGIN, PROTECTED, ROOT } from "./path";
import Login from "../pages/login";
import Auth from "../layout/Auth";
import Dashboard from "../pages/Dashboard";

const Router = createHashRouter([
  {
    path: ROOT,
    element: <Root />,
    children: [
      {
        path: LOGIN,
        element: <Login />,
      },
      {
        path: PROTECTED,
        element: <Auth />,
        children: [
          {
            path: DASHBOARD,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

export default Router;
