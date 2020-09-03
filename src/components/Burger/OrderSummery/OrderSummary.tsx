import React from "react";
import { IngredientType } from "../BurgerIngredient/BurgerIngredient";
import { Button } from "../../UI/Button/Button";

export type OrderSummaryProps = {
  ingredients: Map<IngredientType, number>;
  price: number;
  onBuy: () => void;
  onAbort: () => void;
};

export const OrderSummary: React.FC<OrderSummaryProps> = (
  props: OrderSummaryProps
) => {
  const ingredientSummary = Array.from(props.ingredients.entries()).map(
    ([ingredient, amount]) => {
      return (
        <li key={ingredient}>
          <span style={{ textTransform: "capitalize" }}>{ingredient}</span>:{" "}
          {amount}
        </li>
      );
    }
  );

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" onClicked={props.onAbort}>
        CANCEL
      </Button>
      <Button btnType="Success" onClicked={props.onBuy}>
        CONTINUE
      </Button>
    </>
  );
};
