import React, { ReactNode } from "react";
import styles from "./NavigationItem.module.css";

type NavigationItemProps = {
  children: ReactNode;
  link: string;
  active: boolean;
};

export class NavigationItem extends React.Component<
  NavigationItemProps,
  unknown
> {
  public static defaultProps = {
    active: false,
  };

  render(): ReactNode {
    return (
      <li className={styles.NavigationItem}>
        <a
          className={this.props.active ? styles.active : undefined}
          href={this.props.link}
        >
          {this.props.children}
        </a>
      </li>
    );
  }
}
