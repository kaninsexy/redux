import React, { useState } from "react";
import CounterDisplay from "../component/counter/CounterDisplay";
import CounterControlPanel from "../component/counter/CounterControlPanel";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleCounter = (type, value) => {
    switch (type) {
      case "increase":
        setCounter(counter + 1);

        break;

      case "decrease":
        setCounter(counter - 1);
        break;

      case "plus":
        setCounter(counter + value);
        break;
      case "minus":
        setCounter(counter - value);
        break;
    }
  };
  return (
    <div>
      <CounterDisplay counter={counter} />
      <CounterControlPanel
        text="Increase"
        change={() => handleCounter("increase")}
      />
      <CounterControlPanel
        text="Decrease"
        change={() => handleCounter("decrease")}
      />
      <CounterControlPanel
        text="Plus"
        change={() => handleCounter("plus", 10)}
      />
      <CounterControlPanel
        text="Minus"
        change={() => handleCounter("minus", 10)}
      />
    </div>
  );
}

export default Counter;
