import { useState } from "react";

function CounterFunctionComponent() {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Function component</h2>
      <p>{count}</p>
      <button onClick={increment}>increment</button>

      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default CounterFunctionComponent;
