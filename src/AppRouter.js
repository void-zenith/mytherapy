import { Routes, Route, Navigate } from "react-router-dom";
import HomeRouter from "./HomeRouter";
import DashboardRouter from "./AdminRouter";
import { useSelector } from "react-redux";
import { AllRoutes } from "./AllRoutes";
import AdminLogin from "./views/Admin/AdminLogin";
const AppRouter = () => {
  let isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Routes>
      <Route element={<HomeRouter></HomeRouter>}>
        {AllRoutes.homeRoute.map((item, id) => (
          <Route key={id}>
            <Route path={item.link} element={item.component}></Route>
          </Route>
        ))}
      </Route>
      <Route element={<DashboardRouter></DashboardRouter>}>
        {AllRoutes.dashboardRoute.map((item, id) => (
          <Route
            path={item.link}
            element={
              <ProtectedRoute user={isLoggedIn}>
                {item.component}
              </ProtectedRoute>
            }
            key={id}
          />
        ))}
      </Route>
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
    </Routes>
  );
};
const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    window.location.pathname = "/";
    return <Navigate to="/" replace />;
  }
  return children;
};
export default AppRouter;
