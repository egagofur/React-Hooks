import { useContext } from "react";
import { UserContext } from "./Context";

export default function ContextExample() {
  const [state] = useContext(UserContext);
  return (
    <div>
      <h1>{state.user.name}</h1>
      <p>{state.user.email}</p>
    </div>
  );
}
