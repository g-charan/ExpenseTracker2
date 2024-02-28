import React from "react";

const DashBoard = React.lazy(() => import("../subpages/DashBoard/DashBoard"));

const dashBaordRoutes = [
  { name: "DashBoard", path: "/dash", element: DashBoard },
];

export default dashBaordRoutes;
