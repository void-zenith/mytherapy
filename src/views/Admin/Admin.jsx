import React from "react";
import SideMenu from "./AdminComponent/SideMenu";
import AdminFooter from "./AdminComponent/AdminFooter";
import Adminheader from "./AdminComponent/AdminHeader";
import Dasboardhome from "./AdminComponent/Dashboardhome";
const Admin = () => {
  return (
    <>
      <SideMenu></SideMenu>
      <Dasboardhome></Dasboardhome>
    </>
  );
};

export default Admin;
