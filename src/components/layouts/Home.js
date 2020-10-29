import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm"
import { Button, Modal } from "react-bootstrap";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-fluid">
      <h2>To Do List</h2>
      <Button variant="primary" onClick={handleShow}>
        Add new task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What's going on</Modal.Title>
        </Modal.Header>
        <Modal.Body><ToDoForm/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToDoList />
    </div>
  );
}
