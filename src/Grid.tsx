import React, { FC } from "react";
import { Thing } from "./Thing";

interface Props {
  /**
   * String of length 9 with 1-3 first row, 4-6 second, 7-9 third
   */
  state: Array<number>;
}

export const Grid: FC<Props> = (props) => {
  return (
    <div className="tic-tac-toe">
      {props.state.map((num) => (
        <div>
          {num === 1 && <Thing type="x" />}
          {num === 2 && <Thing type="o" />}
        </div>
      ))}
    </div>
  );
};
