import React from "react";

const DashBoard = React.lazy(() => import("../subpages/DashBoard/DashBoard"));
const ExpenseTracking = React.lazy(
  () => import("../subpages/ExpenseTracking/ExpenseTracking")
);
const Goals = React.lazy(() => import("../subpages/Goals/Goals"));

const dashBaordRoutes = [
  { name: "DashBoard", path: "/", element: DashBoard },
  {
    name: "ExpenseTracking",
    path: "/expensetracking",
    element: ExpenseTracking,
  },
  {
    name: "Goals",
    path: "/Goals",
    element: Goals,
  },
];

export default dashBaordRoutes;
