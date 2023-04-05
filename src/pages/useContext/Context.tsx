import { createContext } from "react";

export interface User {
  name: string;
  email: string;
}

interface UserContext {
  user: User;
  dispatch?: any;
}

// change to array
export const UserContext = createContext<UserContext[]>([
  {
    user: {
      name: "",
      email: "",
    },
    dispatch: () => {},
  },
]);
