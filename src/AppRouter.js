import { Routes, Route } from "react-router-dom";
import HomeRouter from "./HomeRouter";
import DashboardRouter from "./AdminRouter";
import { AllRoutes } from "./AllRoutes";
const AppRouter = () => {
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
          <Route path={item.link} element={item.component} key={id} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
