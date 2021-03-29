import React, { Fragment } from "react";
import classes from "./modal.module.scss";

const Modal = ({ open, closeModal, children }) => {
  return (
    <Fragment>
      <div
        style={{
          transition: "300ms",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "visible" : "none",
        }}
        className={classes.backdrop}
      ></div>
      <div
        onClick={closeModal}
        className={classes.modalBody}
        style={{ transform: open ? "translateY(0)" : "translateY(-100%)" }}
      >
        <div className={classes.modalContent}>{children}</div>
      </div>
    </Fragment>
  );
};

export default Modal;
