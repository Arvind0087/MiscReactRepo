import React, { useState } from "react";

function useThrottle(callback, delay) {
  const [isThrottled, setIsThrottled] = useState(false);

  return function (...args) {
    if (!isThrottled) {
      callback(...args);
      setIsThrottled(true);
      setTimeout(() => {
        setIsThrottled(false);
      }, delay);
    }
  };
}

function ThrottleComponent() {
  const [count, setCount] = useState(0);
  const handleClickThrottled = useThrottle(() => {
    console.log(`Clicked ${count} times`);
  }, 1000);

  const handleClick = () => {
    setCount(count + 1);
    handleClickThrottled();
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ThrottleComponent;
