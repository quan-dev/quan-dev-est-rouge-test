import React from "react";

const Home = React.lazy(() => import("./screens/Home"));
const Detail = React.lazy(() => import("./screens/Detail"));
const PageNotFound = React.lazy(() => import("./404"));

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "*",
    name: "404",
    component: PageNotFound,
  },
];

export default routes;
