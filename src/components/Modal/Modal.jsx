const ModalBody = ({ children }) => {
  return (
    <>
      <div className="h-full flex justify-center items-center">{children}</div>
    </>
  );
};

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <>
      <div
        className={`inset-0 z-50 fixed bg-black bg-opacity-80 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      >
        {children}
      </div>
    </>
  );
};

Modal.ModalBody = ModalBody;

export default Modal;
