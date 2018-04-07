import React from "react";
import { render } from "react-dom";
import ComponentA from "./componentA";
import ComponentD from "./componentD";
import Counter from "./counter";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Counter />
    <ComponentA />
    <ComponentD />
  </div>
);

render(<App />, document.getElementById("root"));
