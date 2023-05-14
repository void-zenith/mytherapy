import React, { useEffect, useState } from "react";
import Content from "../AdminComponent/Content";
import ContentHeader from "../AdminComponent/ContentHeader";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../../../Features/UserSlice/UserSlice";

const EditCustomerProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let token = useSelector((state) => state.auth.currentUser.token);
  let selectedCustomer = useSelector((state) => state.user.selectedUser);
  let isLoading = useSelector((state) => state.user.isLoading);
  useEffect(() => {
    dispatch(getCustomer({ id, token }));
  }, [dispatch, id]);
  return (
    <>
      {!isLoading ? (
        <>
          {Object.keys(selectedCustomer).length > 0 && (
            <>
              <ContentHeader
                headertitle={selectedCustomer.username}
                hasbreadcrumb={true}
                breadcrumbsub={selectedCustomer.username}
              ></ContentHeader>
              <Content>
                <div className="view-contentwrapper">
                  {selectedCustomer.image && (
                    <>
                      <img src={selectedCustomer.image.img_src} />
                    </>
                  )}
                  {selectedCustomer.document && (
                    <>
                      <a
                        href={selectedCustomer.document.doc_src}
                        download="true
            "
                        className="btn btn-primary"
                      >
                        download document
                      </a>
                    </>
                  )}
                </div>
                <div className="mt-3">
                  <ul>
                    <li>
                      Gender:<input type="text"></input>
                      {selectedCustomer.gender}
                    </li>
                    <li>DOB: {selectedCustomer.DOB}</li>
                    <li>DOB: {selectedCustomer.phone}</li>
                    <li>Address: {selectedCustomer.address}</li>
                    <li>Email: {selectedCustomer.user_email}</li>
                  </ul>
                </div>
                <button className="btn btn-primary mt-3">Save Changes</button>
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

export default EditCustomerProfile;
