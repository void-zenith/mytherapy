import { Routes, Route } from "react-router-dom";
import HomePage from "./views/Pages/HomePage";
import Login from "./views/Containers/Login";
import Register from "./views/Containers/Register";
import AllTherapy from "./views/Containers/AllTherapy";
import SingleTherapy from "./views/Containers/SingleTherapy";
import Admin from "./views/Admin/Admin";
import HomeRouter from "./HomeRouter";
import DashboardRouter from "./AdminRouter";
const AppRouter = () => {
  return (
    <Routes>
      <Route element={<HomeRouter></HomeRouter>}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/all-therapists" element={<AllTherapy />}></Route>
        <Route path="/therapist/:id" element={<SingleTherapy />}></Route>
      </Route>
      <Route element={<DashboardRouter></DashboardRouter>}>
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
