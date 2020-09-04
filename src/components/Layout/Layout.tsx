import React, { ReactNode } from "react";
import styles from "./Layout.module.css";
import { Toolbar } from "../Navigation/Toolbar/Toolbar";
import { SideDrawer } from "../Navigation/SideDrawer/SideDrawer";

type ChildProps = {
  children: ReactNode;
};

export const Layout: React.FC<ChildProps> = (props: ChildProps) => (
  <>
    <Toolbar />
    <SideDrawer />
    <main className={styles.Content}>{props.children}</main>
  </>
);
