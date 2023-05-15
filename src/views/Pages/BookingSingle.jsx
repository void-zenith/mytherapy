import React from "react";
import { Container } from "react-bootstrap";
import bgimg from "../../Assets/Img/bg-full.jpg";
const BookingSingle = () => {
  return (
    <Container>
      <div className="py-5">
        <div className="bookingsingle-content">
          <div className="bookingsingle-head">
            <img src={bgimg} alt="" />
            <div className="bookingsinle-details">
              <h1>Adam Jones</h1>
              <p>
                <i class="fa-regular fa-clock"></i> 2023-16-5 at 4:00
              </p>
            </div>
          </div>
          <div className="bookingsingle-body">
            <p className="status pending">Pending</p>
            <p className="status completed">Completed</p>
            <p>Booking Type: Meet</p>
            <a href="#" target="_blank">
              https://meet.google.com/tqp-svzh-jxj
            </a>
            <button className="btn btn-primary">Cancel booking</button>
          </div>
          <div className="bookingsingle-updates">
            <h3>Updates</h3>
            <ul>
              <li className="eachupdate">
                <div className="updateby">
                  <p>Update by:</p>
                  <span>Swarnim Maharjan</span>
                </div>
                <div className="updatemessage">
                  <p>Update message:</p>
                  <span>sdafkjasdflkha sd;lasdhfas</span>{" "}
                </div>
                <div className="update-report">
                  <p>Report:</p>
                  <a href="#" className="btn btn-outline-primary" download="true">
                    Download Report
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookingSingle;
