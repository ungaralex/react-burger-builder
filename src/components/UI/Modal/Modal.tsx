import React, { Component, ReactNode } from "react";
import styles from "./Modal.module.css";
import { Backdrop } from "../Backdrop/Backdrop";

type ModalProps = {
  children: ReactNode;
  show: boolean;
  onCloseModal: () => void;
};

export class Modal extends Component<ModalProps, unknown> {
  shouldComponentUpdate(nextProps: Readonly<ModalProps>): boolean {
    return nextProps.show !== this.props.show;
  }

  render(): ReactNode {
    return (
      <>
        <Backdrop show={this.props.show} onClick={this.props.onCloseModal} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}
