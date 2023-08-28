import { createHashRouter } from "react-router-dom";
import Root from "../layout/Root";
import {
  CASHIER,
  DASHBOARD,
  LOGIN,
  OPTION,
  PRODUCT,
  PROTECTED,
  REPORT,
  ROOT,
  STOCK,
} from "./path";
import Login from "../pages/login";
import Auth from "../layout/Auth";
import Dashboard from "../pages/Dashboard";
import Stock from "../pages/stock/Stock";
import Report from "../pages/Report";
import Cashier from "../pages/Cashier";
import Option from "../pages/Option";
import Product from "../pages/Product";
import { Item } from "../pages/stock/Item";

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
          {
            path: STOCK,
            element: <Stock />,
          },
          {
            path: `${STOCK}/:id`,
            element: <Item />,
          },
          {
            path: PRODUCT,
            element: <Product />,
          },
          {
            path: REPORT,
            element: <Report />,
          },
          {
            path: CASHIER,
            element: <Cashier />,
          },
          {
            path: OPTION,
            element: <Option />,
          },
        ],
      },
    ],
  },
]);

export default Router;
