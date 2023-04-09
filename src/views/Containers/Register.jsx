import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectRegisterOption } from "../../Features/ViewSlice";
import RegisterUser from "../Components/Register/RegisterUser";
import RegisterDoctor from "../Components/Register/RegisterDoctor";
import doctor from "../../Assets/Img/doctor.png";
import patient from "../../Assets/Img/patient.png";
const Register = () => {
  const dispatch = useDispatch();
  let isSelected = useSelector((state) => state.view.isSelected);
  let selectedView = useSelector((state) => state.view.registerViews);
  const selectOption = (item) => {
    if (item === "user") {
      dispatch(selectRegisterOption("viewRegisterUser"));
    }
    if (item === "doctor") {
      dispatch(selectRegisterOption("viewRegisterDoctor"));
    }
  };
  return (
    <main>
      <Container>
        <Row className="py-5">
          {!isSelected && (
            <>
              <h1 className="text-center">Sign up as</h1>
              <Row>
                <Col md={6}>
                  <div
                    className="signupas d-flex justify-content-center align-items-center flex-column"
                    onClick={() => selectOption("user")}
                  >
                    <p>Sign up as user</p>
                    <img src={patient} alt="" />
                  </div>
                </Col>
                <Col md={6}>
                  <div
                    className="signupas d-flex justify-content-center align-items-center  flex-column"
                    onClick={() => selectOption("doctor")}
                  >
                    <p>Sign up as therapist</p>
                    <img src={doctor} alt="" />
                  </div>
                </Col>
              </Row>
            </>
          )}
          {isSelected && selectedView.viewRegisterDoctor && <RegisterDoctor />}
          {isSelected && selectedView.viewRegisterUser && <RegisterUser />}
        </Row>
      </Container>
    </main>
  );
};

export default Register;
