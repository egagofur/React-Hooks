import React, { useState, useRef, useContext } from "react";
import "../../App.css";

export default function Ref() {
  const [counter, setCounter] = useState(0);
  const rerender = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  const rerenderCounter = () => {
    rerender.current = rerender.current + 1;
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  console.log({ ref: rerender.current });
  return (
    <div className="card">
      <h1>Use Ref Example</h1>
      <p>Counter : {counter}</p>
      <button onClick={addCounter}>Add Counter</button>
      <p>Rerender : {rerender.current}</p>
      <button onClick={rerenderCounter}>Rerender</button>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Fokus input</button>
    </div>
  );
}
