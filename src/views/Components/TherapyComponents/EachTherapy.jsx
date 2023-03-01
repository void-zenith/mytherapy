import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const EachTherapy = ({ item }) => {
  return (
    <Col md={4}>
      <div className="eachtherapist">
        <div className="eachtherapist-header text-center">
          <div className="rating-info">
            <i class="bi bi-star"></i> <span>4.5</span>
          </div>
          <Link to={`/therapist/${item.id}`}>
            <img src={item.img} alt={item.therapistName} />
          </Link>
          <h3>
            <Link to={`/therapist/${item.id}`}>{item.therapistName}</Link>
          </h3>
          <p className="therapistPost">{item.therapistPost}</p>
        </div>
        <div className="eachtherapist-body">
          <ul className="meetingOptions">
            <li>
              <Link to={`/therapist/${item.id}`}>
                <i class="bi bi-camera-video"></i>
              </Link>
            </li>
            <li>
              <Link to={`/therapist/${item.id}`}>
                <i class="bi bi-telephone"></i>
              </Link>
            </li>
            <li>
              <Link to={`/therapist/${item.id}`}>
                <i class="bi bi-geo-alt"></i>
              </Link>
            </li>
          </ul>
          <p className="price">
            Rs. <span>{item.price}</span>
          </p>
        </div>
        <div className="eachtherapist-footer">
          <Link to={`/therapist/${item.id}`} className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default EachTherapy;
