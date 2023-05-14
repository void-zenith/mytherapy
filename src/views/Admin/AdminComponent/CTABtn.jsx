import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";
import {
  deleteUserFn,
  deleteUserFrontend,
} from "../../../Features/UserSlice/UserSlice";
import { useSelector, useDispatch } from "react-redux";
const CTABtn = ({ id, from }) => {
  const dispatch = useDispatch();
  let token = useSelector((state) => state.auth.currentUser.token);
  const [show, setShow] = useState(false);
  const toView = () => {
    if (from === "therapist") {
      return `/admin/viewtherapist/${id}`;
    }
    if (from === "user") {
      return `/admin/viewcustomer/${id}`;
    }
  };
  const toEdit = () => {
    if (from === "therapist") {
      return `/admin/edittherapist/${id}`;
    }
    if (from === "user") {
      return `/admin/editcustomer/${id}`;
    }
  };
  const hanldeShow = () => {
    setShow(true);
  };
  const handleclose = () => {
    setShow(false);
  };
  const handleDelete = () => {
    handleclose();
    dispatch(deleteUserFrontend({ toDelete: from, id }));
    dispatch(deleteUserFn({ id, token }));
  };
  return (
    <div className="">
      <Link className="editbtn cta-btn" to={toEdit()}>
        <i className="bi bi-pen"></i>
      </Link>
      <Link className="deletebtn cta-btn" onClick={hanldeShow}>
        <i className="bi bi-trash"></i>
      </Link>
      <Modal show={show} onHide={handleclose}>
        <ModalBody>Are you sure you want to delete? {id}</ModalBody>
        <ModalFooter>
          <button href="#" className="btn btn-primary" onClick={handleDelete}>
            yes
          </button>
          <button href="#" className="btn btn-secondary" onClick={handleclose}>
            No
          </button>
        </ModalFooter>
      </Modal>
      <Link className="viewbtn cta-btn" to={toView()}>
        <i className="bi bi-eye"></i>
      </Link>
    </div>
  );
};

export default CTABtn;
