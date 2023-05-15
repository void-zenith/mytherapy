import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import bgimg from "../../Assets/Img/bg-full.jpg";
import { getProfileFn } from "../../Features/ProfileSlice/ProfileSlice";
const Myprofile = () => {
  const dispatch = useDispatch();
  let token = useSelector((state) => state.auth.currentUser.token);
  let currentProfile = useSelector((state) => state.profile.currentProfile);
  let isloading = useSelector((state) => state.profile.isLoading);
  const [registerDetails, setRegisterDetails] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    dispatch(getProfileFn({ token }));
  }, [dispatch]);
  return (
    <Container>
      <div className="py-5">
        <h1 className="mb-3">My Profile</h1>
        <div className="myprofile-content">
          <div className="content">
            {!isloading ? (
              <>
                {currentProfile && (
                  <>
                    <img
                      src={currentProfile?.img_src}
                      alt={currentProfile.username}
                    />
                    <h3>{currentProfile.username}</h3>
                    <div className="metainfo">
                      <div className="eachmetainfo">
                        <i className="bi bi-geo-alt"></i>
                        <p>{currentProfile.address}</p>
                      </div>
                      <div className="eachmetainfo">
                        <i className="bi bi-telephone"></i>
                        <p>{currentProfile.phone}</p>
                      </div>
                      <div className="eachmetainfo">
                        <i className="bi bi-person"></i>
                        <p>{currentProfile.gender}</p>
                      </div>
                      <div className="eachmetainfo">
                        <i className="bi bi-calendar"></i>
                        <p>{currentProfile.DOB}</p>
                      </div>
                      <div className="eachmetainfo">
                        <i className="bi bi-envelope"></i>
                        <p>{currentProfile.user_email}</p>
                      </div>
                      {currentProfile.doc_src && (
                        <div className="eachmetainfo">
                          <a
                            href={currentProfile?.doc_src}
                            download="true
                "
                            className="btn btn-primary"
                          >
                            download document
                          </a>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div>Loading </div>
            )}
          </div>
          <div className="edit-content">
            <button className="btn btn-primary">Edit button</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Myprofile;
