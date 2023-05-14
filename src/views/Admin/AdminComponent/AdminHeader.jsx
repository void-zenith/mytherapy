import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../Features/AuthSlice/AuthSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AdminHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutFn = () => {
    dispatch(logout());
    navigate("/adminlogin");
  };
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown">
            <button className="btn btn-outline nav-link" onClick={logoutFn}>
              <i className="bi bi-box-arrow-right"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminHeader;
