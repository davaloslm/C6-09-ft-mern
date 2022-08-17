import React from "react";
import "./modal.css";

const Modal = ({ children, openModal, setOpenModal }) => {
  const handleModal = (e) => {
    //alert("clic en modal")
    e.stopPropagation();
  }

  return (
    <>
      <div className="modal-container" id="modal_container" onClick={()=> setOpenModal(!openModal)}>
        <div className="modal" onClick={handleModal}>
          {children}
          </div>
      </div>
    </>
  );
};

export default Modal;
