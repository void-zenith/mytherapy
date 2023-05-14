import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Img/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../Features/AuthSlice/AuthSlice";
const Navbarhome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let isloggedIn = useSelector((state) => state.auth.isLoggedIn);
  const logoutFn = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Navbar className="navbarcontainer" expand="lg" sticky="top">
      <Container>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end ">
          <Nav className="nav-links align-items-center">
            <Nav.Item>
              <Link to="/all-therapists">Therapists</Link>
            </Nav.Item>
            {isloggedIn ? (
              <>
                <Nav.Item>
                  <Link to="/mybookings" className="btn btn-outline-primary">
                    My Bookings
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/myprofile" className="btn btn-outline-primary">
                    My profile
                  </Link>
                </Nav.Item>
                <button onClick={logoutFn} className="btn btn-primary">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Nav.Item>
                  <Link to="/login" className="btn btn-outline-primary">
                    Login
                  </Link>
                  <Link
                    to="/adminlogin"
                    className=" ml-2 btn btn-outline-primary "
                  >
                    Admin Login
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/register" className="btn btn-primary">
                    Get Started
                  </Link>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarhome;
