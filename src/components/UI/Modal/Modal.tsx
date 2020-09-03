import React, { ReactNode } from "react";
import styles from "./Modal.module.css";
import { Backdrop } from "../Backdrop/Backdrop";

type ModalProps = {
  children: ReactNode;
  show: boolean;
  onCloseModal: () => void;
};

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  return (
    <>
      <Backdrop show={props.show} onClick={props.onCloseModal} />
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </>
  );
};
