import Admin from "./views/Admin/Admin";
import AllCustomer from "./views/Admin/AdminContainer/AllCustomers";
import AllTherapists from "./views/Admin/AdminContainer/AllTherapists.";
import UnverifiedTherapists from "./views/Admin/AdminContainer/UnverifiedTherapists";
import Login from "./views/Containers/Login";
import AllTherapy from "./views/Containers/AllTherapy";
import Register from "./views/Containers/Register";
import SingleTherapy from "./views/Containers/SingleTherapy";
import HomePage from "./views/Pages/HomePage";

export const AllRoutes = {
  homeRoute: [
    {
      link: "/",
      label: "Home",
      component: <HomePage />,
      inNavBar: true,
    },
    { link: "/login", label: "Login", component: <Login />, inNavBar: false },
    {
      link: "/register",
      label: "Register",
      component: <Register />,
      inNavBar: false,
    },
    {
      link: "/all-therapists",
      label: "All Therapists",
      component: <AllTherapy />,
      inNavBar: true,
    },
    {
      link: "/therapist/:id",
      label: "Single Therapist",
      component: <SingleTherapy />,
      inNavBar: false,
    },
  ],
  dashboardRoute: [
    {
      link: "/admin",
      label: "Home",
      component: <Admin />,
      inNavBar: true,
    },
    {
      link: "/admin/alltherapists",
      label: "All Therapists",
      component: <AllTherapists />,
    },
    {
      link: "/admin/allcustomers",
      label: "All Customers",
      component: <AllCustomer />,
    },
    {
      link: "/admin/unverfiedcustomers",
      label: "All Unverified Customers",
      component: <UnverifiedTherapists />,
    },
  ],
};
