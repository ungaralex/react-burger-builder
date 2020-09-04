import React from "react";
import styles from "./Toolbar.module.css";
import { Logo } from "../../Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import { DrawerToggle } from "../SideDrawer/DrawerToggle/DrawerToggle";

type ToolbarProps = {
  drawerToggleClicked: () => void;
};

export const Toolbar: React.FC<ToolbarProps> = (props: ToolbarProps) => {
  return (
    <header className={styles.Toolbar}>
      <DrawerToggle onClick={props.drawerToggleClicked} />
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};
