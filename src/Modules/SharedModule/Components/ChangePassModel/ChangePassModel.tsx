import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ChangePass from "../../../AuthModule/Components/ChangePass/ChangePass";
import { Link } from "react-router-dom";

export default function ChangePassModel() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div onClick={() => setShow(true)}>
        <i className="fa-solid fa-user-lock px-2"></i>
        <span>Change Password</span>
      </div>

      <Modal
        show={show}
        size="xl"
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <ChangePass onHide={() => setShow(false)} />
        </Modal.Body>
      </Modal>
    </>
  );
}
