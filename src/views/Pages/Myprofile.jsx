import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import bgimg from "../../Assets/Img/bg-full.jpg";
const Myprofile = () => {
  const dispatch = useDispatch();
  let token = useSelector((state) => state.auth.currentUser.token);
  let currentID = useSelector((state) => state.auth.currentUser.data.user_id);

  return (
    <Container>
      <div className="py-5">
        <h1 className="mb-3">My Profile</h1>
        <div className="myprofile-content">
          <img src={bgimg} alt="" />
          <h3>Ram Shakya</h3>
          <div className="metainfo">
            <div className="eachmetainfo">
              <i className="bi bi-geo-alt"></i>
              <p>Patan, lalitpur</p>
            </div>
            <div className="eachmetainfo">
              <i className="bi bi-telephone"></i>
              <p>+977 9899849844</p>
            </div>
            <div className="eachmetainfo">
              <i className="bi bi-person"></i>
              <p>Male</p>
            </div>
            <div className="eachmetainfo">
              <i className="bi bi-calendar"></i>
              <p>2021-10-10</p>
            </div>
            <div className="eachmetainfo">
              <i className="bi bi-envelope"></i>
              <p>inofo@developer.com</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Myprofile;
