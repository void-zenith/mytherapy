import React, { useEffect, useState } from "react";
import ContentHeader from "../AdminComponent/ContentHeader";
import DataTable from "react-data-table-component";
import Content from "../AdminComponent/Content";
import { useDispatch, useSelector } from "react-redux";
import CTABtn from "../AdminComponent/CTABtn";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  addOccupationFn,
  getOccupationFn,
} from "../../../Features/OccupationSlice/OccupationSlice";

const OccupationContainer = () => {
  const [occupationName, setrolename] = useState("");
  const dispatch = useDispatch();
  let token = useSelector((state) => state.auth.currentUser.token);
  let alloccupation = useSelector(
    (state) => state.occupation.occupationCollection
  );
  useEffect(() => {
    dispatch(getOccupationFn({ token }));
  }, [dispatch]);
  let column = [
    {
      id: "occupationid",
      name: "Occupation Id",
      selector: (row) => row.occupation_id,
    },
    {
      id: "occupation",
      name: "Occupation",
      selector: (row) => row.occupation,
    },
    {
      name: "Poster Button",
      button: true,
      cell: (row) => <CTABtn from="occupation" id={row.occupation_id}></CTABtn>,
    },
  ];
  let row = [];
  if (alloccupation.length > 0) {
    alloccupation.forEach((item) => {
      row.push(item);
    });
  }
  const handleChange = (e) => {
    setrolename(e.target.value);
  };
  const addOccupation = (e) => {
    e.preventDefault();
    dispatch(addOccupationFn({ token, occupationName })).then((res) => {
      if (res.payload.status === 200) {
        dispatch(getOccupationFn({ token }));
      }
    });
  };
  return (
    <>
      <ContentHeader
        headertitle="Manage Occupation"
        hasbreadcrumb={true}
        breadcrumbsub="Manage Occupation"
      ></ContentHeader>
      <Content>
        {alloccupation.length > 0 && <DataTable columns={column} data={row} />}
        <div className="additem-container">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Occupation Name:</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="Enter Occupation"
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={addOccupation}>
              Submit
            </Button>
          </Form>
        </div>
      </Content>
    </>
  );
};

export default OccupationContainer;
