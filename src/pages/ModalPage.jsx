// components import
import MainLayout from "../components/MainLayout/MainLayout";
import Container from "../components/Container/Container";
import Modal from "../components/Modal/Modal";
// components import

import { createPortal } from "react-dom";
import { useState } from "react";

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MainLayout>
        <Container>
          ModalPage
          <button
            className="border border-gray-500 px-4 py-2 shadow-sm font-semibold rounded-md"
            onClick={() => setIsOpen(true)}
          >
            Open Modal
          </button>
        </Container>
      </MainLayout>
      {createPortal(
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.ModalBody>
            <div
              className="bg-white rounded-md px-4 pb-4 flex flex-col gap-4 "
              onClick={(e) => e.stopPropagation()}
            >
              <button className="self-end p-2" onClick={() => setIsOpen(false)}>
                X
              </button>
              <p className="text-lg font-bold">
                Do you wish to cancel subscription ?
              </p>
              <div className="flex gap-4 flex-col sm:flex-row justify-center">
                <button
                  className="border border-gray-500 px-4 py-2 shadow-sm font-semibold rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button className="border border-gray-500 px-4 py-2 shadow-sm font-semibold rounded-md">
                  Deactivate
                </button>
              </div>
            </div>
          </Modal.ModalBody>
        </Modal>,
        document.body
      )}
    </>
  );
};

export default ModalPage;
