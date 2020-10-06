import React, { FC } from "react";

interface Props {
  type: "x" | "o";
}

export const Thing: FC<Props> = ({ type }) => {
  return (
    <span className={`thing m${type === "x" ? "ax" : "in"} ${type}`}>
      {type === "x" ? "+" : "∘"}
    </span>
  );
};
