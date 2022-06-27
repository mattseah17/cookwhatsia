import React from "react";
import styles from "./ModalButton.module.css";

const ModalButton = (props) => {
  return (
    <button
      className={`btn ${styles.button} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >{props.children}</button>
  );
};

export default ModalButton;
