import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext(null);

export function SessionProvider({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [session, setSession] = useState(null);
  const [role, setRole] = useState(null);

  const signIn = async (email, password) => {
    if (email === "parent" && password === "parent") {
      setSession({ email, password });
      setRole("parent");
      return true;
    }
    if (email === "kid" && password === "kid") {
      setSession({ email, password });
      setRole("kid");
      return true;
    }
    return false;
  };
  const signUp = async (email, password, role) => {};
  const signOut = async () => {};

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
        role,
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
