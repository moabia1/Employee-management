import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {

  const { userData, setUser, user } = useContext(AuthContext);
  
  const logged = JSON.parse(localStorage.getItem('loggedInUser'))
  const employee = userData.employee.find((e) => e.email == logged.email);
  const admin = userData.admin.find((e) => e.email == logged.email);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null)
  }

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">
          {logged.role == "admin" ? admin.username : employee.username}👋
        </span>
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-xl font-medium px-4 py-1 rounded-sm cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
      >
        Logout
      </button>
    </div>
  );
}

export default Header