import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import EachTherapy from "../Components/TherapyComponents/EachTherapy";
import { useSelector, useDispatch } from "react-redux";
import { allTherapistFn } from "../../Features/UserSlice/UserSlice";
const AllTherapy = () => {
  const dispatch = useDispatch();
  let token = useSelector((state) => state.auth.currentUser.token);
  let allTherapist = useSelector((state) => state.user.therapistsCollection);
  useEffect(() => {
    dispatch(allTherapistFn({ token }));
  }, [dispatch]);
  return (
    <Container>
      <div className="py-5">
        <h1 className="mb-3">All Therapists</h1>
        {allTherapist && (
          <Row className="flex-gap-y">
            {allTherapist.map((item, id) => (
              <EachTherapy item={item} key={id} />
            ))}
          </Row>
        )}
      </div>
    </Container>
  );
};

export default AllTherapy;
