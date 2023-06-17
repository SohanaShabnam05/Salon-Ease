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
    <div className="face">
    <div className="counter">
        <button onClick={decreaseCount}>-</button>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
    </div>
     
    </div>
  );
};

export default Button;

