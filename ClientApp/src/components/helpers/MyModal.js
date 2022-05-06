/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { CustomerForm } from "../forms/CustomerForm";

export const CustomModal = ({ show, setShow }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <a
        className="btn-floating btn-large waves-effect waves-light blue darken-4"
        onClick={setShow}
      >
        <i className="material-icons">add</i>
      </a>
      <Modal isOpen={show} style={customStyles} toggle={setShow}>
        <ModalHeader toggle={setShow}>Modal title</ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
            Do Something
          </Button>{" "}
          <Button onClick={setShow}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
