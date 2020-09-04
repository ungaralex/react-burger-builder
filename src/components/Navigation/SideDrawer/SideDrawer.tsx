import { Logo } from "../../Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import React from "react";
import styles from "./SideDrawer.module.css";
import { Backdrop } from "../../UI/Backdrop/Backdrop";

export const SideDrawer: React.FC = () => {
  return (
    <>
      <Backdrop show />
      <div className={styles.SideDrawer}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </>
  );
};
