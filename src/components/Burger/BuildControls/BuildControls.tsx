import { IngredientType } from "../BurgerIngredient/BurgerIngredient";
import styles from "./BuildControls.module.css";
import { BuildControl } from "./BuildControl/BuildControl";
import React from "react";

const controls = [
  { label: "Salad", type: IngredientType.salad },
  { label: "Bacon", type: IngredientType.bacon },
  { label: "Cheese", type: IngredientType.cheese },
  { label: "Meat", type: IngredientType.meat },
];

export type BuildControlsProps = {
  onAddedIngredient: (ingredientType: IngredientType) => void;
  onRemovedIngredient: (ingredientType: IngredientType) => void;
  disabled: Map<IngredientType, boolean>;
  price: number;
  purchasable: boolean;
  onOrder: () => void;
};

export const BuildControls: React.FC<BuildControlsProps> = (
  props: BuildControlsProps
) => {
  return (
    <div className={styles.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          onAdded={() => props.onAddedIngredient(control.type)}
          onRemoved={() => props.onRemovedIngredient(control.type)}
          disabled={!!props.disabled.get(control.type)}
        />
      ))}
      <button className={styles.OrderButton} disabled={!props.purchasable} onClick={props.onOrder}>
        ORDER NOW{" "}
      </button>
    </div>
  );
};
