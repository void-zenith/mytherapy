import { Outlet } from "react-router-dom";
import AdminHeader from "./views/Admin/AdminComponent/AdminHeader";
import SideMenu from "./views/Admin/AdminComponent/SideMenu";
import AdminFooter from "./views/Admin/AdminComponent/AdminFooter";
const DashboardRouter = () => {
  return (
    <div className="wrapper dashboard__body">
      <AdminHeader></AdminHeader>
      <SideMenu></SideMenu>
      <div className="content-wrapper">
        <Outlet></Outlet>
      </div>
      <AdminFooter />
    </div>
  );
};

export default DashboardRouter;
 