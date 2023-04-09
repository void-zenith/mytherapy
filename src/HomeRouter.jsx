import { Outlet } from "react-router-dom";
import Navbarhome from "./views/Components/HomeComponents/NavbarHome";
import Footer from "./views/Components/HomeComponents/Footer";
const HomeRouter = () => (
  <>
    <Navbarhome />
    <Outlet />
    <Footer />
  </>
);

export default HomeRouter;
