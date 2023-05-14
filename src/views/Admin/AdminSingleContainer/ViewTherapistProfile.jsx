import React, { useEffect } from "react";
import Content from "../AdminComponent/Content";
import ContentHeader from "../AdminComponent/ContentHeader";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getTherapy } from "../../../Features/UserSlice/UserSlice";

const ViewTherapistProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let token = useSelector((state) => state.auth.currentUser.token);
  let selectedTherapist = useSelector((state) => state.user.selectedUser);
  let isLoading = useSelector((state) => state.user.isLoading);
  useEffect(() => {
    dispatch(getTherapy({ id, token }));
  }, [dispatch, id]);
  return (
    <>
      {!isLoading ? (
        <>
          {Object.keys(selectedTherapist).length > 0 && (
            <>
              <ContentHeader
                headertitle={selectedTherapist.username}
                hasbreadcrumb={true}
                breadcrumbsub={selectedTherapist.username}
              ></ContentHeader>
              <Content>
                <div className="view-contentwrapper">
                  {selectedTherapist.image && (
                    <>
                      <img src={selectedTherapist.image.img_src} />
                    </>
                  )}
                  {selectedTherapist.document && (
                    <>
                      <a
                        href={selectedTherapist.document.doc_src}
                        download="true
                "
                        className="btn btn-primary"
                      >
                        download document
                      </a>
                    </>
                  )}
                </div>
                <div>
                  <ul>
                    <li>Gender: {selectedTherapist.gender}</li>
                    <li>DOB: {selectedTherapist.DOB}</li>
                    <li>DOB: {selectedTherapist.phone}</li>
                    <li>Address: {selectedTherapist.address}</li>
                    <li>Email: {selectedTherapist.user_email}</li>
                  </ul>
                </div>
                {selectedTherapist.isVerified ? (
                  <div className="verified">
                    <p>
                      Verification Status: <span>Verified</span>
                    </p>
                  </div>
                ) : (
                  <div className="notverified">
                    <p>
                      Verification Status: <span>Not Verified</span>
                    </p>
                    <a href="#" className="btn btn-primary">
                      Verify Now
                    </a>
                  </div>
                )}
              </Content>
            </>
          )}
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default ViewTherapistProfile;
