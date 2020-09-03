import React from "react";
import styles from "./BurgerIngredient.module.css";

export enum IngredientType {
  breadBottom = "Bottom Bread",
  breadTop = "Top Bread",
  meat = "Meat",
  salad = "Salad",
  bacon = "Bacon",
  cheese = "Cheese",
}

export type BurgerIngredientProps = {
  type: IngredientType;
};

export const BurgerIngredient: React.FC<BurgerIngredientProps> = (props) => {
  let ingredient;

  switch (props.type) {
    case IngredientType.breadBottom:
      ingredient = <div className={styles.BreadBottom} />;
      break;
    case IngredientType.breadTop:
      ingredient = (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1} />
          <div className={styles.Seeds2} />
        </div>
      );
      break;
    case IngredientType.meat:
      ingredient = <div className={styles.Meat} />;
      break;
    case IngredientType.bacon:
      ingredient = <div className={styles.Bacon} />;
      break;
    case IngredientType.cheese:
      ingredient = <div className={styles.Cheese} />;
      break;
    case IngredientType.salad:
      ingredient = <div className={styles.Salad} />;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};
