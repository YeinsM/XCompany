/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export const CustomModal = ({ id, show, setShow }) => {
  return (
    <>
      <a
        className="btn-floating btn-large waves-effect waves-light blue darken-4"
        onClick={setShow}
      >
        <i className="material-icons">add</i>
      </a>
      <Modal isOpen={show} toggle={setShow}>
        <ModalHeader>
          Add Address
        </ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
            Save
          </Button>{" "}
          <Button onClick={setShow}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
