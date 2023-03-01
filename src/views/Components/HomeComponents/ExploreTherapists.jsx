import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import EachTherapy from "../TherapyComponents/EachTherapy";
import { mockTherapists as mockData } from "../../mockTherapists";
const ExploreTherapists = () => {
  return (
    <Container>
      <section>
        <div className="header-section text-center">
          <h2 className="secondary-head black-3">Book a Therapy Session</h2>
        </div>
        <Row>
          {mockData.slice(0, 3).map((item, id) => (
            <EachTherapy item={item} key={id} />
          ))}
          <div className="exploremore text-center">
            <Link to="/#" className="btn btn-outline-primary mt-5">
              Explore More Therapists
            </Link>
          </div>
        </Row>
      </section>
    </Container>
  );
};

export default ExploreTherapists;
