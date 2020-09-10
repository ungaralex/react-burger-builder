import React, { useState } from "react";
import { Burger } from "../../components/Burger/Burger";
import { BuildControls } from "../../components/Burger/BuildControls/BuildControls";
import { IngredientType } from "../../components/Burger/BurgerIngredient/BurgerIngredient";
import { Modal } from "../../components/UI/Modal/Modal";
import { OrderSummary } from "../../components/Burger/OrderSummery/OrderSummary";
import fetch from "../../services/fetch";

const INGREDIENT_PRICES = new Map<IngredientType, number>([
  [IngredientType.salad, 0.5],
  [IngredientType.cheese, 0.4],
  [IngredientType.meat, 1.3],
  [IngredientType.bacon, 0.7],
]);

type CostState = {
  totalPrice: number;
  purchasable: boolean;
  purchasing: boolean;
};

export const BurgerBuilder: React.FC = () => {
  const [ingredients, changeIngredients] = useState<
    Map<IngredientType, number>
  >(
    new Map([
      [IngredientType.salad, 0],
      [IngredientType.bacon, 0],
      [IngredientType.cheese, 0],
      [IngredientType.meat, 0],
    ])
  );
  const [costState, changeCostState] = useState<CostState>({
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  });

  const updateCostState = (
    newPrice: number,
    updatedIngredients: Map<IngredientType, number>
  ) => {
    const sum = Array.from(updatedIngredients.values()).reduce(
      (sum, el) => sum + el,
      0
    );
    changeCostState({
      ...costState,
      totalPrice: newPrice,
      purchasable: sum > 0,
    });
  };

  const addIngredientHandler = (ingredientType: IngredientType) => {
    const oldCount = ingredients.get(ingredientType) || 0;
    const updatedCount = oldCount + 1;
    const updatedIngredients = new Map(ingredients);
    updatedIngredients.set(ingredientType, updatedCount);
    const newPrice =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      costState.totalPrice + INGREDIENT_PRICES.get(ingredientType)!;
    changeIngredients(updatedIngredients);
    updateCostState(newPrice, updatedIngredients);
  };

  const removeIngredientHandler = (ingredientType: IngredientType) => {
    const oldCount = ingredients.get(ingredientType) || 0;
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = new Map(ingredients);
    updatedIngredients.set(ingredientType, updatedCount);
    const newPrice = Math.max(
      4,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      costState.totalPrice - INGREDIENT_PRICES.get(ingredientType)!
    );
    changeCostState({ ...costState, totalPrice: newPrice });
    changeIngredients(updatedIngredients);
    updateCostState(newPrice, updatedIngredients);
  };

  const purchasedHandler = () => {
    changeCostState({ ...costState, purchasing: true });
  };

  const purchaseCancelHandler = () => {
    changeCostState({ ...costState, purchasing: false });
  };

  const purchaseConfirmHandler = () => {
    const order = {
      ingredients: ingredients,
      price: costState.totalPrice,
      customer: {
        name: "Alex",
        address: {
          street: "Mainstreet",
          zipCode: "83743",
          country: "Germany",
        },
        email: "test@tester.com",
      },
      deliveryMethod: "fastest",
    };

    fetch("/orders.json", { method: "POST", body: JSON.stringify(order) })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  const disabledInfo = new Map<IngredientType, boolean>();
  Array.from(ingredients.entries()).forEach(([igKey, amount]) => {
    disabledInfo.set(igKey, amount <= 0);
  });

  return (
    <>
      <Modal show={costState.purchasing} onCloseModal={purchaseCancelHandler}>
        <OrderSummary
          ingredients={ingredients}
          price={costState.totalPrice}
          onAbort={purchaseCancelHandler}
          onBuy={purchaseConfirmHandler}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        onAddedIngredient={addIngredientHandler}
        onRemovedIngredient={removeIngredientHandler}
        disabled={disabledInfo}
        price={costState.totalPrice}
        purchasable={costState.purchasable}
        onOrder={purchasedHandler}
      />
    </>
  );
};
