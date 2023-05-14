import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import EachTherapy from "../TherapyComponents/EachTherapy";
import { mockTherapists as mockData } from "../../mockTherapists";
import { useDispatch, useSelector } from "react-redux";
import { allTherapistFn } from "../../../Features/UserSlice/UserSlice";
const ExploreTherapists = () => {
  const dispatch = useDispatch();
  let token = useSelector((state) => state.auth.currentUser.token);
  let allTherapist = useSelector((state) => state.user.therapistsCollection);
  useEffect(() => {
    dispatch(allTherapistFn({ token }));
  }, [dispatch]);
  return (
    <Container>
      <section>
        <div className="header-section text-center">
          <h2 className="secondary-head black-3">Book a Therapy Session</h2>
        </div>
        {allTherapist && (
          <Row className="flex-gap-y">
            {allTherapist.slice(0, 3).map((item, id) => (
              <EachTherapy item={item} key={id} />
            ))}
          </Row>
        )}
      </section>
    </Container>
  );
};

export default ExploreTherapists;
