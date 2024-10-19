import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const addHandler = () => {
    const AddCount = count + 1;
    setCount(AddCount);
  };
  const reduceHandler = () => {
    const minusCount = count - 1;
    setCount(minusCount);
  };
  return (
    <div style={{ border: "2px solid purple", padding: 20 }}>
      <h2>Counter :{count}</h2>
      <button onClick={addHandler}>Plus</button>
      <button onClick={reduceHandler   }>Minus</button>
    </div>
  );
}
