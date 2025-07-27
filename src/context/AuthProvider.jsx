import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    setLocalStorage();
    const { employee, admin } = getLocalStorage()
    setUserData({employee,admin}) 
  },[])

  return (
    <div>
      <AuthContext.Provider value={{userData,setUser,user}}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
