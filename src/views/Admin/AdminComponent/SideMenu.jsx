import React from "react";
import avatar from "../../../Assets/Img/avatar.png";
import { AllRoutes } from "../../../AllRoutes";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const SideMenu = () => {
  const location = useLocation();
  const getActive = (url) => {
    if (url === location.pathname) {
      return "active";
    } else {
      return " ";
    }
  };
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/" className="brand-link">
          <span className="brand-text font-weight-light">My Therapy</span>
        </Link>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={avatar}
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }}
              />
            </div>
            <div className="info">
              <Link to="/" className="d-block">
                Admin
              </Link>
            </div>
          </div>
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column">
              {AllRoutes.dashboardRoute.map((item, id) => (
                <React.Fragment key={id}>
                  {item.inNavBar && (
                    <li className="nav-item has-treeview menu-open">
                      <Link
                        to={item.link}
                        className={`nav-link  ${getActive(item.link)}`}
                      >
                        <p>{item.label}</p>
                      </Link>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default SideMenu;
