import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext(null);

export function SessionProvider({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [session, setSession] = useState(null);
  const [role, setRole] = useState(null);

  const signIn = async (email, password) => {
    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/loginparent`,
        {
          correo: email,
          password: password,
        }
      );
      console.log(response.data);
      setSession({ email, password });
      return true;
    } catch (e) {
      console.error("Error al iniciar sesión:", e);
      return false;
    }
  };

  const signUp = async (cedula, email, contrasena, chilname) => {
    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/register`,
        {
          cedula: cedula,
          correo: email,
          password: contrasena,
          childname: chilname,
        }
      );
      console.log(response.data);
      setSession({ cedula, email, contrasena, chilname });
      return true;
    } catch (e) {
      console.error("Error al iniciar sesión:", e);
      return false;
    }
  };
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
