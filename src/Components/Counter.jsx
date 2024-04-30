import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Number: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;