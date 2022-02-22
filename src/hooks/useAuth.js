import React, { useState, useContext, createContext } from "react";
import Cookie from "js-cookie";

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(Cookie.get("token") ? JSON.parse(Cookie.get("token")) : null);

  const signIn = async (data) => {
    Cookie.set("token", JSON.stringify(data));
    setUser(data);
  };

  const signOut = () => {
    setUser(null);
    Cookie.remove("token");
  };

  return {
    user,
    signIn,
    signOut,
  };
}
