import Admin from "./views/Admin/Admin";
import AllCustomer from "./views/Admin/AdminContainer/AllCustomers";
import AllTherapists from "./views/Admin/AdminContainer/AllTherapists.";
import UnverifiedTherapists from "./views/Admin/AdminContainer/UnverifiedTherapists";
import Login from "./views/Containers/Login";
import AllTherapy from "./views/Containers/AllTherapy";
import Register from "./views/Containers/Register";
import SingleTherapy from "./views/Containers/SingleTherapy";
import HomePage from "./views/Pages/HomePage";
import ViewTherapistProfile from "./views/Admin/AdminSingleContainer/ViewTherapistProfile";
import EditTherapistProfile from "./views/Admin/AdminSingleContainer/EditTherapistProfile";
import ViewCustomerProfile from "./views/Admin/AdminSingleContainer/ViewCustomerProfile";
import EditCustomerProfile from "./views/Admin/AdminSingleContainer/EditCustomerProfile";
import BookingContainer from "./views/Admin/AdminContainer/BookingContainer";
import RoleContainer from "./views/Admin/AdminContainer/RoleContainer";
import OccupationContainer from "./views/Admin/AdminContainer/OccupationContainer";
import MyBookings from "./views/Pages/MyBookings";
import Myprofile from "./views/Pages/Myprofile";

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
    {
      link: "/mybookings",
      label: "My Bookings",
      component: <MyBookings />,
      inNavBar: false,
    },
    {
      link: "/myprofile",
      label: "My Profile",
      component: <Myprofile />,
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
      inNavBar: true,
    },
    {
      link: "/admin/allcustomers",
      label: "All Customers",
      component: <AllCustomer />,
      inNavBar: true,
    },
    {
      link: "/admin/unverfiedtherapists",
      label: "All Unverified Therapists",
      component: <UnverifiedTherapists />,
      inNavBar: true,
    },
    {
      link: "/admin/booking",
      label: "Booking Management",
      component: <BookingContainer />,
      inNavBar: true,
    },
    {
      link: "/admin/role",
      label: "Role Management",
      component: <RoleContainer />,
      inNavBar: true,
    },
    {
      link: "/admin/occupations",
      label: "Occupation Management",
      component: <OccupationContainer />,
      inNavBar: true,
    },
    {
      link: "/admin/viewtherapist/:id",
      label: "View Therapists",
      component: <ViewTherapistProfile />,
      inNavBar: false,
    },
    {
      link: "/admin/edittherapist/:id",
      label: "Edit Therapists",
      component: <EditTherapistProfile />,
      inNavBar: false,
    },
    {
      link: "/admin/viewcustomer/:id",
      label: "view Customers",
      component: <ViewCustomerProfile />,
      inNavBar: false,
    },
    {
      link: "/admin/editcustomer/:id",
      label: "Edit Customers",
      component: <EditCustomerProfile />,
      inNavBar: false,
    },
  ],
};
