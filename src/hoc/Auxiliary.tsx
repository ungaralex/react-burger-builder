import React, { ReactNode } from "react";

type AuxProps = {
  children: ReactNode;
};

export const Auxiliary: React.FC<AuxProps> = (props: AuxProps) => (
  <>{props.children}</>
);
