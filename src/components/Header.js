import React, { useState, Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Settings from "./Settings";

const Header = ({
  changeFocusInterval,
  changeRestInterval,
  focusinterval,
  restinterval,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="col-md-10">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="ml-2 d-inline-block align-top"
          />{" "}
          Pomodoro!
        </Navbar.Brand>
        <Button className="button-margin" variant="dark">
          Login
        </Button>
        <Button variant="dark" onClick={handleShow}>
          Settings
        </Button>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <Settings
                changeFocusInterval={changeFocusInterval}
                changeRestInterval={changeRestInterval}
                focusinterval={focusinterval}
                restinterval={restinterval}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Header;
