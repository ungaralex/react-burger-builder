import React from "react";
import styles from "./Backdrop.module.css";

type BackdropProps = {
  show: boolean;
  onClick: () => void;
};

export const Backdrop: React.FC<BackdropProps> = (props: BackdropProps) => {
  return props.show ? (
    <div className={styles.Backdrop} onClick={props.onClick} />
  ) : null;
};
