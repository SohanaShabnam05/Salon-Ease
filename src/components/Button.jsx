import React, { useState } from 'react';
import './Button.css'; 

const Button = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <div className="items">
        {/* Display your items here */}
      </div>
      <div className="counter">
        <button onClick={decreaseCount}>-</button>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
    </div>
  );
};

export default Button;

