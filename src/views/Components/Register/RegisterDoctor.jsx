import React, { useEffect, useState, useRef } from "react";
import { Form, Row, Col, Overlay, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerFn } from "../../../Features/AuthSlice/AuthSlice";
import { unSelectRegisterOption } from "../../../Features/ViewSlice";
import insertImage from "../../../Assets/Img/insertimage.png";
import { useNavigate } from "react-router";
import { getOccupationFn } from "../../../Features/OccupationSlice/OccupationSlice";
const RegisterDoctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let alloccupation = useSelector(
    (state) => state.occupation.occupationCollection
  );
  let token = useSelector((state) => state.auth?.currentUser?.token);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const goBack = () => {
    dispatch(unSelectRegisterOption());
  };
  useEffect(() => {
    dispatch(getOccupationFn({ token }));
  }, [dispatch]);
  const [occupationValue, setOccupation] = useState();
  const [registerDetails, setRegisterDetails] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    price: "",
    description: "",
  });
  const handleChange = (e) => {
    setRegisterDetails({
      ...registerDetails,
      [e.target.name]: e.target.value,
    });
  };
  const occupationChange = (e) => {
    setOccupation(e.target.value);
  };

  const [documentHandle, setDocumentHandle] = useState();
  const handleDocument = (e) => {
    setDocumentHandle(e.target.files[0]);
  };
  const [imageHandle, setImageHandle] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const hanldeLogoChange = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  const handleImage = (e) => {
    let files = e.target.files[0];
    setImageHandle(files);
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
    allregisterDetails.append("user_type", "Therapist");
    allregisterDetails.append("password", registerDetails.password);
    allregisterDetails.append("image", imageHandle);
    allregisterDetails.append("document", documentHandle);
    allregisterDetails.append("price", registerDetails.price);
    allregisterDetails.append("description", registerDetails.description);
    allregisterDetails.append("occupation", occupationValue);
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
          <h1>Sign Up As Therapist</h1>
          <p>Sign up into our application as a therapist to help patients.</p>
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
                <Form.Select>
                  <option>Select Occupation</option>
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
                  type="number"
                  onChange={handleChange}
                  name="phone"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please enter your Phone.
                </Form.Control.Feedback>
              </Form.Label>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md={6} controlId="validationCustomUsername">
              <Form.Label className="w-100">
                Occupation:
                <Form.Select required onChange={occupationChange}>
                  <option>Select Occupation</option>
                  {alloccupation.map((item, id) => (
                    <>
                      <option value={item.occupation}>{item.occupation}</option>
                    </>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please enter your file.
                </Form.Control.Feedback>
              </Form.Label>
            </Form.Group>
            <Form.Group as={Col} md={6} controlId="validationCustomUsername">
              <Form.Label className="w-100">
                Documents:{" "}
                <i
                  ref={target}
                  onClick={() => setShow(!show)}
                  class="bi bi-patch-question-fill"
                ></i>
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Insert scanned document that proves your validity.
                    </Tooltip>
                  )}
                </Overlay>
                <Form.Control
                  required
                  multiple
                  type="file"
                  onChange={handleDocument}
                  name="file"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please enter your file.
                </Form.Control.Feedback>
              </Form.Label>
            </Form.Group>
          </Row>
          <Form.Group as={Col} md={12} controlId="validationCustomUsername">
            <Form.Label className="w-100">
              Price:
              <Form.Control
                required
                type="text"
                onChange={handleChange}
                name="price"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please enter your price.
              </Form.Control.Feedback>
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={12} controlId="validationCustomUsername">
            <Form.Label className="w-100">
              Describe yourself:
              <Form.Control
                required
                as="textarea"
                onChange={handleChange}
                name="description"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please enter your price.
              </Form.Control.Feedback>
            </Form.Label>
          </Form.Group>
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

export default RegisterDoctor;
