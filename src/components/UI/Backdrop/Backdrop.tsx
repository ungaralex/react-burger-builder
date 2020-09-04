import React, { Component, ReactNode } from "react";
import styles from "./Backdrop.module.css";

type BackdropProps = {
  show: boolean;
  onClick: () => void | undefined;
};

export class Backdrop extends Component<BackdropProps, unknown> {
  public static defaultProps = {
    onClick: undefined,
  };

  render(): ReactNode {
    return this.props.show ? (
      <div className={styles.Backdrop} onClick={this.props.onClick} />
    ) : null;
  }
}
