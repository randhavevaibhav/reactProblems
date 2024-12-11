// components import
import MainLayout from "../components/MainLayout/MainLayout";
import Container from "../components/Container/Container";
import Modal from "../components/Modal/Modal";
// components import

import { FaCheckCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

import { createPortal } from "react-dom";
import { useState } from "react";
import Button from "../components/Buttton/Button";

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MainLayout>
        <Container>
          <button
            className="border px-4 py-2 tracking-wide"
            onClick={() => setIsOpen(true)}
          >
            Open Modal
          </button>
        </Container>
      </MainLayout>
      {createPortal(
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <>
            <Modal.Body onClose={() => setIsOpen(false)}>
              <Modal.Icon>
                {/* <FaCheckCircle className="text-green-500 text-5xl"/> */}
                <IoCloseCircle className="text-red-500 text-5xl" />
              </Modal.Icon>

              <Modal.Title>Dactivate account ?</Modal.Title>

              <div className="flex gap-2 justify-center flex-col sm:flex-row  ">
                <Button handelOnClick={() => setIsOpen(false)} >Cancel</Button>
                <Button variant="Error" isDisable={true}>Deactivate</Button>
                {/* <Button variant="Success">
                        Ok
                </Button> */}
              </div>
            </Modal.Body>
          </>
        </Modal>,
        document.body
      )}
    </>
  );
};

export default ModalPage;
