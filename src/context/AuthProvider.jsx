import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employee: [], admin: [] });
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    // ✅ Set defaults only if not already present
    setLocalStorage();

    const { employee, admin } = getLocalStorage();

    // ✅ Set state only with clean arrays
    setUserData({ employee, admin });
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
