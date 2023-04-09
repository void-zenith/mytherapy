import React from "react";
import { unSelectRegisterOption } from "../../../Features/ViewSlice";
import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import insertImage from "../../../Assets/Img/insertimage.png";
import { registerFn } from "../../../Features/AuthSlice/AuthSlice";
import { useNavigate } from "react-router";
const RegisterUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = () => {
    dispatch(unSelectRegisterOption());
  };

  const [registerDetails, setRegisterDetails] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setRegisterDetails({
      ...registerDetails,
      [e.target.name]: e.target.value,
    });
  };

  const [imageHandle, setImageHandle] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const hanldeLogoChange = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  const handleImage = (e) => {
    let files = e.target.files[0];
    // new Compressor(files, {
    //   quality: 0.8,
    //   success: (compressedResult) => {
    setImageHandle(files);
    //   },
    // });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const allregisterDetails = new FormData();
    allregisterDetails.append("first_name", registerDetails.firstname);
    allregisterDetails.append("last_name", registerDetails.lastname);
    allregisterDetails.append("user_email", registerDetails.email);
    allregisterDetails.append("gender", registerDetails.gender);
    allregisterDetails.append("address", registerDetails.address);
    allregisterDetails.append("phone", registerDetails.phone);
    allregisterDetails.append("DOB", registerDetails.dob);
    allregisterDetails.append("user_type", "User");
    allregisterDetails.append("password", registerDetails.password);
    allregisterDetails.append("image", imageHandle);

    dispatch(registerFn({ allregisterDetails })).then((res) => {
      if (res.payload.status === 200) {
        navigate("/login", {
          replace: true,
        });
      }
    });
  };
  return (
    <Row className="mt-4 justify-content-between ">
      <div className="btn btn-primary " onClick={goBack}>
        Go Back
      </div>
      <Col md={12} className="mt-2 d-flex align-items-center">
        <Form
          className="form-container d-flex flex-column"
          onSubmit={handleRegister}
        >
          <h1>Sign Up As User</h1>
          <p>
            Sign up into our application as a user to get help from our experts.
          </p>
          <Row>
            <Form.Group as={Col} md={12}>
              <div className="insertimage">
                <div className="image-container">
                  {imageUrl ? (
                    <img src={imageUrl} alt={imageUrl} />
                  ) : (
                    <img src={insertImage} alt={insertImage} />
                  )}
                  <label htmlFor="fileupload">
                    <input
                      id="fileupload"
                      type="file"
                      accept="image/*"
                      name="myImage"
                      onChange={(e) => {
                        hanldeLogoChange(e);
                        handleImage(e);
                      }}
                    />
                    Insert Your Image
                  </label>
                </div>
              </div>
            </Form.Group>
            <Form.Group as={Col} md={6} controlId="validationCustomUsername">
              <Form.Label className="w-100">
                First Name:
                <Form.Control
                  required
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter your First Name"
                  name="firstname"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please enter your username.
                </Form.Control.Feedback>
              </Form.Label>
            </Form.Group>
            <Form.Group as={Col} md={6} controlId="validationCustomUsername">
              <Form.Label className="w-100">
                Last Name:
                <Form.Control
                  required
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter your Last Name"
                  name="lastname"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please enter your username.
                </Form.Control.Feedback>
              </Form.Label>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md={6} controlId="validationCustomUsername">
              <Form.Label className="w-100">
                Date of birth:
                <Form.Control
                  required
                  type="date"
                  onChange={handleChange}
                  name="dob"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please enter your username.
                </Form.Control.Feedback>
              </Form.Label>
            </Form.Group>
            <Form.Group as={Col} md={6} controlId="validationCustomUsername">
              <Form.Label className="w-100">
                Gender:
                <Form.Select onChange={handleChange} name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please enter your username.
                </Form.Control.Feedback>
              </Form.Label>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md={6} controlId="validationCustomUsername">
              <Form.Label className="w-100">
                Address:
                <Form.Control
                  required
                  type="address"
                  onChange={handleChange}
                  name="address"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please enter your Address.
                </Form.Control.Feedback>
              </Form.Label>
            </Form.Group>
            <Form.Group as={Col} md={6} controlId="validationCustomUsername">
              <Form.Label className="w-100">
                Phone:
                <Form.Control
                  required
                  type="phone"
                  onChange={handleChange}
                  name="phone"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please enter your Phone.
                </Form.Control.Feedback>
              </Form.Label>
            </Form.Group>
          </Row>
          <Form.Group as={Col} md={12} controlId="validationCustomUsername">
            <Form.Label className="w-100">
              Email:
              <Form.Control
                required
                type="email"
                onChange={handleChange}
                name="email"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please enter your email.
              </Form.Control.Feedback>
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={12} controlId="validationCustomUsername">
            <Form.Label className="w-100">
              Password:
              <Form.Control
                required
                type="password"
                onChange={handleChange}
                name="password"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please enter your password.
              </Form.Control.Feedback>
            </Form.Label>
          </Form.Group>
          <Form.Control
            type="submit"
            value="Register"
            className="btn btn-primary"
          ></Form.Control>
        </Form>
      </Col>
    </Row>
  );
};

export default RegisterUser;
