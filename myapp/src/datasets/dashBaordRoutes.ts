import React from "react";

const DashBoard = React.lazy(() => import("../subpages/DashBoard/DashBoard"));
const ExpenseTracking = React.lazy(
  () => import("../subpages/ExpenseTracking/ExpenseTracking")
);
const Goals = React.lazy(() => import("../subpages/Goals/Goals"));
const GoalStatus = React.lazy(
  () => import("../subpages/GoalStatus/GoalStatus")
);

const Subscriptions = React.lazy(
  () => import("../subpages/Subscriptions/Subscriptions")
);

const Records = React.lazy(() => import("../subpages/Records/Records"));

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
  {
    name: "Subscriptions",
    path: "/Subscriptions",
    element: Subscriptions,
  },
  {
    name: "GoalStatus",
    path: "/goalstatus",
    element: GoalStatus,
  },
  {
    name: "Records",
    path: "/Records",
    element: Records,
  },
];

export default dashBaordRoutes;
