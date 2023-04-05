import React, { useCallback, useEffect, useState } from "react";

export default function Callback() {
  const [counter, setCounter] = React.useState(1);
  const [show, setShow] = React.useState(false);

  const getData = useCallback(() => {
    return [counter * 2, counter * 3, counter * 4];
  }, [counter]);

  const handleCounter = () => {
    return setCounter(counter + 1);
  };
  const handleShow = () => {
    return setShow(!show);
  };

  useEffect(() => {
    console.log("getDataChange");
  }, [getData]);

  return (
    <div>
      <h1>Use Callback Example</h1>
      <p>counter : {counter}</p>
      <button onClick={handleCounter}>add counter</button>
      <p>data is {show.toString()}</p>
      <button onClick={handleShow}>show/hide</button>
    </div>
  );
}
