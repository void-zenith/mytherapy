import React, { useEffect, useState } from "react";
import ContentHeader from "../AdminComponent/ContentHeader";
import DataTable from "react-data-table-component";
import Content from "../AdminComponent/Content";
import { useDispatch, useSelector } from "react-redux";
import { getRoleFn, addRoleFn } from "../../../Features/RoleSlice/RoleSlice";
import CTABtn from "../AdminComponent/CTABtn";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const RoleContainer = () => {
  const [rolename, setrolename] = useState("");
  const dispatch = useDispatch();
  let token = useSelector((state) => state.auth.currentUser.token);
  let allrole = useSelector((state) => state.role.roleCollection);
  useEffect(() => {
    dispatch(getRoleFn({ token }));
  }, [dispatch]);
  let column = [
    {
      id: "roleid",
      name: "Role Id",
      selector: (row) => row.role_id,
    },
    {
      id: "role",
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "Poster Button",
      button: true,
      cell: (row) => <CTABtn from="therapist" id={row.user_id}></CTABtn>,
    },
  ];
  let row = [];
  if (allrole.length > 0) {
    allrole.forEach((item) => {
      row.push(item);
    });
  }
  const handleChange = (e) => {
    setrolename(e.target.value);
  };
  const addRole = (e) => {
    e.preventDefault();
    dispatch(addRoleFn({ token, rolename })).then((res) => {
      if (res.payload.status === 200) {
        dispatch(getRoleFn({ token }));
      }
    });
  };
  return (
    <>
      <ContentHeader
        headertitle="Manage Roles"
        hasbreadcrumb={true}
        breadcrumbsub="Manage Roles"
      ></ContentHeader>
      <Content>
        {allrole.length > 0 && <DataTable columns={column} data={row} />}
        <div className="additem-container">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Role Name:</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="Enter Role"
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={addRole}>
              Submit
            </Button>
          </Form>
        </div>
      </Content>
    </>
  );
};

export default RoleContainer;
