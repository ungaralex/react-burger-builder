import { Logo } from "../../Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import React from "react";
import styles from "./SideDrawer.module.css";
import { Backdrop } from "../../UI/Backdrop/Backdrop";

type SideDrawerProps = {
  onClosed: () => void;
  open: boolean;
};

export const SideDrawer: React.FC<SideDrawerProps> = (
  props: SideDrawerProps
) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }

  return (
    <>
      <Backdrop show={props.open} onClick={props.onClosed} />
      <div className={attachedClasses.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </>
  );
};
