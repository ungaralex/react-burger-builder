import React from "react";
import styles from "./Toolbar.module.css";

export const Toolbar: React.FC = () => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <div>LOGO</div>
      <nav>...</nav>
    </header>
  );
};
