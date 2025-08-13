import React from "react";
import { CalculateScore } from "./components/CalculatorScore";
function App() {
  return (
    <div>
      <CalculateScore Name={"steeve"}
      School={"DNV Public School"}
      Total={284}
      goal={3}
      />
    </div>
  );
}

export default App;
