import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Orders = lazy(() => import("../pages/Orders"));
const ProductsAll = lazy(() => import("../pages/ProductsAll"));
const SingleProduct = lazy(() => import("../pages/SingleProduct"));
const AddProduct = lazy(() => import("../pages/AddProduct"));
const Customers = lazy(() => import("../pages/Customers"));
const Chats = lazy(() => import("../pages/Chats"));
const Profile = lazy(() => import("../pages/Profile"));
const Settings = lazy(() => import("../pages/Settings"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));

const routes = [
  {
    path: "/dashboard", 
    component: Dashboard,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/all-products",
    component: ProductsAll,
  },
  {
    path: "/add-product",
    component: AddProduct,
  },
  {
    path: "/product/:id",
    component: SingleProduct,
  },
  {
    path: "/customers",
    component: Customers,
  },
  {
    path: "/chats",
    component: Chats,
  },
  {
    path: "/manage-profile",
    component: Profile,
  },
  {
    path: "/settings",
    component: Settings,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
