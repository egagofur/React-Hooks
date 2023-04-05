import "./App.css";
import { useState } from "react";
import Callback from "./pages/useCallback/Callback";
import Ref from "./pages/useRef/Ref";
import Memo from "./pages/useMemo/Memo";
import ContextExample from "./pages/useContext/ContextExample";
import { UserContext } from "./pages/useContext/Context";
import UpdateProfile from "./pages/useContext/UpdateProfile";
import ExampleReducer from "./pages/useContext/ExampleReducer";
import Reducer from "./pages/useContext/Reducer";

function App() {
  return (
    <>
      <ExampleReducer>
        <ContextExample />
        {/* <Ref /> */}
        {/* <Callback /> */}
        {/* <Memo /> */}
        <UpdateProfile />
      </ExampleReducer>
      {/* <Reducer /> */}
    </>
  );
}

export default App;
