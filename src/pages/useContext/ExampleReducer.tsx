import React, { useEffect, useState, useReducer } from "react";
import { UserContext } from "./Context";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, user: action.payload };
    case "THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
  }
};

const initialState = {
  user: {
    name: "",
    email: "",
  },
  theme: "light",
};

export default function ExampleReducer({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = {
      name: "John Doe",
      email: "egagofurtriwahana@gmail.com",
    };
    dispatch({
      type: "UPDATE_USER",
      payload: user,
    });
  }, []);

  interface UserExample {
    state: any[];
    dispatch: any[];
  }
  const userExample = [state, dispatch];

  return (
    <div>
      <UserContext.Provider value={userExample}>
        {children}
      </UserContext.Provider>
    </div>
  );
}
