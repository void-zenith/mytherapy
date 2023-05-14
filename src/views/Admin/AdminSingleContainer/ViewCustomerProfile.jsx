import React, { useEffect } from "react";
import Content from "../AdminComponent/Content";
import ContentHeader from "../AdminComponent/ContentHeader";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../../../Features/UserSlice/UserSlice";
const ViewCustomerProfile = () => {
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
                    <img src={selectedCustomer.image.img_src} />
                  )}
                </div>
                <div>
                  <ul>
                    <li>Gender: {selectedCustomer.gender}</li>
                    <li>DOB: {selectedCustomer.DOB}</li>
                    <li>DOB: {selectedCustomer.phone}</li>
                    <li>Address: {selectedCustomer.address}</li>
                    <li>Email: {selectedCustomer.user_email}</li>
                  </ul>
                </div>
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

export default ViewCustomerProfile;
