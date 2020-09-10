import React, { Component, ReactNode } from "react";
import styles from "./Layout.module.css";
import { Toolbar } from "../../components/Navigation/Toolbar/Toolbar";
import { SideDrawer } from "../../components/Navigation/SideDrawer/SideDrawer";

type ChildProps = {
  children: ReactNode;
};

type LayoutState = {
  showSideDrawer: boolean;
};

export class Layout extends Component<ChildProps, LayoutState> {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = (): void => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = (): void => {
    this.setState((prev) => {
      return { showSideDrawer: !prev.showSideDrawer };
    });
  };

  render(): ReactNode {
    return (
      <>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          onClosed={this.sideDrawerClosedHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </>
    );
  }
}
