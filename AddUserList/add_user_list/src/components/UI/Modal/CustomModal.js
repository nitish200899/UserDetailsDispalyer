import React from "react";

import Card from "../Card/Card";
import styles from "./CustomModal.module.css";

const CustomModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClose} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <button
            type="button"
            onClick={props.onClose}
            className={styles.button}
          >
            Okay
          </button>
        </footer>
      </Card>
    </div>
  );
};

export default CustomModal;
