import React from "react";
import styles from "./Toolbar.module.css";
import {Logo} from "../../Logo/Logo";
import {NavigationItems} from "../NavigationItems/NavigationItems";

export const Toolbar: React.FC = () => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};
