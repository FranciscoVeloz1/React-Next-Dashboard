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
  const [user, setUser] = useState(null);

  const signIn = async (data) => {
    Cookie.set("token", data.token);
    setUser(data.user);
  };

  return {
    user,
    signIn,
  };
}
