import React from "react";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        React Calculator
      </h1>
      <Calculator />
    </div>
  );
};

export default App;
