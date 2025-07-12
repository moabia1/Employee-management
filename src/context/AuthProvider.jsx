import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const { employee, admin } = getLocalStorage()
    setUserData({employee,admin}) 
  },[])

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
