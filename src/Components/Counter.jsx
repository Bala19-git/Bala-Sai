import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: Math.max(state.count - 1, 0) };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, updateCount] = useReducer(reducer, { count: 0 });

  const increment = () => {
    updateCount({ type: 'INCREMENT' });
  };

  const decrement = () => {
    updateCount({ type: 'DECREMENT' });
  };

  return (
    <div className="text-center">
      <h2>Counter</h2>
      <p>Number :{state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
