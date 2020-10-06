import * as React from "react";
import "./styles.css";
import { Grid } from "./Grid";

export default function App() {
  return (
    <div className="App">
      <div className="names">
        <span className="max">Max</span>
        <span className="min">Min</span>
      </div>
      <h2>Start editing to see some magic happen!</h2>
      <Grid state={[0, 1, 2, 0, 0, 1, 2, 2, 3]} />
    </div>
  );
}
