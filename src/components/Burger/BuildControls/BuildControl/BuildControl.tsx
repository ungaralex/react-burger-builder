import React from "react";
import styles from "./BuildControl.module.css";

export type BuildControlProps = {
  label: string;
  onAdded: () => void;
  onRemoved: () => void;
  disabled: boolean;
};

export const BuildControl: React.FC<BuildControlProps> = (
  props: BuildControlProps
) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button
        className={styles.Less}
        onClick={props.onRemoved}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={styles.More} onClick={props.onAdded}>
        More
      </button>
    </div>
  );
};
