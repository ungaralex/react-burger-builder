import React from "react";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { BurgerBuilder } from "./containers/BurgerBuilder/BurgerBuilder";

export const App: React.FC = () => {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
};
