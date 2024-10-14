import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <h1>I've rendered {count} times!</h1>
      <p>
        We should always include the second parameter which accepts an array. We
        can optionally pass dependencies to useEffect in this array. If we have
        [] it will runs only on the first render
      </p>
    </div>
  );
}
