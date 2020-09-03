import React from "react";
import {
  BurgerIngredient,
  IngredientType,
} from "./BurgerIngredient/BurgerIngredient";
import styles from "./Burger.module.css";

export type BurgerProps = {
  ingredients: Map<IngredientType, number>;
};

export const Burger: React.FC<BurgerProps> = (props: BurgerProps) => {
  let transformedIngredients: JSX.Element[] | JSX.Element = [];
  Array.from(props.ingredients.entries()).forEach(([igKey, amount]) => {
    [...Array(amount)].map((_, i) => {
      (transformedIngredients as JSX.Element[]).push(
        <BurgerIngredient key={igKey.toString() + i} type={igKey} />
      );
    });
  });
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type={IngredientType.breadTop} />
      {transformedIngredients}
      <BurgerIngredient type={IngredientType.breadBottom} />
    </div>
  );
};
