import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bannerimg from "../../../Assets/Img/bannerimg.png";
import { Link } from "react-router-dom";
const BannerContainer = () => {
  return (
    <Container>
      <section className="banner-home d-flex align-items-center">
        <Row className="d-flex align-items-center justify-content-between">
          <Col className="banner-text">
            <p className="small-text primary">Take help from the experts</p>
            <h1 className="header-text primary">
              Our Experts are here to help with over 25+ years of experience.
            </h1>
            <Link className="btn btn-outline-primary">Find Therapists</Link>
          </Col>
          <Col className="banner-img">
            <img src={bannerimg} alt="" />
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default BannerContainer;
