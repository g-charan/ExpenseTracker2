import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GoalContext from "./context/GoalContext/GoalContext";
import dashBaordRoutes from "./datasets/dashBaordRoutes";
import LandinPageRoutes from "./datasets/landingPageRoutes/LandinPageRoutes";
import "./index.css";
import Layout from "./pages/Layout/Layout";
import MainLayout from "./pages/Layout/MainLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import reportWebVitals from "./reportWebVitals";

const elements = dashBaordRoutes.map((data, id) => {
  return {
    path: `/user/${data.path}`,
    element: <data.element />,
  };
});

const landingPageRoutes = LandinPageRoutes.map((data, id) => {
  return {
    path: `/${data.path}`,
    element: <data.element />,
  };
});

const router = createBrowserRouter([
  {
    path: "/user",
    element: <Layout />,
    children: elements,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: landingPageRoutes,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense>
    <React.StrictMode>
      <GoalContext>
        <RouterProvider router={router}></RouterProvider>
      </GoalContext>
    </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
