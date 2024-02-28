import React from "react";

const Home = React.lazy(() => import("../../subpages/Home/Home"));

const LandinPageRoutes = [{ name: "Home", path: "", element: Home }];

export default LandinPageRoutes;
