import React from "react";
const CustomModal = ({ message, showModal, closeModal }) => {
  if (!showModal) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="w-11/12 p-6 mx-auto text-center bg-white rounded shadow-lg md:max-w-md">
        <h2 className="mb-4 text-xl">{message}</h2>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default CustomModal;
