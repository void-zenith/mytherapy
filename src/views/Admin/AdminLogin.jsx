import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginFn } from "../../Features/AuthSlice/AuthSlice";
import { Form, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      dispatch(loginFn(loginValue)).then((res) => {
        if (res.payload.status === 200) {
          navigate("/admin");
        }
      });
    }
    setValidated(true);
  };
  return (
    <Container>
      <div className="py-5">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="form-container d-flex flex-column"
        >
          <h1>Admin login</h1>
          <Form.Group as={Col} md={12} controlId="validationCustomUsername">
            <Form.Label className="w-100">
              Email:
              <Form.Control
                required
                type="text"
                onChange={handleChange}
                placeholder="Enter your email"
                name="email"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please enter your email.
              </Form.Control.Feedback>
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={12} controlId="validationPassword">
            <Form.Label className="w-100">
              Password:
              <Form.Control
                onChange={handleChange}
                required
                placeholder="Enter your password"
                type="password"
                name="password"
              ></Form.Control>
            </Form.Label>
          </Form.Group>
          <Form.Control
            type="submit"
            value="login"
            className="btn btn-primary"
          ></Form.Control>
        </Form>
      </div>
    </Container>
  );
};

export default AdminLogin;
