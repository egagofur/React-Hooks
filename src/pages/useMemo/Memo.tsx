import React, { ReactNode, useMemo, useState } from "react";

const HeavyFunction = (counter: any) => {
  for (let i = 0; i < 2000000000; i++) {}
  return counter * 3;
};

export default function Memo() {
  const [counter, setCounter] = React.useState(1);
  const [color, setColor] = useState("red");

  const counter3x = useMemo(() => {
    return HeavyFunction(counter);
  }, [counter]);

  const cacheObject = useMemo(() => {
    return { theme: color };
  }, [color]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <h1>UseMemoComponent</h1>

      <div style={{ marginBottom: 24 }}>
        <h2>Counter: {counter}</h2>
        <h2>3x Counter: {counter3x}</h2>
        <button onClick={() => setCounter(counter + 1)}>Add Counter</button>
        <button onClick={() => setCounter(counter - 1)}>Min Counter</button>
      </div>

      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontWeight: "bold", color }}>Color: {color}</h2>
        <button onClick={() => setColor("green")}>Color green</button>
        <button onClick={() => setColor("blue")}>Color blue</button>
        <button onClick={() => setColor("red")}>Color red</button>
      </div>
    </div>
  );
}
