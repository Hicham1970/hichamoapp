import React, { useState } from "react";

function UseStateArabic() {
  const [mohammed, setMohammed] = useState(0);
  const plusHandler = () => {
    setMohammed(mohammed + 1);
  };
  const minusHandler = () => {
    setMohammed(mohammed - 1);
  };

  return (
    <>
      <button onClick={plusHandler}>+</button>
      <button onClick={minusHandler}>-</button>
      {mohammed}
    </>
  );
}

export default UseStateArabic;
