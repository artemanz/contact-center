import React from "react";

export interface User {
  email: string;
  user_id: string;
}

const AuthProvider = React.createContext({
  user: null as User | null,
  setUser(user: User | null) {},
});

export { AuthProvider };
