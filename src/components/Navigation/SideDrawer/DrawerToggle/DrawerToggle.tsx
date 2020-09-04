import React from "react";
import styles from "./DrawerToggle.module.css";

type DrawerToggleProps = {
  onClick: () => void;
};

export const DrawerToggle: React.FC<DrawerToggleProps> = (
  props: DrawerToggleProps
) => {
  return (
    <div className={styles.DrawerToggle} onClick={props.onClick}>
      <div />
      <div />
      <div />
    </div>
  );
};
