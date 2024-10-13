import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos/Todos";
import "./index.css";

const App = () => {
  const [count, setCount] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="container">
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <br></br>
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
