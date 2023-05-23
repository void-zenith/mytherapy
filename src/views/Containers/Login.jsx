import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bgimg from "../../Assets/Img/bg-full.jpg";
import LoginForm from "../Components/Login/LoginForm";
import { loginFn } from "../../Features/AuthSlice/AuthSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      dispatch(loginFn(loginValue));
    }
    setValidated(true);
  };
  return (
    <main>
      <Container>
        <Row className="fullscreen-wrapper justify-content-between ">
          <Col md={6} className="d-flex align-items-center">
            <LoginForm
              validated={validated}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          </Col>
          <Col md={6}>
            <img src={bgimg} alt="login"/>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Login;
