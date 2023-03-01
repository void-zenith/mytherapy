import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
const SingleTherapy = () => {
  return (
    <Container>
      <div className="py-5">
        <Row>
          <Col md={8}>
            <div className="therapist-information">
              <img src="" alt="" />
              <h2>Name</h2>
              <p>counsellor</p>
            </div>
            <div className="therapists-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                fugit, deserunt nobis consectetur beatae culpa consequatur
                nostrum facilis laboriosam doloremque aspernatur quibusdam ut
                rerum eligendi Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Odio fugit, deserunt nobis consectetur beatae
                culpa consequatur nostrum facilis laboriosam doloremque
                aspernatur quibusdam ut rerum eligendi Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Odio fugit, deserunt nobis
                consectetur beatae culpa consequatur nostrum facilis laboriosam
                doloremque aspernatur quibusdam ut rerum eligendi provident
                similique sit quisquam incidunt?
              </p>
            </div>
            <div className="therapists-location">iframe from google</div>
          </Col>
          <Col md={4}>
            <h2>Book Appointment</h2>
            <Form>
              <Form.Control type="date"></Form.Control>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SingleTherapy;
