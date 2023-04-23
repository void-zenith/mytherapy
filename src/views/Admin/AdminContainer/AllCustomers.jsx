import React, { useEffect } from "react";
import ContentHeader from "../AdminComponent/ContentHeader";
import Content from "../AdminComponent/Content";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { allCustomerFn } from "../../../Features/UserSlice/UserSlice";
const AllCustomer = () => {
  const dispatch = useDispatch();
  let token = useSelector((state) => state.auth.currentUser.token);
  let allCustomers = useSelector((state) => state.user.customerCollection);
  useEffect(() => {
    dispatch(allCustomerFn({ token }));
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
      name: "Poster Button",
      button: true,
      cell: () => <button>Download Poster</button>,
    },
  ];
  let row = [];
  if (allCustomers.length > 0) {
    allCustomers.forEach((item) => {
      row.push(item);
    });
  }
  return (
    <>
      {allCustomers.length > 0 && (
        <>
          <ContentHeader
            headertitle="All Customer"
            hasbreadcrumb={true}
            breadcrumbsub="All Customer"
          ></ContentHeader>
          <Content>
            <DataTable columns={column} data={row} />
          </Content>
        </>
      )}
    </>
  );
};
export default AllCustomer;
