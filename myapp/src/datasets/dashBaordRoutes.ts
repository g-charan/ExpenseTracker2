import React from "react";

const DashBoard = React.lazy(() => import("../subpages/DashBoard/DashBoard"));
const ExpenseTracking = React.lazy(
  () => import("../subpages/ExpenseTracking/ExpenseTracking")
);

const dashBaordRoutes = [
  { name: "DashBoard", path: "/", element: DashBoard },
  {
    name: "ExpenseTracking",
    path: "/expensetracking",
    element: ExpenseTracking,
  },
];

export default dashBaordRoutes;
