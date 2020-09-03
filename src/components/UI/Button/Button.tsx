import React, { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  onClicked: () => void;
  btnType: "Danger" | "Success";
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={[styles.Button, styles[props.btnType]].join(" ")}
      onClick={props.onClicked}
    >
      {props.children}
    </button>
  );
};
