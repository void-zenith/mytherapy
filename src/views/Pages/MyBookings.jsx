import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import bgimg from "../../Assets/Img/bg-full.jpg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { myBookingFn } from "../../Features/BookingSlice/BookingSlice";
const MyBookings = () => {
  const dispatch = useDispatch();
  let token = useSelector((state) => state.auth.currentUser.token);
  let myBooking = useSelector((state) => state.booking.myBooking);
  let isLoading = useSelector((state) => state.booking.isLoading);
  useEffect(() => {
    dispatch(myBookingFn({ token }));
  }, [dispatch]);
  return (
    <Container>
      <div className="py-5">
        <h1 className="mb-3">My Bookings</h1>
        <div className="mybooking-container">
          {!isLoading ? (
            <>
              {myBooking.length > 0 && (
                <>
                  {myBooking.map((item, id) => (
                    <div key={id} className="eachbooking-container">
                      <div className="image-container">
                        <img src={item.therapist_img} alt="" />
                      </div>
                      <div className="eachbooking-content">
                        <span>
                          Status:{item.status ? "Pending" : "Completed"}
                        </span>
                        <h3>{item.therapist_name}</h3>
                        <p>{item.booking_type}</p>
                        <p>{item.booking_time}</p>
                        <Link to={`/singlebooking/${item.booking_id}`} className="btn btn-primary">
                          View More
                        </Link>{" "}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </>
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </Container>
  );
};
export default MyBookings;
