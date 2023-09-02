import { Button, Modal } from "react-bootstrap";

function DeleteModal({ show, onHide, onConfirm, name }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`Are you sure you want to delete ${name}'s profile ?`}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Cancel
        </Button>
        <Button variant='danger' onClick={onConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
