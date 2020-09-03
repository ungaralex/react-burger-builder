import React from "react";
import styles from "./NavigationItems.module.css";
import { NavigationItem } from "./NavigationItem/NavigationItem";

export const NavigationItems: React.FC = () => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);
