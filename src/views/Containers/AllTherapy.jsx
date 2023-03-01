import React from "react";
import { Container, Row } from "react-bootstrap";
import EachTherapy from "../Components/TherapyComponents/EachTherapy";
import { mockTherapists } from "../mockTherapists";
const AllTherapy = () => {
  return (
    <Container>
      <div className="py-5">
        <h1 className="mb-3">All Therapists</h1>
        <Row className="flex-gap-y">
          {mockTherapists.map((item, id) => (
            <EachTherapy item={item} key={id} />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default AllTherapy;
