import React from "react";

const Modal = ({ modalRef, data, handleClose }) => {
  return (
    <dialog
      ref={modalRef}
      style={{
        minWidth: "30%",
        position: "fixed",
        left: "50%",
        top: "50%",
        translate: "-50% -50%",
        outline: "none",
        border: "none",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>{data[0]}</h1>
      <table style={{ width: "100%", marginTop: "30px" }}>
        <tbody>
          {Object.entries(data[1] ?? {})?.map(([key, value], index) => (
            <tr key={index}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          position: "absolute",
          right: 0,
          top: 0,
          padding: "5px 10px",
          cursor: "pointer",
        }}
        onClick={() => {
          modalRef.current.close();
          handleClose(false);
        }}
      >
        X
      </button>
    </dialog>
  );
};

export default Modal;
