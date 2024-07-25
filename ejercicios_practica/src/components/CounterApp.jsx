import React from 'react'
import { useState, useEffect } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1)
    }, 1000);
    return () => clearInterval(interval);
    }, [counter]);

    return (
      <div>
        <h1>Counter App</h1>
        <p>Counter: {counter}</p>
      </div>
    );
}
