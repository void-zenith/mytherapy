import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getTherapy } from "../../Features/UserSlice/UserSlice";
import Button from "react-bootstrap/Button";
import DateTimePicker from "react-datetime-picker";
import { createBookingFn } from "../../Features/BookingSlice/BookingSlice";
const SingleTherapy = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let token = useSelector((state) => state.auth.currentUser.token);
  let currentID = useSelector((state) => state.auth.currentUser.data.user_id);
  let selectedTherapist = useSelector((state) => state.user.selectedUser);
  let isLoading = useSelector((state) => state.user.isLoading);
  const [value, onChange] = useState(new Date());
  useEffect(() => {
    dispatch(getTherapy({ id, token }));
  }, [dispatch, id]);
  const addbooking = (e) => {
    e.preventDefault();
    let body = {
      user_id: currentID,
      therapist_id: id,
      type: "meet",
      time: value,
    };
    dispatch(createBookingFn({ token, body }));
  };
  return (
    <Container>
      <div className="py-5">
        <Row>
          {!isLoading ? (
            <>
              {Object.keys(selectedTherapist).length > 0 && (
                <>
                  <Col md={8}>
                    <div className="therapist-information">
                      {selectedTherapist.image && (
                        <>
                          <img src={selectedTherapist.image.img_src} />
                        </>
                      )}
                      <h2>{selectedTherapist.username}</h2>
                      <p>counsellor</p>
                    </div>
                    <div className="therapists-description">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio fugit, deserunt nobis consectetur beatae culpa
                        consequatur nostrum facilis laboriosam doloremque
                        aspernatur quibusdam ut rerum eligendi Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Odio fugit,
                        deserunt nobis consectetur beatae culpa consequatur
                        nostrum facilis laboriosam doloremque aspernatur
                        quibusdam ut rerum eligendi Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Odio fugit, deserunt nobis
                        consectetur beatae culpa consequatur nostrum facilis
                        laboriosam doloremque aspernatur quibusdam ut rerum
                        eligendi provident similique sit quisquam incidunt?
                      </p>
                    </div>
                    <div className="therapists-location">
                      iframe from google
                    </div>
                  </Col>
                  <Col md={4}>
                    <h2>Book Appointment</h2>
                    <Form>
                      <DateTimePicker onChange={onChange} value={value} />
                      <Button
                        type="submit"
                        className="mt-2"
                        onClick={addbooking}
                      >
                        Submit
                      </Button>
                    </Form>
                  </Col>
                </>
              )}
            </>
          ) : (
            <div>Loading</div>
          )}
        </Row>
      </div>
    </Container>
  );
};

export default SingleTherapy;
