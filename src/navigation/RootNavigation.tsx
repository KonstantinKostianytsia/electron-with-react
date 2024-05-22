import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";

const rootRoutes = createBrowserRouter([
  {
    path: "/main_window",
    Component: HomeScreen,
  },
]);

export const RootNavigator = () => {
  return <RouterProvider router={rootRoutes} />;
};
