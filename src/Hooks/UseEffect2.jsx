import { useState, useEffect } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <div className="container">
      <p>Count: {count}</p>
      <button className="btn" onClick={() => setCount((c) => c + 1)}>
        +
      </button>
      <p>Calculation: {calculation}</p>
      <p>
        Here is an example of a useEffect Hook that is dependent on a variable.
        If the count variable updates, the effect will run again
      </p>
    </div>
  );
}
