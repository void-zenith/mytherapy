import React from "react";
import { Container } from "react-bootstrap";
import bgimg from "../../Assets/Img/bg-full.jpg";
import { Link } from "react-router-dom";
const MyBookings = () => {
  return (
    <Container>
      <div className="py-5">
        <h1 className="mb-3">My Bookings</h1>
        <div className="mybooking-container">
          <div className="eachbooking-container">
            <div className="image-container">
              <img src={bgimg} alt="" />
            </div>
            <div className="eachbooking-content">
              <span>Status:Completed</span>
              <h3>Ram Shakya</h3>
              <p>Google meet</p>
              <p>2021/14/5</p>
              <Link href="#" className="btn btn-primary">View Report</Link>
            </div>
          </div>
          <div className="eachbooking-container">
            <div className="image-container">
              <img src={bgimg} alt="" />
            </div>
            <div className="eachbooking-content">
              <span>Status:Completed</span>
              <h3>Ram Shakya</h3>
              <p>Google meet</p>
              <p>2021/14/5</p>
              <Link href="#" className="btn btn-primary">View Report</Link>            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default MyBookings;
