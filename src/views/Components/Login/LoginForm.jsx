import React from "react";
import { Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const LoginForm = ({ handleSubmit, validated, handleChange }) => {
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="form-container d-flex flex-column"
    >
      <h1>Sign In</h1>
      <p>Sign in to our application to get help from the experts.</p>
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
          <Form.Control.Feedback type="invalid">
            Please enter your password.
          </Form.Control.Feedback>
        </Form.Label>
      </Form.Group>
      <Form.Control
        type="submit"
        value="login"
        className="btn btn-primary"
      ></Form.Control>
      <p>
        If You haven't registered?<Link to="/register">Sign Up</Link>
      </p>
    </Form>
  );
};
export default LoginForm;
