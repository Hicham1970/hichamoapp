import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Faire de la gymnastique",
    complete: false,
  },
  {
    id: 2,
    title: "Pendre le petit-déjeuner",
    complete: true,
  },
  {
    id: 2,
    title: "Rendre visite aux parents",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="row justify-content-center">
        {todos.map((todo) => (
          <div key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              {/* ce qui sera afficher comme titre dans le label */}
              `la tache: {todo.title}`
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
