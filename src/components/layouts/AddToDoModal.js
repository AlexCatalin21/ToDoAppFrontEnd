import React from "react";
import ToDoForm from "./ToDoForm";
import { Modal} from "react-bootstrap"

export default function AddToDoModal() {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ToDoForm/>
      </Modal.Body>
    </Modal.Dialog>
  );
}
