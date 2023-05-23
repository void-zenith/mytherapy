import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { cancelBookingFn } from "../../Features/BookingSlice/BookingSlice";
import { useSelector, useDispatch } from "react-redux";
import { singleBookingFn } from "../../Features/BookingSlice/BookingSlice";
import { useParams } from "react-router";
const BookingSingle = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let token = useSelector((state) => state.auth.currentUser.token);
  let selectedBooking = useSelector((state) => state.booking.singleBooking);
  let isLoading = useSelector((state) => state.booking.isLoading);
  useEffect(() => {
    dispatch(singleBookingFn({ token, id }));
  }, [dispatch, id]);
  const handleCancel = () => {
    dispatch(cancelBookingFn({ token, id }));
  };
  return (
    <Container>
      <div className="py-5">
        {!isLoading ? (
          <>
            {Object.keys(selectedBooking).length > 0 && (
              <div className="bookingsingle-content">
                <div className="bookingsingle-head">
                  <img src={selectedBooking.therapist_img} alt="" />
                  <div className="bookingsinle-details">
                    <h1>{selectedBooking.therapist_name}</h1>
                    <p>
                      <i class="fa-regular fa-clock"></i>{" "}
                      {selectedBooking.booking_time}
                    </p>
                  </div>
                </div>
                <div className="bookingsingle-body">
                  {selectedBooking.status ? (
                    <p className="status pending">Pending</p>
                  ) : (
                    <p className="status completed">Completed</p>
                  )}
                  <p>Booking Type: {selectedBooking.booking_type}</p>
                  <a href="#" target="_blank">
                    https://meet.google.com/tqp-svzh-jxj
                  </a>
                  {selectedBooking.status && (
                    <button onClick={handleCancel} className="btn btn-primary">
                      Cancel booking
                    </button>
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </Container>
  );
};

export default BookingSingle;
