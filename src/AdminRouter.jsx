import { Outlet } from "react-router-dom";
import AdminHeader from "./views/Admin/AdminComponent/AdminHeader";
import AdminFooter from "./views/Admin/AdminComponent/AdminFooter";
const DashboardRouter = () => {
  return (
    <div className="wrapper dashboard__body">
      <AdminHeader></AdminHeader>
      <Outlet></Outlet>
      <AdminFooter />
    </div>
  );
};

export default DashboardRouter;
