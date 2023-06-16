import React from "react";
import ReactDOM from "react-dom";

import Card from "../Card/Card";
import styles from "./CustomModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <button type="button" onClick={props.onClose} className={styles.button}>
          Okay
        </button>
      </footer>
    </Card>
  );
};

const CustomModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default CustomModal;
