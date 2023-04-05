import { useReducer } from "react";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "dicrement":
      return { ...state, count: state.count - action.payload };
    case "theme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
  }
};

export default function Reducer() {
  const initialState = {
    count: 0,
    theme: "light",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={(e) => dispatch({ type: "increment", payload: 1 })}>
        +
      </button>
      <h1>{state.count}</h1>
      <button onClick={(e) => dispatch({ type: "dicrement", payload: 2 })}>
        -
      </button>
      <h2>{state.theme}</h2>
      <button onClick={(e) => dispatch({ type: "theme", paylaod: "dark" })}>
        black
      </button>
    </div>
  );
}
