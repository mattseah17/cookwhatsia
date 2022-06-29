import React from "react";
import styles from "./ModalButton.module.css";

const ModalButton = (props) => {
  return (
    <button
      className={`rounded-md hover:shadow-lg transform hover:scale-110 duration-300btn ${styles.button} ${props.className}`}
      type="button"
      onClick={props.onClick}
    >{props.children}</button>
  );
};

export default ModalButton;
