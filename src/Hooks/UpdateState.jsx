import { useState } from "react";

export default function Machine() {
  const [engin, setEngin] = useState({
    brand: "Mitsubishi",
    model: "M23XS",
    year: "2023",
    color: "Black",
  });

  const updateColor = () => {
    setEngin((previousState) => {
      return { ...previousState, color: "white" };
    });
  };

  return (
    <div className="container">
      <h1>My {engin.brand}</h1>
      <p>
        It is a {engin.color} {engin.model} from {engin.year}.
      </p>
      <button className="btn" type="button" onClick={updateColor}>
        Blue
      </button>
    </div>
  );
}
