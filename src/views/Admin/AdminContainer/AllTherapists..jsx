import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import ContentHeader from "../AdminComponent/ContentHeader";
import Content from "../AdminComponent/Content";
import CTABtn from "../AdminComponent/CTABtn";
import { useSelector, useDispatch } from "react-redux";
import { allTherapistFn } from "../../../Features/UserSlice/UserSlice";
const AllTherapists = () => {
  const dispatch = useDispatch();
  let allTherapist = useSelector((state) => state.user.therapistsCollection);
  let token = useSelector((state) => state.auth.currentUser.token);
  useEffect(() => {
    dispatch(allTherapistFn({ token }));
  }, [dispatch]);
  let column = [
    {
      id: "userid",
      name: "User Id",
      selector: (row) => row.user_id,
    },
    {
      id: "username",
      name: "Username",
      selector: (row) => row.username,
    },
    {
      id: "address",
      name: "Address",
      selector: (row) => row.address,
    },
    {
      id: "phone",
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      id: "isVerified",
      name: "Is Verified",
      selector: (row) => row.isVerified,
      cell: (row) => (
        <p className={`${row.isVerified ? "verified" : "not-verified"}`}>
          {row.isVerified ? "Verified" : "Not verified"}{" "}
        </p>
      ),
    },
    {
      name: "Poster Button",
      button: true,
      cell: (row) => <CTABtn from="therapist" id={row.user_id}></CTABtn>,
    },
  ];
  let row = [];
  if (allTherapist.length > 0) {
    allTherapist.forEach((item) => {
      row.push(item);
    });
  }
  return (
    <>
      {allTherapist.length > 0 && (
        <>
          <ContentHeader
            headertitle="All Therapists"
            hasbreadcrumb={true}
            breadcrumbsub="All Therapists"
          ></ContentHeader>
          <Content>
            <DataTable columns={column} data={row} />
          </Content>
        </>
      )}
    </>
  );
};
export default AllTherapists;
