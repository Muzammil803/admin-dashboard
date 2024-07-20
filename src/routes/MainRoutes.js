import { lazy, useEffect } from "react";

// project-imports
import MainLayout from "layout/MainLayout";
import Loadable from "components/Loadable";
import { AES, enc } from "crypto-js";
import * as url from "../store/constant/Endpoints";
const DashboardDefault = Loadable(lazy(() => import("pages/dashboard")));
// render - data display components
const AddCurrency = Loadable(
  lazy(() => import("pages/currency/AddCurrency"))
);

const AllCurrency = Loadable(lazy(() => import("pages/currency/AllCurrency")));




const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <MainLayout />,
      children:
        [
          {
            path: "/",
            element: <DashboardDefault />,
          },
          {
            path: "dashboard",
            element: <DashboardDefault />,
          },
          {
            path: "*",
            element: <DashboardDefault />,
          },
        ],
    },

    true
      ? {
        path: "currency",
        element: <MainLayout />,
        children: [
          // allowedPermissions.includes('get-company')
          true
            ? {
              path: "all-currency",
              element: <AllCurrency />,
            }
            : null,
        ].filter(Boolean),
      }
      : null,

    true
      ? {
        path: "currency",
        element: <MainLayout />,
        children: [
          true
            ? {
              path: "add-currency",
              element: <AddCurrency />,
            }
            : null,
        ].filter(Boolean),
      }
      : null,
  ].filter(Boolean),
};

export default MainRoutes;
