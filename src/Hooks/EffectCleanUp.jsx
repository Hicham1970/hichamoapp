import { useState, useEffect } from "react";

export default function Timer2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <h1>I've rendered {count} times!</h1>
      <p>
        Clean up the timer at the end of the useEffect Hook:We do this by
        including a return function at the end of the useEffect Hook.
      </p>
    </div>
  );
}
