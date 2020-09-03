import React, { ReactNode } from "react";
import styles from "./Layout.module.css";
import { Toolbar } from "../Navigation/Toolbar/Toolbar";

type ChildProps = {
  children: ReactNode;
};

export const Layout: React.FC<ChildProps> = (props: ChildProps) => (
  <>
    <Toolbar />
    <main className={styles.Content}>{props.children}</main>
  </>
);
